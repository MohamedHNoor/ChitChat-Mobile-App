import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore, collection } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAKCokMjt15E0Rlz_f_4TBgXldnNUw438Q',
  authDomain: 'chitchat-b091c.firebaseapp.com',
  projectId: 'chitchat-b091c',
  storageBucket: 'chitchat-b091c.appspot.com',
  messagingSenderId: '587874385889',
  appId: '1:587874385889:web:73c6370545a473e45adca0',
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
