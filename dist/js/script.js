//hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#navMenu');
const toTop = document.querySelector('#toTop');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('hamburger-active');
	navMenu.classList.toggle('hidden');
});

//navabr fixed
window.onscroll = function () {
	const header = document.querySelector('header');
	const fixedNav = header.offsetTop;

	if (window.scrollY > fixedNav) {
		header.classList.add('navbar-fixed');
		toTop.classList.remove('hidden');
		toTop.classList.add('flex');
	} else {
		header.classList.remove('navbar-fixed');
		toTop.classList.remove('flex');
		toTop.classList.add('hidden');
	}
};

//gak au
window.addEventListener('click', function (e) {
	if (e.target != hamburger && e.target != navMenu) {
		navMenu.classList.add('hidden');
		hamburger.classList.remove('hamburger-active');
	}
});

//darkmode toggle
const darkToggle = document.querySelector('#darkToggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
	if (darkToggle.checked) {
		html.classList.add('dark');
		localStorage.theme = 'dark';
	} else {
		html.classList.remove('dark');
		localStorage.theme = 'light';
	}
});

//pindahkan posisi toggle sesuai mode;
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
	darkToggle.checked = true;
 } else {
	darkToggle.checked = false;
 }
