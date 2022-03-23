import React from 'react';
import { screen, render } from '@testing-library/react';
import About from '../components/About';

describe('Teste do componente About', () => {
  it('A página contém as informações sobre a Pokédex', () => {
    render(<About />);
    const information = (
      'This application simulates a Pokédex,'
        + ' a digital encyclopedia containing all Pokémons'
    );
    const informationContent = screen.getByText(information);
    expect(informationContent).toBeInTheDocument();
  });

  it('A página contém um h2 com o texto "About Pokédex"', () => {
    render(<About />);
    const head = screen.getByRole('heading', { name: 'About Pokédex' });
    expect(head).toBeInTheDocument();
  });

  it('A página contém dois parágrafos com o texto sobre a Pokédex', () => {
    render(<About />);
    const informationOne = (
      'This application simulates a Pokédex,'
          + ' a digital encyclopedia containing all Pokémons'
    );
    const informationTwo = (
      'One can filter Pokémons by type, and see more details for each one of them'
    );
    const contentOne = screen.getByText(informationOne);
    const contentTwo = screen.getByText(informationTwo);

    expect(contentOne).toBeInTheDocument();
    expect(contentTwo).toBeInTheDocument();
  });

  it('A página contém uma imagem de uma Pokédex', () => {
    render(<About />);
    const link = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    const image = screen.getByRole('img');
    expect(image).toHaveProperty('src', link);
  });
});
