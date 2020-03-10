// Destructuring - Deseestructuración
function destructuring_example() {
  console.log('--- Destructuring ---');
  let {nombre, edad} = {nombre:'Juliana', edad:'36'}
  console.log('Deseestructuración de JSON');
  console.log(`- Nombre: ${nombre} Edad: ${edad}`);
  let [a,b,c] = ['Amarillo', 'Azul', 'Rojo'];
  console.log('Deseestructuración de array');
  console.log(`- ${a} - ${b} - ${c}`);
}
// Map - Mapas
function map_example() {
  console.log('--- Map ---');
  let mapa = new Map();
  mapa.set('marca', 'Renault');
  mapa.set('color', 'Negro');
  mapa.set('tipo', 'Eléctrico');
  console.log(mapa);
  // Acceder a un valor
  console.log(mapa.get('marca'));
  // Varificar si tiene una clase
  console.log(mapa.has('color'));
  // Eliminar un elemento
  console.log(mapa.delete('tipo'));
  // Recorrer objeto
  mapa.forEach((item, i) => {
    console.log(`${i} => ${item}`);
  });
}
// Set - Conjuntos
function set_example() {
  console.log('--- Set ---');
  let lenguajes = new Set();
  lenguajes.add('Php');
  lenguajes.add('Java');
  lenguajes.add('C#').add('Go');
  console.log(lenguajes);
  // Obtenet el tamaño del objeto
  console.log('tamaño de objeto lenguajes: '+lenguajes.size);
  // Validar la existencia de un elemento
  console.log(lenguajes.has('Php'));
  // Eliminar un elemento
  console.log('Se elimina Php: '+lenguajes.delete('Php'));
  // Recorrer el objeto
  lenguajes.forEach((item, i) => {
    console.log(`- ${item}`);
  });
}
