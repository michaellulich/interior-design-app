import React from "react";
import { Button, Alert } from "react-native";

const takePicture = props => {
  return <Button title="Take Picture" onPress={() => {
    Alert.alert('Fuck You');
  }} />;
};

export default takePicture;
