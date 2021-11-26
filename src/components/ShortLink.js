import * as React from 'react';
import axios from 'axios';
import { Button, TextField } from '@mui/material';
import { ShortenedLinkContext } from '../App';
import './shortLink.css';

const ShortLink = () => {
  const [longUrl, setLongUrl] = React.useState('');
  const [submitError, setSubmitError] = React.useState(false);
  const { updateShortenedLinks } = React.useContext(ShortenedLinkContext);

  const handleSubmit = async () => {
    setSubmitError(false);

    if (!longUrl) {
      setSubmitError(true);
      return;
    }

    const res = await axios.get(
      `https://api.shrtco.de/v2/shorten?url=${longUrl}`
    );
    const newLinkData = {
      originalLink: res.data.result.original_link,
      shortLink: res.data.result.short_link,
    };
    updateShortenedLinks(newLinkData);

    setLongUrl('');
  };

  return (
    <div>
      {submitError ? (
        <p className="error">Please enter a URL to shorten </p>
      ) : null}
      <div className="search-container">
        <input
          variant="outlined"
          value={longUrl}
          placeholder="Enter Url"
          onChange={(e) => setLongUrl(e.target.value)}
          className="url-input"
        />
        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{ ml: 10, mt: 5 }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default ShortLink;
