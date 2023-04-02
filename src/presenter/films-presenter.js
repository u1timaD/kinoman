import {render} from '../render.js';
import FilmsSectionView from '../view/films-section-view.js';
import FilmsListSectionView from '../view/films-list-section-view.js';
import FilmsListExtraSectionView from '../view/films-list-extra-section-view.js';
import FilmListContainerView from '../view/film-list-container-view.js';
import FilmCardView from '../view/film-card-view.js';
import FilmListTitleView from '../view/film-list-title-view.js';
import ShowMoreButtomView from '../view/show-more-button-view.js';

export default class FilmsPresenter {
  filmsSectionComponent = new FilmsSectionView();
  filmsListSectionComponent = new FilmsListSectionView();
  filmListContainerComponent = new FilmListContainerView();
  filmsListExtraSectionComponent = new FilmsListExtraSectionView();

  init = (FilmSection, tasksModel) => {
    this.filmSection = FilmSection;
    this.tasksModel = tasksModel;
    this.filmTasks = [...this.tasksModel.getTasks()];

    render(this.filmsSectionComponent, this.filmSection);
    render(this.filmsListSectionComponent, this.filmsSectionComponent.getElement());
    render(this.filmListContainerComponent, this.filmsListSectionComponent.getElement());

    for (let i = 0; i < this.filmTasks.length; i++) {
      render(new FilmCardView({task: this.filmTasks[i]}), this.filmListContainerComponent.getElement());
    }

    render(new ShowMoreButtomView(), this.filmListContainerComponent.getElement());

    render(this.filmsListExtraSectionComponent, this.filmsSectionComponent.getElement());
    // render(new FilmListContainerView(), this.filmsListExtraSectionComponent.getElement());


  };
}
