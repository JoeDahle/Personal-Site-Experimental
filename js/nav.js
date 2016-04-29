'use strict';

class navBar {
  constructor () {
    this.showMenuButtonEl = document.querySelector('menu-icon');
    this.hideMenuButtonEl = document.querySelector('exit-icon');
    this.navBarEl = document.querySelector('header-navbar-list');

    this.showNavbar = this.showNavbar.bind(this);
    this.hideNavbar = this.hideNavbar.bind(this);

    this.addEventListeners();
  }

  addEventListeners () {
    this.showMenuButtonEl.addEventListener('mouseover', this.showNavbar);
    this.hideMenuButtonEl.addEventListener('mouseout', this.hideNavbar);
  }

  showNavbar () {
    
  }

  hideNavbar () {

  }
}

new navBar();
