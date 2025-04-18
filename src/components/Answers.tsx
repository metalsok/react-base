export function Answers({ answers }) {
  return (
    <div>
      {answers.map((answer, index) => (
        <p key={index}>{answer}</p>
      ))}
    </div>
  );
}
