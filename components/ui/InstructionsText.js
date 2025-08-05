import { TextInput, View, StyleSheet, Alert, Text } from "react-native";
import Colors from "../../constants/colors";

function InstructionText({children, style}){
    return(
            <Text style={[styles.instructionText, style]}>{children}</Text>
    )
}

export default InstructionText;

const styles = StyleSheet.create({
    instructionText: {
        fontSize: 24,
        color: Colors.accent500
    },

})