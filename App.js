import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, Button } from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'


const HomeScreen = ({navigation}) => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category='h1'>Home Screen</Text>
    <Button onPress={()=> navigation.navigate('Test')}>Go to Test Screen</Button>
  </Layout>
);

const TestScreen = ({navigation}) => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category='h1'>Test Screen</Text>
    <Button onPress={()=> navigation.navigate('Home')}>Go to Test Screen</Button>
  </Layout>
);



const Stack = createNativeStackNavigator();

export default () => (
  <NavigationContainer>
    <ApplicationProvider {...eva} theme={eva.light}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Test" component={TestScreen} />
      </Stack.Navigator>
    </ApplicationProvider>
  </NavigationContainer>
);