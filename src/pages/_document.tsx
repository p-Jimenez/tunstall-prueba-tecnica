import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>Restaurant Manager</title>
      <link rel="icon" href="/images/logo.png" />
      <body className="antialiased p-4">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
