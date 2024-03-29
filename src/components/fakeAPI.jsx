const books = [
    { id: 1, title: "Hamlet", description: "Description for Book 1" },
    { id: 2, title: "Romeo And Juliet", description: "Description for Book 2" },
    { id: 3, title: "Macbeth", description: "Description for Book 3" }
];

const fakeAPI = {
    fetchBooks: () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(books);
            }, 100);
        });
    },
    createBook: (book) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                books.push(book);
                resolve(book);
            }, 100);
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
            }, 100);
        });
    }
};

export default fakeAPI;