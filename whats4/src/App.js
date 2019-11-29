import React from 'react';
import './App.css';
import styled from 'styled-components';
import EnviarMensagem from './components/EnviarMensagem/index'

// Header

const Header = styled.div `
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0a4c36;
  color: white;
  font-size: 40px
`
// Main

const Main = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #3d7860;
}
`

const InputNomeUsuario = styled.input `
  width: 50px;
  height: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const InputMensagemUsuario = styled.input `
  width: 340px;
  height: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const SendButton = styled.button `
  width: 60px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const ChatCointainer = styled.div `
  width: 500px;
  height: 700px;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: white;
  background-image: url('https://fsa.zobj.net/crop.php?r=-f7FxoitgwmCeryGbkIMW_JrJNQJIFDzwnFR30JfvLhnK6OpK7XsWEIWtfADPT5EF1CUcSXSmqFWjyLJ6bVlR8iF5uaNg9WUwO2aco8EA6KyujD0jLIX_
    c1gtu3ne7i1CI5GKy7WHLXKGgsJwSRBQ3B8asVG8gP4fLlHQohdUUIw_DPGvjAgxjnUfOA');
  }
`
const MensagemContainer = styled.div `
  width: 100%;
  height: 92%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: start;
  position: relative;
  bottom: 0px;
`

const InputsContainer = styled.div `
  width: 100%;
  height: 8%;
  border-top: 1px solid white;
  background-color: gray;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 0px;
`

// Footer

const Footer = styled.div `
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: #002410;
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
        <Header>Whats4</Header>
          <Main>
            <ChatCointainer>
              <MensagemContainer>
                {this.state.listaMensagemUsuario.map(e => {
                  return(
                  <EnviarMensagem name={e.nome} message={e.mensagem}/>
                  )
                })}
              </MensagemContainer>
              <InputsContainer>
                <InputNomeUsuario type="text" onChange={this.nomeUsuario} value={this.state.inputNomeUsuario} placeholder="Usuário"/>
                <InputMensagemUsuario type="text" onChange={this.nomeMensagem} value={this.state.inputMensagem} placeholder="Digite a mensagem"/>
                <SendButton onClick={this.atualizaListaMensagemUsuario}>Enviar</SendButton>
              </InputsContainer>
            </ChatCointainer>
        </Main>
        <Footer></Footer>
      </div>
    )
  }
}

export default App;