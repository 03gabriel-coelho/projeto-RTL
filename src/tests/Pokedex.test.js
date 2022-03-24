import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testando o componente Pokedex', () => {
  it('A página contém um heading com o texto "Encountered pokémons"', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/');
    const head = screen.getByRole('heading', { name: 'Encountered pokémons' });
    expect(head).toBeInTheDocument();
  });

  it('É exibido o próximo Pokémon da lista ao clicar no botão "Próximo pokémon"', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/');

    const button = screen.getByRole('button', { name: 'Próximo pokémon' });
    expect(button).toBeInTheDocument();

    userEvent.click(button);
    const charmander = screen.getByText('Charmander');
    expect(charmander).toBeInTheDocument();

    userEvent.click(button);
    const caterpie = screen.getByText('Caterpie');
    expect(caterpie).toBeInTheDocument();

    userEvent.click(button);
    const ekans = screen.getByText('Ekans');
    expect(ekans).toBeInTheDocument();

    userEvent.click(button);
    const alakazan = screen.getByText('Alakazam');
    expect(alakazan).toBeInTheDocument();

    userEvent.click(button);
    const mew = screen.getByText('Mew');
    expect(mew).toBeInTheDocument();

    userEvent.click(button);
    const rapidash = screen.getByText('Rapidash');
    expect(rapidash).toBeInTheDocument();

    userEvent.click(button);
    const snorlax = screen.getByText('Snorlax');
    expect(snorlax).toBeInTheDocument();

    userEvent.click(button);
    const dragonair = screen.getByText('Dragonair');
    expect(dragonair).toBeInTheDocument();

    userEvent.click(button);
    const pikachu = screen.getByText('Pikachu');
    expect(pikachu).toBeInTheDocument();
  });

  it('É renderizado um pokémon por vez', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/');

    const button = screen.getByRole('button', { name: 'Próximo pokémon' });
    expect(button).toBeInTheDocument();

    userEvent.click(button);
    const image = screen.getAllByRole('img');
    expect(image).toHaveLength(1);

    userEvent.click(button);
    expect(image).toHaveLength(1);

    userEvent.click(button);
    expect(image).toHaveLength(1);

    userEvent.click(button);
    expect(image).toHaveLength(1);

    userEvent.click(button);
    expect(image).toHaveLength(1);

    userEvent.click(button);
    expect(image).toHaveLength(1);

    userEvent.click(button);
    expect(image).toHaveLength(1);

    userEvent.click(button);
    expect(image).toHaveLength(1);

    userEvent.click(button);
    expect(image).toHaveLength(1);
  });

  it('A Pokédex tem os botões de filtro', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/');

    const buttonsType = screen.queryAllByTestId('pokemon-type-button');
    const numbetButt = 7;
    expect(buttonsType).toHaveLength(numbetButt);

    expect(buttonsType[0]).toHaveTextContent('Electric');
    userEvent.click(buttonsType[0]);
    const type = screen.getByTestId('pokemon-type');
    expect(type).toHaveTextContent('Electric');

    const allbuttons = screen.getAllByRole('button');
    expect(allbuttons[0]).toHaveTextContent('All');
  });

  it('A Pokédex contém um botão para resetar o filtro', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/');

    const button = screen.queryAllByTestId('pokemon-type-button');
    expect(button[0]).toHaveTextContent('Electric');
    userEvent.click(button[0]);

    const allbuttons = screen.getAllByRole('button');
    expect(allbuttons[0]).toHaveTextContent('All');
    userEvent.click(allbuttons[0]);

    const text = screen.getByText('Pikachu');
    expect(text).toBeInTheDocument();
  });
});
