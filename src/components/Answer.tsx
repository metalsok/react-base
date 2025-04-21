import { QuizContext } from '../store/quiz-context.tsx';
import { use } from 'react';

export function Answer({ text }: { text: string }) {
  const { addAnswer } = use(QuizContext);

  function handleAnswerSelected() {
    addAnswer(text);
  }

  return (
    <div
      className="w-full text-center border-2 rounded-xl m-2 border-purple-500 text-lg cursor-pointer hover:bg-purple-500"
      onClick={handleAnswerSelected}
    >
      {text}
    </div>
  );
}
