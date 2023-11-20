import Header from "../../components/ui/Header/Header";
import "./styles.css";
import {
  Appointment,
  Patient,
  getRecentPatients,
  getUpcomingVisits,
} from "../../utils/api";
import { useLoaderData } from "react-router-dom";
import UpcomingVisits from "./UpcomingVisits";
import RecentPatients from "./RecentPatients";

interface LoaderProps {
  recentPatients: Patient[];
  upcomingVisits: Appointment[];
}

export async function loader() {
  const [recentPatients, upcomingVisits] = await Promise.all([
    getRecentPatients(),
    getUpcomingVisits(),
  ]);
  return { recentPatients, upcomingVisits };
}

function Home() {
  const { recentPatients, upcomingVisits } = useLoaderData() as LoaderProps;
  return (
    <div className="home">
      <Header className="home-header">Good afternoon, Meredith!</Header>
      <div className="home-content">
        <RecentPatients recentPatients={recentPatients} />
        <UpcomingVisits upcomingVisits={upcomingVisits} />
      </div>
    </div>
  );
}

export default Home;
