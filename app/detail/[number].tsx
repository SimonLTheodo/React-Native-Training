import { Link, Stack, useLocalSearchParams } from 'expo-router'
import { Button, FlatList, SafeAreaView, Text, View } from 'react-native'

interface ListItemProps {
  id: number
  title: string
}

const ListItem = ({ title }: ListItemProps) => (
  <View style={{ padding: 25 }}>
    <Text style={{ fontSize: 72 }}>{title}</Text>
  </View>
)

export default function DetailsScreen() {
  const { number } = useLocalSearchParams()
  const data: ListItemProps[] = [
    {
      id: 1,
      title: 'This'
    },
    {
      id: 2,
      title: 'is'
    },
    {
      id: 3,
      title: 'a'
    },
    {
      id: 4,
      title: 'flat'
    },
    {
      id: 5,
      title: 'list'
    },
    {
      id: 6,
      title: 'component'
    }
  ]
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Stack.Screen
        options={{
          title: `Details ${number}`,
          headerStyle: { backgroundColor: '#f4511e' },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
          // https://reactnavigation.org/docs/headers#replacing-the-title-with-a-custom-component
        }}
      />
      <FlatList
        style={{ flex: 1, width: '100%' }}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ListItem id={item.id} title={item.title} />}
      />
    </SafeAreaView>
  )
}
