import { Component } from "react";
import style from"./Statistics.module.css"
export default class Statistics extends Component {
    render(){
const {good, neutral, bad , total , positiveFeedback}=this.props

return total === 0 ? (
  <p> немаэ данних </p>
) : (
  <div className={style.box}>
    <h2 className={style.title}>Statistic</h2>
    <p className={style.text}>good:{good}</p>
    <p className={style.text}>natural:{neutral}</p>
    <p className={style.text}>bad:{bad}</p>
    <p className={style.text}>total:{total}</p>
    <p className={style.text}>
      positive:{positiveFeedback ? positiveFeedback : "0"} %
    </p>
  </div>
);

    }
}