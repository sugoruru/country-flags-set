import { AppProps } from "next/dist/shared/lib/router/router";
import React from "react";
import Head from "next/head";
import "../styles/global.scss";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <Head>
        <title>set of country flags</title>
        <link rel="icon" href="image/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
