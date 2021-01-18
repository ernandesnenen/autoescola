import React from 'react'
import Hero from './Hero'
import { render } from '@testing-library/react';

test('Hero render with children', ()=> {

  
       const component = render(
            <Hero>
                <p>children</p>
            </Hero>
        );
     
        expect(component.getByText("children")).toBeInTheDocument();
    
})

test('Hero render with image', ()=> {

    const image = "http://test/Imagem.jpg"
    const {getByTestId} = render(<Hero imagem={image} />
             
     );
  
     expect(getByTestId("hero")).toHaveStyleRule({
        backgroundImage:image,
     })
 
})

