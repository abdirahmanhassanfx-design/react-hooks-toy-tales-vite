import React, { useState } from "react";

// ToyForm is a controlled form component for creating a new toy.
// On submit it POSTs to the backend and calls onAddToy to update App state.
function ToyForm({ onAddToy }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  // POST /toys — sends new toy data to backend, then updates parent state
  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, image, likes: 0 }), // new toys start with 0 likes
    })
      .then((r) => r.json())
      .then((newToy) => {
        onAddToy(newToy); // pass new toy up to App to append to state
        setName("");      // reset form fields after successful creation
        setImage("");
      });
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
