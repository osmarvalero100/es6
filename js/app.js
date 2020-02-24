$(document).ready(function(){
  map_example();
  $('#tema').change(function () {
    switch ($('#tema').val()) {
      case 'map':
        map_example();
        break;set_example()
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
