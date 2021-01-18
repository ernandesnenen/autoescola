import React from 'react'
import GlobalStyle from './GlobalStyle'
import { render } from '@testing-library/react';

test('GlobalStyle snapshot', ()=> {

  
       render(<GlobalStyle />);
     
        expect(document.head).toMatchSnapshot();
    
});
