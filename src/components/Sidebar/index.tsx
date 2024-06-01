import { useSymbols } from "../../context/SymbolsContext";
import { ISymbol } from "../../types/Symbols";
import { Wrapper, SearchInput, ListItem, AddButton } from "./styles";
import { FixedSizeList as List } from 'react-window';

export const Sidebar = () => {
    const {
        symbols,
        search, setSearch, addToList, selectedSymbols, deleteSymbol, addSymbol, selectAll, toggleSelectAllItems
    } = useSymbols();

    const filteredSymbols = symbols?.filter((symbol) =>
        symbol.symbol.toLowerCase().includes(search.toLowerCase())
    );

    const handleToggleSymbol = (symbol: (typeof symbols)[0]) => {
        selectedSymbols.some((s) => s.symbol === symbol.symbol)
            ? deleteSymbol(symbol)
            : addSymbol(symbol);
    };

    return (
        <Wrapper>
            <SearchInput
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <ListItem onClick={() => toggleSelectAllItems()} key={`symbol-select-all`}>
                <input
                    type="checkbox"
                    onClick={() => toggleSelectAllItems()}
                    checked={selectAll}
                />
                Select All
            </ListItem>
            <List height={700} itemCount={filteredSymbols.length} itemSize={30} width={410}>
                {({ index }) => (
                    <ListItem onClick={() => handleToggleSymbol(filteredSymbols[index])} key={`symbol-${filteredSymbols[index].symbol}`}>
                        <input
                            type="checkbox"
                            onChange={() => handleToggleSymbol(filteredSymbols[index])}
                            checked={selectedSymbols.some((s: ISymbol) => s.symbol === filteredSymbols[index].symbol)}
                        />
                        {filteredSymbols[index].symbol}
                    </ListItem>
                )}
            </List>
            <AddButton
                onClick={addToList}>
                Add to List
            </AddButton>
        </Wrapper>
    );
};