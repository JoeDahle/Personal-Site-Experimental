'use strict';

class navBar {
  constructor () {
    this.toggleMenuButtonEl = document.querySelector('.js-menu');
    this.navbarEl = document.querySelector('.js-navigator');

    this.toggleAnimation = this.toggleAnimation.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);

    this.addEventListeners();
  }

  addEventListeners () {
    this.toggleMenuButtonEl.addEventListener('click', this.toggleAnimation);
    this.toggleMenuButtonEl.addEventListener('click', this.toggleNavbar);
  }

/**
 * Toggle the visibility of the navigation bar
 */
  toggleNavbar () {
    this.navbarEl.classList.toggle('navigator--collapse');
    this.navbarEl.classList.toggle('navigator--expand');
  }

// TODO: add delay to content transition
  toggleAnimation () {
    this.toggleMenuButtonEl.classList.toggle('menu__toggle--animate');
    if (this.toggleMenuButtonEl.classList.contains('menu__toggle--animate')) {
        this.toggleMenuButtonEl.innerHTML = 'close';
    } else {
      this.toggleMenuButtonEl.innerHTML = 'menu';
    }
  }
}

new navBar();
