import QuantityFilmsView from './view/quantity-films-view.js';
import ProfileView from './view/profile-view.js';
import MainNavigationView from './view/main-navigation-view.js';
import SortView from './view/sort-view.js';
import FilmsPresenter from './presenter/films-presenter.js';
import PopupPresenter from './presenter/popup-presenter.js';
import TasksModel from './model/tasks-model.js';

import FilmsSectionView from './view/films-section-view.js';
// console.log(new FilmsSectionView().getElement())

import {render} from './render.js';

// console.log(new TasksModel())


const tasksModel = new TasksModel();

const siteMainElement = document.querySelector('.main');
const siteBodyElement = document.querySelector('body');
const siteHeaderElement = document.querySelector('.header');
const siteStatisticElement = document.querySelector('.footer__statistics');
const filmsPresenter = new FilmsPresenter();
const popupPresenter = new PopupPresenter();


render(new QuantityFilmsView(), siteStatisticElement);
render(new ProfileView(), siteHeaderElement);
render(new MainNavigationView(), siteMainElement);
render(new SortView(), siteMainElement);


filmsPresenter.init(siteMainElement, tasksModel);
// popupPresenter.init(siteBodyElement);