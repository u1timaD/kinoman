import { createElement } from '../render.js';

const filmsSectionTamplete = () => '<section class="films"></section>';

export default class FilmsSectionView  {

  getTemplate() {
    return filmsSectionTamplete();
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

