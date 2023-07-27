import { Link } from 'expo-router'
import { Button, Text, View } from 'react-native'

export default function SafeAreaEnabled() {
  return (
    <View style={{ flex: 1 }}>
      <Text>This content is not fully on screen</Text>
      <Link href="/" asChild>
        <Button title="Go back" />
      </Link>
    </View>
  )
}
