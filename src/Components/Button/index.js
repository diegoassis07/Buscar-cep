import * as S from "./style";
export default function Button({ onPress, title, fill }) {
  return (
    <S.ButtonBuscar fill={fill} onPress={onPress} title={title}>
      <S.textButton>{title}</S.textButton>
    </S.ButtonBuscar>
  );
}
