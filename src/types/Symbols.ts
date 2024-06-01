export interface IRootSymbol {
    timezone: string
    serverTime: number
    rateLimits: IRateLimit[]
    exchangeFilters: any[]
    symbols: ISymbol[]
}

export interface IRateLimit {
    rateLimitType: string
    interval: string
    intervalNum: number
    limit: number
}

export interface ISymbol {
    symbol: string
    status: string
    baseAsset: string
    baseAssetPrecision: number
    quoteAsset: string
    quotePrecision: number
    quoteAssetPrecision: number
    baseCommissionPrecision: number
    quoteCommissionPrecision: number
    orderTypes: string[]
    icebergAllowed: boolean
    ocoAllowed: boolean
    otoAllowed: boolean
    quoteOrderQtyMarketAllowed: boolean
    allowTrailingStop: boolean
    cancelReplaceAllowed: boolean
    isSpotTradingAllowed: boolean
    isMarginTradingAllowed: boolean
    filters: IFilter[]
    permissions: any[]
    permissionSets: string[][]
    defaultSelfTradePreventionMode: string
    allowedSelfTradePreventionModes: string[]
    lastPrice: string;
    bidPrice: string;
    askPrice: string;
    priceChange: string
}

export interface IFilter {
    filterType: string
    minPrice?: string
    maxPrice?: string
    tickSize?: string
    minQty?: string
    maxQty?: string
    stepSize?: string
    limit?: number
    minTrailingAboveDelta?: number
    maxTrailingAboveDelta?: number
    minTrailingBelowDelta?: number
    maxTrailingBelowDelta?: number
    bidMultiplierUp?: string
    bidMultiplierDown?: string
    askMultiplierUp?: string
    askMultiplierDown?: string
    avgPriceMins?: number
    minNotional?: string
    applyMinToMarket?: boolean
    maxNotional?: string
    applyMaxToMarket?: boolean
    maxNumOrders?: number
    maxNumAlgoOrders?: number
    maxPosition?: string
}

export type TSymbolInfo = {
    A: string;
    B: string;
    C: number;
    E: number;
    F: number;
    L: number;
    O: number;
    P: string;
    Q: string;
    a: string;
    b: string;
    c: string;
    e: string;
    h: string;
    l: string;
    n: number;
    o: string;
    p: string;
    q: string;
    s: string;
    v: string;
    w: string;
    x: string;
};

export type TSymbolsWebSocket = {
    stream: string;
    data: TSymbolInfo;
};
