import { render, screen } from '@testing-library/react';
import App from '../App';
import { test } from 'vitest';

test('renders a component', () => {
  render(<App />);
  const linkElement = screen.getByText(/hello world/1);

expect(linkElement).toBeInTheDocument();

});