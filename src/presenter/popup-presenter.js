import { render } from '../render.js';
import PopupView from '../view/popup-view.js';
import PopupFormView from '../view/popup-form-view.js';
import PopupTopContainerView from '../view/popup-top-container-view.js';

import PopupCloseBottomView from '../view/popup-close-bottom-view';
import PopupInfoView from '../view/popup-info-view.js';
import PopupControlView from '../view/popup-control-view.js';

import PopupCommentsView from '../view/popup-comments-view.js';


export default class PopupPresenter {
  popupComponent = new PopupView();
  popupFormComponent = new PopupFormView();
  popupTopContainerComponent = new PopupTopContainerView();
  popupCommentsComponent = new PopupCommentsView();


  init = (footerElement) => {
    this.footerElement = footerElement;

    render(this.popupComponent, this.footerElement);
    render(this.popupFormComponent, this.popupComponent.getElement());
    render(this.popupTopContainerComponent, this.popupFormComponent.getElement());
    render(new PopupCloseBottomView(), this.popupTopContainerComponent.getElement());
    render(new PopupInfoView(), this.popupTopContainerComponent.getElement());
    render(new PopupControlView(), this.popupTopContainerComponent.getElement());


    render(this.popupCommentsComponent, this.popupFormComponent.getElement());
    // render(this.popupFormComponent, this.popupComponent.getElement());


  }
}