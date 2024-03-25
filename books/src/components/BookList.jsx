import Book from '../components/Book';
import papatimon from "../assets/images/rat.png";
import { useState } from 'react';

const BookList = () => {
    
  const [books,setBooks] = useState([
    {id: 1, title: 'boek1', author: 'papa timon', image: papatimon},
    {id: 2, title: 'boek1', author: 'papa timon', image: papatimon},
    {id: 3, title: 'boek1', author: 'papa timon', image: papatimon}

  ]);

    return ( 
   
    <> 
     {books.map((book) => (
        <Book key={book.id} title ={book.title} author ={book.author} image={book.image}/>
     ))}
   
    </> 
    );
    
    
};
 
export default BookList;