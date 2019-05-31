import React from 'react'
import { DropTarget } from 'react-dnd'
import Plug from './Plug'
import Note from './Note'
import { connect } from 'react-redux'
import actions from './actions'

class Port extends React.Component {
    disconnect = () => {
        this.props.DISCONNECT({id: this.props.id, note: null})
    }
    render () {
        const [rack, row] = this.props.id.split("|")
        const note = this.props.ports[rack][row]
        return note ? (
            <Plug note={note} onDisconnect={this.disconnect}>
                <Note note={note} rack_address={this.props.id} />
            </Plug>
        ) : (
            this.props.connectDropTarget(<div className="dib ba b--gray br-100 h2 w2 ma2"></div>)
        )
    }
}

const spec = {
    drop(props, monitor) {
        const plug = monitor.getItem()
        if (plug.onConnect) {
            plug.onConnect({ id: props.id, note: plug.note })
        }
        return props
    }
}

const collect = (connect) => ({
    connectDropTarget: connect.dropTarget()
})

const mapStateToProps = state => ({
    ports: state.ports
})
const PortWithRedux = connect(mapStateToProps, actions)(Port)
export default DropTarget('OK', spec, collect)(PortWithRedux)