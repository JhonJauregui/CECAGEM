// pages/_app.js
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  // Usar el layout definido en la página, o renderizar la página directamente
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
