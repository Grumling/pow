// Declaring our variables
const mobileLinks = document.querySelector('.mobile-nav-links');
const mobileLink = document.querySelectorAll('.mobile-nav-link');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.close-icon');
const menuIcon = document.querySelector('.menu-icon');

//We are using an if statement to check if mobileLinks have the showMenu class
// If it does, we're removing the showMenu class
//If it doesn't, we're adding the showMenu class

function toggleMenu() {
	if (mobileLinks.classList.contains('showMenu')) {
		mobileLinks.classList.remove('showMenu');
		closeIcon.style.display = 'none';
		menuIcon.style.display = 'block';
	} else {
		mobileLinks.classList.add('showMenu');
		closeIcon.style.display = 'block';
		menuIcon.style.display = 'none';
	}
}

//Setting closeIcon to display none
closeIcon.style.display = 'none';

//Adding a click event for hamburger
//When clicked, it will run the toggleMenu function
hamburger.addEventListener('click', toggleMenu);

//Looping through all of the menuItems and adding an click event to each of them
mobileLink.forEach(function (menuItem) {
	menuItem.addEventListener('click', toggleMenu);
});

