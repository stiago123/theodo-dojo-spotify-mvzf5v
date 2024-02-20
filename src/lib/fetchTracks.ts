import { SavedTrack } from 'spotify-types'; 

const apiToken = 'BQDfAZg8yOKsEU7lL8rNnDIL2fSoyHhUf2KrpAFGumre6Q1_0Oj-w_ExnGcIcRJGcawIWHM2YUzFudHHB8ch7FxM8qGOl1Z6d6dA0Zq0qUgp9Ccga19C0fi2mTTYwqp_II5Z4NzcDqHLjhnTZY3p9I1W4Qv0Kk_e2FyH1Aa0rWkmr3wapwoycLSc9sJBuZ2BcZLqg0zy  ';
 

export const fetchTracks = async () : Promise<SavedTrack[]> => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
     throw new Error(`Fetching tracks failed with status ${response.status}`)
   }
  const data = await response.json() as { items: SavedTrack[] };

  return data.items;
};