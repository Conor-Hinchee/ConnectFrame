import React from 'react';
import { FAB } from '@rneui/themed';
import { StyleSheet, View, Alert, Text, TouchableOpacity, Image, ImageBackground } from 'react-native'

export default ({ toggleDialog1 }: { toggleDialog1: () => void }) => {


    return (
        <FAB
            visible={true}
            icon={{ name: 'menu', color: 'white' }}
            color="green"
            placement="right"
        />
    );
};