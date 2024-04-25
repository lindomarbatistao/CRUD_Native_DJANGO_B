import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#eee',
        flex:1
    },
    caixa:{
        width:'80%',
        height:40,
        borderColor: '#000',
        borderRadius:10,
        marginTop:10,
        backgroundColor:'#8aede7',
        padding:10,
        fontSize:15,
        fontWeight:'bold'
    },
    btn:{
        width:'40%',
        height:40,
        borderColor: '#000',
        borderRadius:10,
        marginTop:10,
        backgroundColor:'#00f', 
        alignItems:'center',
        justifyContent:'center'
    },
    textBtn:{
        fontSize: 25,
        color: 'white'
    },
    textTitle:{
        fontSize: 50,
        fontWeight:'bold'
    },
    textInput:{
        padding:10,
    },
    textos:{
        width:'80%',
        height:40,
        borderColor: '#000',
        borderRadius:10,
        marginTop:10,
        backgroundColor:'#c7f2f0',
        padding:10,
        fontSize:15
    },

})

export default styles