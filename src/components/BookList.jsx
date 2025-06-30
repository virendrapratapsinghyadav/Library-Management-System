import React from "react";
import BookItem from "./BookItem";

const BookList = ({ books, onDelete, onView, onBorrow, isAdmin }) => (
  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
    {books.map((book) => (
      <BookItem
        key={book.id}
        book={book}
        onDelete={onDelete}
        onView={onView}
        onBorrow={onBorrow}
        isAdmin={isAdmin}
      />
    ))}
    {books.length === 0 && <p className="text-center col-span-full">No books found.</p>}
  </div>
);

export default BookList;