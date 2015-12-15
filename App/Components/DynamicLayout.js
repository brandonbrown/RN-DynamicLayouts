'use strict';

var React = require('react-native');

var {
  TouchableHighlight,
  View,
  Text,
  TextInput,
  StyleSheet
} = React;

class DynamicLayout extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showCancel: false, // sets flag for rendering renderCancel()
      buttonValue: 'Submit' // changes value of TouchableHighlight->View->Text
    }
  }
  toggleCancel(event) {
      this.setState({
          showCancel: !this.state.showCancel
      });
  }
  renderCancel() {
      if (this.state.showCancel) {
          return (
            <TouchableHighlight
            style={styles.button}
            onPress={this.toggleCancel.bind(this)}
            >
                <View>
                    <Text style={styles.welcome}>{this.state.buttonValue}</Text>
                </View>
            </TouchableHighlight>
          );
      } else {
          return (
            <View></View>
          );
      }
  }

    render() {
        return (
          <View style={styles.mainContainer}>
            <TextInput
              style={styles.input}
              placeholder='Dynamic'
              textAlign='center'
              onFocus={this.toggleCancel.bind(this)}
              onBlur={this.toggleCancel.bind(this)}
            />

            {this.renderCancel()}
            <TextInput
              style={styles.input}
              placeholder='Not Dynamic'
              textAlign='center'
            />
           </View>
        );
    }

};

var styles = StyleSheet.create({

  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#334433'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'left',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  input: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonDisabled: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: '#e4e4e4',
    borderColor: '#e2e2e2',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
});

module.exports = DynamicLayout;
