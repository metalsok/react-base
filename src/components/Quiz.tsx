import { Question } from './Question.tsx';
import { DUMMY_QUESTIONS } from '../dummy-questions.tsx';
import { QuizContext } from '../store/quiz-context.tsx';
import { use, useCallback } from 'react';
import { Results } from './Results.tsx';
import { Answers } from './Answers.tsx';
import { QuestionTimer } from './QuestionTimer.tsx';

const TIMEOUT = 10000;

export function Quiz({ title }: { title: string }) {
  const { activeQuestion, answers, resetQuiz, addAnswer } = use(QuizContext);

  const finished = activeQuestion === DUMMY_QUESTIONS.length - 1;

  const correctAnswers = answers.filter(
    (answer, index) => DUMMY_QUESTIONS[index].answer === answer,
  ).length;
  const totalQuestions = DUMMY_QUESTIONS.length - 1;

  function handleTryAgain() {
    resetQuiz();
  }

  const handleTimeout = useCallback(() => {
    addAnswer('');
  }, []);

  return (
    <>
      <div className="flex flex-col gap-4">
        <h3 className="font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-purple-500 text-center">
          {title}
          <p>{finished && 'Finished'}</p>
        </h3>

        {!finished ? (
          <>
            <Question question={DUMMY_QUESTIONS[activeQuestion].question}></Question>
            <QuestionTimer key={activeQuestion} timeout={TIMEOUT} onTimeout={handleTimeout}></QuestionTimer>
            <Answers answers={DUMMY_QUESTIONS[activeQuestion].options} />
          </>
        ) : (
          <>
            <Results correctAnswers={correctAnswers} total={totalQuestions} />
            <button
              onClick={handleTryAgain}
              className="bg-purple-500 text-white text-xl p-4 cursor-pointer"
            >
              Try again!
            </button>
          </>
        )}
      </div>
    </>
  );
}
