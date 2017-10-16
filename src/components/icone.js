import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet
} from 'react-native';

class Icone extends Component{
  render(){
    if(this.props.escolha == 'pedra'){
      return(
        <View style={styles.iconeJogador}>
          <Text style={styles.txtJogador}>{this.props.jogador}</Text>
          <Image source={require('../../imgs/pedra.png')} />    
        </View>
      );
    }
    else if(this.props.escolha == 'papel'){
      return(
        <View style={styles.iconeJogador}>
          <Text style={styles.txtJogador}>{this.props.jogador}</Text>
          <Image source={require('../../imgs/papel.png')} />    
        </View>
      );    
    }
    else if(this.props.escolha == 'tesoura'){
      return(
        <View style={styles.iconeJogador}>
          <Text style={styles.txtJogador}>{this.props.jogador}</Text>
          <Image source={require('../../imgs/tesoura.png')} />    
        </View>
      );
    }
    else{
      return false;
    }
  }
}

const styles = StyleSheet.create({ 
  iconeJogador : {
    alignItems: 'center',
    marginBottom: 15
  },
  txtJogador : {
    fontSize : 18 
  }
});

export default Icone;