const books = [
    { id: 1, title: "Book 1", description: "Description for Book 1" },
    { id: 2, title: "Book 2", description: "Description for Book 2" },
    { id: 3, title: "Book 3", description: "Description for Book 3" }
];

const fakeAPI = {
    fetchBooks: () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(books);
            }, 1000);
        });
    },
    createBook: (book) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                books.push(book);
                resolve(book);
            }, 1000);
        });
    },
    deleteBook: (id) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = books.findIndex((book) => book.id === id);
                if (index > -1) {
                    books.splice(index, 1);
                    resolve(id);
                } else {
                    reject("Book not found");
                }
            }, 1000);
        });
    }
};

export default fakeAPI;