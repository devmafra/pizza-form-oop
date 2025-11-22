import Component from "./Component.js";

export default class Label extends Component {
  constructor(labelText, inputId) {
    super("label");
    this.build();
    this.element.textContent = labelText;
    this.element.setAttribute("for", inputId);
  }
}
