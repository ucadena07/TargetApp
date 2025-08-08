import { TextInput, View, StyleSheet, Alert, Text, Dimensions } from "react-native";
import Colors from "../../constants/colors";


function Card({children}) {
    return (
        <View style={styles.inputeContainer}>
            {children}
        </View>
    )
}

export default Card;
const deviceWidth =Dimensions.get('window').width
const styles = StyleSheet.create({
    inputeContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 24,
        borderRadius: 8,
        padding: 16,
        marginTop: deviceWidth < 380 ? 18 : 36,
        elevation: 1, //android
        backgroundColor: Colors.primary800,
        shadowColor: 'black', // IOS 4 props required to create shadow
        shadowOffset: {
            width: 1, height: 1
        },
        shadowRadius: 6,
        shadowOpacity: 0.4
    },
})