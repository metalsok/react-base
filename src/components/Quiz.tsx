import { Question } from './Question.tsx';
import { DUMMY_QUESTIONS } from '../dummy-questions.tsx';
import { Answers } from './Answers.tsx';
import { QuizContext } from '../store/quiz-context.tsx';
import { use } from 'react';

export function Quiz() {
  function handleNextQuestion() {
    nextQuestion();
  }

  const { activeQuestion, nextQuestion } = use(QuizContext);

  return (
    <>
      <Question question={DUMMY_QUESTIONS[activeQuestion].question}></Question>
      <Answers answers={DUMMY_QUESTIONS[activeQuestion].options}></Answers>
      <button
        type={'button'}
        className={
          'px-4 py-2 rounded-lg font-semibold text-white transition bg-blue-600 hover:bg-blue-700 cursor-pointer'
        }
        onClick={handleNextQuestion}
      >
        Next
      </button>
    </>
  );
}
