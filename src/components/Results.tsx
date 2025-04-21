export function Results({
  correctAnswers = 0,
  total = 0,
}: {
  correctAnswers: number;
  total: number;
}) {
  return (
    <>
      <p className="text-center">
        You answered
        <span className="px-2 text-xl">
          {correctAnswers}/{total}
        </span>
        correctly!
      </p>
    </>
  );
}
