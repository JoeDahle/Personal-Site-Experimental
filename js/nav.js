'use strict';

class navBar {
  constructor () {
    // element selectors
    this.toggleMenuButtonEl = document.querySelector('.js-menu');
    this.navbarEl = document.querySelector('.js-navigator');

    // bindings
    this.toggleAnimation = this.toggleAnimation.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);

    this.addEventListeners();
  }

  addEventListeners () {
    this.toggleMenuButtonEl.addEventListener('click', this.toggleAnimation);
    this.toggleMenuButtonEl.addEventListener('click', this.toggleNavbar);

    // TODO: add event listener to close header when clicking outside
    // the navigation. Will be done, once more elements are added.
  }

  /**
   * Toggle the visibility of the navigation bar
   */
  toggleNavbar () {
    this.navbarEl.classList.toggle('navigator--collapse');
    this.navbarEl.classList.toggle('navigator--expand');
  }

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
