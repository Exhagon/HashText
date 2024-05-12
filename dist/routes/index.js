"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const hash_1 = require("../hash");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.send('Hola Mundo desde TypeScript!');
});
router.get('/hash', (req, res) => {
    console.log(req);
    (0, hash_1.crearHash)("texto");
    res.send('Acerca de esta API');
});
exports.default = router;
