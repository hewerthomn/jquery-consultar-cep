(function( $ ) {
 
  $.fn.consultarCep = function(options) {

  	var consultar = function(cep) {

  		var cep = cep.replace('-', ''),
  				url = options.url.replace('$CEP', cep);

  		options.evento == 'click' ?
  			options.btnConsultar.button('loading') : options.elMensagem.html(options.mensagem).show();

  		$.ajax({
  			url: url,
  			jsonp: false,
  			jasonpCallback: 'correiocontrolcep',
  			dataType: 'jsonp',
  			crossDomain: true  			
  		}).success(function(data) {
				correiocontrolcep(data);
			}).always(function(data) {
				if(options.evento == 'click')
					options.btnConsultar.button('reset');
			});
  	};

  	window.correiocontrolcep = function(valor) {
      if (valor == null || valor == undefined || valor.hasOwnProperty('erro')) {
      	options.elMensagem.html('CEP não encontrado').show();
	      for(var campo in options.campos)
	      	$(options.campos[campo]).val(valor[campo]);
	    	return;
      }      
      else
      {
	      for(var campo in options.campos)
	      	$(options.campos[campo]).val(valor[campo]);

	      if(options.evento == 'click')
	      {
	      	options.btnConsultar.button('reset');
	      }

	      options.elMensagem.html('').hide();

	      if(options.focarAposPara)
	      	$(options.focarAposPara).focus();
      }
    };

  	var options = $.extend({
  		elCep: $(this),
  		campos: {
  			cep: 				'#cep',
        logradouro: '#endereco',
        bairro:     '#bairro',
        localidade: '#cidade',
        uf:         '#uf'
      },
  		evento: 'click',
      focarAposPara: '#cep',
      btnConsultar: '#consultar-cep',
  		elMensagem: this, // Elemento container da mensagem
  		mensagem: '<i class="fa fa-spin fa-spinner"></i>',
  		url: 'http://cep.correiocontrol.com.br/$CEP.js'
  	}, options);
  	options.btnConsultar = $(options.btnConsultar);

		options.elMensagem = $('<span/>', {
			class: 'label label-default',
			html: options.mensagem
		}).hide();

  	if(options.evento == 'click')
  	{
  		options.btnConsultar.parent().parent().after(options.elMensagem);
  		options.btnConsultar.data('loading-text', options.mensagem);
	  	options.btnConsultar.on('click', function() { consultar(options.elCep.val()); });  		
  	}
  	else
  	{
  		options.elCep.after(options.elMensagem);
  		options.elCep.on('blur', function() { consultar($(this).val()) });
  	}

  	return this; 
  };
 
}( jQuery ));