import React, { createContext, useCallback, useState } from "react";

import useReady from "../hooks/useReady";
import {
  isCompletePasswordInput,
  isInValidCardPassword,
} from "../util/validator";
import { SeveralInputType } from "../types";

interface InitialContextState {
  cardPassword: SeveralInputType;
  cardPasswordReady: boolean;
}

interface InitialContextValue {
  state: InitialContextState;
  action: {
    onChangeCardPassword: ({ target }: { target: HTMLInputElement }) => void;
    onClickCardPasswordBackspaceButton: () => void;
    onClickCardPasswordVirtualKeyboard: (value: string) => void;
    resetCardPassword: () => void;
    setCardPassword: React.Dispatch<React.SetStateAction<SeveralInputType>>;
  };
}

export const CardPasswordContext =
  createContext<InitialContextValue | null>(null);

const initialState = {
  first: "",
  second: "",
};

const CardPasswordProvider = ({ children }: { children: React.ReactNode }) => {
  const [cardPassword, setCardPassword] =
    useState<SeveralInputType>(initialState);
  const [cardPasswordReady] = useReady(cardPassword, isInValidCardPassword);

  const onChangeCardPassword = ({ target }: { target: HTMLInputElement }) => {
    setCardPassword({
      [target.name]: target.value,
    });
  };

  const onClickCardPasswordVirtualKeyboard = (value: string) => {
    if (isCompletePasswordInput(cardPassword)) {
      return;
    }

    setCardPassword((prev) => {
      if (prev.first === "") {
        return { ...prev, first: prev.first + value };
      }
      return { ...prev, second: prev.second + value };
    });
  };

  const onClickCardPasswordBackspaceButton = () => {
    setCardPassword((prev) => {
      if (prev.second === "") {
        return { ...prev, first: prev.first.slice(0, -1) };
      }
      return { ...prev, second: prev.second.slice(0, -1) };
    });
  };

  const resetCardPassword = useCallback(() => {
    setCardPassword({ ...initialState });
  }, []);

  return (
    <CardPasswordContext.Provider
      value={{
        state: { cardPassword, cardPasswordReady },
        action: {
          onChangeCardPassword,
          onClickCardPasswordBackspaceButton,
          onClickCardPasswordVirtualKeyboard,
          resetCardPassword,
          setCardPassword,
        },
      }}
    >
      {children}
    </CardPasswordContext.Provider>
  );
};

export default CardPasswordProvider;
