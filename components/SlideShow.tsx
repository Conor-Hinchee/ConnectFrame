import { useState } from 'react'
import { supabase } from '@/utils/supabase'
import { StyleSheet, View, Alert, Text, TouchableOpacity, Image, ImageBackground } from 'react-native'
import { Dialog } from '@rneui/themed'
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
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>

                {previewMode &&
                    <Text style={[styles.welcomeText, styles.mt20]}>Preview</Text>
                }

                <TouchableOpacity onPress={toggleDialog1}>
                    <Text style={[styles.welcomeText, styles.mt20]}>Preview</Text>
                    <MenuButton toggleDialog1={toggleDialog1} />
                </TouchableOpacity>

                <Dialog
                    isVisible={visible1}
                    onBackdropPress={toggleDialog1}
                >
                    <Text>Dialog body text. Add relevant information here.</Text>
                </Dialog>


            </ImageBackground>

        </View>
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
