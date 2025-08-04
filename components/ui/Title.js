import {Text,StyleSheet,View} from 'react-native'
import Colors from '../../constants/colors';

function Tilte({children}){
    return (
      <Text style={styles.title}>{children}</Text>
    )
}

export default Tilte;

const styles =  StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        borderWidth: 2,
        borderColor:  'white',
        padding: 12
    }
})