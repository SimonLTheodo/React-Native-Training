import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack'
import * as React from 'react'
import { Button, Text, View } from 'react-native'

type RootStackParamList = {
  Home: undefined
  Details: { number: string }
}

function HomeScreen({ navigation }: NativeStackScreenProps<RootStackParamList, 'Home'>) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details 1"
        onPress={() => navigation.navigate('Details', { number: '1' })}
      />
      <Button
        title="Go to Details 2"
        onPress={() => navigation.navigate('Details', { number: '2' })}
      />
    </View>
  )
}
function DetailsScreen({
  route,
  navigation
}: NativeStackScreenProps<RootStackParamList, 'Details'>) {
  const { number } = route.params
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen {number}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  )
}

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator()

function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} initialParams={{number: '0'}} />
      </Stack.Navigator> */}

      {/* <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Details" component={DetailsScreen} initialParams={{ number: '0' }} />
      </Tab.Navigator> */}
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Details" component={DetailsScreen} initialParams={{ number: '0' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App
