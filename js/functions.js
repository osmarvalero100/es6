// Arrow functions
function arrow_functions_example(){
  console.log('--- Arrow functions ---');
  let f = () => {
    return 'Hola!';
  }
  console.log(f());
  // Retorno implicito
  let f1 = () => 'Hola! con retorno Implicito';
  console.log(f1());
  console.log('Las arrow function no tiene contexto por eso se puede usar "this"');
  let objeto = {
    name: 'Osmar',
    curso: function() {
        setTimeout(()=> {
          console.log(`${this.name} está en el cuso de ES6.`);
      });
    }
  }
  objeto.curso();
  console.log('Arrow con 1 solo parámetro');
  fp = nombre => `Hola ${nombre} !`;
  console.log(fp('Osmar'));
  console.log('Arrow con parametros');
  let fp1 = (nombre, apellido) => `Hola ${nombre} ${apellido} !`;
  console.log(fp1('Osmar', 'Valero'));
}
// Bucle for
function for_example() {
  console.log('--- For ---');
  console.log('for (let value of list)');
  let list = [8, 3, 11, 9, 6];
  for (let value of list) {
    console.log(value);
  }
  for (var char of 'Hola!') {
    console.log(char);
  }
  console.log('for (const key in list)');
  for(const key in list) {
    console.log(key)
  }
}
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
