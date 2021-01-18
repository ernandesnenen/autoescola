import React from 'react'
import {addDecorator, addParameters} from '@storybook/react'

import GlobalStyle from './../src/styles/GlobalStyle'


addDecorator(storyFn => (
  <>
  <GlobalStyle />
  {storyFn()}
  </>
));


 const viewports={
   extraSmoll: {
    name:"portrait phone", 
    styles: {
      width: '360px',
      height: '640px',
    },
  },
  smoll: {
    name:"landscape phone", 
    styles: {
      width: '640px',
      height: '360px',
    },
  },
  medium: {
    name:"table", 
    styles: {
      width: '768px',
      height: '1024px',
    },
  },

  large: {
    name:"desktop ", 
    styles: {
      width: '1024px',
      height: '1366px',
    },
  },

  extraLarge: {
    name:"desktop large", 
    styles: {
      width: '1280px',
      height: '800px',
    },
  },

 }
addParameters({
  viewport :{
    viewports
  }

});
