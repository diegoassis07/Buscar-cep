import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 60px;
  flex-direction: row;
  gap: 50px;
  justify-content: center;
  margin-top: 25px;
`;
export const ButtonBuscar = styled.TouchableOpacity`
  width: 35%;
  height: 55px;
  background-color: ${({ fill }) => fill};
  justify-content: center;
  align-items: center;
  border-radius: 7px;
`;
export const textButton = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #fff;
`;
