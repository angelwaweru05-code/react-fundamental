import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('filters products by category', () => {
  render(<App />);

  const electronicsButton = screen.getByText('Electronics');
  fireEvent.click(electronicsButton);

  const productTitle = screen.getByText('Laptop');
  expect(productTitle).toBeInTheDocument();
});