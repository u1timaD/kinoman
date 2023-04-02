import { createElement } from '../render.js';

const PopupTamplete = () => `<section class="film-details"></section>`;

export default class PopupView  {

  getTemplate() {
    return PopupTamplete();
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

