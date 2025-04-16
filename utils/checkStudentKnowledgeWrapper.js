import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const code = fs.readFileSync(path.resolve(__dirname, './studentKnowledgeCheckerUtil.js'), 'utf-8');
const context = {};
eval(`${code}; context.checkStudentKnowledge = checkStudentKnowledge;`);

export const checkStudentKnowledge = context.checkStudentKnowledge;
