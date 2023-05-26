import './index.css'
import { Component } from 'react'
class Counter extends Component{
    state={count:0}
    onIncreament=()=>{
        this.setState(prevState =>{
            console.log(`prev stae ${prevState.count}`)
            return {count:prevState.count+1}
        })
    }
    onDecrement =()=>{
        this.setState(prevState =>{
            console.log(`prev stae ${prevState.count}`)
            return {count:prevState.count-1}
        })
    }
    render(){
        const{count}=this.state
        return(
            <div className="Container">
                <h1 className="heading">Counter</h1>
                <p className="Count">{count}</p>
                <div>
                    <button className="button" onClick={this.onIncreament}>Increase</button>
                    <button className="button" onClick={this.onDecrement}>Decrease</button>
                </div>
            </div>
        )
    }
}
export default Counter