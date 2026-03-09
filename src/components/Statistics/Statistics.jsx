import { Component } from "react";
export default class Statistics extends Component {
    render(){
const {good, neutral, bad , total , positiveFeedback}=this.props

return(  total === 0 ? <p> немаэ данних </p>:<div>
          <h2>Statistic</h2>
          <p>good:{good }</p>
          <p>natural:{ neutral}</p>
          <p>bad:{bad}</p>
          <p>total:{ total}</p>
          <p>positive:{positiveFeedback?positiveFeedback:"0"} %</p>
        </div> )

    }
}