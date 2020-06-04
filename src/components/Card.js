import React from "react";

import styled from "styled-components";

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
     box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
     overflow: hidden; /*overflow: scroll; Adds a scrollbar if text overflows, this one just doesnt show */
`;

const CardBody = styled.div`
     display: flex;
     flex-direction: column;
     flex: 1 1 auto; /**flex: is a shorthand for flex-grow flex-shrink */
     min-height: 1px;
     padding: 1.25rem;
`;

const CardTitle = styled.h1`
     font-size: 1.25rem;
     font-weight: bold;
     margin: 0;
`;

const CardText = styled.p`
     line-height: 25px;
     color: #6c757d;
`;

const CardImage = styled.img`
     width: 100%;
`;

const CardButton = styled.button`
     cursor: pointer;
     margin-top: auto;
     width: 100%;
     color: #fff;
     background-color: #28a745;
     border-color: #28a745;
     display: block;
     font-weight: bold;
     text-align: center;
     user-select: none; /* so with this the user can select the text inside the button*/
     border: 1px solid transparent;
     padding: 0.375rem 0.75rem;
     font-size: 1rem;
     line-height: 1.5; /*Line-height is the vertical distance between lines of text, spacing */
     border-radius: 0.25rem;
     transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

     &:hover {
          color: #fff;
          background-color: #218838;
          border-color: #1e7e34;
     }
`;

export default function Card({ id, image, name, summary }) {
     return (
          <Container key={id}>
               <CardImage src={image}></CardImage>
               <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <CardText>{summary}</CardText>
                    <CardButton>Click me!</CardButton>
               </CardBody>
          </Container>
     );
}
