import React from 'react';
import PatientCard, { Patient } from "./components/PatientCard";

const App: React.FC = () => {
    const patients: Patient[] = [
        {
            id: 1,
            picture: "/little_girl.jpg",
            name: "Lorencia Lopez",
            age: 8,
            diagnose: "Diabetes infantil tipo 2",
            link: "#"
        },
        {
            id: 2,
            picture: "/woman.jpg",
            name: "Luna Lujares",
            age: 30,
            diagnose: "Coronavirus e insuficiencia pulmonar",
            link: "#"
        },
        {
            id: 3,
            picture: "/man.jpg",
            name: "Ramón Ramirez",
            age: 36,
            diagnose: "Hipertensión arterial",
            link: "#"
        },
    ]
    return (
        <div id="app-container" className="is-fullheight">
            <header data-testid="header" className="has-background-dark has-text-white-ter mb-6 p-5" style={{borderBottom: "1px solid gray"}}>
                <h2><strong>Wisemed Demo</strong></h2>
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

