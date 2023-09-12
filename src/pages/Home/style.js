import { StyleSheet } from "react-native";
import colors from "../../constans/colors";
import { color } from "react-native-reanimated";

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
        marginTop:10
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
    footer:{
        justifyContent:"center",
        alignItems:"center",
        padding:10,
        flexDirection:"row"
    },
    loadMoreBtn:{
       padding:10,
       backgroundColor:colors.pink,
       borderRadius:4,
       flexDirection:"row",
       justifyContent:"center",
       alignItems:"center"
    },
    btnText:{
        color:colors.white,
        fontSize:18,
       textAlign:"center"
    }
});

export default styles;