import { useState, useEffect } from 'react'
import { supabase } from '@/utils/supabase'
import { StyleSheet, View, Alert, Text, TouchableOpacity, Image, } from 'react-native'
import { Button, Input } from '@rneui/themed'
import { Session } from '@supabase/supabase-js'

export default function Account({ session }: { session: Session }) {
    const handleSignOut = () => supabase.auth.signOut();

    return (
        <View style={styles.container}>
            <Text style={[styles.welcomeText, styles.mt20]}>CONNECT FRAME</Text>
            <Image
                style={styles.image}
                source={{
                    uri: "https://picsum.photos/seed/696/3000/2000",
                }}
            />
            <TouchableOpacity onPress={handleSignOut}>
                <Text style={styles.callToAction}>Sign Out</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: '#000',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    welcomeText: {
        fontFamily: 'SpaceMono-Regular',
        fontSize: 40,
        fontWeight: 'bold',
        color: '#FFF',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
    },
    mt20: {
        marginTop: 20,
    },
    image: {
        width: '100%',
        height: 500,
    },
    callToAction: {
        // marginTop: 20,
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        textDecorationLine: 'underline',
    },
})
