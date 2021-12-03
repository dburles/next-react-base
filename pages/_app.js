import MysticalProvider from "mystical/public/MysticalProvider.js";
import PropTypes from "prop-types";
import theme from "../lib/theme";

function App({ Component, pageProps }) {
  return (
    <MysticalProvider theme={theme}>
      <Component {...pageProps} />
    </MysticalProvider>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object,
};

export default App;
