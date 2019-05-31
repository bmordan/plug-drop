import React from 'react'
import { connect } from 'react-redux'
import Port from './Port'

class PortBay extends React.Component {
    render () {
        return (
            <section className="mh6 mt6 flex justify-center pa2 ba b--silver br3">
                {this.props.ports.map((rack, rack_id) => {
                    return (
                        <div className="flex flex-column mh2" key={`rack-${rack_id}`}>
                            {rack.map((note, port_id) => {
                                return <Port key={`port-${port_id}`} id={`${rack_id}|${port_id}`} />
                            })}
                        </div>
                    )
                })}
            </section>
        )
    }
}

const mapStateToProps = state => ({ ports: state.ports })
export default connect(mapStateToProps, null)(PortBay)
