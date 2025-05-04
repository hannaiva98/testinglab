const assert = require('assert').strict;
const { checkStudentKnowledge } = require('../utils/studentKnowledgeCheckerExported');

describe('checkStudentKnowledge (через Exported)', () => {
  it('возвращает true, если ответы совпадают', () => {
    const correctAnswers = [1, 2, 3];
    const studentAnswers = [1, 2, 3];
    expect(checkStudentKnowledge(correctAnswers, studentAnswers)).toBe(true);
  });

  it('возвращает false, если ответы не совпадают', () => {
    const correctAnswers = [1, 2, 3];
    const studentAnswers = [1, 2, 4];
    expect(checkStudentKnowledge(correctAnswers, studentAnswers)).toBe(false);
  });

  it('выбрасывает ошибку для некорректных входных данных', () => {
    expect(() => checkStudentKnowledge({}, [])).toThrow('Оба аргумента должны быть массивами');
  });
});