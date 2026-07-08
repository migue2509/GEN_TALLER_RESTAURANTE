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

function soloDisponibles(menu){

    const menuSoloDisponibles = []

    console.log("Platos Disponibles del Dia")

    for (let i = 0; i < menu.length; i++){

        if (menu[i].disponible === true){
            menuSoloDisponibles.push(menu[i])
        }
    }

    pedidoCliente(menuSoloDisponibles);
};

function pedidoCliente(menu){
    // Pedido del cliente
    const pedido = []
    

    while(true){

        console.log("")
        console.log("Menu del dia")

        mostrarMenu(menu)

        console.log("")
        console.log(`Copia "Salir" para finalizar tu pedido`)   
        console.log(`Copia "pedido" para ver tu pedido`)  
        console.log(`Copia "eliminar" para la ultima seleccion`)
        
        const eleccion = prompt("Selecciona tu plato: ");


        if(eleccion.toLowerCase() === "salir"){   
            console.log("Saliste del programa");
            break;
        }else if(eleccion.toLocaleLowerCase() === "pedido"){
            if(pedido.length > 0){
                console.log(`Tu pedido es:`);
                mostrarMenu(pedido);

            }else{
                console.log(`Tu pedido se encuentra vacio, no hay nada que mostrar`)
            }
        }else if(eleccion.toLowerCase() === "eliminar"){
            if(pedido.length > 0){
                const Platoeliminado = pedido.pop();
                console.log(`Eliminaste: ${Platoeliminado.nombre}`)

                console.log(`Pedido Completo:`);
                mostrarMenu(pedido);

            }else{
                console.log(`Tu pedido se encuentra vacio, no se puede eliminar nada`)
            }
            
        }else{
            for (let i = 0; i < menu.length; i++){
                if (Number(eleccion) === i + 1){
                    pedido.push(menu[i])
                    break;
                }
            };
        }

    };

    calcularCuenta(pedido);
   
}


function calcularCuenta(menu){
   
    const iva = 0.19
    let subtotal = 0
    
    
    for(let i = 0; i < menu.length; i++){
        subtotal += menu[i].precio
    }

    const valorIva = subtotal * iva;
    const total = subtotal + valorIva;

    return total;
}

soloDisponibles(menu);

