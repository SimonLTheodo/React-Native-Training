import { Link, useLocalSearchParams } from 'expo-router'
import { Button, FlatList, SafeAreaView, ScrollView, Text, View } from 'react-native'

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
    }
  ]
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <ScrollView style={{ flex: 1 }}> */}
      <Text>Details Screen {number}</Text>
      <Link href="/" asChild>
        <Button title="Go back" />
      </Link>
      <FlatList
        style={{ flex: 1, width: '100%' }}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ListItem id={item.id} title={item.title} />}
      />
      {/* </ScrollView> */}
    </SafeAreaView>
  )
}
