/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const App = () => {

  GoogleSignin.configure({
    webClientId: '650687240354-vttutbvig06ltlorp7otnhl5gl4jsr6p.apps.googleusercontent.com',
  });

  const signInWithGoogleAsync = async () => {

    //Get user ID
    const { idToken } = await GoogleSignin.signIn();

    // Create Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    //Sign in with the credential
    const user_sign_in = auth().signInWithCredential(googleCredential);

    user_sign_in.then((user)=>{

      console.log(user);
    }   
    )

    .catch((error)=>{

      console.log(error);
    }
    
    )


  }

 
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Button
        title='Sign in with Google'
        onPress={signInWithGoogleAsync}
      />


    </View>
  );
};


export default App;
