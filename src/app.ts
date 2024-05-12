import express from 'express';
// import { crearHash } from './hash';
import indexRoutes from './routes/index';
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
const app = express();
const port = 3000;
app.use('/', indexRoutes);

app.listen(port, ():void => {
    console.log(`server is running on port ${port}`);
}).on('error', (err:Error):void => console.error(`el error es ${err}`));
// rl.question('¿escribe lo que quieres hashear? ', (texto:string):void => {
//     console.log(texto)
//     console.log(`Normal: ${texto}`);
//     console.log(`Hasheada: ${crearHash(texto)}`); 
//     rl.close();
// });
export default app;