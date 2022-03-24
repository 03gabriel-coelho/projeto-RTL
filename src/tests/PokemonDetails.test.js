import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testando o componente PokemonDetails', () => {
  const URL = '/pokemons/25';
  it('Aparece informações detalhadas do Pokémon', () => {
    const { history } = renderWithRouter(<App />);
    history.push(URL);
    const nameDetails = screen.getByText('Pikachu Details');
    expect(nameDetails).toBeInTheDocument();

    history.push('/');
    const details = screen.getByText('More details');
    expect(details).toBeInTheDocument();

    userEvent.click(details);
    expect(details).not.toBeInTheDocument();

    const summary = screen.getByRole('heading', { name: 'Summary' });
    expect(summary).toBeInTheDocument();

    const text = 'This intelligent Pokémon roasts hard berries with'
    + ' electricity to make them tender enough to eat.';
    const theText = screen.getByText(text);
    expect(theText).toBeInTheDocument();
  });

  it('Existe na página uma seção com os mapas contendo as localizações', () => {
    const { history } = renderWithRouter(<App />);
    history.push(URL);
    const locationText = screen.getByText('Game Locations of Pikachu');
    expect(locationText).toBeInTheDocument();

    const OneLocationText = screen.getByText('Kanto Viridian Forest');
    const TwoLocationText = screen.getByText('Kanto Power Plant');
    expect(OneLocationText).toBeInTheDocument();
    expect(TwoLocationText).toBeInTheDocument();

    const linkOne = 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png';
    const linkTwo = 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png';
    const alts = screen.getAllByAltText('Pikachu location');
    expect(alts[0]).toBeInTheDocument();
    expect(alts[1]).toBeInTheDocument();
    expect(alts[0]).toHaveProperty('src', linkOne);
    expect(alts[1]).toHaveProperty('src', linkTwo);
  });

  it('O usuário pode favoritar um pokémon', () => {
    const { history } = renderWithRouter(<App />);
    history.push(URL);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();

    userEvent.click(checkbox);
    const favorite = screen.getByAltText('Pikachu is marked as favorite');
    expect(favorite).toBeInTheDocument();

    userEvent.click(checkbox);
    expect(favorite).not.toBeInTheDocument();

    const label = screen.getByLabelText('Pokémon favoritado?');
    expect(label).toBeInTheDocument();
  });
});
