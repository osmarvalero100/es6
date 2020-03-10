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
