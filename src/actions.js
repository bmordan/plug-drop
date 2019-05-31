const actions = dispatch => ({
    CONNECT: port => dispatch({type: "CONNECT", port}),
    DISCONNECT: port => dispatch({type: "DISCONNECT", port}),
    CLEAR: () => dispatch({type: "CLEAR"})
})

export default actions
