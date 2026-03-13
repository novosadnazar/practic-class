// import { render } from "@testing-library/react";
import { Component } from "react";
import style from"./Section.module.css"
export default class Section extends Component {


     
    render() {
        const { title, children } = this.props;
        return ( 
            <section className={style.section}>
                <h1 className={style.title}>{title}</h1>
                {children}
            </section>
        );
    }
}