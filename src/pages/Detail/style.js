import { StyleSheet } from "react-native";
import colors from "../../constans/colors";

const styles = StyleSheet.create({
    title:{
        fontSize:24,
        color:colors.lightBlack,
        fontWeight:"500",
        marginTop:5,
    },
    location:{
        fontSize:16,
        color:colors.pink,
        fontWeight:"500"
    },
    inContainer:{
        justifyContent:"center",
        alignItems:"center",
        marginTop:10
    },
    job:{
        fontSize:24,
        color:colors.iconGray,
        fontWeight:"600"
    },
    detailContainer:{
        borderWidth:1.5,
        backgroundColor:colors.white,
        height:"72%",
        marginTop:8,
        borderColor:colors.borderColor
    },
    submit:{
        backgroundColor:colors.pink,
        width:"40%",
        height:40,
        margin:10,
        borderRadius:12,
        justifyContent:"center",
        alignItems:"center"
    },
    submitTitle:{
        fontSize:18,
    }
});

export default styles;