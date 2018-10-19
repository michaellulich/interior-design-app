import React from "react";
import { View, Button } from "react-native";

const ChrisButton = props => {
  return (
    <View>
      <Button title={props.name} onPress={props.onPress} />;
      <Button title="two" onPress={props.onPress} />;
    </View>
  );
};

export default ChrisButton;
