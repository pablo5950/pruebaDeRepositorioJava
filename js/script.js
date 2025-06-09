let carrito =[];    /* Definimos el carrito de compras vacio*/

const moto1 = {    /* Objetos con sus valores*/
  marca: "YAMAHA xtz",
  cilindrada: 250,
  modelo: 2020,
  precio: 5000,
  cantidad: 5,
}

const moto2 = {
  marca: "HONDA tornado",
  cilindrada: 450,
  modelo: 2022,
  precio: 7000,
  cantidad: 5,
}

const moto3 = {
  marca: "KTM rzt",
  cilindrada: 250,
  modelo: 2021,
  precio: 6500,
  cantidad: 5,
}


const moto4 = {
  marca: "BMW a9",
  cilindrada: 600,
  modelo: 2023,
  precio: 10000,
  cantidad: 5,
}

const moto5 = {
  marca: "ROYAL EINFELD torch",
  cilindrada: 600,
  modelo: 2018,
  precio: 8500,
  cantidad: 5,
}

const calcularTotal = () => carrito.reduce((total, moto) => total + moto.precio * moto.cantidad, 0);


alert('Bienvenido al simulador de compras de motos de JBIKES,un placer')
const motoSeleccionada = [moto1, moto2, moto3, moto4, moto5];

const marcaUser = parseInt(prompt('¿En que marca usted está interesado?: \n 1- YAMAHA xtz - $5000  \n 2- HONDA tornado - $7000 \n 3- KTM rzt - $6500 \n 4- BMW a9 - $10000 \n 5- ROYAL EINFELD torch - $8500'));

if (marcaUser >= 1 && marcaUser <= 5) {
  carrito.push(motoSeleccionada[marcaUser - 1]);
  alert(`✅ Moto agregada: ${motoSeleccionada[marcaUser - 1].marca} - ${motoSeleccionada[marcaUser - 1].precio} USD`);

  let continuar = parseInt(prompt('¿Desea comprar más motos?\n 1- Sí\n 2- No'));


  while (continuar === 1) {  
    let marcaUser = parseInt(prompt('¿Qué otra marca desea comprar?: \n 1- YAMAHA xtz - $5000  \n 2- HONDA tornado - $7000 \n 3- KTM rzt - $6500 \n 4- BMW a9 - $10000 \n 5- ROYAL EINFELD torch - $8500'));

    if (marcaUser >= 1 && marcaUser <= 5) {
      carrito.push(motoSeleccionada[marcaUser - 1]); 
      alert(`✅ Moto agregada: ${motoSeleccionada[marcaUser - 1].marca} - ${motoSeleccionada[marcaUser - 1].precio} USD`);
      
    } else {
      alert("❌ Opción inválida.");
    }

    continuar = parseInt(prompt('¿Desea seguir comprando?\n 1- Sí\n 2- No'));
  }

  alert(`🛒 Compra finalizada.💰Total de la compra: ${calcularTotal()} USD ¡Gracias por elegir JBikes!`);
}
