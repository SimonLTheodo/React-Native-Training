import { Link, Stack, Tabs } from 'expo-router'
import { Button, SafeAreaView, Text } from 'react-native'

export default function SafeAreaEnabled() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          title: `Safe Area: Enabled`,
          headerStyle: { backgroundColor: 'crimson' },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}
      />
      <Tabs.Screen />
      <Text>This content is fully on screen</Text>
      <Link href="/" asChild>
        <Button title="Go back" />
      </Link>
    </SafeAreaView>
  )
}
