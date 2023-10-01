import { SWRConfig } from "swr";
import GlobalStyle from "../styles";
import ArtPieces from "./ArtPieces";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <SWRConfig
        value={{
          fetcher,
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
