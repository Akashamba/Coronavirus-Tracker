import React from 'react';
import image from '../../assets/modi.jpg'; 

const Donate = () => (
    <div>
        <h2><img id="modi" src={image} alt="Indian Prime Minister Narendra Modi" />Donate</h2>
        <q id="pmcares">PM-CARES fund is aimed at strengthening the fight against COVID-19. It will further availability of quality treatment and encourage research on ways to beat Coronavirus. I urge people from all walks of life to contribute to PM-CARES. Together, let's solve challenges of the present and protect the future.</q>
        <a href="https://www.pmcares.gov.in/en/#" rel="noreferrer" target="_blank" id="donate-link">Donate to PM CARES</a>
    </div>
)

export default Donate;