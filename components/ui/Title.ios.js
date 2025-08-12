import {Text,StyleSheet,View, Platform} from 'react-native'
import Colors from '../../constants/colors';

function Title({children}){
    return (
      <Text style={styles.title}>IOS:{children}</Text>
    )
}

export default Title;

const styles =  StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        // fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        //borderWidth: Platform.OS === 'android' ? 2 : 0,
        borderWidth: Platform.select({ios: 0, android: 2}),
        borderColor:  'white',
        padding: 12,
        maxWidth: '80%',
        minWidth: 300
    }
})