import React from "react";

// ToyCard displays a single toy's details and handles like and delete actions.
// Receives the toy object and two callbacks from App (via ToyContainer) as props.
function ToyCard({ toy, onDeleteToy, onLikeToy }) {
  // PATCH /toys/:id — increments likes by 1 and updates state via onLikeToy
  function handleLike() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ likes: toy.likes + 1 }),
    })
      .then((r) => r.json())
      .then(onLikeToy); // pass updated toy back up to App to update state
  }

  // DELETE /toys/:id — removes toy from backend and triggers state update via onDeleteToy
  function handleDelete() {
    fetch(`http://localhost:3001/toys/${toy.id}`, { method: "DELETE" }).then(
      () => onDeleteToy(toy.id)
    );
  }

  return (
    <div className="card" data-testid="toy-card">
      <h2>{toy.name}</h2>
      <img src={toy.image} alt={toy.name} className="toy-avatar" />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={handleLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
