import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView
} from 'react-native';
import {
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { COLORS } from '../../../constants/theme';
import Header from '../../../components/commonheader';

const AccountsScreen = () => {
  const t = (key) => key;

  return (
    <SafeAreaView style={styles.container}>
      <Header searchIconShown={false}/>

      <View style={styles.content}>
        <Text style={styles.messageText}>
          {t('Accounts Feature')}
        </Text>
        <Text style={styles.subMessageText}>
          {t('To Be Developed Soon')}
        </Text>
        <Text style={styles.icon}>
          🛠️
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: wp('8%'),
  },
  messageText: {
    fontSize: wp('6%'),
    fontWeight: '700',
    color: COLORS.text.primary,
    marginBottom: wp('2%'),
    textAlign: 'center',
  },
  subMessageText: {
    fontSize: wp('4%'),
    fontWeight: '500',
    color: COLORS.text.secondary,
    textAlign: 'center',
    marginBottom: wp('8%'),
  },
  icon: {
    fontSize: wp('15%'),
  }
});

export default AccountsScreen;