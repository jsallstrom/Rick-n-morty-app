import React from "react";
import { Store } from "../context/Store";

import Star from "../images/star.svg";
import Star_empty from "../images/star_empty.svg";

import { Link } from "react-router-dom";

import styled from "styled-components";

const EpisodeLink = styled(Link)`
     text-decoration: none;
     color: black;
`;

const Container = styled.div`
     display: flex;
     flex-direction: column;
     min-width: 0;
     max-width: 250px;
     word-wrap: break-word;
     background-color: #fff;
     background-clip: border-box; /* here you chose how much of the box will be filled */
     border: 1px solid rgba(0, 0, 0, 0.125);
     border-radius: 0.25rem;

     overflow: hidden; /*overflow: scroll; Adds a scrollbar if text overflows, this one just doesnt show */

     /* do hover effect here*/
     &:hover {
          transition: transform 1s;
          transform: translateY(-5px);
     }
`;

const EpisodeTitle = styled.h1`
     font-size: 2rem;
     font-weight: bold;
     margin: 0;
`;

const EpisodeBody = styled.div`
     display: flex;
     flex-direction: column;
     flex: 1 1 auto; /**flex: is a shorthand for flex-grow flex-shrink */
     min-height: 1px;
     padding: 1.25rem;
`;

const EpisodeImage = styled.img`
     width: 100%;
`;

const EpisodeText = styled.p`
     line-height: 25px;
     color: #6c757d;
`;

const StarImg = styled.img`
     width: 30px;
     height: 30px;
     cursor: pointer;
     margin: auto;
`;

export default function Episode({ episode }) {
     const { id, image, name, season, number } = episode;

     const { state, dispatch } = React.useContext(Store);

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

     return (
          <Container>
               <EpisodeLink to={`/episode/${id}`}>
                    <EpisodeImage src={image.medium} alt={`Rick n morty ${name}`}></EpisodeImage>
               </EpisodeLink>
               <EpisodeBody>
                    <EpisodeLink to={`/episode/${id}`}>
                         <EpisodeTitle>{name}</EpisodeTitle>

                         <EpisodeText>
                              Season: {season} Episode: {number}
                         </EpisodeText>
                    </EpisodeLink>

                    {state.favourites.find((fav) => fav.id === id) ? (
                         <StarImg src={Star} onClick={() => toggleFavAction(episode)}></StarImg>
                    ) : (
                         <StarImg src={Star_empty} onClick={() => toggleFavAction(episode)}></StarImg>
                    )}
               </EpisodeBody>
          </Container>
     );
}
