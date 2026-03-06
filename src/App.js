import  React  from "react";
import ReactDOM from "react-dom/client"
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

  render() {
    const total = this.countTotalFeedback()
    const option = ["good", "neutral", "bad"];
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <h1>Please leave feedback</h1>
        <div>
          {option.map((item) => {
            return (
              <button onClick={() => this.handleFeedback(item)} type="button" key={item}>
                {item}
              </button>
            );
          })}
        </div>
        <div>
          <h2>Statistic</h2>
          <p>good:{good }</p>
          <p>natural:{ neutral}</p>
          <p>bad:{bad}</p>
          <p>total:{ total}</p>
        </div>
      </div>
    );
  }

}

