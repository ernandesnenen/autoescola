import React from 'react'
import {breaAt, BreakpointSizes} from './Breakpoint';
import { render } from '@testing-library/react';

test.each([
    [BreakpointSizes.sm],
    [BreakpointSizes.md],
    [BreakpointSizes.lg],
    [BreakpointSizes.xl],    

])('breakponit %ipx ', (size)=> {
     
        expect(breaAt(size)).toEqual( `@media (min-width: ${size}px)`);
    
});
