import { Question } from './Question.tsx';
import { DUMMY_QUESTIONS } from '../dummy-questions.tsx';
import { QuizContext } from '../store/quiz-context.tsx';
import { use, useEffect, useState } from 'react';
import { Results } from './Results.tsx';
import { Answers } from './Answers.tsx';

const TIMER = 10000;

export function Quiz({ title }: { title: string }) {
  const { activeQuestion, addAnswer, answers, resetQuiz } = use(QuizContext);
  const [progress, setProgress] = useState(TIMER);

  const finished = activeQuestion === DUMMY_QUESTIONS.length - 1;

  const correctAnswers = answers.filter(
    (answer, index) => DUMMY_QUESTIONS[index].answer === answer,
  ).length;
  const totalQuestions = DUMMY_QUESTIONS.length - 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevState) => {
        if (prevState <= 0 || finished) return 0;
        return prevState - 10;
      });
    }, 10);
    return () => {
      clearInterval(interval);
    };
  }, [activeQuestion]);

  useEffect(() => {
    setProgress(TIMER);

    const timeout = setTimeout(() => {
      if (!finished) addAnswer('');
    }, TIMER);

    return () => clearTimeout(timeout);
  }, [activeQuestion]);

  function handleTryAgain() {
    resetQuiz();
  }

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
            <progress value={progress} max={TIMER} className="w-full h-2"></progress>
            <Answers />
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
