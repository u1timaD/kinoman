import { createElement } from '../render.js';

const sortTamplete = () => '<ul class="sort"><li><a href="#" class="sort__button sort__button--active">Sort by default</a></li><li><a href="#" class="sort__button">Sort by date</a></li><li><a href="#" class="sort__button">Sort by rating</a></li></ul>';


export default class SortView {

  getTemplate() {
    return sortTamplete();
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

