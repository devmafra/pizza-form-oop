import Component from "./Component.js";

export default class Div extends Component {
  constructor(id) {
    super("div");
    this.build();
    this.element.setAttribute("id", id);
  }
  addChild(component) {
    if (component instanceof Component) {
      this.element.appendChild(component.element);
    }
  }
}
