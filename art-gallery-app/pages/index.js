import ArtPieces from "./ArtPieces";
import useSWR, { SWRConfig } from "swr";

export default function HomePage() {
  const { data, error } = useSWR(`https://example-apis.vercel.app/api/art`);

  if (!data) {
    return <div>There is no data</div>;
  }
  if (error) return <div>failed to load</div>;
  return (
    <div>
      <ArtPieces pieces={data} />
    </div>
  );
}
