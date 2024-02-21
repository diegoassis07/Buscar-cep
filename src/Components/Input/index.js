import { forwardRef } from "react";
import * as S from "./style";

export const Input = forwardRef((props, ref) => {
  return (
    <S.Container>
      <S.Input
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChangeText}
        keyboardType={props.keyboardType}
        ref={ref}
      />
    </S.Container>
  );
});
