import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
const Home = () => {
  return (
    <View className='flex-1 justify-center items-center min-h-full '>
      <Text className='text-red-500 text-3xl'>Home</Text>
      <StatusBar />
    </View>
  );
};
export default Home;
