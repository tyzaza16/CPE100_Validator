"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quiz4 = void 0;
class Quiz4 {
    run(students) {
        let ans = null;
        let nameAfterPlusAscii = null;
        let result = [];
        for (let i = 0; i < students.length; i++) {
            const studentId = students[i][0];
            const studentName = students[i][1];
            const studentFirstName = students[i][1].split(' ')[0].toLowerCase();
            const studentLastName = students[i][1].split(' ')[1].toUpperCase();
            // console.log(`${students[i][2]} ${students[i][3]} ${students[i][4]}`);
            // true in number1 student[2]
            if (students[i][2]) {
                ans = this.number1(studentLastName);
                nameAfterPlusAscii = this.PlusAsciiValueToString(studentLastName, 3);
            }
            // true in number2 student[3]
            else if (students[i][3]) {
                ans = this.number2(studentFirstName);
                nameAfterPlusAscii = this.PlusAsciiValueToString(studentFirstName, -4);
            }
            // true in number3 student[4]
            else if (students[i][4]) {
                ans = this.number3(studentLastName);
                nameAfterPlusAscii = this.PlusAsciiValueToString(studentLastName, -2);
            }
            // else nothing match 
            else {
                ans = null;
                nameAfterPlusAscii = null;
            }
            result.push({ studentId, studentName, ans, nameAfterPlusAscii });
        }
        return result;
    }
    number1(text) {
        let sum = 0;
        for (let i = 0; i < text.length; i++) {
            sum += text.charCodeAt(i);
        }
        return sum / text.length;
    }
    number2(text) {
        let sum = 0;
        for (let i = 0; i < text.length; i++) {
            sum += text.charCodeAt(i);
        }
        return sum % 5;
    }
    number3(text) {
        let sum = 0;
        for (let i = 0; i < text.length; i++) {
            sum += (text.charCodeAt(i) % 5);
        }
        return sum;
    }
    PlusAsciiValueToString(text, value) {
        let newText = '';
        for (let i = 0; i < text.length; i++) {
            newText += String.fromCharCode(text.charCodeAt(i) + value);
        }
        return newText;
    }
}
exports.Quiz4 = Quiz4;
