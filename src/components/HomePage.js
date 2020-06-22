import React, { useEffect } from "react";
import { Store } from "../context/Store";
import axios from "axios";

import Episode from "./Episode";

import { EpisodeList } from "../elements/EpisodeList";

import searchIcon from "../images/search.svg";

import { SearchBar } from "../elements/SearchBar";

// TODO:
/**
 *
 * 1) Fix a better episode page and alos have some sort of default text and image in case there aint no summary and such for an episode
 * 1*** On EpisodePage have arrows to go to next and prevoius episode also fix fav-star there
 *
 * 2) Get Rid of scss
 *    Add the global and themeprovider
 * XXX) Make a formik thing on the about-page that you can send in
 *      That way I can use what I learn with firebase CRUD operations
 *
 *   3) watch "Build a NAVIGATION MENU using REACT and STYLED COMPONENTS" on youtube (awesome
 *     firstr 16 min is mostly relevent, actually watch the one under first its awesome
 *   4) Watch that video where the swedish guy makes video-stuff he also talks about browserRouter cool things
 * Gotta use whole episode as prop
 *
 *  5) Make a contact Page/or a comments page that sends an email/comment of the website
 *
 *   6) make the episodes load lazily+a buffer bar or roller
 *
 *   7) MAKE A <Spinner/>
 *   8) use Suspense and have a Spinner as a fallback
 *   9) make a Seperate Episode List-component
 *
 *   UDEMY COURSE STUFF
 *   Create some async action creators, and import them and use them
 *   use the async reducer from https://medium.com/@patrick.gross1987/how-to-use-the-react-context-api-with-an-asynchronous-reducer-5651c2dc26aa
 *   CREATING A SEPPERATE TEST DATABASE!!! Udemy, really important do this one
 *   The video itself is important not creating a Testdatabase
 *
 *   Async React Hooks, video is awesomemly fun, do it as practice :D
 *
 */

export default function HomePage() {
     const URL = "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
     const { state, dispatch } = React.useContext(Store);

     const [searchText, setSearchText] = React.useState("");

     useEffect(() => {
          fetchDataAction();
     }, []);

     const fetchDataAction = async () => {
          let res = await axios.get(URL);
          let data = res.data;

          dispatch({
               type: "FETCH_DATA",
               payload: data._embedded.episodes,
          });
     };

     console.log(state);

     return (
          <React.Fragment>
               <SearchBar>
                    <img src={searchIcon} alt="search icon" />
                    <input
                         value={searchText}
                         onChange={(e) => setSearchText(e.target.value)}
                         placeholder="Search for Episodes..."
                         maxLength="30"
                    />
               </SearchBar>

               <EpisodeList>
                    {state.episodes
                         .filter((episode) => episode.name.toLowerCase().includes(searchText.toLowerCase()))

                         .map((episode) => {
                              if (!episode.image) {
                                   return; // can also return loading...
                              }
                              return <Episode key={episode.id} episode={episode} />;
                         })}
               </EpisodeList>
          </React.Fragment>
     );
}
