import { Component } from "react";
class Welcome extends Component{
    render(){
        const {names}=this.props
        return <h1>Hello,{names}</h1>
    }
}
export default Welcome