interface QueryParams {
    texto?: string;
    hash?:string;
} 
interface HashRequest extends Request {
    query: QueryParams;
}

export {
    QueryParams,
    HashRequest,
}

