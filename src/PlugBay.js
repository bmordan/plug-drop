import React from 'react'
import Plug from './Plug'
import actions from './actions'
import { connect } from 'react-redux'

class PlugBay extends React.Component {
    render() {
        const notes = ["A", "C", "G"]
        return (
            <section className="mh6 mt2 flex justify-between pa2 ba b--silver br3">
                {notes.map(note => <Plug key={note} note={note} onConnect={this.props.CONNECT} />)}
                <button className="bg-green white br3 ph3" onClick={this.props.CLEAR}>Reset</button>
            </section>
        )
    }
}

export default connect(null, actions)(PlugBay)