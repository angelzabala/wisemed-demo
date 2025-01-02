import React from 'react';
import PatientCard, { Patient } from "./components/PatientCard";

const App: React.FC = () => {
    const patients: Patient[] = [
        {
            id: 1,
            picture: "/little_girl.jpg",
            name: "Lorencia Lopez",
            age: 8,
            diagnose: "Diabetes mellitus tipo 2. Paciente pediátrico con sobrepeso. Presentó aumento de sed y micción frecuente.",
            link: "#"
        },
        {
            id: 2,
            picture: "/woman.jpg",
            name: "Luna Lujares",
            age: 30,
            diagnose: "Coronavirus e insuficiencia pulmonar. diagnosticada hace 2 semanas en el triaje de emergencia, se aconseja uso de tapabocas.",
            link: "#"
        },
        {
            id: 3,
            picture: "/man.jpg",
            name: "Ramón Ramirez",
            age: 36,
            diagnose: "Hipertensión arterial. Paciente presentó cefalea y mareos. Toma de presión arterial: 160/100 mmHg.",
            link: "#"
        },
    ]
    return (
        <div id="app-container" className="is-fullheight">
            <header data-testid="header" className="has-background-primary has-background-white-light has-text-white-ter mb-6 p-5">
                <h2><strong  className="has-text-black is-size-3 has-text-weight-bold">Wisemed Demo</strong></h2>
            </header>

            <div className="container fixed-grid has-1-cols-mobile has-2-cols-desktop has-3-cols-widescreen has-3-cols-fullhd has-gap px-4">
                <div className='grid' data-testid="patient-cards-container">
                    {patients.map(patient => <PatientCard key={patient.id} {...patient} />)}
                </div>
            </div>

        </div>
    )
}

export default App;

