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
  nextQuestion: () => void;
}

export const QuizContext = createContext<QuizContextType>({
  answers: [],
  activeQuestion: 0,
  nextQuestion: () => {},
});

function quizReducer(state: Quiz, action: Action) {
  if (action.type === 'NEXT') {
    console.log(state, action);
    return { ...state, activeQuestion: state.activeQuestion + 1 };
  }
  if (action.type === 'ADD') {
    return {
      ...state,
      answers: [...state.answers, action.payload],
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

  function handleNextQuestion() {
    console.log('i am called');
    quizStateDispatch({ type: 'NEXT', payload: null });
  }

  const ctxValue = {
    answers: quizState.answers,
    activeQuestion: quizState.activeQuestion,
    nextQuestion: handleNextQuestion,
  };
  return <QuizContext.Provider value={ctxValue}>{children}</QuizContext.Provider>;
}
