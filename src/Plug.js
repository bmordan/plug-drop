import React from 'react'
import { DragSource } from 'react-dnd'
import { connect } from 'react-redux'
import actions from './actions'

class Plug extends React.Component {
    render () {
        const color = {
            A: "bg-washed-red",
            C: "bg-washed-blue",
            G: "bg-washed-green",
            null: "bg-transparent"
        }
        return this.props.connectDragSource(
            <div className={`dib ba b--gray br-100 h2 w2 ma2 ${color[this.props.note]}`}>
                {this.props.children || null}
            </div>
        )
    }
}

const spec = {
    beginDrag: props => {
        return props
    },
    endDrag: props => {
        if (props.onDisconnect) { props.onDisconnect() }
    }
}

const collect = (connect) => ({
    connectDragSource: connect.dragSource()
})

const PlugWithRedux = connect(null, actions)(Plug)
export default DragSource('OK', spec, collect)(PlugWithRedux)