import Component from "./Component.js";

export default class Icon extends Component {
  constructor(svgString) {
    super("i");
    this.build();
    this.element.innerHTML = svgString;
  }
}
