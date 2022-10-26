/* eslint-disable import/no-anonymous-default-export */
// pages/_document.js
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

const APP_NAME = 'Overheard'
const APP_DESCRIPTION = "The world's quotebook. Quote things you overhear your friends say."
const KEYWORDS = "social media, overheard app, world's quotebook, quotes, quote, social media app, overheard.me, overhear, overhear app, edyfi, hackathon, memes"

class MyDocument extends Document {

  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en' dir='ltr'>
        <Head>
            <meta name='application-name' content={APP_NAME} />
            <meta name="msapplication-tooltip" content="Overheard App"/>
            <meta name="msapplication-starturl" content="/"/>
            <meta name='apple-mobile-web-app-capable' content='yes' />
            <meta name='apple-mobile-web-app-status-bar-style' content='default' />
            <meta name='apple-mobile-web-app-title' content={APP_NAME} />
            <meta name='description' content={APP_DESCRIPTION} />
            <meta name="keywords" content={KEYWORDS}></meta>
            <meta name='format-detection' content='telephone=no' />
            <meta name="nightmode" content="enable/disable"/>
            <meta name='mobile-web-app-capable' content='yes' />
            <link rel='shortcut icon' href='/favicon.ico' />
            <meta name="theme-color" content="#5E17EB" />

            <link href="assets/images/icons/75.png" rel="apple-touch-icon"/>
            <link href="assets/images/icons/96.png" rel="apple-touch-icon" sizes="96x96"/>
            <link href="assets/images/icons/128.png" rel="apple-touch-icon" sizes="128x128"/>
            <link href="assets/images/icons/152.png" rel="apple-touch-icon" sizes="152x152"/>

            <link href="https://fonts.googleapis.com/css2?family=Roboto&family=Rock+Salt&display=swap" rel="stylesheet"/>
            {/* &text=%22 */}
        </Head>
        <body className="font-sans w-screen h-screen">
            <Main />
            <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;