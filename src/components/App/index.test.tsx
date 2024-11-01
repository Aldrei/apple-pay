import { render } from '@testing-library/react';
import App from './index';

describe('App component', () => {
  it('renders text param for link', () => {
    const screen = render(<App message="test" />);
    const el = screen.getByText(/test/i);

    expect(el).toBeInTheDocument();
    expect(screen.baseElement).toMatchSnapshot();
  });
});
