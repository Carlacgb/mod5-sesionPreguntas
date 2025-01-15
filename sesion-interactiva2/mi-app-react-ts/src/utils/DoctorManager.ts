interface Doctor {
    id: number;
    name: string;
    experiencia: number;
    especialidad: string;
}
class DoctorManager {
    private doctors: Doctor[] = [];
    addDoctor(doctor: Doctor): void {
        this.doctors.push(doctor);
    }
    getDoctors(): Doctor[] {
        return this.doctors;
    }
}
export default DoctorManager;