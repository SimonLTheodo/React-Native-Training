import { Link } from 'expo-router'
import { Button, Text, View } from 'react-native'

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Link href="/detail/1" asChild>
        <Button title="Go to Details 1" />
      </Link>
      <Link href="/detail/2" asChild>
        <Button title="Go to Details 2" />
      </Link>
    </View>
  )
}
