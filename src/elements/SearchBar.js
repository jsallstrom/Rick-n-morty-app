import styled from "styled-components";

export const SearchBar = styled.div`
     display: flex;
     flex-direction: row;
     margin: auto;

     height: 48px;
     width: 350px;
     position: relative;

     /*Any input inside SearchBar these rules will apply (Nested Css)*/

     input {
          height: 48px;
          width: 350px;
          padding: 0 64px;
          border-radius: 100px;
          border: 1px solid black;
          font-size: 14px;
          outline: none;
          color: black;
          overflow: auto;
          &::placeholder {
               /*Placeholder is the text inside the input */
               color: #818181;
               /*#818181 === grey */
          }
     }

     /*Any image inside SearchBar these rules will apply (Nested Css)*/
     img {
          position: absolute;
          top: 50%;
          left: 24px;
          transform: translateY(-50%);
          z-index: 10;
          width: 16px;
          height: 16px;
     }
`;
