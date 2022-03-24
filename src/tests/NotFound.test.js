import React from 'react';
import { screen, render } from '@testing-library/react';
import NotFound from '../components/NotFound';

describe('Teste do componente NotFound', () => {
  it('A págica contém um h2 com o texto Page requested not found 😭', () => {
    render(<NotFound />);
    const head = screen.getByText('Page requested not found');
    const emoji = screen.getByLabelText('Crying emoji');
    expect(head).toBeInTheDocument();
    expect(emoji).toBeInTheDocument();
  });

  it('A página contém uma imagem', () => {
    render(<NotFound />);
    const link = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    const image = screen
      .getByAltText('Pikachu crying because the page requested was not found');
    expect(image).toHaveProperty('src', link);
  });
});
