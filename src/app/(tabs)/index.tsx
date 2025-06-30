import {  FlatList, View } from 'react-native';
import '../../../global.css'
import books from '../../dummyBooks'
import BookListItem from '../../components/BookListItem';



export default function App() {
  return (
    <View className=' bg-slate-700 flex-1 justify-center p-4 pt-20'>
      <FlatList 
      data={books}
      contentContainerClassName='gap-12'
      renderItem={({item}) => <BookListItem book={item} />}
      />

    </View>

  );
}

