import { format } from "date-fns";

export const formatDate = (date: string | Date) => {
  return format(date, "EEE d MMM HH:mm (O)");
};
