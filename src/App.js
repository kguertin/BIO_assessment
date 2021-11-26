import * as React from 'react';
import './App.css';
import Main from './views/main';

export const ShortenedLinkContext = React.createContext();
function App() {
  const [shortenedLinks, setShortenedLinks] = React.useState([]);

  const updateShortenedLinks = (newLink) => {
    const updatedLinks = [...shortenedLinks, newLink];
    setShortenedLinks(updatedLinks);
  };

  const storeLinkData = () => {
    localStorage.setItem('shortened-links', JSON.stringify(shortenedLinks));
  };

  React.useEffect(() => {
    if (localStorage.getItem('shortened-links')) {
      setShortenedLinks(JSON.parse(localStorage.getItem('shortened-links')));
    } else {
      localStorage.setItem('shortened-links', JSON.stringify([]));
    }
  }, []);

  React.useEffect(() => {
    storeLinkData();
  }, [shortenedLinks]);

  return (
    <ShortenedLinkContext.Provider
      value={{ shortenedLinks, updateShortenedLinks, storeLinkData }}
    >
      <Main />;
    </ShortenedLinkContext.Provider>
  );
}

export default App;
