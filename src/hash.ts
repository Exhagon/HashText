const hash = require('crypto');

const crearHash = (text:string):string =>hash.createHash('sha256').update(text).digest('hex');
const verifyHash = (text:string, hasheada:string):boolean => crearHash(text) === hasheada;
export {
    crearHash,
    verifyHash
}