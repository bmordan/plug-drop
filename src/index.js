import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
import PortBay from './PortBay'
import PlugBay from './PlugBay'

const init = JSON.stringify({
    ports: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]
})

const updatedPorts = (state, action) => {
    const [rack, port] = action.id.split("|")
    const ports = state.ports.slice()
    ports[rack][port] = action.note
    return Object.assign({}, state, {ports})
}

const reducer = (state = JSON.parse(init), action) => {
    switch(action.type) {
        case "CONNECT":
            return updatedPorts(state, action.port)
        case "DISCONNECT":
            return updatedPorts(state, action.port)
        case "CLEAR":
            return JSON.parse(init)
        default:
            return state
    }
}

const store = createStore(reducer)

class App extends React.Component {
    render () {
        return (
            <main className="sans-serif">
                <PortBay />
                <PlugBay />
            </main>
        )
    }
}
const AppWithDragDropContext = DragDropContext(HTML5Backend)(App)

ReactDOM.render(<Provider store={store}><AppWithDragDropContext /></Provider>, document.getElementById('root'))
