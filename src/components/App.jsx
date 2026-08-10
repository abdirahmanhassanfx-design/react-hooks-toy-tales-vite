import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((r) => r.json())
      .then(setToys);
  }, []);

  function handleAddToy(newToy) {
    setToys((toys) => [...toys, newToy]);
  }

  function handleDeleteToy(id) {
    setToys((toys) => toys.filter((t) => t.id !== id));
  }

  function handleLikeToy(updatedToy) {
    setToys((toys) => toys.map((t) => (t.id === updatedToy.id ? updatedToy : t)));
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleAddToy} /> : null}
      <div className="buttonContainer">
        <button onClick={() => setShowForm((s) => !s)}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onDeleteToy={handleDeleteToy} onLikeToy={handleLikeToy} />
    </>
  );
}

export default App;
