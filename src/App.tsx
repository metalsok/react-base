import './App.css';
import { QuizContext, QuizContextProvider } from './store/quiz-context.tsx';
import { useContext } from 'react';
import { Question } from './components/Question.tsx';
import { DUMMY_QUESTIONS } from './dummy-questions.tsx';
import { Answers } from './components/Answers.tsx';
import { Quiz } from './components/Quiz.tsx';

function App() {



  return (
    <QuizContextProvider>
      <Quiz>

      </Quiz>


    </QuizContextProvider>
  );
}

export default App;
