import React from 'react';
import styled from 'styled-components';

const Mensagem = styled.div `
    margin-left: 10px;
`

class EnviarMensagem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Mensagem>
                <b>{this.props.name}:</b> {this.props.message}
            </Mensagem>
        )
    }
    
}

export default EnviarMensagem