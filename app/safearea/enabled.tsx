import { Link } from 'expo-router'
import { Button, SafeAreaView, Text } from 'react-native'

export default function SafeAreaEnabled() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>This content is fully on screen</Text>
      <Link href="/" asChild>
        <Button title="Go back" />
      </Link>
    </SafeAreaView>
  )
}
