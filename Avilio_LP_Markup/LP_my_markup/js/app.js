const a = document.getElementById('mobile-nav-button');
const b = document.getElementById('mobile-nav-button__icon');
const c = document.getElementById('menu-active');
const body = document.body;

b.addEventListener('click', function addClass() {		
		if (b.classList.contains('active') == false)
			{
				b.classList.add('active'); 
				c.classList.add('active');
				body.classList.add('overflow-hidden');
			}
		else {
			b.classList.remove('active');
			c.classList.remove('active');
			body.classList.remove('overflow-hidden');
			};
		});