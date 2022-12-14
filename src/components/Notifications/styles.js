/* eslint-disable prettier/prettier */

import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    closedNotifCard: {
      marginTop: 4,
      padding: 5,
    //   height: height/12,
      width: width,
    },

    openedNotifCard: {
        marginTop: 4,
      // height: height/5,
    },

    isReadBackground: {
      backgroundColor: "#ADD8E6",
    },

    isNotReadBackground: {
      backgroundColor: "#33E9FF",
    },

    text: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        width: width / 1.8,
        alignSelf: 'center',
        alignItems: 'flex-end',
        marginLeft: 20,
        
      //   position: 'absolute', right: 0
        // flexShrink: 1,
        // textOverflow: "ellipses",
        // wordWrap: "breakWord"
      },

      text_closed: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        alignSelf: 'center',
        alignItems: 'flex-end',
        marginLeft: 20
        
      //   position: 'absolute', right: 0
        // flexShrink: 1,
        // textOverflow: "ellipses",
        // wordWrap: "breakWord"
      },

    textAndImageContainer:{
        flex: 1,
        flexDirection:'row',

    },

    image_open: {
        width: width / 6,
        height: width / 6,
        borderRadius: width/12 ,
        overflow: 'hidden',
        marginTop: height / 100,
        marginBottom: height / 100,
        marginLeft: 12,

      },

    image_closed: {
        width: width / 8,
        height: width / 8,
        borderRadius: width / 16,
        overflow: 'hidden',
        marginLeft: 12,

    },

    twoBtns: {
        flex: 1,
        flexDirection:'row',
        marginLeft: width / 5,
        justifyContent: 'space-around',
        width: width / 1.5,
        marginBottom: 3,
    //   flex: 1,
    //   flexDirection:'row',
    //   alignItems:'center',
    //   justifyContent:'space-around',
    //   marginLeft: width / 4,
    //   marginRight: width / 6,
    //   margin: height/100
    },

    btn: {
        marginTop: 5,
        marginBottom: 2.5,
        borderRadius: 8,
        width: width / 4,
        overflow: 'hidden',

    },

    declineBtn: {
    //   backgroundColor: '#FF00FF',
    },

    acceptBtn:{
    //   backgroundColor: '#000000'
    },
  });
