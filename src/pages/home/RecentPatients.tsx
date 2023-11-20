import { Link } from "react-router-dom";
import Card from "../../components/ui/Card/Card";
import PatientItem from "../../components/ui/PatientItem/PatientItem";
import { Patient } from "../../utils/api";

function RecentPatients({ recentPatients }: { recentPatients: Patient[] }) {
  return (
    <Card
      className="home-card"
      title="Recent Patients"
      rightContent={
        <Link className="view-all-link" to={"/patients"}>
          View all
        </Link>
      }
    >
      <div className="recent-patient-list">
        {recentPatients.map((patient) => (
          <PatientItem key={patient.id} patient={patient} />
        ))}
      </div>
    </Card>
  );
}

export default RecentPatients;
