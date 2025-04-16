import { strict as assert } from 'assert';
import { checkStudentKnowledge } from '../utils/checkStudentKnowledgeWrapper.js';

describe('checkStudentKnowledge (через Wrapper)', () => {
  it('возвращает true, если ответы совпадают', () => {
    const student = { q1: 'a', q2: 'b' };
    const correct = { q1: 'a', q2: 'b' };
    assert.equal(checkStudentKnowledge(student, correct), true);
  });

  it('возвращает false, если ключи отличаются', () => {
    const student = { q1: 'a' };
    const correct = { q1: 'a', q2: 'b' };
    assert.equal(checkStudentKnowledge(student, correct), false);
  });
});
