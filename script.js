const popUp = document.querySelectorAll('.pop-up'),
	share = document.getElementById('share'),
	disn = document.querySelector('.disn'),
	disf = document.querySelector('.disf');

const showSocials = () => {
	share.classList.toggle('show');
	disn.classList.toggle('show');
	disf.classList.toggle('hide');
};

for (let i = 0; i < popUp.length; i++) {
	popUp[i].addEventListener('click', showSocials);
}
