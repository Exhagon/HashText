"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyHash = exports.crearHash = void 0;
const hash = require('crypto');
const crearHash = (text) => hash.createHash('sha256').update(text).digest('hex');
exports.crearHash = crearHash;
const verifyHash = (text, hasheada) => crearHash(text) === hasheada;
exports.verifyHash = verifyHash;
