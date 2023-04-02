import { createElement } from '../render.js';

const PopupTopContainerTamplete = () => `<div class="film-details__top-container"></div>`;

export default class PopupTopContainerView  {

  getTemplate() {
    return PopupTopContainerTamplete();
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

