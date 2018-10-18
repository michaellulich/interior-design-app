import React from "react";
import { Button } from "react-native";

const takePicture = props => {
  return <Button title="Take Picture" onPress={props.onTakePicture} />;
};

export default takePicture;
