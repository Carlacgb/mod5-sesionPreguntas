type ID = string | number;
interface Doctor {
    id: ID;
    name: 'Felipe';
    experiencia: number;
    especialidad: string;
}

const Doctorcard: React.FC<Doctor> = ({ id, name, experiencia, especialidad }) => {
    return (
        <div className="card">
            <h3 className="card-title">{name}</h3>
            <p className="card-text">ID: {id}</p>
            <p>Experiecia: {experiencia}</p>
            <p>Especialidad: {especialidad}</p>
        </div>
    );
};
export default Doctorcard;