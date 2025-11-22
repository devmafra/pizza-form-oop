import Component from "./Component.js";

export default class Header extends Component {
  constructor(tag, text) {
    super(tag);
    this.build();
    this.element.textContent = text;
  }
  addChild(component) {
    if (component instanceof Component) {
      this.element.appendChild(component.element);
    }
  }
}
