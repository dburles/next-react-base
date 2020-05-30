import { createCache } from 'mystical';
import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const cache = createCache();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () => {
      return originalRenderPage({
        enhanceApp(App) {
          // eslint-disable-next-line react/display-name
          return (props) => {
            return <App {...props} cache={cache} />;
          };
        },
      });
    };

    const initialProps = await Document.getInitialProps(ctx);
    const { css, identifiers } = cache.getServerStyles();
    return { css, identifiers, ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <script id="__mystical__" data-identifiers={this.props.identifiers} />
          {this.props.css.map(({ id, rules }) => {
            return (
              <style key={id} dangerouslySetInnerHTML={{ __html: rules }} />
            );
          })}
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
