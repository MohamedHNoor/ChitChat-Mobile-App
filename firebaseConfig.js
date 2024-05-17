import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore, collection } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

console.log('apiKey', process.env.apiKey);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// authentication variable
export const Auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// database variable
export const db = getFirestore(app);

// users
export const usersRef = collection(db, 'users');
// rooms
export const roomsRef = collection(db, 'rooms');
