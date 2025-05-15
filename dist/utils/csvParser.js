"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCSV = void 0;
const parseCSV = (csv) => {
    const lines = csv.trim().split('\n');
    const result = [];
    for (let i = 1; i < lines.length; i++) {
        const [title, author, publishedYear] = lines[i].split(',').map(s => s.trim());
        const year = Number(publishedYear);
        result.push({ title, author, publishedYear: year });
    }
    return result;
};
exports.parseCSV = parseCSV;
