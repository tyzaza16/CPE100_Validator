import { OutputTarget } from "../Summary";

export class ConsoleReport implements OutputTarget<string> {
  print(report: string): void {
    console.log(report);
  }
}