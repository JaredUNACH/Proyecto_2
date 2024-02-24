document.addEventListener('DOMContentLoaded', (event) => {
    const sections = document.querySelectorAll('.informacion ul, .Ventajas ul, .Desventajas ul, .conclusion ul, .recursos ul');
    sections.forEach((section) => {
        section.style.display = 'none';
    });

    setTimeout(() => {
        sections.forEach((section) => {
            section.style.display = 'block';
        });
        // Ajusta el margen superior del primer elemento después del encabezado
        document.querySelector('.informacion').style.marginTop = "180px"; 
    }, 3000);
});
// Código JavaScript para el efecto 3D
document.querySelectorAll('.div3D').forEach(div => {
    div.addEventListener('mousemove', e => {
        let rect = e.target.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        let dx = (x - rect.width / 2) / 450;
        let dy = (y - rect.height / 2) / -450;

        e.target.style.transform = `rotateY(${dx}deg) rotateX(${dy}deg)`;
    });

    div.addEventListener('mouseleave', e => {
        e.target.style.transform = '';
    });
});
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

