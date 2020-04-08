import PropTypes from 'prop-types';
import { ThemeProvider } from 'theme-ui';
import theme from '../lib/theme';

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object,
};

export default App;
