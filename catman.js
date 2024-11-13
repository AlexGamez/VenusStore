// Obtener los elementos de filtro
const categoriaFiltro = document.getElementById('categoria-filtro');
const tallaFiltro = document.getElementById('talla-filtro');
const colorFiltro = document.getElementById('color-filtro');

// Función para filtrar productos
function filtrarProductos() {
    const categoria = categoriaFiltro.value;
    const talla = tallaFiltro.value;
    const color = colorFiltro.value;

    const productos = document.querySelectorAll('.producto');

    productos.forEach(producto => {
        const categoriaProducto = producto.getAttribute('data-categoria');
        const tallaProducto = producto.getAttribute('data-talla');
        const colorProducto = producto.getAttribute('data-color');

        if ((categoria === 'todos' || categoria === categoriaProducto) &&
            (talla === 'todos' || talla === tallaProducto) &&
            (color === 'todos' || color === colorProducto)) {
            producto.style.display = 'block';
        } else {
            producto.style.display = 'none';
        }
    });
}

// Agregar eventos a los selectores de filtro
categoriaFiltro.addEventListener('change', filtrarProductos);
tallaFiltro.addEventListener('change', filtrarProductos);
colorFiltro.addEventListener('change', filtrarProductos);

// Obtener el botón de borrar filtros
const borrarFiltrosBtn = document.getElementById('borrar-filtros');

// Función para borrar los filtros
function borrarFiltros() {
    // Restablecer los selectores a su valor inicial
    categoriaFiltro.value = 'todos';
    tallaFiltro.value = 'todos';
    colorFiltro.value = 'todos';

    // Mostrar todos los productos
    const productos = document.querySelectorAll('.producto');
    productos.forEach(producto => {
        producto.style.display = 'block';
    });
}

// Agregar el evento al botón de borrar filtros
borrarFiltrosBtn.addEventListener('click', borrarFiltros);