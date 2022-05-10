import { initializeApp } from 'firebase/app';
import {
  AuthError,
  AuthErrorCodes,
  User as firebaseUser,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

interface User extends firebaseUser {}
interface AuthProps {
  email: string;
  password: string;
}

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBpcxG1kRjyJDyqShVOaJDZgSNuSB5RM2w',
  authDomain: 'pps-relevamiento-visual.firebaseapp.com',
  projectId: 'pps-relevamiento-visual',
  storageBucket: 'pps-relevamiento-visual.appspot.com',
  messagingSenderId: '47927555016',
  appId: '1:47927555016:web:1450ad36ee364bfb9306fd',
  measurementId: 'G-1ZT4X4KH7Y',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

function getCurrentUser() {
  return new Promise<User | null>((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      user => {
        unsubscribe();
        resolve(user);
      },
      reject
    );
  });
}

function login({ email, password }: AuthProps) {
  return signInWithEmailAndPassword(auth, email, password);
}

function register({ email, password }: AuthProps) {
  return createUserWithEmailAndPassword(auth, email, password);
}

function logout() {
  return signOut(auth);
}

export {
  app,
  db,
  AuthError,
  AuthErrorCodes,
  User,
  AuthProps,
  getCurrentUser,
  login,
  register,
  logout,
};
