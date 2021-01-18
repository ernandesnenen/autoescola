import React from 'react';

import Hero from './Hero';
import bgcard from '../stories/assets/bg-car.jpg';
import bgCarRepair from '../stories/assets/bg-car-repair.jpg'
import Heading from './Heading';

import {text} from '@storybook/addon-knobs';


export default  {
    title: "componet/Hero",
    component: Hero
}

export const  Hero_v1 = () => (
<Hero imagem={bgCarRepair}>
    <Heading>
    <h1>{text("Title"," Ganhe sua liberdade para ir e vir")}</h1>
    </Heading>
    <p>{text("Text", "Lorem ipsum dolor sit amet consectetur adipisicing elit.")}</p>
   
</Hero>
)



export const  Hero_v2= () => ( 
<Hero imagem={bgcard}>
<Heading>
<h1>
    {text('Title',)}Ganhe sua <strong>liberdade</strong><br /> para ir e vir
</h1>
</Heading>
        <ul>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        </ul>
</Hero>
)


