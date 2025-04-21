import { createContext, PropsWithChildren, useReducer } from 'react';

export interface Quiz {
  answers: string[];
  activeQuestion: number;
}

export interface Action {
  type: string;
  payload: any;
}

interface QuizContextType {
  answers: string[];
  activeQuestion: number;
  resetQuiz: () => void;
  addAnswer: (answer: string) => void;
}

export const QuizContext = createContext<QuizContextType>({
  answers: [],
  activeQuestion: 0,
  resetQuiz: () => {},
  addAnswer: () => {},
});

function quizReducer(state: Quiz, action: Action) {
  if (action.type === 'ADD') {
    return {
      ...state,
      answers: [...state.answers, action.payload],
      activeQuestion: state.activeQuestion + 1,
    };
  }
  if (action.type === 'RESET') {
    return {
      ...initialState,
    };
  }
  return state;
}

const initialState: Quiz = {
  answers: [],
  activeQuestion: 0,
};

export function QuizContextProvider({ children }: PropsWithChildren) {
  const [quizState, quizStateDispatch] = useReducer(quizReducer, initialState);

  function handleAnswer(answer: string) {
    quizStateDispatch({ type: 'ADD', payload: answer });
  }

  function resetQuiz() {
    quizStateDispatch({ type: 'RESET', payload: undefined });
  }

  const ctxValue = {
    answers: quizState.answers,
    activeQuestion: quizState.activeQuestion,
    addAnswer: handleAnswer,
    resetQuiz: resetQuiz,
  };
  return <QuizContext.Provider value={ctxValue}>{children}</QuizContext.Provider>;
}
