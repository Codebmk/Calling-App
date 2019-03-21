import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';


export default class Body extends Component{
  state={
    contacts:[],
    showCallingView : false
  }

  render(){
    let fullContact = this.state.contacts
    
    if(this.state.showCallingView){
      return(
        <View style={styles.new_screen}>
          <View style={styles.textView}>
            <Text style={styles.dialTxt}>Dialing...</Text>
            <Text style={styles.contactsTxt}>{this.state.contacts}</Text>
          </View>

          <View style={styles.btnAlignment}>
            <TouchableOpacity style={styles.btnz}>
              <Image source={require('../images/pause.png')}
              style={styles.recordCallBtn}/>
            </TouchableOpacity>
    
            <TouchableOpacity style={styles.btnz}>
              <Image source={require('../images/record1.png')}
              style={styles.recordCallBtn}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnz}>
              <Image source={require('../images/dial.png')}
              style={styles.recordCallBtn}/>
            </TouchableOpacity>
  
          </View>
          <TouchableOpacity style={styles.endCallBtn}
            onPress={()=>{
              //delete this.state.contacts
              this.setState({showCallingView : false, contacts : []})}}>
            <Image source={require('../images/end.png')}
              style={styles.endCallBtnTxt}/>
          </TouchableOpacity>
          
        </View>
      )
    }

    
    return(
      <View style={styles.mainest}>
        <View style={{backgroundColor:'#EEE', flex: 1, justifyContent:'center', alignItems: 'center'}}>
          <Text style={styles.contactView}>{this.state.contacts}</Text>
        </View>
        <TouchableOpacity style={styles.clearBtn}
        onPress={()=>{
          anotherContact = fullContact.pop()
          this.setState({fullContact: anotherContact})
        }}>
          <Image source={require('../images/shift.png')} style={styles.clearBtnTxt}/>
        </TouchableOpacity>

        <View style={styles.main}>
          <View style={styles.btn}>
            <TouchableOpacity
              onPress={()=>{
                input = fullContact.push(1)
                this.setState({fullContact : input})
              }}
            >
              <Text style={styles.values}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={()=>{
                  input = fullContact.push(2)
                  this.setState({fullContact : input})
                }}
            > 
              <Text style={styles.values}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>{
              input = fullContact.push(3)
              this.setState({fullContact : input})
            }}>
              <Text style={styles.values}>3</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btn}>
            <TouchableOpacity
            onPress={()=>{
              input = fullContact.push(4)
              this.setState({fullContact : input})
            }}>
              <Text style={styles.values}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>{
              input = fullContact.push(5)
              this.setState({fullContact : input})
            }}>
              <Text style={styles.values}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>{
              input = fullContact.push(6)
              this.setState({fullContact : input})
            }}>
              <Text style={styles.values}>6</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btn}>
            <TouchableOpacity
            onPress={()=>{
              input = fullContact.push(7)
              this.setState({fullContact : input})
            }}>
              <Text style={styles.values}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>{
              input = fullContact.push(8)
              this.setState({fullContact : input})
            }}>
              <Text style={styles.values}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>{
              input = fullContact.push(9)
              this.setState({fullContact : input})
            }}>
              <Text style={styles.values}>9</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btn}>
            <TouchableOpacity
            onPress={()=>{
              input = fullContact.push('*')
              this.setState({fullContact : input})
            }}>
              <Text style={styles.values}>*</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>{
              input = fullContact.push(0)
              this.setState({fullContact : input})
            }}>
              <Text style={styles.values}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>{
              input = fullContact.push('#')
              this.setState({fullContact : input})
            }}>
              <Text style={styles.values}>#</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.callBtn}
        onPress={()=>this.setState({showCallingView : true})}>
          <Image source={require('../images/call.png')}
          style={styles.callBtnTxt}/>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  clearBtn:{
    margin: 10,
    width: 60,
    height: 60,
    left: 310
  },
  clearBtnTxt:{
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
  },
  mainest:{
    backgroundColor: 'white'
  },
  main:{
    marginBottom: 10,
    backgroundColor: 'white'
  },
  new_screen:{
    flex: 1
  },
   
  btn:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'white'
  }, 
  values:{
    paddingRight: 40,
    paddingLeft: 40,
    fontSize: 40,
    justifyContent: 'center',
    alignContent: 'center',
    margin: 20,
  },
  callBtn:{
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  callBtnTxt:{
    marginBottom: 10,
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },

  recordCallBtn:{
    width: 80,
    height: 80,
    borderRadius: 40,
    margin: 10
  },

  endCallBtn:{
    alignItems: 'center',
    justifyContent: 'center',
    width: 90,
    height: 90,
    left: 170,
    marginBottom: 20
  },

  endCallBtnTxt:{
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 90,
    height: 90,
  },
  
  contactsTxt:{
    fontSize: 40,
    paddingLeft: 50,
    justifyContent: 'center',
    alignContent: 'center',
    color: 'white'
  },
  dialTxt:{
    fontSize: 50,
    paddingLeft: 50,
    justifyContent: 'center',
    alignContent: 'center',
    color: 'white'
  },
  btnAlignment:{
    flexDirection: 'row',
    flex: 2
  },
  textView:{
    flex: 1,
    backgroundColor: '#008DD5'
  },
  contactView:{
    color: 'black',
    fontSize: 50
  },
  btnz:{
    margin: 20
  }
})