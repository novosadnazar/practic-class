import { Component } from "react";
import style from "./FeedbackOption.module.css"
export default class FeedbackOptions extends Component {
    render() {


        const { option, onLeaveFeedback } = this.props

        return <div className={style.container}>  {option.map((item) => {
            return (
                <button className={style.btn} onClick={() => onLeaveFeedback(item)} type="button" key={item}>
                    {item}
                </button>
            );
        })}</div>
    }
}
