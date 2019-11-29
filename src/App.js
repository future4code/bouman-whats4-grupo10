import React from 'react';
import './App.css';
import styled from 'styled-components';
import EnviarMensagem from './components/EnviarMensagem/index'



const InputNomeUsuario = styled.input `
  width: 70px;
  height: 20px;
`

const InputMensagemUsuario = styled.input `
  width: 331px;
  height: 20px;
`
const SendButton = styled.button `
  width: 70px;
  height: 30px;
`
const MensagemCointainer = styled.div `
  width: 500px;
  height: 700px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`
const InputsContainer = styled.div `
  width: 100%;
  height: 30px;
  border-top: 1px solid black;
`



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputNomeUsuario: "",
      inputMensagem: "",
      listaMensagemUsuario: []

    }
  }

  nomeUsuario = (e) => {
    this.setState ({
        inputNomeUsuario: e.target.value
    })
  }

  nomeMensagem = (e) => {
    this.setState ({
        inputMensagem: e.target.value
    })
  }
  
  atualizaListaMensagemUsuario = () => {
    const novaMensagem = {
      nome: this.state.inputNomeUsuario,
      mensagem: this.state.inputMensagem
    }
    const listaMensagemUsuarioCopia = [...this.state.listaMensagemUsuario, novaMensagem]
    this.setState({
      listaMensagemUsuario: listaMensagemUsuarioCopia,
      inputMensagem: ""
    })
  }

  render() {
    return (
      <div className="App">
        <MensagemCointainer>
          {this.state.listaMensagemUsuario.map(e => {
            return(
            <EnviarMensagem name={e.nome} message={e.mensagem}/>
            )
          })}
          <InputsContainer>
            <InputNomeUsuario type="text" onChange={this.nomeUsuario} value={this.state.inputNomeUsuario} placeholder="Usuário"/>
            <InputMensagemUsuario type="text" onChange={this.nomeMensagem} value={this.state.inputMensagem} placeholder="Digite a mensagem"/>
            <SendButton onClick={this.atualizaListaMensagemUsuario}>Enviar</SendButton>
          </InputsContainer>
          </MensagemCointainer>
      </div>
    )
  }
}

export default App;
