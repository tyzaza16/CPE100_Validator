import { OutputTarget } from "../Summary";
import { Quiz4Result } from "../analyzer/Quiz4";
import fs from 'fs';

export class HtmlTableReportQuiz4 implements OutputTarget<Quiz4Result[]> {
  print(report: Quiz4Result[], fileOutputName: string): void {

    const html = `
    <h1>Quiz4 Validate Report</h1>

    <table style="width:100%">
      <tr>
        <th>studentId</th>
        <th>studentName</th>
        <th>Sum Answer</th>
        <th>New Ascii</th>
      </tr>
      ${report.map((student): string => {
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

    fs.writeFileSync(fileOutputName, html);
  }
}