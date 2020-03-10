var url_theme = 'js/tema/';
$(document).ready(function(){
  arrow_functions_example();
  $('#tema').change(function () {
    switch ($('#tema').val()) {
      case 'arrow_functions':
        arrow_functions_example();
        set_file('arrow.js');
        break;
      case 'map':
        map_example();
        break;
      case 'set':
        set_example();
        break;
      case 'destructuring':
        destructuring_example();
        break;
      case 'for':
        for_example();
        set_file('bucle-for.js');
        break;
      default:
        console.log('Tema no encontado.');
        break;
    }
  });

  set_file = file => {
    document.getElementById('file').setAttribute('href', `${url_theme}${file}`);
  }
});
