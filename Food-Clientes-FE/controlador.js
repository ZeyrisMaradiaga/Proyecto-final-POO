const responsiveBtn = document.querySelector('.navbar-toggler');
const secondayNavBar = document.querySelector('.secondary-nav');
const contentNavBar = document.querySelector('.titles-container');
const landingAction = document.querySelectorAll('.landing-action');
const landingFirst = document.querySelector('.first-section');
const landingSecond = document.querySelector('.second-section');
const footer = document.querySelector('.third-section');
const login = document.querySelector('.login');
const btnLogin = document.querySelector('.login-btn');
const categorias = document.querySelector('.categorias');
const mainNavBar = document.querySelector('.navbar');
const categoriaItems = document.querySelectorAll('.item-categoria');
const restaurantes = document.querySelector('.restaurantes');
const atras = document.querySelector('.flecha-atras');
const atras2 = document.querySelector('.flecha-atras-2');
const restaurantesItems = document.querySelectorAll('.restaurante-container');
const productos = document.querySelector('.productos');
const btnOrdernar = document.querySelectorAll('.btn-ordernar');
const atras3 = document.querySelector('.atras-3');
const carritoIcon = document.querySelector('.carrito-icon');
const carrito = document.querySelector('.carrito');
const btnProceder = document.querySelector('.proceder-compra');
const btnCancelar = document.querySelector('.cancelar-compra');
const ubicacion = document.querySelector('.ubicacion');
const mapa = document.querySelector('.contenedor-mapa');
const btnPagar = document.querySelector('.btn-pagar');
const btnCancelUbicacion = document.querySelector('.btn-cancelar');
const pagar = document.querySelector('.pagar');
const btnPago = document.querySelectorAll('.btn-pago')
const linkToHomePage = document.querySelector('.homePage-link');
const linkToUbicacion = document.querySelector('.ubicacion-link');
const linkToRestaurante = document.querySelector('.restaurante-link');
const linkToCarro = document.querySelector('.carro-link');
const linkToLogin = document.querySelector('.salir-link');

function renderizarLogin() {
    landingAction.forEach(element => {
        element.addEventListener('click', (e) => {
            landingFirst.classList.add('oculto');
            landingSecond.classList.add('oculto');
            footer.classList.add('oculto');


            login.classList.remove('oculto');
        })
    })

    btnLogin.addEventListener('click', () => {
        login.classList.add('oculto');

        mainNavBar.classList.remove('oculto');
        categorias.classList.remove('oculto');
        footer.classList.remove('oculto');
    })

    atras.addEventListener('click', () => {
        mainNavBar.classList.add('oculto');
        categorias.classList.add('oculto');
        footer.classList.add('oculto');


        landingFirst.classList.remove('oculto');
        landingSecond.classList.remove('oculto');
        footer.classList.remove('oculto');

    })
}

function renderizarRestaurantes() {

    categoriaItems.forEach(element => {
        element.addEventListener('click', () => {
            mainNavBar.classList.add('oculto');
            categorias.classList.add('oculto');
            footer.classList.add('oculto');

            mainNavBar.classList.remove('oculto');
            restaurantes.classList.remove('oculto');
            footer.classList.remove('oculto');

        })
    })

    atras2.addEventListener('click', () => {
        mainNavBar.classList.add('oculto');
        restaurantes.classList.add('oculto');
        footer.classList.add('oculto');

        mainNavBar.classList.remove('oculto');
        categorias.classList.remove('oculto');
        footer.classList.remove('oculto');
    })

}

function renderizarProductos() {

    restaurantesItems.forEach(restaurante => {
        restaurante.addEventListener('click', () => {
            mainNavBar.classList.add('oculto');
            restaurantes.classList.add('oculto');
            atras2.classList.add('oculto');
            footer.classList.add('oculto');

            mainNavBar.classList.remove('oculto');
            productos.classList.remove('oculto');
            footer.classList.remove('oculto');

        })
    })

    atras3.addEventListener('click', () => {
        mainNavBar.classList.add('oculto');
        productos.classList.add('oculto');
        footer.classList.add('oculto');

        mainNavBar.classList.remove('oculto');
        restaurantes.classList.remove('oculto');
        atras2.classList.remove('oculto');
        footer.classList.remove('oculto');
    })

}

function renderizarCarrito() {

    carritoIcon.addEventListener('click', () => {
        mainNavBar.classList.add('oculto');
        productos.classList.add('oculto');
        footer.classList.add('oculto');

        mainNavBar.classList.remove('oculto');
        carrito.classList.remove('oculto');
        footer.classList.remove('oculto');
    })

    btnProceder.addEventListener('click', () => {
        mainNavBar.classList.add('oculto');
        carrito.classList.add('oculto');
        footer.classList.add('oculto');

        mainNavBar.classList.remove('oculto');
        ubicacion.classList.remove('oculto');
        mapa.classList.remove('oculto');
        footer.classList.remove('oculto');
    })

    btnCancelar.addEventListener('click', () => {
        mainNavBar.classList.add('oculto');
        carrito.classList.add('oculto');
        footer.classList.add('oculto');

        mainNavBar.classList.remove('oculto');
        restaurantes.classList.remove('oculto');
        atras2.classList.remove('oculto');
        footer.classList.remove('oculto');
    })
}

function renderizarPago() {
    btnPagar.addEventListener('click', () => {
        mainNavBar.classList.add('oculto');
        ubicacion.classList.add('oculto');
        mapa.classList.add('oculto');
        footer.classList.add('oculto');

        mainNavBar.classList.remove('oculto');
        pagar.classList.remove('oculto');
        footer.classList.remove('oculto');
    })

    btnCancelUbicacion.addEventListener('click', () => {
        mainNavBar.classList.add('oculto');
        ubicacion.classList.add('oculto');
        mapa.classList.add('oculto');
        footer.classList.add('oculto');

        mainNavBar.classList.remove('oculto');
        carrito.classList.remove('oculto');
        footer.classList.remove('oculto');
    })
}

function pagoRealizado() {
    btnPago.forEach(btn => {
        btn.addEventListener('click', () => {
            mainNavBar.classList.add('oculto');
            pagar.classList.add('oculto');
            footer.classList.add('oculto');

            mainNavBar.classList.remove('oculto');
            categorias.classList.remove('oculto');
            footer.classList.remove('oculto');
        })
    })
}

linkToHomePage.addEventListener('click', () => {
    ocultarTodo();
    landingFirst.classList.remove('oculto');
    landingSecond.classList.remove('oculto');
    footer.classList.remove('oculto');
})

linkToUbicacion.addEventListener('click', () => {
    ocultarTodo();
    mainNavBar.classList.remove('oculto');
    ubicacion.classList.remove('oculto');
    mapa.classList.remove('oculto');
    footer.classList.remove('oculto');
})

linkToRestaurante.addEventListener('click', () => {
    ocultarTodo();
    mainNavBar.classList.remove('oculto');
    restaurantes.classList.remove('oculto');
    footer.classList.remove('oculto');
})

linkToCarro.addEventListener('click', () => {
    ocultarTodo();
    mainNavBar.classList.remove('oculto');
    carrito.classList.remove('oculto');
    footer.classList.remove('oculto');
})

linkToLogin.addEventListener('click', () => {
    ocultarTodo();

    login.classList.remove('oculto');
})




function ocultarTodo() {
    landingFirst.classList.add('oculto');
    landingSecond.classList.add('oculto');
    footer.classList.add('oculto');
    mainNavBar.classList.add('oculto');
    categorias.classList.add('oculto');
    restaurantes.classList.add('oculto');
    productos.classList.add('oculto');
    carrito.classList.add('oculto');
    ubicacion.classList.add('oculto');
    mapa.classList.add('oculto');
    pagar.classList.add('oculto');
}

let contenido;
responsiveBtn.addEventListener('click', () => {
    secondayNavBar.classList.toggle('secondary-nav-fill');
})

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        console.log(position)
        const latitud = position.coords.latitude;
        const longitud = position.coords.longitude;
        console.log(latitud, longitud)

        const coordenadas = [latitud, longitud]

        const map = L.map('map').setView(coordenadas, 15);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker(coordenadas).addTo(map)
            .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
            .openPopup();



    }, function () {
        alert('no se pudo obtener su ubicacion')
    })
}

setTimeout(() => {
    mapa.classList.add('oculto');
}, 100)
renderizarLogin();
renderizarRestaurantes();
renderizarProductos();
renderizarCarrito();
renderizarPago();
pagoRealizado();