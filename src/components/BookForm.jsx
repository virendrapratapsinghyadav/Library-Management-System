import React, { useState } from "react";

const BookForm = ({ onAddBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [quantityLeft, setQuantityLeft] = useState("");
  const [quantityGiven, setQuantityGiven] = useState("");

  const handleSubmit = () => {
    if (!title || !author || !price || !quantityLeft || !quantityGiven) return;
    onAddBook({ title, author, price, quantityLeft, quantityGiven });
    setTitle("");
    setAuthor("");
    setPrice("");
    setQuantityLeft("");
    setQuantityGiven("");
  };

  return (
    <div className="mb-4 flex flex-col gap-2">
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="p-2 border rounded" />
      <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} className="p-2 border rounded" />
      <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} className="p-2 border rounded" />
      <input type="number" placeholder="Quantity Left" value={quantityLeft} onChange={(e) => setQuantityLeft(e.target.value)} className="p-2 border rounded" />
      <input type="number" placeholder="Quantity Given" value={quantityGiven} onChange={(e) => setQuantityGiven(e.target.value)} className="p-2 border rounded" />
      <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Add Book
      </button>
    </div>
  );
};

export default BookForm;