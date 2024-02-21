import { Text, View } from "react-native";
import * as S from "./style";

export default function Label({ data }) {
  return (
    <S.Container>
      <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
        <S.Label>Cep:</S.Label>
        <Text style={{ fontSize: 15 }}>{data.cep}</Text>
      </View>

      <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
        <S.Label>logradouro:</S.Label>
        <Text style={{ fontSize: 15 }}>{data.logradouro}</Text>
      </View>

      <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
        <S.Label>complemento:</S.Label>
        <Text style={{ fontSize: 15 }}>{data.complemento}</Text>
      </View>

      <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
        <S.Label>bairro:</S.Label>
        <Text style={{ fontSize: 15 }}>{data.bairro}</Text>
      </View>

      <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
        <S.Label>localidade:</S.Label>
        <Text style={{ fontSize: 15 }}>{data.localidade}</Text>
      </View>

      <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
        <S.Label>uf:</S.Label>
        <Text style={{ fontSize: 15 }}>{data.uf}</Text>
      </View>

      <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
        <S.Label>ibge:</S.Label>
        <Text style={{ fontSize: 15 }}>{data.ibge}</Text>
      </View>

      <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
        <S.Label>gia:</S.Label>
        <Text style={{ fontSize: 15 }}>{data.gia}</Text>
      </View>

      <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
        <S.Label>ddd:</S.Label>
        <Text style={{ fontSize: 15 }}>{data.ddd}</Text>
      </View>

      <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
        <S.Label>siafi:</S.Label>
        <Text style={{ fontSize: 15 }}>{data.siafi}</Text>
      </View>
    </S.Container>
  );
}
