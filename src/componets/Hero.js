import React from 'react';
import propTypes from 'prop-types'
import styled, { css} from'styled-components';

import { breaAt, BreakpointSizes} from 'styles/Breakpoint';


const colorYellor = '#ffc107'

const Root = styled.div`
color: #fff;
padding: 100px 0;
${props => css`
  background: url(${props.imagem}), rgba(0,0,0,0.4);
  background-size:cover;
  background-position: center;
  background-blend-mode: overlay; 

`}
`;

const Content = styled.div`

p,li {
  font-size: 20px;
  font-weight: 300;

}

ul {
  list-style: none;
  padding-left: 0;
  color: white;
}
li{
    &::before {
      content: "\\2713\\0020";
      color: ${colorYellor};


    }
}
`;
const Container = styled.div`
width: 100%;
padding: 8px;

${breaAt(BreakpointSizes.md)}{
padding: 16px;
}

${breaAt(BreakpointSizes.lg)}{
padding: 0;
width:1140px;
margin: 0 auto;
}

`;
// ----------------------------css------------------------------------------


const Hero = ({imagem, children}) => (
    <Root imagem={imagem} data-testid="hero">

        <Container>
            
            <Content> {children}</Content>
           
                     
        </Container>
   
    </Root>

);

Hero.propTypes = {
  imagem: propTypes.string,
  children: propTypes.node,
}

export default Hero;


