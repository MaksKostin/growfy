"use strict"
document.addEventListener('click', documentClik);


function documentClik(e) {
	const targetItem = e.target;
	if (targetItem.closest('.icon-menu')) {
	document.documentElement.classList.toggle('menu-open');
		
	}
}