import { View, Text } from 'react-native';
import { Slot, useRouter, useSegments } from 'expo-router';
import '../global.css';
import { AuthContextProvider, useAuth } from '../context/authContext';
import { useEffect } from 'react';

const MainLayout = () => {
  const { isAuthenticated } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    // check if user is authenticated or not
    if (typeof isAuthenticated === 'undefined') return;
    const inApp = segments[0] === '(app)';

    if (isAuthenticated && !inApp) {
      // redirect to home
      router.replace('home');
    } else if (isAuthenticated === false) {
      // redirect to signIn
      router.replace('signIn');
    }
  }, [isAuthenticated]);

  return <Slot />;
};

const RootLayout = () => {
  return (
    <AuthContextProvider>
      <MainLayout />
    </AuthContextProvider>
  );
};

export default RootLayout;
