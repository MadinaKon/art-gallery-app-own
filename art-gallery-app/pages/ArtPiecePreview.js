import React from "react";
import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <>
      <div>ArtPiecePreview</div>
      {title} {artist}
      <Image src={image} height={144} width={144} alt={title} />
    </>
  );
}
