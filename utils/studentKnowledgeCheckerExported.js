const path = require('path');

const _filename = __filename;
const _dirname = path.dirname(_filename);

function checkStudentKnowledge(correctAnswers, studentAnswers) {
  if (!Array.isArray(correctAnswers) || !Array.isArray(studentAnswers)) {
    throw new Error('Оба аргумента должны быть массивами');
  }
  if (correctAnswers.length !== studentAnswers.length) {
    throw new Error('Длина массивов должна быть одинаковой');
  }
  return correctAnswers.every((answer, index) => answer === studentAnswers[index]);
}

module.exports = { checkStudentKnowledge };