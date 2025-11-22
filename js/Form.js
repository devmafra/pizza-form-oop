import Component from "./Component.js";

export default class Form extends Component {
  constructor(id) {
    super("form");
    this.build();
    this.element.setAttribute("id", id);
  }
  addChild(component) {
    if (component instanceof Component) {
      this.element.appendChild(component.element);
    }
  }
}
