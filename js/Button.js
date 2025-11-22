import Component from "./Component.js";

export default class Button extends Component {
  constructor(id, text, type = "submit") {
    super("button");
    this.build();
    this.element.textContent = text;
    this.element.setAttribute("id", id);
    this.element.setAttribute("type", type);
  }
}
