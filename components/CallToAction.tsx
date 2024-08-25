import { StyleSheet, Text, TouchableOpacity, } from 'react-native'

type CallToActionProps = {

    buttonText: string;

    blackText: boolean;

    handleOnPress: () => void; // Add handleOnPress prop

};

export default function CallToAction({ buttonText, blackText, handleOnPress }: CallToActionProps) {
    return (
        <TouchableOpacity onPress={handleOnPress}>
            <Text style={[styles.callToAction, blackText ? styles.blackText : styles.whiteText]}>
                {buttonText}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    callToAction: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        textDecorationLine: 'underline',
    },
    whiteText: {
        color: '#FFF',
    },
    blackText: {
        color: '#000',
    },
})
