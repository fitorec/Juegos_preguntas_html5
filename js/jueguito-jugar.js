/*
 * Script Juego jugar
 */
var equipoIndex = 0;
var actual = 0;
var preguntaActual = 0;
/*
 *
 */
$(function() {
	//Actualizamos el valor de numPreguntas
	$('#numPreguntas').text(preguntas.length);
	// Handler for .ready() called.
	$tablero = $('#tablero');
	$tablero.fadeOut();
	var $barra = $('#barra-proceso');
	$('#mostrarPregunta').submit(
		function (event) {
			var numPreguntas = preguntas.length;
			var preguntasContestadas = parseInt($('#preguntaActual').text());
			// Se encarga de encontrar de forma aleatoria una pregunta no contestada
			var key;
			do {
				key = getRandomInt(0, numPreguntas -1);
			} while(preguntas[key].contestada == true);
			console.log('Indice actual: ' + key);

			if (preguntas[key].contestada == false) {
					$('#pregunta-titulo').html(preguntas[key].pregunta);
					//Borramos y creamos la lista de respuestas.
					var $listaRespuestas = $('#pregunta-respuestas');
					$listaRespuestas.find('li').remove();
					$.each(preguntas[key].respuestas, function(i, respuesta) {
						var li = "<li id='item-"+(i+1)+"' data-valida='"+respuesta.valida+"'>"
							+respuesta.txt+"</li>";
						$listaRespuestas.append(li);
					});
					preguntas[key].contestada = true;
			}

			++preguntasContestadas;
			$('#preguntaActual').text(preguntasContestadas);
			if (preguntasContestadas == numPreguntas) {
				/*alert(
					'Ha respondido ' + preguntasContestadas + ', de un total de '
					+ numPreguntas +' jueguito ha concluido, :¬D'
				);*/
				$('#mostrarPregunta button')
					.removeClass('btn-primary')
					.addClass('disabled ')
					.attr('disabled', 'true');
			}
			$tablero.fadeIn();
			event.preventDefault();
			mostrarTablero();
			actualizarFicha();
		}
	);
	$('#pregunta-respuestas').on('click', 'li', function(event) {
		console.log(this);

	});
	///
	$('div#tablero ol#pregunta-respuestas').on('click', 'li', function(event) {
		event.preventDefault();
		$(this).toggleClass('activo');
	});
	///
});
//////////////////////
$(function() {
	// Handler for .ready() called.
	$('#btn-responder').click(function() {
			ocultarTablero();
	});
	$('#btn-ceder-turno').click(function(event) {
		$('#pregunta-respuestas li.activo').removeClass('activo');
		ocultarTablero();
	});
});
//////////////////////

function validarRespuesta() {
	error = false;
	$('#pregunta-respuestas li').each(function() {
			$li = $(this);
			if ($li.attr('data-valida') == "true") {
			if(!$li.hasClass('activo')) {
					error =  true;
				}
			} else {
				if($li.hasClass('activo')) {
						error =  true;
					}
				}
			});
			if(error) {
				numCorrectas = parseInt($('#numRespuestasIncorrectas').text()) + 1;
				$('#numRespuestasIncorrectas').text(numCorrectas);
				alert("Respuesta incorrecta");
			} else {
				numCorrectas = parseInt($('#numRespuestasCorrectas').text()) + 1;
				$('#numRespuestasCorrectas').text(numCorrectas);
				alert("Bien :)");
			}
}

function ocultarTablero() {
	validarRespuesta();
	actualizarBarra(100);
	$('#tablero').fadeOut();
	$('#mostrarPregunta').fadeIn();
}

function mostrarTablero() {
	actualizarBarra(0);
	$('#tablero').fadeIn();
	$('#mostrarPregunta').fadeOut();
}

function actualizarBarra(proceso) {
	if (proceso<0 || proceso>100) {
		return;
	}
	var $barra = $('#barra-proceso');
	$barra.attr('aria-valuenow', proceso);
	$barra.css('width', proceso + '%');
}

function actualizarFicha() {
	var $barra = $('#barra-proceso');
	var ancho = $barra.attr('aria-valuenow');
	//console.log('Ancho' +ancho );
	if(ancho < 100) {
		ancho++;
		actualizarBarra(ancho);
		setTimeout('actualizarFicha()', 200);
	} else {
		ocultarTablero();
	}
}

/*
 * Soy un perdedor
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}