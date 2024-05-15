import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore, collection } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: process.env.REACT_NATIVE_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_NATIVE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_NATIVE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_NATIVE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_NATIVE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_NATIVE_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// authentication variable
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// database variable
export const db = getFirestore(app);

// document collections
export const usersRef = collection(db, 'users');
export const roomsRef = collection(db, 'rooms');
