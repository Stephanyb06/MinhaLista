import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput, Alert } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons"; 
import { style } from "./styles";

export default function User() {
  const navigation = useNavigation<NavigationProp<any>>();

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Stephany Braga");
  const [about, setAbout] = useState("Sou uma pessoa criativa, curiosa e gosto de aprender coisas novas.");
  const [hobbies, setHobbies] = useState("Ler, dançar, ouvir música e assistir séries.");
  const [city, setCity] = useState("Curitiba - PR");
  const [profession, setProfession] = useState("Estudante");

  const handleLogout = () => {
    Alert.alert("Você saiu da conta!");
    navigation.reset({ routes: [{ name: "Login" }] });
  };

  const toggleEdit = () => {
    if (isEditing) {
      Alert.alert("Informações salvas com sucesso!");
    }
    setIsEditing(!isEditing);
  };

  return (
    <View style={style.container}>
      <Image
        source={require("../../assets/pinguin.jpg")}
        style={style.profileImage}
      />

      {/* Nome */}
      {isEditing ? (
        <TextInput
          value={name}
          onChangeText={setName}
          style={[style.name, style.inputEditable]}
        />
      ) : (
        <Text style={style.name}>{name}</Text>
      )}

      {/* Container das informações */}
      <View style={style.infoContainer}>
        <Text style={style.infoTitle}>Sobre mim</Text>
        {isEditing ? (
          <TextInput
            value={about}
            onChangeText={setAbout}
            style={style.inputEditable}
            multiline
          />
        ) : (
          <Text style={style.infoText}>{about}</Text>
        )}

        <Text style={style.infoTitle}>Hobbies</Text>
        {isEditing ? (
          <TextInput
            value={hobbies}
            onChangeText={setHobbies}
            style={style.inputEditable}
          />
        ) : (
          <Text style={style.infoText}>{hobbies}</Text>
        )}

        <Text style={style.infoTitle}>Cidade</Text>
        {isEditing ? (
          <TextInput
            value={city}
            onChangeText={setCity}
            style={style.inputEditable}
          />
        ) : (
          <Text style={style.infoText}>{city}</Text>
        )}

        <Text style={style.infoTitle}>Profissão</Text>
        {isEditing ? (
          <TextInput
            value={profession}
            onChangeText={setProfession}
            style={style.inputEditable}
          />
        ) : (
          <Text style={style.infoText}>{profession}</Text>
        )}
      </View>

      {/* Botão de logout */}
      <TouchableOpacity style={style.logoutButton} onPress={handleLogout}>
        <MaterialIcons name="logout" size={28} color="gray" />
      </TouchableOpacity>

      {/* Botão editar/salvar */}
      <TouchableOpacity style={style.editButton} onPress={toggleEdit}>
        {isEditing ? (
          <FontAwesome name="check" size={22} color="#fff" />
        ) : (
          <FontAwesome name="pencil" size={22} color="#fff" />
        )}
      </TouchableOpacity>
    </View>
  );
}
