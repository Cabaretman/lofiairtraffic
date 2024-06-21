import React from 'react';

const SpotifyPlaylist = () => {
  return (
    <iframe
      title="Spotify Playlist"
      style={{ borderRadius: '12px' }}
      src="https://open.spotify.com/embed/playlist/2tvZAq7d8ExJE3iBi8HEvt?utm_source=generator"
      width="100%"
      height="352"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      allowFullScreen
      loading="lazy"
    />
  );
};

export default SpotifyPlaylist;
