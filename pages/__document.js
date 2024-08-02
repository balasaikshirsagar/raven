import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
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
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
