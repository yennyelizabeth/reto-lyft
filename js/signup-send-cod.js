$(document).ready(function(e){
  /* declaración de variables - elementos */
  var $nextButton = $('#next-button') ;
  /* declaración de variables operacionales */
  var $codRandom = 0 ;
  var $codRandomString = '' ;
  /* generación de código random de 3 dígitos */
  $codRandom = Math.floor((Math.random() * 999) + 1);
  /* control de codigo de aleatorio de seguridad cuando es 3 dígitos*/
  if ($codRandom.toString().length === 3){
    $codRandomString = $codRandom.toString() ;
  } else {
    /* ... 1 dígito , completar a la izquierda con 2 ceros */
    if ($codRandom.toString().length === 1){
      alert('es 1');
      $codRandomString ='00' + $codRandom.toString() ;
    }
    /* ... 2 dígitos , completar a la izquierda con 1 cero */  
    if ($codRandom.toString().length === 2){
      $codRandomString ='0' + $codRandom.toString() ;
    }
  }
  /* muestra código , si es ok abre una nueva vista */ 
  var $option = confirm('Tu código LAB -' + $codRandomString );
  if ($option = true) {
    randomArray[0] = $codRandomString;
    alert(randomArray[0]);
    setTimeout(function(){
      window.location.href='../views/signup-verify-phone.html';
    },10);
  }
});