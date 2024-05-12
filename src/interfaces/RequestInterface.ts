interface QueryParams {
    texto?: string;
} 
interface HashRequest extends Request {
    query: QueryParams;
}

export {
    QueryParams,
    HashRequest,
}

