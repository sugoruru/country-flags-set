import { AppProps } from "next/dist/shared/lib/router/router";
import React from "react";
import Head from "next/head";
import "../styles/global.scss";
import json from "../countries.json";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <Head>
        <title>set of country flags</title>
        <link
          rel="icon"
          href={`${
            json.url === "localhost" ? "" : json.url
          }../image/favicon.png`}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
