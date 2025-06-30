import { Image, Text, View } from 'react-native';
import {AntDesign} from '@expo/vector-icons'

type Book = {
    id: string;
    title: string;
    author: string;
    audio_url: string;
    thumbnail_url?: string;
}

type BookListItemProps = {
    book: Book
}

export default function BookListItem({book}: BookListItemProps) {
  return(
  <>
  <View className='flex-row gap-3 items-center'>
        <Image source={{uri: book.thumbnail_url}} className='w-20 aspect-square rounded-md'/> 
        <View className='gap-1 flex-1'>
         <Text className='text-2xl text-white font-bold'>{book.title}</Text>
         <Text className='text-1xl text-white'>{book.author}</Text>
        </View>
        <AntDesign name='playcircleo' size={26} color='gainsboro' />
      </View>
  </>)
}

