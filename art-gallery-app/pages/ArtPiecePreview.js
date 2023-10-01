import React from "react";
import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist }) {
  console.log("image, title, artist ", image, title, artist);
  return (
    <>
      <div>ArtPiecePreview</div>
      <Image src={image} height={144} width={144} alt={title} />
    </>
  );
}
