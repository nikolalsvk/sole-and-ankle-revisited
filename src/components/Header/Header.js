import React from "react";
import styled from "styled-components/macro";

import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import Icon from "../Icon";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeaderWrapper>
        <SuperHeader />
      </SuperHeaderWrapper>
      <MainHeader>
        <Side>
          <Logo />
        </Side>

        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
          <NavLink href="/collections">Collections</NavLink>
          <NavLink href="/collections">Collections</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>

        <Side />

        <MobileNav>
          <Icon id="shopping-bag" />
          <Icon id="search" />
          <Icon id="menu" onClick={() => setShowMobileMenu(true)} />
        </MobileNav>

        <MobileMenu />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid var(--color-gray-300);

  @media ${(props) => props.theme.queries.tabletAndUp} {
    align-items: baseline;
  }
`;

const SuperHeaderWrapper = styled.div`
  border-top: 4px solid var(--color-gray-900);

  @media ${(props) => props.theme.queries.tabletAndUp} {
    border-top: none;
  }
`;

const Nav = styled.nav`
  gap: clamp(1rem, 12vw - 9rem, 3rem);
  margin: 0px 48px;
  display: none;

  @media ${(props) => props.theme.queries.tabletAndUp} {
    display: flex;
  }
`;

const MobileNav = styled.nav`
  display: flex;
  gap: clamp(${22 / 16}rem, 5vw - 1rem, ${40 / 16}rem);
  margin-left: 24px;

  @media ${(props) => props.theme.queries.tabletAndUp} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--weight-medium);
  flex: 1 1;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

export default Header;
