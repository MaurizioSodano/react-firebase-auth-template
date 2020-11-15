import React from "react";
import { View, StyleSheet,Text } from "react-native";
import { Title } from "react-native-paper";
import FormButton from "../components/FormButton";


const Test = ({ message,buttonText,callback }) => {
  return (
    <View style={styles.container}>
      <Title style={styles.titleText}>TEST</Title>
      <Text> {message}</Text>
      <FormButton
        title={buttonText}
        modeValue='contained'
        labelStyle={styles.loginButtonLabel}
        onPress={ callback}
      />
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f5f5f5',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    titleText: {
      fontSize: 24,
      marginBottom: 10
    },
    loginButtonLabel: {
      fontSize: 22
    },
    navButtonText: {
      fontSize: 16
    }
  });