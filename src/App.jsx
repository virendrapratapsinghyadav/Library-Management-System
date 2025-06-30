import React, { useState, useEffect } from "react";
import BookForm from "./components/BookForm";
import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import Login from "./components/Login";
import "./App.css";

const App = () => {
  const [books, setBooks] = useState(() => {
    const saved = localStorage.getItem("books");
    return saved ? JSON.parse(saved) : [];
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);
  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem("user");
      return savedUser ? JSON.parse(savedUser) : null;
    } catch (error) {
      localStorage.removeItem("user");
      return null;
    }
  });

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const handleAddBook = (book) => {
    setBooks([...books, { ...book, id: Date.now(), date: new Date().toLocaleString() }]);
  };

  const handleDelete = (id) => {
    setBooks(books.filter((book) => book.id !== id));
    if (selectedBook && selectedBook.id === id) setSelectedBook(null);
  };

  const handleBorrowBook = (id) => {
    setBooks(
      books.map((book) =>
        book.id === id && book.quantityLeft > 0
          ? { ...book, quantityLeft: book.quantityLeft - 1, quantityGiven: parseInt(book.quantityGiven) + 1 }
          : book
      )
    );
  };

  const handleUpdateBook = (id, updatedFields) => {
    setBooks(books.map((book) => (book.id === id ? { ...book, ...updatedFields } : book)));
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLogin = (userInfo) => {
    setUser(userInfo);
    localStorage.setItem("user", JSON.stringify(userInfo));
  };

  if (!user) return <Login onLogin={handleLogin} />;

  const isAdmin = user.role === "admin";

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-center w-full"></h1>
        <button
          onClick={() => {
            localStorage.removeItem("user");
            setUser(null);
          }}
          className="absolute top-6 right-6 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>
      <h1 className="text-3xl font-bold mb-6 text-center">Library Management System</h1>
      {isAdmin && <BookForm onAddBook={handleAddBook} />}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <p className="text-right mb-2 text-gray-600">Total Books: {books.length}</p>
      <BookList
        books={filteredBooks}
        onDelete={isAdmin ? handleDelete : null}
        onView={setSelectedBook}
        onBorrow={!isAdmin ? handleBorrowBook : null}
        isAdmin={isAdmin}
      />
      {selectedBook && (
        <BookDetails
          book={selectedBook}
          onClose={() => setSelectedBook(null)}
          onUpdate={isAdmin ? handleUpdateBook : null}
        />
      )}
    </div>
  );
};

export default App;