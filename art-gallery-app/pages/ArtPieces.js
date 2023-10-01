import React from "react";

export default function ArtPieces({ pieces }) {
  console.log("ArtPieces pieces ", pieces);

  return (
    <ul>
      {pieces.map(
        ({
          slug,
          artist,
          name,
          imageSource,
          year,
          genre,
          colors,
          dimensions,
        }) => (
          <li key={slug}>{artist}</li>
        )
      )}
    </ul>
  );
}
