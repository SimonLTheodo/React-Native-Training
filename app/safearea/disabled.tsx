import { Link, Stack, Tabs } from 'expo-router'
import { Button, Text, View } from 'react-native'

export default function SafeAreaDisabled() {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          title: `Safe Area: Disabled`,
          headerStyle: { backgroundColor: 'crimson' },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}
      />
      <Tabs.Screen />
      <Text>This content is not fully on screen</Text>
      <Link href="/" asChild>
        <Button title="Go back" />
      </Link>
    </View>
  )
}
