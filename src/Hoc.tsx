import {Component} from 'react'

const initialState = {
    name : 'Blobs',
    msg : 'HOC is cool!'
}
type State = Readonly<typeof initialState>

const messageHOC = (WrappedComponent: any) =>{
    class HOC extends Component<{}, State> {
        readonly state: State = initialState
        render(){
            return (
                <WrappedComponent name={this.state.name}
                    msg={this.state.msg} />
            )
        }
    }
    return HOC
}

export default messageHOC
