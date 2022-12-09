import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground, TouchableOpacity, Image, Dimensions } from 'react-native';

const backgroundColors = {
  black: { backgroundColor: "#090C08" },
  purple: { backgroundColor: "#474056" },
  grey: { backgroundColor: "#8A95A5" },
  green: { backgroundColor: "#B9C6AE" },
};

export default class Start extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", color: "" };
  }
  render() {
    const { black, purple, grey, green } = backgroundColors;
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/background-image.png")}
          style={styles.image}
        >
          <Text style={styles.title}>Sim Chat</Text>
          <View style={styles.startWrapper}>
            <View style={styles.inputWrapper}>
              <Image style={styles.icon} source={require('../assets/icon.svg')} />
              <TextInput
                style={styles.input}
                onChangeText={(name) => this.setState({ name })}
                value={this.state.name}
                placeholder="Enter Your Name:"
              />
            </View>
            <View style={styles.colorWrapper}>
              {/* <TextInput style={[styles.input, styles.text]}
              onChangeText={(name) => this.setState({ name })}
              value={this.state.name} placeholder="Enter your name here"
            />
            <View> */}
              <Text style={styles.text}>Select Background Color</Text>
              <View style={[styles.colors, styles.colorBox]}>
                <TouchableOpacity
                  style={[styles.color, black, this.state.color === black.backgroundColor ? styles.colorSelected : {},]} onPress={() => this.setState({ color: black.backgroundColor })} />
                <TouchableOpacity
                  style={[styles.color, purple, this.state.color === purple.backgroundColor
                    ? styles.colorSelected
                    : {},]} onPress={() => this.setState({ color: purple.backgroundColor })
                    }
                />
                <TouchableOpacity
                  style={[styles.color, grey, this.state.color === grey.backgroundColor
                    ? styles.colorSelected : {},]} onPress={() => this.setState({ color: grey.backgroundColor })}
                />
                <TouchableOpacity
                  style={[styles.color, green, this.state.color === green.backgroundColor
                    ? styles.colorSelected : {},]} onPress={() => this.setState({ color: green.backgroundColor })}
                />
              </View>
            </View>
            <TouchableOpacity
              style={styles.button} onPress={() => this.props.navigation.navigate("Chat", {
                name: this.state.name,
                color: this.state.color,
              })}
              accessible={true}
              accessibilityLabel='Start chatting'
              accessibilityHint='Enter the chat room, where you can send messages to your contacts.'
            >
              <Text style={styles.buttonText}>Start Chatting</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    resizeMode: 'cover',
    paddingVertical: '6%',
  },

  title: {
    flex: 1,
    fontSize: 45,
    fontWeight: '600',
    color: '#FFFFFF',
    paddingTop: '10%',
    paddingBottom: 0,
    marginBottom: 0,
  },

  startWrapper: {
    flex: 2,
    backgroundColor: 'white',
    height: '20%',
    width: '88%',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: '6%',
  },

  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'lightgrey',
    opacity: 50,
    height: 60,
    width: '88%',
    borderColor: 'lightgrey',
    borderWidth: 2,
    borderRadius: 5,
    paddingLeft: 5,
    paddingRight: -2
  },

  text: {
    color: "#757083",
    fontSize: 18,
    fontWeight: "300",
    textAlign: "center",
  },

  colors: {
    flexDirection: "row",
  },

  box: {
    backgroundColor: "#fff",
    width: "88%",
    alignItems: "center",
    height: "44%",
    justifyContent: "space-evenly",
  },

  color: {
    borderRadius: 20,
    width: 40,
    height: 40,
    marginRight: 40,
  },

  colorSelected: {
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#5f5f5f",
  },

  input: {
    fontSize: 16,
    fontWeight: '300',
    color: '#757083',
    height: 60,
    borderColor: 'rgba(0,0,0,0)',
    borderWidth: 2,
    borderRadius: 5,
    position: 'absolute',
    left: -2,
    paddingLeft: 35,
    paddingRight: 20,
    width: '101%'
  },

  button: {
    height: 50,
    width: "50%",
    backgroundColor: "#757083",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },

  buttonText: {
    padding: 10,
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  colorBox: {
    marginTop: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

});