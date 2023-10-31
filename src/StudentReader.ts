import { StudentData } from "./StudentData";
import { CsvFileReader } from "./CsvFileReader";

interface DataReader {
  read(): void;
  data: string[][];
}

export class StudentReader {
  
  static fromCsv(filename: string): StudentReader {
    return new StudentReader(new CsvFileReader(filename));
  }

  constructor(public reader: DataReader) {}

  students: StudentData[] = [];

  load(): void {
    this.reader.read();
    this.students = this.reader.data.map((row: string[]): StudentData => {
      return [
        row[0],
        row[1],
        row[2].trim() === 'TRUE' ? true : false,
        row[3].trim() === 'TRUE' ? true : false,
        row[4].trim() === 'TRUE' ? true : false
      ]
    });
  }
}