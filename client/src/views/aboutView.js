const About = function () {

}

About.prototype.aboutFunction = function () {
	const container = document.querySelector('#container');
	const homeForm = document.querySelector('#home-form');
	const form = document.querySelector('#save-location');
	container.innerHTML = "";
	homeForm.innerHTML = "";
	form.innerHTML = "";

	container.classList.remove("list-contain");
	container.classList.add("container");

	homeForm.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}

module.exports = About;
