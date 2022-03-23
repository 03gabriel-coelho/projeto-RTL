import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Teste do componente App', () => {
  it('O topo da aplicação contém um conjunto fixo de links de navegação', () => {
    renderWithRouter(<App />);
    const homeLink = screen.getByRole('link', { name: 'Home' });
    const AboutLink = screen.getByRole('link', { name: 'About' });
    const FavoritePokemonLink = screen.getByRole('link', { name: 'Favorite Pokémons' });
    expect(homeLink).toBeInTheDocument();
    expect(AboutLink).toBeInTheDocument();
    expect(FavoritePokemonLink).toBeInTheDocument();
  });

  it('Ao clicar no link "Home", é redirecionado a URL "/"', () => {
    const { history } = renderWithRouter(<App />);
    const homeLink = screen.getByRole('link', { name: 'Home' });
    expect(homeLink).toBeInTheDocument();
    userEvent.click(homeLink);

    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });

  it('Ao clicar no link "About", é redirecionado a URL "/about"', () => {
    const { history } = renderWithRouter(<App />);
    const AboutLink = screen.getByRole('link', { name: 'About' });
    expect(AboutLink).toBeInTheDocument();
    userEvent.click(AboutLink);

    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  });

  it('Ao clicar no link "Pokémons Favoritados", é redirecionado a URL "/favorites"',
    () => {
      const { history } = renderWithRouter(<App />);
      const FavoriteLink = screen.getByRole('link', { name: 'Favorite Pokémons' });
      expect(FavoriteLink).toBeInTheDocument();
      userEvent.click(FavoriteLink);

      const { pathname } = history.location;
      expect(pathname).toBe('/favorites');
    });

  it('colocar alguma URL desconhecida, é redirecionado para a página NotFount', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/teste');
    const NotFoundTitle = screen.getByText('Page requested not found');
    expect(NotFoundTitle).toBeInTheDocument();
  });
});
