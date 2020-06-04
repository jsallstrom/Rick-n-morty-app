import React from "react";
import { Store } from "../context/Store";

import Star from "../images/star.svg";
import Star_empty from "../images/star_empty.svg";

// In here the best bet is to pass the id we get passed down here to the store
// and get the episode that way

export default function EpisodePage(props) {
     const episodeId = props.match.params.id;
     const { state, dispatch } = React.useContext(Store);
     //                                                   ONLY 2 == NOT 3 ===, it willnot work, you only need number
     const episode = state.episodes.find((episode) => episode.id == episodeId);

     let cleanSummary = episode.summary.replace("<p>", ""); // Summary is filled with unneccissary <p>-tags
     cleanSummary = cleanSummary.replace("</p>", "");

     const toggleFavAction = (episode) => {
          const isEpisodeInFav = state.favourites.includes(episode);

          if (isEpisodeInFav) {
               return dispatch({
                    type: "REMOVE_FAV",
                    payload: episode,
               });
          }
          // if the episode is already a favourite, unfavourite
          // else add it to favourites
          return dispatch({
               type: "ADD_FAV",
               payload: episode,
          });
     };

     console.log(state);
     return (
          <div>
               <h1>{episode.name}</h1>{" "}
               <div>
                    {state.favourites.find((fav) => fav.id === episode.id) ? (
                         <img src={Star} onClick={() => toggleFavAction(episode)}></img>
                    ) : (
                         <img src={Star_empty} onClick={() => toggleFavAction(episode)}></img>
                    )}
               </div>
               <img src={episode.image.medium} alt={`Rick and Morty ${episode.name}`}></img>
               <h3>
                    Season: {episode.season} Episode: {episode.number}
               </h3>
               <h4>First aired: {episode.airdate}</h4>
               {cleanSummary}
               <p>Runtime: {episode.airtime}</p>
          </div>
     );
}
