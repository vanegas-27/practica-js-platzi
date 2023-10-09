/**
 * metodos de js.
 */

//createElement('img or span')

/**
 * setAtribute(atri,valor)
 * 
 * crea una atributo en cualquier etiqueta.
 */

/**
 * para agregar en html se puede utilizar append o appendChild
 */

/**
 * para que se usa el classlist
 * 
 * esta nos sirve para crear, eliminar o midificar una clase
 * 
 * classlist.add('negromania') añade la clase negroMania
 * 
 * classlist.toggle('negromania') si la tiene se la quita, sino se la pone
 * 
 * classlist.contains('negromania') true o false, si esta la clase
 */


/**
 * con este line decimos que nos quite 
 * o nos ponga la clase 
 * */



const email = document.querySelector('.navbar-email');
const menu = document.querySelector('.desktop-menu');
email.addEventListener('click', toggleMenu);

function toggleMenu() {
	menu.classList.toggle('inactive')
}



const menuHamburguesa = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
menuHamburguesa.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
	mobileMenu.classList.toggle('inactive')

	if(!productos.classList.contains('inactive')){
		productos.classList.toggle("inactive");
	};
};



const carrito = document.querySelector('.navbar-shopping-cart');
const productos = document.querySelector('.product-detail');
carrito.addEventListener('click',showCarrito);

function showCarrito(){
	productos.classList.toggle('inactive');

	if(!mobileMenu.classList.contains('inactive')){
		mobileMenu.classList.toggle('inactive');
	}
}


const arrayProductos = []

arrayProductos.push({
	name:"bike",
	precio:3000,
	img:'./logos/noiseferatu.jpg'
});

arrayProductos.push({
	name:"camisa",
	precio:2500,
	img:'./logos/noiseferatu.jpg'
});

arrayProductos.push({
	name:"pantalon",
	precio:400,
	img:'./logos/noiseferatu.jpg'
});

arrayProductos.push({
	name:"camisa",
	precio:2500,
	img:'./logos/noiseferatu.jpg'
});

arrayProductos.push({
	name:"pantalon",
	precio:400,
	img:'./logos/noiseferatu.jpg'
});

const contenedorCards = document.querySelector('.cards-container');

function renderArticle(array){
	for(product of array){
		const element = document.createElement('div')
		element.classList.add('product-card')
	
		const img = document.createElement('img')
		img.setAttribute('src', product.img)
		img.setAttribute('alt','foto de prueba en js')
	
		const productInfo = document.createElement('div')
		productInfo.classList.add('product-info')
	
		const container = document.createElement('div')
	
		const p1 = document.createElement('p')
		p1.innerText = `$${product.precio}`;
	
		const p2 = document.createElement('p')
		p2.innerText = `$${product.name}`
	
		const figure = document.createElement('figure');
		const imgFigure = document.createElement('img')
	
		imgFigure.setAttribute('src','./icons/bt_add_to_cart.svg')
	
		figure.appendChild(imgFigure);
		container.appendChild(p1)
		container.appendChild(p2)
		productInfo.appendChild(container)
		productInfo.appendChild(figure)
		element.appendChild(img)
		element.appendChild(productInfo)
	
		contenedorCards.appendChild(element);
	};
};

renderArticle(arrayProductos);











