window.addEventListener('load', function(){
		console.log('oui animation')
		var titre1 = document.getElementsByClassName('site-title');
		var titre2 = document.getElementsByClassName('site-description');

		titre1[0].classList.add('animation1');
		titre2[0].classList.add('animation2');
})