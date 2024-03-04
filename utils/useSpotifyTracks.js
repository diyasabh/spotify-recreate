import { useState, useEffect } from "react";
import getEnv from "./env";

import { getMyTopTracks, getAlbumTracks } from "./apiOptions";

const { ALBUM_ID } = getEnv();

const useSpotifyTracks = (token) => {
  const [tracks, setTracks] = useState(null);

  useEffect(() => {
    if (!token) return; // If there's no token, there's nothing to do

    const fetchTopTracks = async () => {
      try {
        // Call a function that gets the user's top tracks
        let trackData = await getMyTopTracks(token);
        console.log("User's Top Track Data:", trackData);

        setTracks(trackData); // Update state with the fetched track data
      } catch (error) {
        console.error("Error fetching user's top tracks: ", error);
        setTracks(null); // In case of an error, reset the tracks state
      }
    };

    fetchTopTracks(); // Execute the fetch operation
  }, [token]); // This effect depends on the token, and will re-run when the token changes

  return tracks;
};

// const useSpotifyTracks = (token) => {
//   const [tracks, setTracks] = useState(null);
//   useEffect(() => {
//     if (!token) return;
//     const fetchedTracks = async () => {
//       let trackData = await getMyTopTracks(token);
//       setTracks(trackData);
//     };
//     // await getMyTopTracks(token);
//     fetchedTracks();
//     // if (token) {
//     //   getMyTopTracks(token).then((fetchedTracks) => {
//     //     setTracks(fetchedTracks);
//     //   });
//     // } else {
//     //   setTracks(null);
//     // }
//   }, [token]);
//   console.log(tracks);
//   return tracks;
// };

//LATEST BEFORE THIS WITH ALBUM ID
// const useSpotifyTracks = (token) => {
//   const [tracks, setTracks] = useState(null);

//   useEffect(() => {
//     if (!token) return;
//     const fetchTracks = async () => {
//       try {
//         let trackData = ALBUM_ID
//           ? await getAlbumTracks(ALBUM_ID, token)
//           : await getMyTopTracks(token);
//         console.log("Track Data:", trackData);

//         setTracks(trackData);
//       } catch (error) {
//         console.error("Error fetching tracks: ", error);
//         setTracks(null);
//       }
//     };
//     fetchTracks();
//   }, [token]);

//   return tracks;
// };

export default useSpotifyTracks;
