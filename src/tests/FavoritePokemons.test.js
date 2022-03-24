import React from 'react';
import { render, screen } from '@testing-library/react';
import FavoritePokemons from '../components/FavoritePokemons';

describe('Teste do componente FavoritePokemons', () => {
  it('É exibido na tela a mensagem "No favorite pokemon found"'
  + 'se não tiver pokémons favoritos',
  () => {
    render(<FavoritePokemons />);
    const text = screen.getByText('No favorite pokemon found');
    expect(text).toBeInTheDocument();
  });

  it('É exibido todos os cards de pokémons favoritados', () => {
  });
});
