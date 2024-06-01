import React from "react";
import { TableCell, TableHeader, TableRow, TableWrapper } from "./styles";
import { useSymbols } from '../../context/SymbolsContext'
import { ISymbol } from "../../types/Symbols";


export const Table: React.FC = () => {
    const { listsOfSymbols, selectedList, tradeInfo } = useSymbols();
    const list = listsOfSymbols[selectedList] || [];
    return (
        <TableWrapper>
            <TableHeader>
                <TableCell>Symbol</TableCell>
                <TableCell>Last Price</TableCell>
                <TableCell>Bid Price</TableCell>
                <TableCell>Ask Price</TableCell>
                <TableCell>Price Change (%)</TableCell>

            </TableHeader>
            {list.map((symbol: ISymbol) => {
                const item = tradeInfo[symbol.symbol.toUpperCase()];
                return (
                    <TableRow key={`list-symbol-${symbol.symbol}`}>
                        <TableCell>{item ? item.s : 'loading...'}</TableCell>
                        <TableCell>{item ? parseFloat(item.c).toFixed(4) : 'loading...'}</TableCell>
                        <TableCell>{item ? parseFloat(item.b).toFixed(4) : 'loading...'}</TableCell>
                        <TableCell>{item ? parseFloat(item.a).toFixed(4) : 'loading...'}</TableCell>
                        <TableCell>{item ? `${item.P}%` : 'loading...'}</TableCell>

                    </TableRow>
                )
            })}
        </TableWrapper>
    );
};

export default Table;