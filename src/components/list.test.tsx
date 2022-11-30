import { render, screen } from '@testing-library/react';
import List from "./list";

test('renders list of animals', () => {
    render(<List />);
    const dogItem = screen.getByText(/dog/i);
    expect(dogItem).toBeVisible();
    const catItem = screen.getByText(/cat/i);
    expect(catItem).toBeVisible();
    const birdItem = screen.getByText(/parakeet/i);
    expect(birdItem).toBeVisible();
});
