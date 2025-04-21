import { Answer } from './Answer.tsx';
import { QuizContext } from '../store/quiz-context.tsx';
import { use } from 'react';
import { DUMMY_QUESTIONS } from '../dummy-questions.tsx';

export function Answers() {
  const { activeQuestion} = use(QuizContext);

  return (
    <>
      {DUMMY_QUESTIONS[activeQuestion].options.map((answer, index) => (
        <div key={index}>
          <Answer text={answer}></Answer>
        </div>
      ))}
    </>
  );
}
