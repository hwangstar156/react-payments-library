import { memo, useContext } from "react";

import Label from "../common/Label/Label.component";
import InputBox from "../common/InputBox/InputBox.component";
import Input from "../common/Input/Input.component";
import MessageBox from "../common/MessageBox/MessageBox.component";
import Dot from "../common/Dot/Dot.component";
import VirtualKeyboard from "../common/VirtualKeyboard/VirtualKeyboard.component";

import useKeyboardOn from "../../hooks/useKeyboardOn";
import { CardPasswordContext } from "../../provider/CardPasswordProvider";
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from "../../constants/index";

import Box from "../../styles/box";

const CardPasswordContainer = memo(() => {
  const cardPasswordContext = useContext(CardPasswordContext);
  if (!cardPasswordContext) {
    throw new Error("Cannot find CardPasswordContext");
  }

  const {
    state: { cardPassword, cardPasswordReady },
    action: {
      onChangeCardPassword,
      onClickCardPasswordBackspaceButton,
      onClickCardPasswordVirtualKeyboard,
    },
  } = cardPasswordContext;

  const { keyboardOn, openKeyboard, closeKeyboard, onKeyDown } =
    useKeyboardOn(cardPasswordReady);

  return (
    <>
      <Label>카드 비밀번호</Label>
      <Box display="flex" alignItems="center" gap="10px" position="relative">
        <InputBox formType="card-password">
          <Input
            type="password"
            value={cardPassword["first"]}
            onChange={onChangeCardPassword}
            onKeyDown={onKeyDown}
            onFocus={openKeyboard}
            data-testid="card-password"
          />
        </InputBox>

        <InputBox formType="card-password">
          <Input
            type="password"
            value={cardPassword["second"]}
            onChange={onChangeCardPassword}
            onKeyDown={onKeyDown}
            onFocus={openKeyboard}
            data-testid="card-password"
          />
        </InputBox>

        <Dot
          styleSize="small"
          formType="card-password"
          cardType="defaultCard"
        />
        <Dot
          styleSize="small"
          formType="card-password"
          cardType="defaultCard"
        />
        {keyboardOn && (
          <VirtualKeyboard
            onClickVirtualKeyboard={onClickCardPasswordVirtualKeyboard}
            onClickCloseButton={closeKeyboard}
            onClickBackspaceButton={onClickCardPasswordBackspaceButton}
          />
        )}
      </Box>

      {cardPasswordReady ? (
        <MessageBox styleType="success">{SUCCESS_MESSAGE}</MessageBox>
      ) : (
        <MessageBox styleType="error">
          {ERROR_MESSAGE["card-password"]}{" "}
        </MessageBox>
      )}
    </>
  );
});

export default CardPasswordContainer;
