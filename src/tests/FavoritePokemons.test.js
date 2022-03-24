import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FavoritePokemons from '../components/FavoritePokemons';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste do componente FavoritePokemons', () => {
  it('É exibido na tela a mensagem "No favorite pokemon found"'
  + 'se não tiver pokémons favoritos',
  () => {
    render(<FavoritePokemons />);
    const text = screen.getByText('No favorite pokemon found');
    expect(text).toBeInTheDocument();
  });

  it('É exibido todos os cards de pokémons favoritados', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/pokemons/25');
    const box = screen.getByRole('checkbox');
    userEvent.click(box);

    history.push('/favorites');
    const NotFavorite = screen.getByText('More details');
    expect(NotFavorite).toBeInTheDocument();
  });
});
