import  React  from "react";
import ReactDOM from "react-dom/client"
import Statistics from "./components/Statistics/Statistics";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
// import Section from "./components/Section/Section";
export default class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };


  handleFeedback = (type) => {
    this.setState((prevState) => {
       return { ...prevState, [type]: prevState[type] +1 };
      
   })
  }

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, item) => acc + item, 0);
  }

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback()
    return Math.round((this.state.good/total)*100)
  }


  render() {
    const total = this.countTotalFeedback()
    const positiveFeedback = this.countPositiveFeedbackPercentage()
    console.log(positiveFeedback);
    
    const option = ["good", "neutral", "bad"];
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <h1>Please leave feedback</h1>
        <div>
          <FeedbackOptions option={option} onLeaveFeedback={this.handleFeedback}/>
        </div>
  <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={total} positiveFeedback={positiveFeedback}/>
      </div>
    );
  }

}

