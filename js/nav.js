'use strict';

class navBar {
  constructor () {
    // element selectors
    this.toggleMenuButtonEl = document.querySelector('.js-menu');
    this.navbarEl = document.querySelector('.js-navigator');
    this.backgroundEl = document.querySelector('.intrigue__container');

    // bindings
    this.toggleAnimation = this.toggleAnimation.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.hideNavbar = this.hideNavbar.bind(this);

    this.addEventListeners();
  }

  addEventListeners () {
    this.toggleMenuButtonEl.addEventListener('click', this.toggleAnimation);
    this.toggleMenuButtonEl.addEventListener('click', this.toggleNavbar);
    this.backgroundEl.addEventListener('click', this.hideNavbar);

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

  hideNavbar () {
    this.navbarEl.classList.remove('navigator--expand');
    this.navbarEl.classList.add('navigator--collapse');
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
