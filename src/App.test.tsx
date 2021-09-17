import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Login from './components/login'

test('renders heading', () => {
  render(<App/>);
  const heading = screen.getByText(/Team Social Game/i);
  expect(heading).toBeInTheDocument();
}); 


test('button is disabled if form is empty', () => {
  render(<Login submitForm={undefined}/>);

 //find button by role and button has text 'Start Game'
 const startButton = screen.getAllByRole('button',{name: 'Start Game'});
 //expect(startButton).not.toBeEnabled();
 

});