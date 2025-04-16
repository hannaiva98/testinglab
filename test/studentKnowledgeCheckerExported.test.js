import { strict as assert } from 'assert';
import { checkStudentKnowledge } from '../utils/studentKnowledgeCheckerExported.js';

describe('checkStudentKnowledge (через Exported)', () => {
  it('возвращает true, если ответы совпадают', () => {
    const student = { q1: 'a', q2: 'b' };
    const correct = { q1: 'a', q2: 'b' };
    assert.equal(checkStudentKnowledge(student, correct), true);
  });

  it('возвращает false, если есть ошибка', () => {
    const student = { q1: 'a', q2: 'x' };
    const correct = { q1: 'a', q2: 'b' };
    assert.equal(checkStudentKnowledge(student, correct), false);
  });
});
