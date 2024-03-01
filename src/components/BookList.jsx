import React from 'react'
import { useSelector } from 'react-redux'

export default function BookList() {
    const books = useSelector((state) => state.books);

    return (
        <div>
            <ul>
                {books.map((book) => {
                    return (
                        <li key={book.id}>
                            {book.title}
                            <button>x</button>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}
