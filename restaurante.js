const prompt = require("prompt-sync")();

const menu = [
    {
        "nombre": "Costillas BBQ",
        "precio": 20000,
        "categoría": "Fuerte",  
        "disponible": true
    },
    {
        "nombre": "5 Patacones",
        "precio": 10000,
        "categoría": "Entrada",  
        "disponible": false
    },
     {
        "nombre": "Jugo de Maracuya",
        "precio": 9000,
        "categoría": "bebida",  
        "disponible": true
    },
    {
        "nombre": "torta de milo",
        "precio": 8000,
        "categoría": "Postre",  
        "disponible": true
    },
]


// console.log(menu[1].precio)

function mostrarMenu(menu){
    for (let i = 0; i < menu.length; i++){
        console.log(`Plato # ${i + 1} - Nombre: ${menu[i].nombre} - Precio: $ ${menu[i].precio}`);
    }
};

mostrarMenu(menu);
