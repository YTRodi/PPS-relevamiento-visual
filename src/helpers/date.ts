import { Timestamp } from 'firebase/firestore';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

// eslint-disable-next-line no-unused-vars
enum FormatEnum {
  // eslint-disable-next-line no-unused-vars
  HUMAN_DATE = 'hh:mm',
}

function formatTimestamp(timestamp: Timestamp) {
  return format(timestamp.toDate(), "HH:mm'hr' - d 'de' MMMM yyyy", {
    locale: es,
  });
}

export { formatTimestamp };
