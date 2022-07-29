import { View, Text, StyleSheet,
    SafeAreaView,
    ScrollView,
     ImageBackground,
     AsyncStorage } from 'react-native'
import React, { useState } from 'react'
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/FontAwesome';
import RadioButtonRN from 'radio-buttons-react-native';
import { AppStyles } from '../../AppStyles';
import SelectDropdown from 'react-native-select-dropdown';
const image = { uri: "https://img.freepik.com/vecteurs-libre/abstrait-blanc-dans-style-papier-3d_23-2148390818.jpg?w=2000" };
const GenderScreen = ({ navigation }) => {
    const  [disable, setDisable] = useState(false);
    const [gender, setGender] = useState('');
const [searchGender, setSearchGender] = useState('');
  async function onPressHandler(name){
    setDisable(true);
    const data1 = { 
        gender: gender,
        searchGender:searchGender,
      };
    const getToken=async () =>{
        try {
          let userData = await AsyncStorage.getItem("userData");
          let obj = JSON.parse(userData);
          console.log("hetha el obj");
          console.log(obj);
          return obj;
        } catch (error) {
          console.log("Something went wrong", error);
        }
      }
      const obj1=await getToken();
    const options = {
        method: "PUT",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(obj1).token,
        },
        body: JSON.stringify(data1),
      }
     
      fetch("http://192.168.1.17:8800/ques/"+JSON.parse(obj1).userId, options)
      .then((res) => {
        if (gender && searchGender){
            navigation.push(name);
        }
         else {
               Alert.alert("Il faut saisir votre valeur");
         } 
        
        })
      .catch((err) => Alert.alert("problem connecting to the server: " + err))
    setTimeout(() => {
        setDisable(false);
    }, 400);
  }
    const data = [
        {
            label: 'femme'
        },
        {
            label: 'homme'
        }
    ];
    return (
        <ImageBackground source={ image } resizeMode="cover" style={ styles.image }>
           <SafeAreaView style={ styles.container }>
           <ScrollView   style={ styles.scrollView }>
            
           <Text style={ styles.topTitle } >Inscrivez-vous gratuitement</Text>
                <Text style={ [styles.title, styles.leftTitle] }>Vous êtes</Text>
                <RadioButtonRN 
                    data={ data }
                    value={gender}
                    selectedBtn={ (e) => {
                    console.log(e.label);
                    setGender(e.label);
                    } }
                    icon={
                        <Icon
                            name="check-circle"
                            size={ 25 }
                            color="#2c9dd1"
                        />
                    }
                />
                <Text style={ [styles.title, styles.leftTitle] }>Vous cherchez</Text>
                <RadioButtonRN
                value={searchGender} 
                    data={ data }
                    selectedBtn={ (e) => {
                        console.log(e.label);
                        setSearchGender(e.label);
                        } }
                    icon={
                        <Icon
                            name="check-circle"
                            size={ 25 }
                            color="#2c9dd1"
                        />
                    }
                />
                <Button
                    containerStyle={ styles.suivantContainer }
                    onPress={() => onPressHandler("Location")}
                    >
                    <Icon name="forward"
                        size={ 70 }
                        color="#" />
                </Button>

           </ScrollView>
           </SafeAreaView>
        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    topTitle: {
        marginTop: 10,
        marginBottom: 50,
        fontSize: 30,
        fontStyle: "italic",
        fontWeight: 'bold',
        color: 'black',
        placement: "top",

    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: AppStyles.color.tint,
        marginTop: 40,
        marginBottom: 20,
    },
    leftTitle: {
        alignSelf: 'stretch',
        textAlign: 'left',
        marginLeft: 20,
    },
    loginText: {
        color: AppStyles.color.white,
    },
    placeholder: {
        color: 'red',
    },
    scrollView: {
        marginHorizontal: 20,
    },
    body: {
        height: 42,
        paddingLeft: 20,
        paddingRight: 20,
        color: AppStyles.color.text,
    },
    suivantContainer: {
        width: 100,
        borderRadius: AppStyles.borderRadius.main,
        padding: 10,
        marginTop: 30,
        marginLeft: 200,
    },
});

export default GenderScreen