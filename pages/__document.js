// pages/_document.js
import {  Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Bootstrap CSS */}
        <link
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-o8SwKt6Ht4pjFdo8v6Vt5s4NE5ne/NTM7REc/aGfiZ7OVuT2wXw2I9G2Svhtw0T6"
          crossOrigin="anonymous"
        />
 
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
  integrity="sha512-Fo3rlrZj/k7ujTnH/PR3l+vqWj+OT1kET1zZ/6V+zj9l/6h0PHQITGHQUbb1f2Y2EJlzAWGZnvlc4+alE5G5mQ=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
