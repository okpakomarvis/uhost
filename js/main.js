const backdrop = document.querySelector('.backdrop');
const actionPlanButtons = document.querySelectorAll('.plan button');
const planModal = document.querySelector('.modal');
const cancelPlan = document.querySelector('.modal__actions button');
const sideDrawbtn = document.querySelector('.toggle-button');
const sideDraw = document.querySelector('.mobile-nav');

const buttonactionHandler = (buttons, handler) => {
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', handler);
	}
};
const backdropHandler = (params = '') => {
	if (params === 'add') {
		backdrop.classList.add('visible');
	}
	else {
		backdrop.classList.remove('visible');
		sideDraw.classList.remove('visible');
	}
};
const adModalHandler = (params = '') => {
	if (params === 'add') {
		backdrop.style.display = 'block';
		setTimeout(function() {
			backdropHandler('add');
		}, 10);
		planModal.classList.add('visible');
	}
	else {
		setTimeout(function() {
			backdropHandler();
		}, 500);
		backdrop.style.display = 'none';
		if (planModal) {
			planModal.classList.remove('visible');
		}
	}
};
const sideDrawerHandler = () => {
	sideDraw.classList.toggle('visible');
	sideDraw.classList.contains('visible') ? backdropHandler('add') : backdropHandler();
};
sideDraw.addEventListener('click', backdropHandler);
sideDrawbtn.addEventListener('click', sideDrawerHandler);
if (cancelPlan) {
	cancelPlan.addEventListener('click', adModalHandler);
}
backdrop.addEventListener('click', adModalHandler);
buttonactionHandler(actionPlanButtons, adModalHandler.bind(null, 'add'));
