import { createElement } from '../render.js';

const popupCloseBottomTamplete = () => `<div class="film-details__close">
<button class="film-details__close-btn" type="button">close</button>
</div>`;

export default class PopupCloseBottomView  {

  getTemplate() {
    return popupCloseBottomTamplete();
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

