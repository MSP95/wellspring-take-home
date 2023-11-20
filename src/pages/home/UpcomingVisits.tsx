import { MouseEventHandler, useEffect, useState } from "react";
import AppointmentItem from "../../components/ui/AppointmentItem/AppointmentItem";
import Card from "../../components/ui/Card/Card";
import { Appointment } from "../../utils/api";
import { getWeekRange } from "../../utils/helpers";
import Pill from "../../components/ui/Pill/Pill";

interface Filter {
  label: string;
  id: "TODAY" | "TOMORROW" | "WEEK";
  filter: (value: Date, now: Date) => boolean;
}

const FILTERS: Filter[] = [
  {
    label: "Today",
    id: "TODAY",
    filter(value: Date, now: Date) {
      return value.getDate() === now.getDate();
    },
  },
  {
    label: "Tomorrow",
    id: "TOMORROW",
    filter(value: Date, now: Date) {
      const tomorrow = new Date(now);
      tomorrow.setDate(tomorrow.getDate() + 1);
      return value.getDate() === tomorrow.getDate();
    },
  },
  {
    label: "This week",
    id: "WEEK",
    filter(value: Date, now: Date) {
      const { start, end } = getWeekRange(now);
      return value >= start && value <= end;
    },
  },
];

const filterVisits = (upcomingVisits: Appointment[], filter: Filter) => {
  const now = new Date();
  return upcomingVisits.filter((v) =>
    filter.filter(new Date(v.appointmentDate), now)
  );
};

function UpcomingVisits({ upcomingVisits }: { upcomingVisits: Appointment[] }) {
  const [filteredVisits, setFilteredVisits] = useState(() =>
    filterVisits(upcomingVisits, FILTERS[0])
  );
  const [activeFilter, setActiveFilter] = useState(FILTERS[0].id);

  const handleClick = (filter: Filter) => {
    if (activeFilter === filter.id) return;
    setActiveFilter(filter.id);
    setFilteredVisits(() => filterVisits(upcomingVisits, filter));
  };

  return (
    <Card className="home-card" title="Upcoming visits">
      <div className="filters">
        {FILTERS.map((filter) => (
          <Pill
            key={filter.id}
            size="md"
            className="pill-filter"
            label={filter.label}
            type={activeFilter === filter.id ? "info" : "primary"}
            onClick={() => handleClick(filter)}
          />
        ))}
      </div>
      <div className="appointment-list">
        {filteredVisits.map((appointment) => (
          <AppointmentItem key={appointment.id} appointment={appointment} />
        ))}
      </div>
    </Card>
  );
}

export default UpcomingVisits;
