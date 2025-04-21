import { useEffect, useState } from 'react';

export function QuestionTimer({ timeout, onTimeout }: { timeout: number; onTimeout: () => void }) {
  const [timeRemaining, setTimeRemaining] = useState(timeout);

  useEffect(() => {
    console.log('SETTING TIMEOUT');
    const timer = setTimeout(onTimeout, timeout);
    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    console.log('SETTING INTERVAL');
    const interval = setInterval(() => {
      setTimeRemaining((prevState) => prevState - 100);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <progress value={timeRemaining} max={timeout} className="w-full h-2"></progress>
    </>
  );
}
