$(document).ready(function(e){
	/* declaración de parámetros para identificar opción seleccionada lista dropdown */
	var $PERU = '<a href="#contains"><span class="menu-country glyphicon countrype"></span></a>';
	var $URUGUAY = '<a href="#all"> <span class="menu-country glyphicon countryuru text-primary"></span></a>';
	var $EEUU = '<a href="#less_than"> <span class="menu-country glyphicon countryeu text-primary"></span></a>';
	var $ARGENTINA = '<a href="#its_equal"><span class="menu-country glyphicon countryarg text-warning"></span></a>';
	var $BRASIL = '<a href="#greather_than"> <span class="menu-country glyphicon countrybr text-success"></span>';
	
	/* declaración de parámetros con los códigos de los países */
	var $CODPE ='51';
	var $CODARG = '24';
	var $CODURU = '55';
	var $CODEU = '1';
	var $CODBR = '44';
	
	/* declaración de variables dinámicas - elementos html */
	var $menuCountry = $('li');
	var $buttonNext = $('#buttonNext');
	var $number = $('#input-number');

	/* declaración de variables dinámicas - operacionales */
	var $temp = '';

	/* inicialmente botón next deshabilitado */
	$buttonNext.prop('disabled',true);

  /* lista menú paises - dropdown - evento click - escoge país */
	$('.search-panel .dropdown-menu').find('a').click(function(e) {
		e.preventDefault();
		var param = $(this).attr("href").replace("#","");
		var concept = $(this).html();
		$('.search-panel span#search_concept').html(concept);
		$('.input-group #search_param').val(param);

	/* muestra código de país según selección - evento click */
		$menuCountry.on('click', function(){
			$temp =$(this).html();
			if ($temp.indexOf($PERU) >-1){
				$("label[for='me']").text('');
				$("label[for='me']").text($CODPE);
			}
			if ($temp.indexOf($ARGENTINA) >-1){
				$("label[for='me']").text('');
				$("label[for='me']").text($CODARG);
			}
			if ($temp.indexOf($BRASIL) >-1){
				$("label[for='me']").text('');
				$("label[for='me']").text($CODBR);
			}
			if ($temp.indexOf($URUGUAY) >-1){
				$("label[for='me']").text('');
				$("label[for='me']").text($CODURU);
			}
			if ($temp.indexOf($EEUU) >-1){
				$("label[for='me']").text('');
				$("label[for='me']").text($CODEU);
			}
		});
	});
	/* control de ingreso de dígitos */
	$number.on('input', function(){
		/* control 1er dígito sea 9 ó 8 */
		if($(this).val().length === 1 ) {
	    if ( ($(this).val() !==  '9' ||  $(this).val() !==  '8' ) ){
				alert ('el primer dígito es 9 ó 8');
			  $(this).val('') ;
  	  } 
		}
		/* control 2do dígito sea 9 ó 8 */
		if($(this).val().length === 1 ) {
			if ( ($(this).val() !==  '9' ||  $(this).val() !==  '8' ) ){
				alert ('el primer dígito es 9 ó 8');
				$(this).val('') ;
			} 
		}


	});

});


