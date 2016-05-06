'use strict';

class flip {
  constructor () {
    this.titleEl = document.querySelector('.intrigue__title');
    this.formEl = document.querySelector('.intrigue__form');

    this.flipElement = this.flipElement.bind(this);

    this.addEventListeners();
  }

  addEventListeners () {
    // TODO: change event listener to the email button once it is created
    this.titleEl.addEventListener('click', this.flipElement);
    this.formEl.addEventListener('click', this.flipElement);
  }

  flipElement () {
    this.titleEl.classList.toggle('intrigue__title--flipped');
    this.formEl.classList.toggle('intrigue__form--flipped');
  }
}

new flip();
