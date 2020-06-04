import React from "react";

import { Store } from "../context/Store";

import Episode from "./Episode";

import { EpisodeList } from "../elements/EpisodeList";

export default function FavPage() {
     const { state } = React.useContext(Store);
     console.log(state.favourites);

     return (
          <React.Fragment>
               <p>Fav's Page!</p>

               <EpisodeList>
                    {state.favourites.map((episode) => {
                         if (!episode.image) {
                              return; // can also return loading...
                         }
                         return <Episode key={episode.id} episode={episode}></Episode>;
                    })}
               </EpisodeList>
          </React.Fragment>
     );
}
