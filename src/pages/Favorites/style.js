import { StyleSheet } from "react-native";
import colors from "../../constans/colors";

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        padding:10,
    },
    inContainer: {
        borderWidth: 1,
        borderColor: colors.borderColor,
        padding: 12,
        backgroundColor: colors.white,
        borderRadius:10,
        marginTop:10,
        
    },
    title: {
        fontSize: 22,
        color: colors.lightBlack
    },
    text: {
        fontSize: 20,
        color: colors.lightBlack,
    },
    location: {
        fontSize: 18,
        color: colors.white,
        borderWidth: 1,
        backgroundColor: colors.pink,
        width: "60%",
        borderRadius: 20,
        borderColor: colors.pink,
        padding: 4,
    },
    level: {
        fontSize: 18,
        alignSelf: "flex-end",
        color: colors.pink
    },
    submit:{
        backgroundColor:colors.pink,
        width:"100%",
        height:40,
        marginTop:10,
        borderRadius:12,
        justifyContent:"center",
        alignItems:"center"
    },
    submitTitle:{
        fontSize:18,
    }
});

export default styles;