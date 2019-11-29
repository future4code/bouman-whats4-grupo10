import React from 'react';

class EnviarMensagem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <b>{this.props.name}:</b> {this.props.message}
            </div>
        )
    }
    
}

export default EnviarMensagem