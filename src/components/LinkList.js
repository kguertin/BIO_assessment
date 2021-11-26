import { Button } from '@mui/material';
import * as React from 'react';
import { ShortenedLinkContext } from '../App';
import './linkList.css';

const LinkList = () => {
  const { shortenedLinks } = React.useContext(ShortenedLinkContext);
  const [copyStatus, setCopyStatus] = React.useState(false);

  const handleCopy = async (shortUrl) => {
    setCopyStatus(true);
    await navigator.clipboard.writeText(shortUrl);
    setTimeout(() => setCopyStatus(false), 3000);
  };

  return (
    <div className="link-container">
      <p className="copied">{copyStatus ? 'Link Copied!' : ''}</p>
      {shortenedLinks
        ? shortenedLinks.map((link) => {
            return (
              <div className="link-item-container">
                <p className="link-item">{link.originalLink}</p>
                <p className="link-item">{link.shortLink}</p>
                <Button onClick={() => handleCopy(link.shortLink)}>Copy</Button>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default LinkList;
