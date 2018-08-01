import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
import {Platform} from 'react-native'

export default class App extends Component<Props> {

  render() {
    return (
			<View style={styles.container}>
	        <Text style={{fontSize:20, fontWeight:'bold'}}>
	              Sign in to continue to Gmail
	        </Text>

					<View style={styles.pic}>
					</View>

					<View style={styles.form}>
						<TextInput style={styles.textinputds} placeholder='Email'></TextInput>
						<TextInput style={styles.textinputds} placeholder='Password'></TextInput>
						<View style={styles.buttonSignIn}>
							<Text style={{fontSize:16, color:'white', textAlign:'center'}}>
								Sign in
							</Text>

						</View>
						<Text style={{fontSize:15, color:'blue', textAlign:'left'}}>
		              Need help?
		        </Text>

					</View>

					<View style={styles.foot}>

						<Text style={{fontSize:15, color:'blue'}}>
									Create an account
						</Text>


					</View>


			</View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems:'center',
		fontWeight:'bold',
		marginLeft:10,
		marginRight:10,
		//marginTop:30,
    justifyContent: 'center',
    marginTop: (Platform.OS) === 'android' ? 20 : 0,
  },
 		pic: {
	 aspectRatio:1,
   borderRadius:100,
	 borderWidth:4,
	 //height:'30',
	  borderColor:'grey',
		width:'40%',
		//height:'100',
	  padding:20,
    marginTop:50,
   },
	 form:{
		 flex: 1,
		 backgroundColor: 'gray',
		 alignItems:'center',
		 fontWeight:'bold',
     paddingHorizontal:10,
		 marginLeft:90,
		 marginRight:90,
		 //marginTop:30,
		 justifyContent: 'center',
	},

  textinputds:{
    flex: 1,
    backgroundColor: 'white',
    alignItems:'center',
	  marginLeft:0,
    width:340,
		marginRight:0,
		justifyContent: 'center',

  },

	 buttonSignIn: {
		 flex:1,
		 marginLeft:90,
		 marginRight:90,
		 padding:1,
		 marginTop:30,
		 aspectRatio:8,
		 borderRadius:5,
     justifyContent:'center',
		 backgroundColor:'blue',

	 },
	 foot: {
		flex: 1,
		alignItems:'center',
		justifyContent: 'center',
		backgroundColor:'white',
    marginLeft:10,


	 },

});
