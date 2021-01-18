import React from 'react'
import Heading from './Heading'
import { render } from '@testing-library/react';

test('Heading snapshot', ()=> {

  
       const {asFragment} = render(<Heading>title</Heading>);
     
        expect(asFragment()).toMatchSnapshot();
    
});
