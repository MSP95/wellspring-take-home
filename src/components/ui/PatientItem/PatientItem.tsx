import { Patient } from "../../../utils/api";
import Pill, { PillType } from "../Pill/Pill";
import "./styles.css";

const VISIT_STATUS_PILL_TYPE: Record<string, PillType> = {
  "Visit completed": "primary",
  "Missing documentation": "warning",
  "Started training": "success",
};

function PatientItem({ patient }: { patient: Patient }) {
  return (
    <div className="patient">
      <div className="col">
        <div className="patient-name">{patient.patientName}</div>
        <div className="patient-caregiver-name">{patient.caregiverName}</div>
      </div>
      <div className="col">
        <Pill
          label={patient.visitStatus}
          size="sm"
          type={VISIT_STATUS_PILL_TYPE[patient.visitStatus]}
        />
      </div>
    </div>
  );
}

export default PatientItem;
