document.addEventListener('DOMContentLoaded', () => {
    const botonesFiltro = document.querySelectorAll('.btn-filtro');
    const tarjetasMascotas = document.querySelectorAll('.tarjeta-mascota');

    botonesFiltro.forEach(boton => {
        boton.addEventListener('click', () => {
            // 1. Cambiar la clase activa visual en el botón
            botonesFiltro.forEach(btn => btn.classList.remove('activo'));
            boton.classList.add('activo');

            // 2. Filtrar las tarjetas por categoría
            const categoriaSeleccionada = boton.getAttribute('data-categoria');

            tarjetasMascotas.forEach(tarjeta => {
                const categoriaTarjeta = tarjeta.getAttribute('data-categoria');

                if (categoriaSeleccionada === 'todos' || categoriaTarjeta === categoriaSeleccionada) {
                    tarjeta.style.display = 'flex';
                } else {
                    tarjeta.style.display = 'none';
                }
            });
        });
    });
});