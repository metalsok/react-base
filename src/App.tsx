import './App.css';
import { QuizContextProvider } from './store/quiz-context.tsx';
import { Quiz } from './components/Quiz.tsx';

function App() {
  return (
    <div className="h-screen bg-gradient-to-br from-cyan-600 via-cyan-300 to-purple-100 p-12">
      <div className="w-1/2 h-2/5 border border-gray-300 rounded-2xl p-6 mx-auto bg-white/40">
        <QuizContextProvider>
          <Quiz title="Quiz Game"></Quiz>
        </QuizContextProvider>
      </div>

    </div>
  );
}

export default App;
