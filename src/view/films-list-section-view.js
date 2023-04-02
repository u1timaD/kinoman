import { createElement } from '../render.js';

const filmsListSectionTamplete = () => '<section class="films-list"></section>';

export default class FilmsListSectionView  {

  getTemplate() {
    return filmsListSectionTamplete();
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

