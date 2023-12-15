import {StyleSheet, View} from 'react-native';
import Colors from './src/constants/colors';
import NavigationContainer from './src/screens/navigations/navigation';

const App = () => {
  return (
    <View style={styles.main}>
      <NavigationContainer />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.primary500,
  },
});
