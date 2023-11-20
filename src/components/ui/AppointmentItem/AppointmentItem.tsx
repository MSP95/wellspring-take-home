import { Appointment } from "../../../utils/api";
import "./styles.css";

const ACCENT_COLORS: Record<string, string> = {
  Telehealth: "blue",
  "In-person": "purple",
};

function AppointmentItem({ appointment }: { appointment: Appointment }) {
  const accentColor = ACCENT_COLORS[appointment.appointmentType] || "";

  return (
    <div className="appointment">
      <div
        className={"col appointment-time-type " + accentColor}
        data-type={appointment.appointmentType}
      >
        <div className="appointment-time">{appointment.time}</div>
        <div className="appointment-type">{appointment.appointmentType}</div>
      </div>
      <div className="col appointment-patient-name-desc">
        <div className="appointment-patient-name">
          PAT: {appointment.patientName}
        </div>
        <div className="appointment-desc">
          {appointment.appointmentDescription}
        </div>
      </div>
      <div className="col appointment-kebab-menu">
        <span className="appointment-kebab" />
      </div>
    </div>
  );
}

export default AppointmentItem;
