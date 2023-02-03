import { render, screen } from '@testing-library/react';
import App from './App';

// The below statement will fail the test case.

// import { render } from './custom-render';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
