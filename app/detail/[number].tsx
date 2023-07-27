import { Link, useLocalSearchParams } from 'expo-router'
import { Button, Text, View } from 'react-native'

export default function DetailsScreen() {
  const { number } = useLocalSearchParams()
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen {number}</Text>
      <Link href="/" asChild>
        <Button title="Go back" />
      </Link>
    </View>
  )
}
