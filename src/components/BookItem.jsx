import React from "react";

const BookItem = ({ book, onDelete, onView, onBorrow, isAdmin }) => (
  <div className="bg-white p-4 rounded shadow flex flex-col gap-2">
    <h2 className="text-xl font-semibold">{book.title}</h2>
    <p className="text-gray-700">by {book.author}</p>
    <p className="text-sm text-gray-500">Available: {book.quantityLeft}</p>
    <div className="flex gap-2 flex-wrap">
      <button onClick={() => onView(book)} className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
        View
      </button>
      {isAdmin && (
        <button onClick={() => onDelete(book.id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
          Delete
        </button>
      )}
      {!isAdmin && book.quantityLeft > 0 && (
        <button onClick={() => onBorrow(book.id)} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
          Borrow
        </button>
      )}
      {!isAdmin && book.quantityLeft <= 0 && (
        <span className="text-red-600 font-semibold">Not Available</span>
      )}
    </div>
  </div>
);

export default BookItem;