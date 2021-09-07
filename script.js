window.addEventListener("load", () => {
	const showMenuBtn = document.querySelector(".mobile-nav");
	const menu = document.querySelector(".hide-menu");

	showMenuBtn.addEventListener("click", () => {
        menu.classList.toggle('hidden')
	});
});