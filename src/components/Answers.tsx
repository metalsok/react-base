import { Answer } from './Answer.tsx';

export function Answers({ answers }: { answers: string[] }) {
  return (
    <>
      {answers.map((answer, index) => (
        <div key={index}>
          <Answer text={answer}></Answer>
        </div>
      ))}
    </>
  );
}
