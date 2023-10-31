import { StudentData } from "./StudentData";
import { Quiz4, Quiz4Result } from "./analyzer/Quiz4";
import { HtmlTableReportQuiz4 } from "./report/HtmlTableReportQuiz4";

export interface Analyzer<T> {
  run(student: StudentData[]): T;
}

export interface OutputTarget<T>{
  print(report: T, fileOutputName: string): void;
}

export class Summary<T>{

  static Quiz4AnalysisWithHTMLReport() {
    return new Summary<Quiz4Result[]>(new Quiz4(), new HtmlTableReportQuiz4());
  }

  constructor(public analyzer: Analyzer<T>, public outputTarget: OutputTarget<T>) {}

  buildAndPrintReport(students: StudentData[], fileOutputName: string): void {
    const reportString: T = this.analyzer.run(students);
    this.outputTarget.print(reportString, fileOutputName);
  }
}