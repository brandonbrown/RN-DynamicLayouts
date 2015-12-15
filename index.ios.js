/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var DynamicLayout = require('./App/Components/DynamicLayout');

var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  View
} = React;

class DynamicLayouts extends React.Component{
  render(){
    return (
      <View style={styles.container}>
      <NavigatorIOS
      style={styles.container}
        initialRoute={{
          title: 'Dynamic Layouts',
          component: DynamicLayout
        }} />
      </View>
    );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('DynamicLayouts', () => DynamicLayouts);
