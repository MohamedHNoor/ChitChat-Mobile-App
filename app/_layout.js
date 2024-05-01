import { View, Text } from 'react-native';
import { Slot } from 'expo-router';
import '../global.css';

const _layout = () => {
  return (
    <View className='flex-1'>
      <Slot />
    </View>
  );
};
