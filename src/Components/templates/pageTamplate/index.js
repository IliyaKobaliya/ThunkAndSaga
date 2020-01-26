import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3.60rem;
  min-height: 100vh;
  box-sizing: border-box;
  @media screen and (max-width: 640px) {
    padding-top: 3.25rem;
  }
`;

const Header = styled.header`
background:black;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
`;

const Content = styled.section`
  width: 100%;
  display:flex;
  margin: 1rem auto;
`;

const Footer = styled.footer`
background:black;
  margin-top: auto;
`;

export const PageTemplate = ({header, children, footer, ...props}) => {
    return (
        <Wrapper {...props}>
            <Header>{header}</Header>
            <Content>{children}</Content>
            <Footer>{footer}</Footer>
        </Wrapper>
    )
};

PageTemplate.propTypes = {
    header: PropTypes.node.isRequired,
    footer: PropTypes.node.isRequired,
    children: PropTypes.any.isRequired,
};