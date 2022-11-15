import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, 
  KeyboardAvoidingView, 
  Platform} from 'react-native';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import { store } from './store';
import GlobalStyles from './GlobalStyles';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-screens'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './screens/MapScreen';
import FoodScreen from './screens/FoodScreen';


export default function App() {

  const Stack = createNativeStackNavigator()
  return (
    <Provider store={store} >

      <NavigationContainer>
        <KeyboardAvoidingView style={{flex:1}}
              behavior={Platform.OS === "android"? "height": "padding"} >
          <Stack.Navigator>
            <Stack.Screen 
              name='HomeScreen' component={HomeScreen}
              options={{
                headerShown: false
              }} />
            <Stack.Screen 
              name='MapScreen' component={MapScreen}
              options={{
                headerShown: false
              }} />
            <Stack.Screen 
              name='FoodScreen' component={FoodScreen}
              options={{
                headerShown: false
              }} />
          </Stack.Navigator>
        </KeyboardAvoidingView>
        
      </NavigationContainer>
      
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
