$(document).ready(function(){
  arrow_functions_example();
  $('#tema').change(function () {
    switch ($('#tema').val()) {
      case 'arrow_functions':
        arrow_functions_example();
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
        break;
      default:
        console.log('Tema no encontado.');
        break;
    }
  })
});
