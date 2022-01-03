"use strict";
class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light" >
	  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
	  <div class="collapse navbar-collapse" id="navbarSupportedContent1">
	    <ul class="navbar-nav mr-auto">
	      <li class="nav-item active"> <a class="nav-link" href="index.html">Home</a> </li> 
          <li class="nav-item"> <a class="nav-link" href="portfolio.html">Portfolio</a> </li>
	      <li class="nav-item"> <a class="nav-link" href="about.html">About</a> </li>
		  <li class="nav-item"> <a class="nav-link" href="contact.html">Contact</a> </li>
        </ul>
  </div>
</nav>
<header> <img src="Images/TripleMonkeyNewColors.svg" alt="Triple Monkey Studio logo"/></header>
    `;
       $(document).ready(updateActivePage());
    }
}
customElements.define('header-component', Header);

// Function to set active menu selection
function updateActivePage() {
    $('li.active').removeClass('active');
    //let page = location.pathname.slice(1);
    $(`a[href="${location.pathname.slice(1)}"]`).closest('li.nav-item').addClass('active');
 };


//<li class="nav-item active"> <a class="nav-link" href=page-name+".html">Home <span class="sr-only">(current)</span></a> </li>