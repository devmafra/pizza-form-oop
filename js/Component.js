export default class Component {
  #element;

  constructor(tagName) {
    this.tagName = tagName;
    this.#element = null;
    this.build();
  }

  build() {
    this.#element = document.createElement(this.tagName);
  }

  render(parent) {
    if (parent) {
      parent.appendChild(this.#element);
    }
  }
  get element() {
    return this.#element;
  }
}
