$(document).ready(function(){
  var $firstName = $('#inputFirstName'); 
  var $lastName = $('#inputLastName'); 
  var $email = $('#inputEmail');
  var $check = $('#inputCheck');
  var $next = $('#buttonNext');
  var $validateFirstName = false;
  var $validateLastName = false;
  var $validateEmail = false;
  var $validateCheck = false;
  var PATERNEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
  var PATERNNAME = /^([a-z ñáéíóú]{2,60})$/i; 
  
  $next.prop('disabled',true);

  $firstName.on('input', function(){
    if(PATERNNAME.test($(this).val()) & $(this).val().length > 2){
      $validateFirstName = true ;
      activeNext();
    }
  });
  
  $lastName.on('input', function(){
    if(PATERNNAME.test($(this).val()) & $(this).val().length >2){
      $validateLastName = true ;
      activeNext();
    }
  });
  
  $email.on('input', function(){
    if(PATERNEMAIL.test($email.val())){
      $validateEmail = true ;
      activeNext();
    }
  });

  $check.change(function(){
    if ( $(this).is(':checked')){
      $validateCheck = true ;
      activeNext();
    }
  });

  var activeNext = function (){
    if ( $validateFirstName & $validateLastName & $validateEmail & $validateCheck){
      $next.prop('disabled',false);
    }
  };
});
