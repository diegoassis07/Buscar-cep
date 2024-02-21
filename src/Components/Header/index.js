import { StatusBar } from "expo-status-bar";
import * as S from "./style";

export default function Header() {
  return (
    <S.Container>
      <StatusBar backgroundColor="#4169e1" />
      <S.Title>Busca Cep</S.Title>
    </S.Container>
  );
}
