import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import SubscribeCard from 'react-native-subscribe-card';

const {width: ScreenWidth} = Dimensions.get('screen');

const App = () => {
  const ContinueButton = () => (
    <View
      style={{
        flex: 1,
        marginBottom: 16,
        justifyContent: 'flex-end',
      }}>
      <TouchableOpacity
        style={{
          height: 50,
          borderRadius: 12,
          width: ScreenWidth * 0.9,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#805bfa',
          shadowRadius: 12,
          shadowOpacity: 0.5,
          shadowColor: '#805bfa',
          shadowOffset: {
            width: 0,
            height: 3,
          },
        }}>
        <Text style={{color: '#fff', fontFamily: 'Roboto-Bold'}}>Continue</Text>
      </TouchableOpacity>
    </View>
  );

  const HeaderContainer = () => (
    <View style={{width: '80%', marginTop: '20%'}}>
      <Text
        style={{
          textAlign: 'center',
          color: '#fff',
          fontSize: 32,
          fontFamily: 'Roboto-Bold',
        }}>
        Pricing Plan
      </Text>
      <View style={{marginTop: 24}}>
        <Text
          style={{
            color: '#fff',
            lineHeight: 18,
            textAlign: 'center',
            fontFamily: 'Roboto-Medium',
          }}>
          Choose a subscription plan to unlock all the functionality of the
          application
        </Text>
      </View>
    </View>
  );

  const Plans = () => (
    <View
      style={{height: '45%', marginTop: 64, justifyContent: 'space-evenly'}}>
      <SubscribeCard
        title="Unlimited plan"
        descriptionPrice="$124"
        description=" billed Unlimited plan"
        currency="$"
        price={8}
        timePostfix="/mo"
        isSelected
        discountText="Save 90%"
        onPress={() => {}}
      />
      <SubscribeCard
        title="1 year plan"
        descriptionPrice="$224"
        description=" billed every year"
        currency="$"
        price={12}
        timePostfix="/mo"
        onPress={() => {}}
      />
      <SubscribeCard
        title="Montlyh Plan"
        currency="$"
        price={19}
        timePostfix="/mo"
        onPress={() => {}}
      />
    </View>
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#202020',
        alignItems: 'center',
      }}>
      <StatusBar barStyle="light-content" />
      <HeaderContainer />
      <Plans />
      <ContinueButton />
    </SafeAreaView>
  );
};

export default App;
