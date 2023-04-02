import { createElement } from '../render.js';

const PopupFormTamplete = () => `<form class="film-details__inner" action="" method="get"></form>`;

export default class PopupFormView  {

  getTemplate() {
    return PopupFormTamplete();
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

