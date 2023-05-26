import { Component } from "react";
import './index.css'
class Clock extends Component{
    constructor(props){
        super(props)
        this.state={date:new Date()}
        console.log("constructor called")
    }
    componentDidMount(){
        console.log("componetdid")
        this.timeID=setInterval(this.tick,1000)
    }
    tick = () =>{
        this.setState({date:new Date()})
    }
    componentWillUnmount(){
        console.log("componenetwill called")
        clearInterval(this.timeID)
    }
    render(){
        const{date}=this.state
        console.log("render calld:-",date)
        return(
            <div className="clock-container">
                <h1 className="heading">Clock</h1>
                <br/>
                <p className="time">{date.toLocaleTimeString()}</p>
            </div>
        )
    }
}
export default Clock