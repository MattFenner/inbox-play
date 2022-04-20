import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Page Title', () => {
  render(<App />);
  var titleEl = screen.getByText('Inbox');
  expect(titleEl).toBeInTheDocument();
});
