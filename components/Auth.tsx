import React, { useState } from 'react'
import { Alert, StyleSheet, Text, View, AppState, TouchableOpacity } from 'react-native'
import { supabase } from '../utils/supabase'
import { LinearGradient } from 'expo-linear-gradient';
import { BottomSheet, Button, ListItem, Input } from '@rneui/themed';
import { AntDesign } from '@expo/vector-icons';


// Tells Supabase Auth to continuously refresh the session automatically if
// the app is in the foreground. When this is added, you will continue to receive
// `onAuthStateChange` events with the `TOKEN_REFRESHED` or `SIGNED_OUT` event
// if the user's session is terminated. This should only be registered once.
AppState.addEventListener('change', (state) => {
    if (state === 'active') {
        supabase.auth.startAutoRefresh()
    } else {
        supabase.auth.stopAutoRefresh()
    }
})

export default function Auth() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
    const [activeForm, setActiveForm] = useState('login');

    async function signInWithEmail() {
        setLoading(true)
        const { error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });
        // // console.log(email, password);

        console.log(email, password);
        // console.log(supabase.auth.signInWithPassword)

        // TODO HANDLE ERROR
        if (error) Alert.alert(error.message)
        setLoading(false)
    }

    async function signUpWithEmail() {
        setLoading(true)
        const {
            data: { session },
            error,
        } = await supabase.auth.signUp({
            email: email,
            password: password,
        })

        // TODO HANDLE ERROR
        if (error) Alert.alert(error.message)
        if (!session) Alert.alert('Please check your inbox for email verification!')
        setLoading(false)
    }

    const toggleBottomSheet = () => {
        setIsBottomSheetOpen(!isBottomSheetOpen);
    };

    const handleLogInRequest = () => {
        setActiveForm('login');
        toggleBottomSheet();
    }

    const handleResetRequest = () => {
        setActiveForm('reset');
        toggleBottomSheet();
    }

    return (
        <View style={styles.container}>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                colors={['#1E3A8A', '#1D4ED8', '#9333EA', '#7C3AED']}
                style={styles.linearGradient}
            >
                <Text style={[styles.welcomeText, styles.mt20]}>CONNECT FRAME</Text>

                <View style={[styles.verticalSpacing, styles.mt20, styles.centered]}>
                    {/* <Button title="Log In To Get Started" disabled={loading} onPress={openBottomSheet} /> */}
                    <TouchableOpacity onPress={handleLogInRequest}>
                        <Text style={styles.callToAction}>Log In To Get Started</Text>
                    </TouchableOpacity>

                    {/* <Button title="Reset Password" disabled={loading} onPress={openBottomSheet} /> */}
                    <TouchableOpacity onPress={handleResetRequest}>
                        <Text style={styles.callToAction}>Reset Password</Text>
                    </TouchableOpacity>
                </View>
                <BottomSheet modalProps={{}} isVisible={isBottomSheetOpen}>
                    <View style={styles.bottomSheet}>
                        <TouchableOpacity onPress={toggleBottomSheet} style={styles.closeButton}>
                            <AntDesign name="closecircleo" size={24} color="black" />
                        </TouchableOpacity>
                        <View style={[styles.verticalSpacing, styles.mt20]}>
                            <Input
                                label="Email"
                                leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                                onChangeText={(text) => setEmail(text)}
                                value={email}
                                placeholder="email@address.com"
                                autoCapitalize={'none'}
                            />
                        </View>
                        {activeForm === 'login' && (
                            <View style={styles.verticalSpacing}>
                                <Input
                                    label="Password"
                                    leftIcon={{ type: 'font-awesome', name: 'lock' }}
                                    onChangeText={(text) => setPassword(text)}
                                    value={password}
                                    secureTextEntry={true}
                                    placeholder="Password"
                                    autoCapitalize={'none'}
                                />
                            </View>
                        )}

                        <View style={[styles.verticalSpacing, styles.mt20]}>
                            <Button title={activeForm === 'login' ? 'Log In' : 'Reset Password'} disabled={loading} onPress={signInWithEmail} />
                        </View>
                    </View>
                </BottomSheet>
            </LinearGradient>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    linearGradient: {
        alignItems: 'center',
        borderRadius: 5,
        height: 800,
        width: '100%',
    },
    welcomeText: {
        fontFamily: 'SpaceMono-Regular',
        fontSize: 40,
        fontWeight: 'bold',
        color: '#FFF',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
    },
    centered: {
        marginTop: 200,
    },
    callToAction: {
        marginTop: 20,
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        textDecorationLine: 'underline',
    },
    closeButton: {
        alignSelf: 'flex-end',
        width: 48,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
    },
    verticalSpacing: {
        paddingTop: 4,
        paddingBottom: 4,
    },
    mt20: {
        marginTop: 20,
    },
    bottomSheet: {
        backgroundColor: 'white',
        padding: 16
    }
})
