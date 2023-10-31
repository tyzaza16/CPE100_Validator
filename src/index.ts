import { Summary } from './Summary';
import { StudentReader } from "./StudentReader";

const studentRegReader = StudentReader.fromCsv('q4_distribution.csv');
const studentInterReader = StudentReader.fromCsv('q4_distribution_inter.csv');

const summary = Summary.Quiz4AnalysisWithHTMLReport();

studentRegReader.load();
studentInterReader.load();

summary.buildAndPrintReport(studentRegReader.students, 'Quiz4_Report_Reg.html');
summary.buildAndPrintReport(studentInterReader.students, 'Quiz4_Report_Inter.html');