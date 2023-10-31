"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const Quiz4_1 = require("./analyzer/Quiz4");
const HtmlTableReportQuiz4_1 = require("./report/HtmlTableReportQuiz4");
class Summary {
    static Quiz4AnalysisWithHTMLReport() {
        return new Summary(new Quiz4_1.Quiz4(), new HtmlTableReportQuiz4_1.HtmlTableReportQuiz4());
    }
    constructor(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    buildAndPrintReport(students, fileOutputName) {
        const reportString = this.analyzer.run(students);
        this.outputTarget.print(reportString, fileOutputName);
    }
}
exports.Summary = Summary;
