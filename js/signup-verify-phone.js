$(document).ready(function(e){
  /* declaración de parámetros fijos */
  var $PATTERN = /^3[\d]{3}$/;
  /* declaración de variables */
  var $cod = $('#input-cod');
  var $next = $('#buttonNext');
  var $resend = $('#buttonResend');
  /* inicialización de botones*/
  $resend.prop('disabled', false);
  $next.prop('disabled', true);
  /* control de código a verificar */
  $cod.on('input', function(){
    if ($(this).val().length === 3 & $(this).val() ==='127'){
      alert("código correcto");     
      $next.prop('disabled', false);
    } 
  });
  /* acción del botón resend */
  $resend.on('click', function(){
    setTimeout(function(){
      window.location.href='signup-send-cod.html';
    },2);
  });
  /* acción del botón */
  $next.on('click', function(){
    setTimeout(function(){
      window.location.href='signup.html';
    },2);
  });
});
