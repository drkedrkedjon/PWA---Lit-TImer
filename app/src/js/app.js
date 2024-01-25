import { LitElement, css, html } from "lit";
import * as TimerComponent from "../../node_modules/@drkedrkedjon/timer/dist/index.js";

export class App extends LitElement {
  connectedCallback() {
    super.connectedCallback();
    window.customElements.define("timer-component", TimerComponent);
  }

  render() {
    return html` <h1>Mi APP!</h1>
      <timer-component></timer-component>`;
  }
}
