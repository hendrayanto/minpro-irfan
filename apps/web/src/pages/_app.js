import '../app/styles/global.css';
import React from "react";
export default function MyApp({
  Component: Component,
  pageProps: pageProps
}) {
  return <Component {...pageProps} />;
}
