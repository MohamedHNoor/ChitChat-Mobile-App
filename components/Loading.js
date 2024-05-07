import { View, Text } from 'react-native';
import LottieView from 'lottie-react-native';

const Loading = ({ size }) => {
  return (
    <View style={{ height: size, aspectRatio: 1 }}>
      <LottieView
        source={require('../assets/images/loading.json')}
        autoPlay
        loop
        style={{ flex: 1 }}
      />
    </View>
  );
};
export default Loading;
