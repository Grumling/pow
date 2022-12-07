const mobileLinks = document.querySelector('.mobile-nav-links');
const mobileLink = document.querySelectorAll('.mobile-nav-link');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.close-icon');
const menuIcon = document.querySelector('.menu-icon');

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

closeIcon.style.display = 'none';

hamburger.addEventListener('click', toggleMenu);

mobileLink.forEach(function (menuItem) {
	menuItem.addEventListener('click', toggleMenu);
});
