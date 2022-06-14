const cartIcon = document.querySelector('.cart'),
	shoppingCart = document.querySelector('.shopping-cart'),
	close = document.querySelectorAll('.close'),
	body = document.body,
	addToBag = document.querySelector('.add-to-bag'),
	counter = document.querySelectorAll('.counter'),
	basketProducts = document.querySelector('.shopping-cart__products'),
	shoppingFull = document.querySelector('.shopping-cart__footer--full'),
	shoppingEmpty = document.querySelector('.shopping-cart__footer--empty'),
	total = document.querySelector('.total'),
	remove = document.querySelector('.remove'),
	price = 22.82;


// Cart icon click
cartIcon.addEventListener('click', () => {
	shoppingCart.classList.add('active');
	body.classList.add('inactive');
});


// Add to cart functionality
addToBag.addEventListener('click', () => {
	addToBag.classList.add('spinning');
    setTimeout( 
        function  (){  
            addToBag.classList.remove('spinning');
            shoppingCart.classList.add('active');
			body.classList.add('inactive');
			basketProducts.classList.add('added');
			shoppingEmpty.style.display = "none";
			shoppingFull.style.display = "flex";
			shoppingCart.classList.add('bottom');

			const newTotal = Number(total.innerHTML) + price;

			total.innerHTML = newTotal.toFixed(2);

			for (let i = 0; i < counter.length; i++) {
				++counter[i].innerHTML;
			}

			
      
        }, 1000
    );
});


// Close icon or 'continue shopping' click
for (let i = 0; i < close.length; i++) {
	close[i].addEventListener('click', () => {
		shoppingCart.classList.remove('active');
		body.classList.remove('inactive');
	});
}


// Remove all instances of item on 'Remove' click
remove.addEventListener('click', () => {
	total.innerHTML = 0;
	for (let i = 0; i < counter.length; i++) {
		counter[i].innerHTML = 0;
	}
	basketProducts.classList.remove('added');
	shoppingFull.style.display = "none";
	shoppingEmpty.style.display = "flex";
	shoppingCart.classList.remove('bottom');
	
});


// Close cart when clicked outside cart
document.addEventListener('mouseup', (event) => {
	const withinBoundaries = event.composedPath().includes(shoppingCart)

	if (!withinBoundaries) {
		body.classList.remove('inactive');
		shoppingCart.classList.remove('active');
	} 
});
	

