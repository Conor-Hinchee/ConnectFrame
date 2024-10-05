import { useState } from 'react'
import { supabase } from '@/utils/supabase'
import { StyleSheet, View, Alert, Text, TouchableOpacity, Image, ImageBackground } from 'react-native'
import { Dialog, SpeedDial } from '@rneui/themed'

import { Session } from '@supabase/supabase-js'
import CallToAction from '@/components/CallToAction'
import Header from './Header'
import MenuButton from './MenuButton'

export default function SlideShow({ previewMode }: { previewMode: boolean }) {
    const [visible1, setVisible1] = useState(false);
    // const handleSignOut = () => supabase.auth.signOut();


    const toggleDialog1 = () => {
        setVisible1(!visible1);
    };


    const image = { uri: 'https://picsum.photos/seed/696/3000/2000' };

    return (

        <SpeedDial
            isOpen={visible1}
            icon={{ name: 'menu', color: '#fff' }}
            openIcon={{ name: 'close', color: '#fff' }}
            onOpen={() => setVisible1(!visible1)}
            onClose={() => setVisible1(!visible1)}
        >
            <SpeedDial.Action
                icon={{ name: 'home', color: '#fff' }}
                title="Home"
                onPress={() => console.log('Delete Something')}
            />
            <SpeedDial.Action
                icon={{ name: 'play-circle-outline', color: '#fff' }}
                title="Play"
                onPress={() => console.log('Delete Something')}
            />

        </SpeedDial>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    welcomeText: {
        color: 'white',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
    },
    mt20: {
        marginTop: 20,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    callToAction: {
        // marginTop: 20,
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        textDecorationLine: 'underline',
    },
})
