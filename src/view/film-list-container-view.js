import { createElement } from '../render.js';

const filmListContainerTamplete = () => '<div class="films-list__container"></div>';

export default class FilmListContainerView  {

  getTemplate() {
    return filmListContainerTamplete();
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

