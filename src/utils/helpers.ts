export const getWeekRange = (date: Date): { start: Date; end: Date } => {
  const currentDate = new Date(date);
  const dayOfWeek = currentDate.getDay();
  const startDate = new Date(currentDate);
  startDate.setDate(currentDate.getDate() - dayOfWeek);
  const endDate = new Date(currentDate);
  endDate.setDate(currentDate.getDate() + (6 - dayOfWeek));

  return {
    start: startDate,
    end: endDate,
  };
};
