import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders react logo', () => {
    render(<App />);
    const linkElement = screen.getByAltText(/logo/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders list of animals', () => {
    render(<App />);
    const dogItem = screen.getByText(/dog/i);
    expect(dogItem).toBeVisible();
    const catItem = screen.getByText(/cat/i);
    expect(catItem).toBeVisible();
    const birdItem = screen.getByText(/parakeet/i);
    expect(birdItem).toBeVisible();
});
