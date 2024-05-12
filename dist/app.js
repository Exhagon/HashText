"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import { crearHash } from './hash';
const index_1 = __importDefault(require("./routes/index"));
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
const app = (0, express_1.default)();
const port = 3000;
app.use('/', index_1.default);
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
}).on('error', (err) => console.error(`el error es ${err}`));
// rl.question('¿escribe lo que quieres hashear? ', (texto:string):void => {
//     console.log(texto)
//     console.log(`Normal: ${texto}`);
//     console.log(`Hasheada: ${crearHash(texto)}`); 
//     rl.close();
// });
exports.default = app;
