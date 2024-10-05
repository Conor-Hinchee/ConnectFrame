import { useState } from 'react'
import { supabase } from '@/utils/supabase'
import { StyleSheet, View, Alert, Text, TouchableOpacity, Image, ImageBackground } from 'react-native'
import { Dialog, SpeedDial } from '@rneui/themed'

import { Session } from '@supabase/supabase-js'
import CallToAction from '@/components/CallToAction'
import Header from './Header'
import MenuButton from './MenuButton'

export default function AdminPanel() {


    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Admin Panel</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    welcomeText: {
        color: 'black',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})
