import { Keyboard, SafeAreaView } from "react-native";
import { useRef, useState } from "react";

import Header from "./src/Components/Header";
import Button from "./src/Components/Button";
import Label from "./src/Components/label";
import { Input } from "./src/Components/Input";

import { Container } from "./src/Components/Button/style";
import api from "./src/services/api";

export default function App() {
  const [valueInput, setValueInput] = useState("");
  const [data, setData] = useState({});
  const reference = useRef(null);

  // /ws/${valueInput}/json/

  const Get = async () => {
    valueInput === "" && alert('por gentileza preencha o campo')
    try {
      const response = await api.get(`/ws/${valueInput}/json/`);
      setData(response.data);
    } catch (error) {
      console.log(error)
    }
  };

  const Clear = () => {
    setData("");
    Keyboard.dismiss();
    setValueInput("");

    if (reference.current) reference.current.focus();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <Input
        placeholder="ex: 73438942"
        value={valueInput}
        onChangeText={(text) => setValueInput(text)}
        keyboardType="numeric"
        ref={reference}
      />
      <Container>
        <Button onPress={Get} title="Buscar" fill={"#4169e1"} />
        <Button onPress={Clear} title="Limpar" fill={"#ff0000"} />
      </Container>
      <Label data={data} />
    </SafeAreaView>
  );
}
