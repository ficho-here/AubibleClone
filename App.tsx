import { View } from 'react-native';
import './global.css'
import books from './src/dummyBooks'
import BookListItem from './src/components/BookListItem';



export default function App() {
  return (
    <View className='bg-slate-700 flex-1 justify-center p-4'>
      <BookListItem book={books[0]}/>
      <BookListItem book={books[1]}/>
      <BookListItem book={books[2]}/>
      <BookListItem book={books[3]}/>
      <BookListItem book={books[4]}/>
    </View>
  );
}

