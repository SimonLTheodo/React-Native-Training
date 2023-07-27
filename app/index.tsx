import { Link } from 'expo-router'
import { useState } from 'react'
import { Button, Pressable, SafeAreaView, Text, View } from 'react-native'

export default function HomeScreen() {
  const [counter, setCounter] = useState(0)
  return (
    <View style={{ height: '100%' }}>
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 15 }}>
        <Text>Home Screen</Text>
        <Link href="/detail/1" asChild>
          <Button title="Go to Details 1" />
        </Link>
        <Link href="/detail/2" asChild>
          <Button title="Go to Details 2" />
        </Link>
        <Link href="/safearea/enabled" asChild>
          <Button title="Go to Safe Area Enabled" />
        </Link>
        <Link href="/safearea/disabled" asChild>
          <Button title="Go to Safe Area Disabled" />
        </Link>
        <Pressable onPress={() => setCounter(counter + 1)}>
          <Text style={{ backgroundColor: 'red', padding: 5, fontSize: 20 }}>
            Counter: {counter}
          </Text>
        </Pressable>
        <Pressable onPress={() => setCounter(0)}>
          <Text>Reset Counter</Text>
        </Pressable>
      </SafeAreaView>
      <Text style={{ position: 'absolute', bottom: -15 }}>Hidden text</Text>
    </View>
  )
}
