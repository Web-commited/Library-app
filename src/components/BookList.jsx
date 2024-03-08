import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react';
import { fetchBooks,deleteBook } from '../redux/BookSlice';

export default function BookList() {
    const books = useSelector((state) => state.books);
    const dispatch= useDispatch();
    useEffect(() => {
        dispatch(fetchBooks());
    },[dispatch])

    

    return (
        <div>
            <h2>Books</h2>
            <ul>
                {books.map((book) => {
                    return (
                        <li key={book.id}>
                            {book.title}
                            
                            <span className='description'>
                                {book.description}
                            </span>
                            
                            <button onClick={()=>dispatch(deleteBook({id:book.id}))}>X</button>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}
