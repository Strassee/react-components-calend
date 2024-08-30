import { render, screen } from '@testing-library/react';
import App from './App';

test('screen text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Пн/i);
  expect(linkElement).toBeInTheDocument();
});
