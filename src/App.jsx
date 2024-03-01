import React from 'react'
import './App.css'
import Addbook from './components/Addbook'
import BookList from './components/BookList'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {


  return (
    <Provider store={store}>
      <div className='App'>
        <h1>Book List</h1>
        <Addbook />
        <BookList />
      </div>
    </Provider>
  )
}

export default App
