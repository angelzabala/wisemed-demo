import { render, screen } from '@testing-library/react';
import App from './App';

describe('Componente App', () => {
  it('debe renderizar 3 cartas y el header', () => {
    render(<App />);
    
    const patientCards = screen.getByTestId('patient-cards-container'); 

    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(patientCards.childElementCount).toBe(3);
  });
});