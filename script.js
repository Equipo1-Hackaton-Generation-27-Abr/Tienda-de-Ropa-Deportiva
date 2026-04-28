// Base de Datos
const productos = {
    "1": {
        nombre: "Cloudflow 5 AD Obsidian",
        precio: "$2,400",
        imagenPrincipal: "Stock/1.jpg",
        thumbnails: ["Stock/1-v1.jpg", "Stock/1-v2.jpg", "Stock/1-v3.jpg"], // Necesitas estas imágenes extra
        specs: [
            "Tecnología CloudTec", "Diseño liviano", "Parte superior transpirable",
            "Amortiguación reactiva", "Versatilidad", "Durabilidad", "Estética moderna"
        ],
        genero: ["Hombre", "Mujer"],
        tallas: ["24", "25", "26", "27"]
    },
    "2": {
        nombre: "Vora Street Classic",
        precio: "$1,899",
        imagenPrincipal: "Stock/2.jpg",
        thumbnails: ["Stock/2-v1.jpg", "Stock/2-v2.jpg"], 
        specs: [
            "Cuero premium", "Suela de goma antideslizante", "Ajuste perfecto",
            "Diseño retro", "Fácil de limpiar"
        ],
        genero: ["Unisex"],
        tallas: ["23", "24", "25", "26", "27"]
    }
    
};

// ID de la URL (Ej: detalles.html?id=1)
const urlParams = new URLSearchParams(window.location.search);
const productoId = urlParams.get('id');

// Pintar los datos 
const info = productos[productoId];

if (info) {
    // Info Básica
    document.getElementById('detalle-titulo').innerText = info.nombre;
    document.getElementById('detalle-precio').innerText = info.precio + " MXN";
    document.getElementById('detalle-imagen-principal').src = info.imagenPrincipal;

    // Miniaturas
    const thumbList = document.getElementById('thumb-list');
    info.thumbnails.forEach(imgSrc => {
        const img = document.createElement('img');
        img.src = imgSrc;
        img.onclick = () => { document.getElementById('detalle-imagen-principal').src = imgSrc; };
        thumbList.appendChild(img);
    });

    // Especificaciones (Lista de puntos)
    const specsList = document.getElementById('detalle-specs');
    info.specs.forEach(spec => {
        const li = document.createElement('li');
        li.innerText = spec;
        specsList.appendChild(li);
    });

    // Llenar Selectores (Género y Tallas)
    llenarSelect('gender', info.genero);
    llenarSelect('sizes', info.tallas);

} else {
    document.body.innerHTML = "<h1>Producto no encontrado</h1><a href='index.html'>Volver</a>";
}

function llenarSelect(idSelect, opciones) {
    const select = document.getElementById(idSelect);
    opciones.forEach(opt => {
        const option = document.createElement('option');
        option.innerText = opt;
        select.appendChild(option);
    });
}