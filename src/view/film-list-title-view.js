import { createElement } from '../render.js';

const filmListTitleTamplete = () => '<h2 class="films-list__title">Top rated</h2>';

export default class FilmListTitleView  {

  getTemplate() {
    return filmListTitleTamplete();
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

