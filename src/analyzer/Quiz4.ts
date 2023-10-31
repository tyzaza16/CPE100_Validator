import { StudentData } from "../StudentData";
import { Analyzer } from "../Summary";


export type Quiz4Result = {
  studentId: string | null;
  studentName: string | null;
  ans: number | null;
  nameAfterPlusAscii: string | null;
}

export class Quiz4 implements Analyzer<Quiz4Result[]>{


  run(students: StudentData[]): Quiz4Result[] {

    let ans: number | null = null ;
    let nameAfterPlusAscii: string | null  = null;
    let result: Quiz4Result[] = [];
    
    for(let i = 0; i < students.length; i++) {

      const studentId = students[i][0];
      const studentName = students[i][1];
      const studentFirstName = students[i][1].split(' ')[0].toLowerCase();
      const studentLastName = students[i][1].split(' ')[1].toUpperCase();
      // console.log(`${students[i][2]} ${students[i][3]} ${students[i][4]}`);

      // true in number1 student[2]
      if(students[i][2]) {
        ans = this.number1(studentLastName);
        nameAfterPlusAscii = this.PlusAsciiValueToString(studentLastName, 3);
      }
      // true in number2 student[3]
      else if(students[i][3]) { 
        ans = this.number2(studentFirstName);
        nameAfterPlusAscii = this.PlusAsciiValueToString(studentFirstName, -4);  
      }
      // true in number3 student[4]
      else if(students[i][4]) { 
        ans = this.number3(studentLastName);
        nameAfterPlusAscii = this.PlusAsciiValueToString(studentLastName, -2);
      }
      // else nothing match 
      else {
        ans = null;
        nameAfterPlusAscii = null;
      }

      result.push({studentId, studentName, ans, nameAfterPlusAscii});

    }

    return result;
  }

  private number1(text: string): number {

    let sum: number = 0;

    for (let i = 0; i < text.length; i++) {
      sum += text.charCodeAt(i); 
    }

    return sum / text.length;
  }

  private number2(text: string ): number {

    let sum: number = 0;

    for (let i = 0; i < text.length; i++) {
      sum += text.charCodeAt(i); 
    }

    return sum%5;
  }

  private number3(text: string): number {
  
    let sum: number = 0;

    for (let i = 0; i < text.length; i++) {
      sum += (text.charCodeAt(i)%5); 
    }

    return sum;
  }

  private PlusAsciiValueToString(text: string, value: number): string {

    let newText: string = '';

    for(let i = 0; i < text.length; i++) {
      newText += String.fromCharCode(text.charCodeAt(i) + value) ;
    }

    return newText;
  }


}