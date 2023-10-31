"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlTableReportQuiz4 = void 0;
const fs_1 = __importDefault(require("fs"));
class HtmlTableReportQuiz4 {
    print(report, fileOutputName) {
        const html = `
    <h1>Quiz4 Validate Report</h1>

    <table style="width:100%">
      <tr>
        <th>studentId</th>
        <th>studentName</th>
        <th>Sum Answer</th>
        <th>New Ascii</th>
      </tr>
      ${report.map((student) => {
            return `
        <tr>
          <td style="text-align:center">${student.studentId}</td>
          <td style="text-align:center">${student.studentName}</td>
          <td style="text-align:center">${student.ans}</td>
          <td style="text-align:center">${student.nameAfterPlusAscii}</td>
        </tr>
        `;
        }).join('')}
    </table>
    `;
        fs_1.default.writeFileSync(fileOutputName, html);
    }
}
exports.HtmlTableReportQuiz4 = HtmlTableReportQuiz4;
