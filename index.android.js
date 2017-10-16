import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';

import Topo from './src/components/topo';
import Icone from './src/components/icone';


class app3 extends Component {
  constructor(props) {
    super(props);
    
    this.state = { escolhaUsuario: '', escolhaComputador: '', resultado: '' };
  }

  jokenpo(escolhaUsuario) {
    var numeroAleatorio = Math.floor(Math.random() * 3);

    var escolhaComputador = '';

    switch (numeroAleatorio) {
      case 0: escolhaComputador = 'pedra'; break;
      case 1: escolhaComputador = 'papel'; break;
      case 2: escolhaComputador = 'tesoura'; break;
    }

    var resultado = '';

    if(escolhaComputador == 'pedra'){
      if(escolhaUsuario == 'pedra'){
        resultado = 'Empate';
      }
      if(escolhaUsuario == 'papel'){
        resultado = 'Usuário ganhou';
      }
      if(escolhaUsuario == 'tesoura'){
        resultado = 'Computador ganhou';
      }
    }

    if(escolhaComputador == 'papel'){
      if(escolhaUsuario == 'pedra'){
        resultado = 'Computador ganhou';
      }
      if(escolhaUsuario == 'papel'){
        resultado = 'Empate';
      }
      if(escolhaUsuario == 'tesoura'){
        resultado = 'Usuário ganhou';
      }
    }

    if(escolhaComputador == 'tesoura'){
      if(escolhaUsuario == 'pedra'){
        resultado = 'Usuário ganhou';
      }
      if(escolhaUsuario == 'papel'){
        resultado = 'Computador ganhou';
      }
      if(escolhaUsuario == 'tesoura'){
        resultado = 'Empate';
      }
    }

    this.setState({ escolhaUsuario: escolhaUsuario,
                    escolhaComputador : escolhaComputador,
                    resultado : resultado
                   });
  }

  render() {
    return (
      <View>        
        <Topo></Topo>

        <View style={styles.painelAcoes}>

          <View style={styles.btnEscolha}>
            <Button title='Pedra' onPress={() => this.jokenpo('pedra')} />
          </View>

          <View style={styles.btnEscolha}>
            <Button title='Papel' onPress={() => this.jokenpo('papel')}/>
          </View>

          <View style={styles.btnEscolha}>
            <Button title='Tesoura' onPress={() => this.jokenpo('tesoura')}/>
          </View>

        </View>

        <View style={styles.palco}>
          <Text style={styles.textResultado}>{this.state.resultado}</Text>

          <Icone escolha={this.state.escolhaComputador} jogador='Computador'></Icone>
          <Icone escolha={this.state.escolhaUsuario} jogador='Usuário'>></Icone>

        </View>

        
        
      </View>
    );
  }
}


const styles = StyleSheet.create({
  btnEscolha: {
    width: 90
  },
  painelAcoes : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10 
  },
  palco : {
    alignItems : 'center',
    marginTop: 10
  },
  textResultado : {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60
  }
});

AppRegistry.registerComponent('app3', () => app3);
