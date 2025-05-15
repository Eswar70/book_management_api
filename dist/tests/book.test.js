"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
describe('GET /books', () => {
    it('should return an empty list initially', async () => {
        const res = await (0, supertest_1.default)(app_1.default).get('/books');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([]);
    });
});
