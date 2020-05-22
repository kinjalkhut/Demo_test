import { StyleSheet, I18nManager } from 'react-native';
const isRTL = I18nManager.isRTL
export default StyleSheet.create({
  inputContainer: {
    backgroundColor: 'transparent',
  },

  input: {
    top: 2,
    padding: 0,
    margin: 0,
    flex: 1,
  },

  row: {
    flexDirection: isRTL ? 'row-reverse' : 'row',
  },

  flex: {
    flex: 1,
  },

  accessory: {
    top: 2,
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
});
