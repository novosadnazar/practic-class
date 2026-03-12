import React from "react";
import style from "./App.module.css"
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
      <div className={style.container}>
        <h1 className={style.title}>Please leave feedback</h1>
        <div className={style.box}>
          {option.map((item) => {
            return (
              <button
                className={style.addBtn}
                onClick={() => this.handleFeedback(item)}
                type="button"
                key={item}
              >
                {item}{" "}
              </button>
            );
          })}
        </div>
        <div className={style.boxe}>
          <h2 className={style.text}>Statistic</h2>
          <p className={style.desc}>good:{good}</p>
          <p className={style.desc}>natural:{neutral}</p>
          <p className={style.desc}>bad:{bad}</p>
          <p className={style.desc}>total:{total}</p>
        </div>
      </div>
    );
  }

}
