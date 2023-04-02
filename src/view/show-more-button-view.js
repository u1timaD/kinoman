import { createElement } from '../render.js';

const creatShowMoreButtomTamplete = () => '<button class="films-list__show-more">Show more</button>';


export default class ShowMoreButtomView {

  getTemplate() {
    return creatShowMoreButtomTamplete();
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

