import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

export default function Index() {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    // Listens to changes on the auth state
    const subscriber = auth().onAuthStateChanged((userState) => setUser(userState));
    return subscriber; // unsubscribe on unmount
  }, []);

  return <View>{!user ? <Text>Hello</Text> : <Text>Hi</Text>}</View>;
}
