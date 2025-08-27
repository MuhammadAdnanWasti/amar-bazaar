"use client"
import toast from "react-hot-toast";
import React, { useState } from 'react'

export default function AddProductsPage() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    origin: "",
    quantity: "",
    unit: "",
    category: "",
  });
   const [loading, setLoading] = useState(false); // NEW

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
 setLoading(true); // start loading
   
try {
  const res = await fetch("/api/items", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  if (res.ok) {
    toast.success("✅ Product added successfully!");
    setFormData({
      name: "",
      description: "",
      price: "",
      origin: "",
      quantity: "",
      unit: "",
      category: "",
    });
  } else {
    toast.error("❌ Failed to add product");
  }
} catch (err) {
  console.error(err);
  toast.error("⚠️ Something went wrong");
}finally {
      setLoading(false); // stop loading
    }
  };

  return (
     <div className="max-w-3xl mx-auto p-6 ">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Product</h2>

      <form
  onSubmit={handleSubmit}
  className="card  shadow-lg p-8 space-y-6 border rounded-xl max-w-lg mx-auto bg-base-content text-gray-500"
>
  {/* Name */}
  <div className="form-control">
    <label className="label font-semibold text-gray-700">Name</label>
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      className="input input-bordered w-full bg-base-content border-blue-400 "
      placeholder="Enter product name"
      required
    />
  </div>

  {/* Description */}
  <div className="form-control">
    <label className="label font-semibold text-gray-700">Description</label>
    <textarea
      name="description"
      value={formData.description}
      onChange={handleChange}
      className="textarea textarea-bordered w-full bg-base-content border-blue-400"
      placeholder="Enter product description"
      required
    />
  </div>

  {/* Price */}
  <div className="form-control">
    <label className="label font-semibold text-gray-700">Price ($)</label>
    <input
      type="number"
      name="price"
      value={formData.price}
      onChange={handleChange}
      className="input input-bordered w-full bg-base-content border-blue-400"
      placeholder="0.00"
      required
    />
  </div>

  {/* Origin */}
  <div className="form-control">
    <label className="label font-semibold text-gray-700">Origin</label>
    <input
      type="text"
      name="origin"
      value={formData.origin}
      onChange={handleChange}
      className="input input-bordered w-full bg-base-content border-blue-400"
      placeholder="e.g., USA, Mexico"
    />
  </div>

  {/* Quantity & Unit */}
  <div className="grid grid-cols-2 gap-6">
    <div className="form-control">
      <label className="label font-semibold text-gray-700">Quantity</label>
      <input
        type="number"
        name="quantity"
        value={formData.quantity}
        onChange={handleChange}
        className="input input-bordered w-full bg-base-content border-blue-400"
        placeholder="e.g., 10"
      />
    </div>
    <div className="form-control">
      <label className="label font-semibold text-gray-700">Unit</label>
      <input
        type="text"
        name="unit"
        value={formData.unit}
        onChange={handleChange}
        className="input input-bordered w-full bg-base-content border-blue-400"
        placeholder="kg, pcs, liter"
      />
    </div>
  </div>

  {/* Category */}
  <div className="form-control">
    <label className="label font-semibold text-gray-700 ">Category</label>
    <input
      type="text"
      name="category"
      value={formData.category}
      onChange={handleChange}
      className="input input-bordered w-full bg-base-content border-blue-400"
      placeholder="Fruits, Vegetables, Beverages"
    />
  </div>

  {/* Submit */}
  <div className="form-control pt-4">
    <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={loading}
          >
            {loading ? (
              <span className="loading loading-spinner loading-sm text-green-800"></span>
            ) : (
              "Add Product"
            )}
          </button>
  </div>
</form>

    </div>
  )
}
