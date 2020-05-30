import { MysticalProvider } from 'mystical';
import PropTypes from 'prop-types';
import theme from '../lib/theme';

const App = ({ Component, pageProps, cache }) => {
  return (
    <MysticalProvider theme={theme} cache={cache}>
      <Component {...pageProps} />
    </MysticalProvider>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object,
  cache: PropTypes.object,
};

export default App;
