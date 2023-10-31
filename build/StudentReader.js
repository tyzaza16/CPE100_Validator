"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentReader = void 0;
const CsvFileReader_1 = require("./CsvFileReader");
class StudentReader {
    static fromCsv(filename) {
        return new StudentReader(new CsvFileReader_1.CsvFileReader(filename));
    }
    constructor(reader) {
        this.reader = reader;
        this.students = [];
    }
    load() {
        this.reader.read();
        this.students = this.reader.data.map((row) => {
            return [
                row[0],
                row[1],
                row[2].trim() === 'TRUE' ? true : false,
                row[3].trim() === 'TRUE' ? true : false,
                row[4].trim() === 'TRUE' ? true : false
            ];
        });
    }
}
exports.StudentReader = StudentReader;
