import Component from "./Component.js";

export default class Select extends Component {
  constructor({ id, placeholder = "Selecione o valor desejado" }) {
    super("select");
    this.build();
    this.element.setAttribute("id", id);

    const deafultOption = document.createElement("option");
    deafultOption.textContent = placeholder;
    deafultOption.value = "";
    deafultOption.selected = true;
    deafultOption.hidden = true;

    this.element.appendChild(deafultOption);
  }
  addChild(value) {
    if (typeof value !== "string") {
      console.warn("Select.addChild precisa receber uma string.");
      return;
    }
    const option = document.createElement("option");
    option.textContent = value;
    option.value = value.toLowerCase().replace(/\s+/g, "-");
    this.element.appendChild(option);
  }
}
