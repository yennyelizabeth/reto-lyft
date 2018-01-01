$(document).ready(function(){
  /* declaración de variables para los elementos */
  var $firstName = $('#inputFirstName'); 
  var $lastName = $('#inputLastName'); 
  var $email = $('#inputEmail');
  var $check = $('#inputCheck');
  var $next = $('#buttonNext');
  var $validateFirstName = false;
  var $validateLastName = false;
  var $validateEmail = false;
  var $validateCheck = false;
  /* declaración de parámetros */
  var PATERNEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
  var PATERNNAME = /^([a-z ñáéíóú]{2,60})$/i; 
  /* inicialmente botón deshabilidato */
  $next.prop('disabled',true);
  /* validación de ingreso de primer nombre */
  $firstName.on('input', function(){
    if(PATERNNAME.test($(this).val()) & $(this).val().length > 2){
      $validateFirstName = true ;
      activeNext();
    }
  });
  /* validación de ingreso de apellido */
  $lastName.on('input', function(){
    if(PATERNNAME.test($(this).val()) & $(this).val().length >2){
      $validateLastName = true ;
      activeNext();
    }
  });
  /* validación de ingreso de email */
  $email.on('input', function(){
    if(PATERNEMAIL.test($email.val())){
      $validateEmail = true ;
      activeNext();
    }
  });
  /* validación de check */
  $check.change(function(){
    if ( $(this).is(':checked')){
      $validateCheck = true ;
      activeNext();
    }
  });
  /* validación de grupal para registro satisfactorio para habilitar botón */
  var activeNext = function (){
    if ( $validateFirstName & $validateLastName & $validateEmail & $validateCheck){
      $next.prop('disabled',false);
    }
  };
});
