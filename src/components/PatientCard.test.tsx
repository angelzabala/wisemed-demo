import { render, screen, fireEvent } from '@testing-library/react';
import PatientCard, { Patient } from './PatientCard';

const mockPatient: Patient = {
  id: 1,
  picture: "/little_girl.jpg",
  name: "Lorencia Lopez",
  age: 8,
  diagnose: "Diabetes infantil tipo 2",
  link: "#"
};

describe('PatientCard', () => {

  it('rendereizar la información de las cartas correctamente', () => {
    render(<PatientCard {...mockPatient} />);

    expect(screen.getByTestId("card-1")).toBeInTheDocument();
    expect(screen.getByTestId("card-1-img")).toHaveAttribute('src', mockPatient.picture);
    expect(screen.getByTestId("card-1-title").innerHTML).toBe(`${mockPatient.name} (${mockPatient.age})`);
    expect(screen.getByTestId("card-1-content").textContent).toBe(`Diagnóstico: ${mockPatient.diagnose}`);
    expect(screen.getByTestId("card-1-button")).toBeInTheDocument();
  });

  it('debe llamar a una función para abrir el link que lleva a más detalles', () => {
    const mockWindowOpen = jest.fn();
    jest.spyOn(window, 'open').mockImplementation(mockWindowOpen); // Mock window.open

    render(<PatientCard {...mockPatient} />);

    fireEvent.click(screen.getByTestId('card-1-button'));

    expect(mockWindowOpen).toHaveBeenCalledWith(mockPatient.link, '_blank', "noopener");
  });
});

