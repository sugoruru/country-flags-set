import { AppProps } from "next/dist/shared/lib/router/router";
import React from "react";
import Head from "next/head";
import "../styles/global.scss";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <Head>
        <title>set of country flags</title>
        <link
          rel="icon"
          href="https://sugoruru.github.io/country-flags-set/favicon.ico"
        />
        <meta name="google-site-verification" content="BVYBVn5DiBqPYOl5KjLgzz2h4VESfQqgQzCW0vZ_rr0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
