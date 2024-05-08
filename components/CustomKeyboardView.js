import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

const ios = Platform.OS == 'ios';

const CustomKeyboardView = ({ children }) => {
  return (
    <KeyboardAvoidingView
      behavior={ios ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView
        style={{ flex: 1 }}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default CustomKeyboardView;
