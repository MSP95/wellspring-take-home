export interface Patient {
  id: number;
  patientName: string;
  caregiverName: string;
  visitStatus: string;
  lastCheckIn: number;
}

export interface Appointment {
  id: number;
  time: string;
  appointmentType: string;
  patientName: string;
  appointmentName: string;
  appointmentDate: string;
  appointmentDescription: string;
}

export async function getRecentPatients(): Promise<Patient[]> {
  try {
    return await fetch("/api/patients").then((res) => res.json());
  } catch (e: unknown) {
    console.error("Error fetching recent patients", e);
    return [];
  }
}

export async function getAllPatients(): Promise<Patient[]> {
  try {
    return await fetch("/api/patients/all").then((res) => res.json());
  } catch (e: unknown) {
    console.error("Error fetching all patients", e);
    return [];
  }
}

export async function getUpcomingVisits(): Promise<Appointment[]> {
  try {
    return await fetch("/api/appointments").then((res) => res.json());
  } catch (e: unknown) {
    console.error("Error fetching appointments", e);
    return [];
  }
}
