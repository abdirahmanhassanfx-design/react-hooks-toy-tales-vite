import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

// App is the top-level component that owns all shared state.
// It fetches toys from the backend and passes data + callbacks down via props.
function App() {
  const [showForm, setShowForm] = useState(false);
  // toys: source of truth for the toy list rendered on the page
  const [toys, setToys] = useState([]);

  // GET /toys — fetch all toys once when the component mounts
  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((r) => r.json())
      .then(setToys);
  }, []);

  // Called by ToyForm after a successful POST — appends the new toy to state
  function handleAddToy(newToy) {
    setToys((toys) => [...toys, newToy]);
  }

  // Called by ToyCard after a successful DELETE — removes the toy from state
  function handleDeleteToy(id) {
    setToys((toys) => toys.filter((t) => t.id !== id));
  }

  // Called by ToyCard after a successful PATCH — replaces the updated toy in state
  // Uses map to preserve the original order of toys in the list
  function handleLikeToy(updatedToy) {
    setToys((toys) => toys.map((t) => (t.id === updatedToy.id ? updatedToy : t)));
  }

  return (
    <>
      <Header />
      {/* Conditionally render the form based on showForm toggle */}
      {showForm ? <ToyForm onAddToy={handleAddToy} /> : null}
      <div className="buttonContainer">
        <button onClick={() => setShowForm((s) => !s)}>Add a Toy</button>
      </div>
      {/* Pass toys array and CRUD callbacks down to ToyContainer */}
      <ToyContainer toys={toys} onDeleteToy={handleDeleteToy} onLikeToy={handleLikeToy} />
    </>
  );
}

export default App;
