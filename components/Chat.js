import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { GiftedChat, Bubble } from 'react-native-gifted-chat'

export default class Chat extends React.Component {

  //state initialization
  constructor() {
    super();
    this.state = {
      messages: [],
    }
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#000'
          }
        }}
      />
    )
  }

  //
  componentDidMount() {

    let name = this.props.route.params.name;
    this.props.navigation.setOptions({ title: name });

    this.setState({
      messages: [
        {
          _id: 1,
          text: 'You have entered the chat.',
          createdAt: new Date(),
          system: true,
        },

        {
          _id: 2,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ],
    })
  }



  render() {
    let color = this.props.route.params.color;
    let name = this.props.route.params.name;
    this.props.navigation.setOptions({ title: name });
    return (

      <View style={[{ flex: 1 }, { backgroundColor: color }]}>
        <GiftedChat
          renderBubble={this.renderBubble.bind(this)}
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1,
          }}
          accessible={true}
          accessibilityLabel='Chat input field'
          accessibilityHint='Here you can enter the message. After entering the message, you can press send on the right.'
        />
        {/* <Text style={styles.welcometext}>Welcome!</Text>
        <Button
          title='Go Back to Start'
          onPress={() => this.props.navigation.navigate('Start')}
        /> */}
        {Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null}
      </View>
    )
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     outerWidth: 100,
//     innerWidth: 80
//   },
//   welcometext: {
//     color: "#FEFEFE",
//     fontSize: 16
//   },
//   chatmessage: {
//     fontSize: 14,
//     color: "#FEFEFE",
//     justifyContent: 'left'
//   }
// });