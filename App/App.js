import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from './src/pages/HomePage';
import ProductPage from './src/pages/ProductPage';
import { Ionicons } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
          component={HomePage} />
        <Tab.Screen name="Settings"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings-outline" color={color} size={size} />
            ),
          }}
          component={ProductPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App