import './App.css'
import Doctorcard from './components/Doctorcard'
import DoctorManager from './utils/DoctorManager'

function App() {
  const doctor = { id: '1', name: 'Ruperto Vespertino', experiencia: 3, especialidad: 'Cardiólogo' }

  const manager = new DoctorManager();
  manager.addDoctor({ id: 1, name: 'Ricardo García', experiencia: 10, especialidad: 'Médico General' });
  manager.addDoctor({ id: 2, name: 'Bertha Ruperta', experiencia: 30, especialidad: 'Psicóloga' });
  
  const doctores = manager.getDoctors();

  return (
    <>

      <h1 className='text-primary'>Doctores hospital</h1>
      <Doctorcard {...doctor} />

      <div>
        <h1>Gestión de Doctores</h1>
        {doctores.map((doctor) => (
          <div key={doctor.id}>
            <h3>{doctor.name}</h3>
            <p>Experiencia: {doctor.experiencia}</p>
            <p>Especialidad: {doctor.especialidad}</p>
          </div>
        ))}
      </div>

    </>
  )
}

export default App
