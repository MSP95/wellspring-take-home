import Header from "../../components/ui/Header/Header";
import Card from "../../components/ui/Card/Card";
import "./styles.css";
import { Patient, getAllPatients } from "../../utils/api";
import { useLoaderData } from "react-router-dom";
import PatientItem from "../../components/ui/PatientItem/PatientItem";

interface LoaderProps {
  allPatients: Patient[];
}

export async function loader() {
  const allPatients = await getAllPatients();
  return { allPatients };
}

function Patients() {
  const { allPatients } = useLoaderData() as LoaderProps;
  return (
    <div className="patients">
      <Header className="patients-header">All Patients</Header>
      <div className="patients-content">
        <Card className="patients-card" title="All Patients">
          <div className="all-patients-list">
            {allPatients.map((patient) => (
              <PatientItem key={patient.id} patient={patient} />
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Patients;
