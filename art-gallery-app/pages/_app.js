import GlobalStyle from "../styles";
import useSWR, { SWRConfig } from "swr";
import ArtPieces from "./ArtPieces";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const API_URL = "https://example-apis.vercel.app/api/art";

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(API_URL);

  if (!data) {
    return <div>There is no data</div>;
  }
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <GlobalStyle />
      <SWRConfig
        value={{
          fetcher,
          refreshInterval: 1000,
        }}
      >
        <Component {...pageProps} />
        {/* {data.map((d) => {
          <li>{d}</li>;
        })} */}
        <ArtPieces pieces={data} />
      </SWRConfig>
    </>
  );
}
