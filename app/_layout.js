import { View, Text } from 'react-native';
import { Slot } from 'expo-router';
import '../global.css';

const _layout = () => {
  return (
    <View>
      <Slot />
    </View>
  );
};
