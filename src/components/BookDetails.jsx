import React, { useState } from "react";

const BookDetails = ({ book, onClose, onUpdate }) => {
  const [price, setPrice] = useState(book.price);
  const [quantityLeft, setQuantityLeft] = useState(book.quantityLeft);
  const [quantityGiven, setQuantityGiven] = useState(book.quantityGiven);

  const handleSave = () => {
    onUpdate(book.id, { price, quantityLeft, quantityGiven });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-2">{book.title}</h2>
        <p className="mb-1"><strong>Author:</strong> {book.author}</p>
        <p className="mb-1"><strong>Added on:</strong> {book.date}</p>
        {onUpdate ? (
          <>
            <label className="block mb-1 mt-2">Price :</label>
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="p-2 border rounded w-full mb-2" />
            <label className="block mb-1">Quantity Left:</label>
            <input type="number" value={quantityLeft} onChange={(e) => setQuantityLeft(e.target.value)} className="p-2 border rounded w-full mb-2" />
            <label className="block mb-1">Quantity Given:</label>
            <input type="number" value={quantityGiven} onChange={(e) => setQuantityGiven(e.target.value)} className="p-2 border rounded w-full mb-2" />
            <button onClick={handleSave} className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Save</button>
          </>
        ) : (
          <>
            <p><strong>Price:</strong> ₹{book.price}</p>
            <p><strong>Quantity Left:</strong> {book.quantityLeft}</p>
            <p><strong>Quantity Given:</strong> {book.quantityGiven}</p>
          </>
        )}
        <button onClick={onClose} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Close</button>
      </div>
    </div>
  );
};

export default BookDetails;