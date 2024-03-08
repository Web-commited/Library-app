import React, {useState}from 'react'
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/BookSlice';


export default function Addbook() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = (e) => {  
        e.preventDefault();
        dispatch(addBook({title, description}));
        setTitle('');
        setDescription('');
        console.log('submitted');
     }
    return (
        <div>
            Addbook
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Title" value={title} required onChange={e=>setTitle(e.target.value)}/>
                <input type="text" placeholder="Description" value={description} onChange={e=>setDescription(e.target.value)}/>
                <button type="submit">Add Book</button>
            </form>
        </div>
    )
}
