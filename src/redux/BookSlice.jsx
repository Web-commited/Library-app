import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fakeAPI from "../components/fakeAPI";

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
    try {
        const response = await fakeAPI.fetchBooks();
        return response;
    }
    catch (error) {
        return error;
    }
});

const BookSlice = createSlice({
    name: "books",
    initialState: [],
    reducers: {
        addBook: (state, action) => {
            state.push({ id: Date.now(), ...action.payload });
        },
        deleteBook: (state, action) => {
            return state.filter((book) => book.id !== action.payload.id);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBooks.fulfilled, (state, action) => {
                return [...action.payload];
            })
            .addCase(fetchBooks.rejected, (state, action) => {
                return action.payload;
            })
    }
});




export const { addBook, deleteBook } = BookSlice.actions;
export default BookSlice.reducer;