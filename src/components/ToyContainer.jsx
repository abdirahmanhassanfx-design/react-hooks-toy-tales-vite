import React from "react";
import ToyCard from "./ToyCard";

// ToyContainer receives the toys array and CRUD callbacks from App.
// Its only job is to map over toys and render a ToyCard for each one.
function ToyContainer({ toys, onDeleteToy, onLikeToy }) {
  return (
    <div id="toy-collection">
      {toys.map((toy) => (
        // key prop uses toy.id to help React efficiently update the list
        <ToyCard key={toy.id} toy={toy} onDeleteToy={onDeleteToy} onLikeToy={onLikeToy} />
      ))}
    </div>
  );
}

export default ToyContainer;
