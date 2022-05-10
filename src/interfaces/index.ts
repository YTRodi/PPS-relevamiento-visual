import { Timestamp } from 'firebase/firestore';

interface Photo {
  id?: string;
  author: {
    id: string;
    email: string;
  };
  url: string;
  votes: number;
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
}

export { Photo };
