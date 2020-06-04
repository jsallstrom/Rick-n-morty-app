import React from "react";

import { Link } from "react-router-dom";

import styled, { css } from "styled-components";

const StyledNavbar = styled.nav`
     display: flex;
     flex-direction: row;
     padding: 20px;
     align-items: center;
     margin-bottom: 10px;

     /*This part is to make the Navbar Sticky and on top */
     position: sticky;
     top: 0;
     background: white;
     z-index: 10;

     @media (max-width: 786px) {
          /*When the max width of the window is 786px or less we are in mobile mode :D */

          flex-direction: column;
          /*Just make the navlinks sit on top of each other */
     }
`;

const NavBrand = styled(Link)`
     flex-grow: 1;
     font-size: 24px;
     font-weight: 700;
     color: black;
     text-decoration: none;
`;

const NavItems = styled.ul`
     list-style: none;
     /*padding-inline-start: 0;*/
     display: flex;
     align-items: center;
`;

const NavItem = styled(Link)`
     margin-right: 20px;
     cursor: pointer;

     color: black;
     text-decoration: none;

     transition: 250ms;

     &:hover {
          transform: scale(1.05); /*This just makes the nav item slightly bigger to show its hovered over */
     }
`;

const NavLink = styled(NavItem)`
     padding: 10px 10px;
     border: none;
     border-radius: 5px;
     cursor: pointer;
     border: 1px solid #663399;

     ${(props) =>
          props.primary &&
          css`
               background: #663399;
               color: white;
          `}
`;

export default function NavBar() {
     return (
          <StyledNavbar>
               <NavBrand to="/">Rick n Morty</NavBrand>
               <NavItems>
                    <NavLink to="/">Home</NavLink>

                    <NavLink to="/favourites">Favourites</NavLink>
                    <NavLink primary="true" to="/about">
                         About
                    </NavLink>
               </NavItems>
          </StyledNavbar>
     );
}
