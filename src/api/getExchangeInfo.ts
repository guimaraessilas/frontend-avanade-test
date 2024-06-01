import { IRootSymbol, ISymbol } from "../types/Symbols";

const EXCHANGE_INFO_URL = `https://api.binance.com/api/v3/exchangeInfo`;

export const getExchangeInfo = async (): Promise<ISymbol[]> => {
    const response = await fetch(EXCHANGE_INFO_URL);
    const { symbols } = await response.json() as unknown as IRootSymbol;
    return symbols;
};