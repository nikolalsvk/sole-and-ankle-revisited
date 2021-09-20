/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <DialogOverlayStyled>
      <Wrapper>
        <DialogContentStyled>
          <Button onClick={onDismiss}>
            <VisuallyHidden>Dismiss menu</VisuallyHidden>
            <Icon id="close" />
          </Button>
          <Side />

          <Nav>
            <a className="active" href="/sale">
              Sale
            </a>
            <a href="/new">New&nbsp;Releases</a>
            <a href="/men">Men</a>
            <a href="/women">Women</a>
            <a href="/kids">Kids</a>
            <a href="/collections">Collections</a>
          </Nav>

          <FooterWrapper>
            <Footer>
              <a href="/terms">Terms and Conditions</a>
              <a href="/privacy">Privacy Policy</a>
              <a href="/contact">Contact Us</a>
            </Footer>
          </FooterWrapper>
        </DialogContentStyled>
      </Wrapper>
    </DialogOverlayStyled>
  );
};

const DialogOverlayStyled = styled(DialogOverlay)``;

const Wrapper = styled.div`
  background: hsla(220, 5%, 40%, 0.8);
  height: 100%;
  width: 100%;

  position: absolute;
  top: 0;
  right: 0;
`;

const DialogContentStyled = styled(DialogContent)`
  background: var(--color-white);
  position: absolute;
  width: 70%;
  height: 100%;
  top: 0;
  right: 0;
  padding-left: 32px;
  padding-bottom: 32px;
  padding-top: 32px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Button = styled(UnstyledButton)`
  margin-bottom: auto;
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 28px;
  margin-right: 18px;
  padding: 4px;
`;

const Side = styled.div`
  flex: 1;
`;

const FooterWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 22px;
  flex-direction: column;

  a {
    font-size: ${18 / 16}rem;
    font-weight: var(--weight-medium);
    text-transform: uppercase;
    color: black;
    text-decoration: none;
  }

  .active {
    color: var(--color-secondary);
  }
`;

const Footer = styled.footer`
  display: flex;
  gap: 14px;
  flex-direction: column;

  a {
    font-size: ${14 / 16}rem;
    color: var(--color-gray-700);
    text-decoration: none;
  }
`;

export default MobileMenu;
