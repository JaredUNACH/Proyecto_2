
//Boton de menu
document.getElementById('menuButton3').addEventListener('click', function() {
    var dropdown = document.getElementById('dropdown3');
    if (dropdown.style.display !== 'block') {
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
});

//Animacion de los links del menu
document.querySelectorAll('.dropdown-content3 a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.animate([
            // keyframes
            { transform: 'scale(1)', color: '#000' },
            { transform: 'scale(1.1)', color: '#f00' },
            { transform: 'scale(1)', color: '#000' }
        ], {
            // timing options
            duration: 300,
            iterations: 1
        });
    });
});

//Animacion de transicion de la pagina
document.querySelectorAll('.dropdown-content3 a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();  // Prevenir la navegación inmediata

        // Agrega una animación de desvanecimiento al body
        document.body.animate([
            { opacity: 1 },
            { opacity: 0 }
        ], {
            duration: 500,
            easing: 'ease-out'
        }).onfinish = () => {
            // Navega a la nueva página una vez que la animación se haya completado
            window.location = link.href;
        };
    });
});

