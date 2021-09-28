import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import ThemeProvider from '../context/ThemeProvider';

describe('App component', () => {
  it('renders App', async () => {
    const { container } = render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    );

    const ul = await screen.findByRole('character-list', { name: 'Character' });
    expect(ul).not.toBeEmptyDOMElement;
    expect(container).toMatchSnapshot();
  });

  it('changes the toggle for light/dark', async () => {
    render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    );
    const button = screen.getByRole('button');

    fireEvent.change(button, { target: { value: 'black' } });
    expect(button.value).toBe('black');
  });
});
