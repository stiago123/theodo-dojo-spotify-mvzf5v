import { SavedTrack } from 'spotify-types'; 

const apiToken = 'BQDHRlJuhikEIvCjwao31mfbxIanBDvKkzVMxnAesbBig64CRit4gkN3fl6J_PBwUlr_VRwEpmR9ehckX8drAXJe8CF1mfCgMH5Kxb3JWQSEXaSvviL7iqPzg_scToe-P4MeW0M7iWEmbtlFhRI-H6miOhACx0g59f1QXGcYNwVHS1z9z6kT86oJj7Sfb7OOI49WSRWY';
 

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