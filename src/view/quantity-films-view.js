import { createElement } from '../render.js';

const quantityFilmsTamplete = () => '<p>130 291 movies inside</p>';


export default class QuantityFilmsView {

  getTemplate() {
    return quantityFilmsTamplete();
  }

  getElement(){
    if(!this.element) {
      // eslint-disable-next-line no-return-assign
      return this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    // eslint-disable-next-line no-unused-expressions
    this.element = null;
  }
}

