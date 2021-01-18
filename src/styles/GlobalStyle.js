
import { createGlobalStyle } from 'styled-components';
import{ breaAt, BreakpointSizes} from './Breakpoint';

const GlobalStyle = createGlobalStyle`

html {
font-family: "Poppins", sans-serif;
font-weight: 300;
font-size: 100%;
box-sizing: border-box;

}
*, *:before, *:after{

    box-sizing: inherit;

}
body {
   margin: 0;
   padding: 0;
}

h1, h2, h3, h4, h5, h6{
    line-height: 1.3;
    font-weight:700;
    letter-spacing: 2px;

    strong{
    color:#ffc107;
    }
}

h1{
    font-size:2.5rem;
    ${breaAt(BreakpointSizes.lg)}{
    font-size:3.75rem;

    }
}
h2{
    font-size:2rem;
    ${breaAt(BreakpointSizes.lg)}{
    font-size:3.125rem;
    }
}
h3{
    font-size:1.9rem;
    ${breaAt(BreakpointSizes.lg)}{
    font-size:2.5rem;
    }
    
}
h4{
    font-size:1.3rem;
    font-weight:700;
    ${breaAt(BreakpointSizes.lg)}{
    font-size:2.125rem;
    }
}
h5{
    font-size:1.2rem;
    font-weight:700;
    ${breaAt(BreakpointSizes.lg)}{
    font-size:1.5rem;
    }
}
h6{
    font-size:1.1rem;
    font-weight:700;
    ${breaAt(BreakpointSizes.lg)}{
    font-size:1.25rem;
}
}
`;
export default GlobalStyle;
