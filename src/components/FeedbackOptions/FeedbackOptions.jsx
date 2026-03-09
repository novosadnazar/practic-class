import { Component } from "react";
export default class FeedbackOptions extends Component {
    render() {


        const { option, onLeaveFeedback } = this.props

        return <div>  {option.map((item) => {
            return (
                <button onClick={() => onLeaveFeedback(item)} type="button" key={item}>
                    {item}
                </button>
            );
        })}</div>
    }
}
