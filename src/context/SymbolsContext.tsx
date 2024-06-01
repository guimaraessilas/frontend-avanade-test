import { createContext, useState, useEffect, useContext, ReactNode } from "react";
import useWebSocket from 'react-use-websocket';
import { ISymbol, TSymbolInfo } from "../types/Symbols";
import { getExchangeInfo } from "../api/getExchangeInfo";

const WSURL = `wss://stream.binance.com:9443`;

type ContextType = {
    symbols: ISymbol[],
    selectedSymbols: ISymbol[],
    listsOfSymbols: { [key: string]: ISymbol[] },
    selectedList: string,
    setSelectedSymbols: (symbols: ISymbol[]) => void,
    search: string;
    setSearch: (text: string) => void,
    addSymbol: (symbol: ISymbol) => void,
    deleteSymbol: (symbol: ISymbol) => void,
    addToList: () => void,
    createList: (name: string) => void,
    selectList: (name: string) => void,
    tradeInfo: { [key: string]: TSymbolInfo },
    selectAll: boolean,
    toggleSelectAllItems: () => void;
}

const SymbolsContext = createContext<ContextType | undefined>(undefined);
export const ContextProvider = ({ children }: { children: ReactNode }) => {
    const [symbols, setSymbols] = useState<ISymbol[]>([]);
    const [selectedSymbols, setSelectedSymbols] = useState<ISymbol[]>([]);
    const [listsOfSymbols, setListsOfSymbols] = useState<{ [key: string]: ISymbol[] }>({ 'Default': [] });
    const [selectedList, setSelectedList] = useState<string>('Default');
    const [search, setSearch] = useState<string>('');
    const [tradeInfo, setTradeInfo] = useState<{ [key: string]: TSymbolInfo }>(
        {}
    );
    const [selectAll, toggleSelectAll] = useState(false);

    const addSymbol = (symbol: ISymbol) => {
        setSelectedSymbols((prevSelectedSymbols) =>
            prevSelectedSymbols.find((s) => s.symbol === symbol.symbol) ? prevSelectedSymbols : [...prevSelectedSymbols, symbol]
        );
    }
    const deleteSymbol = (symbol: ISymbol) => {
        setSelectedSymbols((prevSelectedSymbols) => prevSelectedSymbols.filter((s) => s.symbol !== symbol.symbol))
    };

    const addToList = () => {
        setListsOfSymbols((prevLists) => {
            const newList = [
                ...prevLists[selectedList],
                ...selectedSymbols.filter(
                    (symbol) =>
                        !prevLists[selectedList].some((s) => s.symbol === symbol.symbol)
                ),
            ];
            return { ...prevLists, [selectedList]: newList };
        });
    };
    const createList = (name: string) => {
        setListsOfSymbols((prevLists) => ({
            ...prevLists,
            [name]: [],
        }));
        setSelectedList(name);
        setSelectedSymbols([]);
    };


    const selectList = (name: string) => {
        setSelectedList(name);
        setSelectedSymbols(listsOfSymbols[name]);
    };

    const getSymbols = async () => {
        try {

            const symbols = await getExchangeInfo();
            setSymbols(symbols);
        } catch (e) {
            alert('Error on fetch');
        }
    }

    const toggleSelectAllItems = () => {
        toggleSelectAll(!selectAll);
    }

    useEffect(() => {
        if (selectAll) {
            setSelectedSymbols(symbols)
        } else {
            setSelectedSymbols([])
        }
    }, [selectAll])

    useEffect(() => {
        getSymbols()
    }, []);

    const symbolList = listsOfSymbols[selectedList]
        ?.map((symbol) => `${symbol.symbol.toLowerCase()}@ticker`)
        .join("/");
    const wsUrl = `${WSURL}/stream?streams=${symbolList}`;

    const { lastJsonMessage, sendJsonMessage } = useWebSocket<any>(
        wsUrl,
        {
            onOpen: () => console.log(`WebSocket connected`),
            onError: (event: any) => {
                console.error(event);
            },
            onMessage: () => {
                if (lastJsonMessage) {
                    setTradeInfo((prev) => ({
                        ...prev,
                        [lastJsonMessage.data.s]: lastJsonMessage.data,
                    }));
                }
            },
            shouldReconnect: () => true,
            reconnectInterval: 5,
        }
    );

    useEffect(() => {
        setTradeInfo({});
        return () => {
            setTradeInfo({});
        };
    }, [listsOfSymbols, selectedList]);

    useEffect(() => {
        const pingPongInterval = setInterval(() => {
            if (lastJsonMessage) {
                sendJsonMessage({ ping: "pong" });
            }
        }, 180000);

        return () => {
            clearInterval(pingPongInterval);
        };
    }, [lastJsonMessage, sendJsonMessage]);

    return (<SymbolsContext.Provider
        value={{
            addSymbol,
            addToList,
            createList,
            deleteSymbol,
            listsOfSymbols,
            search,
            selectedList,
            selectedSymbols,
            selectList,
            setSearch,
            setSelectedSymbols,
            symbols,
            tradeInfo,
            selectAll,
            toggleSelectAllItems
        }}>
        {children}
    </SymbolsContext.Provider >)
}

export const useSymbols = () => {
    const context = useContext(SymbolsContext);
    if (!context) {
        throw new Error("useSymbols must be used within a SymbolsProvider");
    }
    return context;
}