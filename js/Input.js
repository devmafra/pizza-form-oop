import Component from "./Component.js";

export default class Input extends Component {
  constructor({ id = "", type = "text", placeholder = "" }) {
    super("input");
    this.build();
    this.element.type = type;
    this.element.id = id;
    this.element.placeholder = placeholder;
  }
  addChild(component) {
    if (component instanceof Component) {
      this.element.appendChild(component.element);
    }
  }
}
