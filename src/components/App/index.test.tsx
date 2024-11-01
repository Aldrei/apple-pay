import { render, screen } from '@testing-library/react';
import App from '.';

test('renders learn react link', () => {
  render(<App message="test" />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
