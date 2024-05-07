import { StatusBar } from 'expo-status-bar';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
  Alert,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Octicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import Loading from '../components/Loading';
import CustomKeyboardView from '../components/CustomKeyboardView';

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter('');
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const usernameRef = useRef('');
  const profileRef = useRef('');

  const handleRegister = async () => {
    if (
      !emailRef.current ||
      !passwordRef.current ||
      !usernameRef.current ||
      !profileRef.current
    ) {
      Alert.alert('Sign Up', 'Please fill in all the fields!');
      return;
    }

    // register process
  };
  return (
    <CustomKeyboardView>
      <StatusBar style='dark' />
      <View
        className='flex-1 gap-12'
        style={{ paddingHorizontal: wp(5), paddingTop: hp(7) }}
      >
        {/* signin image */}
        <View className='items-center'>
          <Image
            source={require('../assets/images/register.png')}
            style={{ height: hp(20) }}
            resizeMode='contain'
          />
        </View>
        <View className='gap-10'>
          <Text
            style={{ fontSize: hp(4) }}
            className='font-bold tracking-wider text-center text-neutral-800'
          >
            Register
          </Text>
          {/* inputs */}
          <View className='gap-4'>
            <View
              className='flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl'
              style={{ height: hp(7) }}
            >
              <Feather name='user' size={hp(2.7)} color='gray' />
              <TextInput
                style={{ fontSize: hp(2) }}
                className='flex-1 font-semibold text-neutral-700'
                placeholder='Username'
                placeholderTextColor={'gray'}
                onChangeText={(value) => (usernameRef.current = value)}
              />
            </View>
            <View
              className='flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl'
              style={{ height: hp(7) }}
            >
              <Octicons name='mail' size={hp(2.7)} color='gray' />
              <TextInput
                style={{ fontSize: hp(2) }}
                className='flex-1 font-semibold text-neutral-700'
                placeholder='Email address'
                placeholderTextColor={'gray'}
                onChangeText={(value) => (emailRef.current = value)}
              />
            </View>

            {/* password */}
            <View
              className='flex-row gap-4 px-4 bg-neutral-100 items-center rounded-2xl'
              style={{ height: hp(7) }}
            >
              <Octicons name='lock' size={hp(2.7)} color='gray' />
              <TextInput
                style={{ fontSize: hp(2) }}
                className='flex-1 font-semibold text-neutral-700'
                placeholder='password'
                placeholderTextColor={'gray'}
                secureTextEntry
                onChangeText={(value) => (passwordRef.current = value)}
              />
            </View>
            <View
              className='flex-row gap-4 px-4 bg-neutral-100 items-center rounded-2xl'
              style={{ height: hp(7) }}
            >
              <Feather name='image' size={hp(2.7)} color='gray' />
              <TextInput
                style={{ fontSize: hp(2) }}
                className='flex-1 font-semibold text-neutral-700'
                placeholder='Profile url'
                placeholderTextColor={'gray'}
                onChangeText={(value) => (profileRef.current = value)}
              />
            </View>

            {/* submit button */}
            <View>
              {loading ? (
                <View className='flex-row justify-center'>
                  <Loading size={hp(6)} />
                </View>
              ) : (
                <TouchableOpacity
                  className='bg-indigo-500 justify-center items-center rounded-xl'
                  style={{ height: hp(6) }}
                  onPress={handleRegister}
                >
                  <Text
                    className='text-white font-bold tracking-wider'
                    style={{ fontSize: hp(2.5) }}
                  >
                    Sign Up
                  </Text>
                </TouchableOpacity>
              )}
            </View>

            {/* Sign Up text */}
            <View className='flex-row justify-center'>
              <Text
                style={{ fontSize: hp(1.8) }}
                className='font-semibold text-neutral-500'
              >
                Already have an account?
              </Text>
              <Pressable onPress={() => router.push('signIn')}>
                <Text
                  style={{ fontSize: hp(1.8) }}
                  className='font-bold text-indigo-500'
                >
                  {' '}
                  Sign In
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </CustomKeyboardView>
  );
};
export default SignUp;
