// Modify with comments
function findExample(){
const inventario = [
    {nombre: 'manzanas', cantidad: 2},
    {nombre: 'bananas', cantidad: 0},
    {nombre: 'cerezas', cantidad: 5}
];

const resultado = inventario.find( fruta => fruta.nombre === 'cerezas' );

console.log(resultado); // { nombre: 'cerezas', cantidad: 5 }
}
