import React from 'react'

class Note extends React.Component {
    state = {
        freq: [
            {
                C: 130.8,
                A: 220.0,
                G: 196.0
            },
            {
                C: 261.6,
                A: 440.0,
                G: 392.0
            },
            {
                C: 523.3,
                A: 880.0,
                G: 784.0
            },
        ],
        types: ["triangle", "sine", "square"],
        note: null
    }
    componentDidMount() {
        const [rack, row] = this.props.rack_address.split("|")
        const context = new AudioContext()
        this.setState({context})
        const o = context.createOscillator()
        const freq = this.state.freq[row][this.props.note]
        o.type = this.state.types[rack]
        o.frequency.setValueAtTime(freq, context.currentTime)
        o.connect(context.destination)
        o.start()
        this.setState({note: o})
    }
    componentWillUnmount() {
        this.state.note.stop()
        this.state.context.close()
    }
    render () { return <samp></samp> }
}

export default Note