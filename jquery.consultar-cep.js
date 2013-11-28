(function( $ ) {
 
  $.fn.consultarCep = function(options) {

    var options = $.extend({
      elCep: $(this),
      campos: {
        cep:        '#cep',
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

  	var consultar = function(cep) {

      if(cep == undefined || cep.length < 8) return;

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
  		});
    };

    window.correiocontrolcep = function(valor) {
      if (valor == null || valor == undefined || valor.hasOwnProperty('erro')) {
        options.btnConsultar.button('reset');
        if(options.falha)
        {
          options.falha(valor);
        }
        else
        {
          options.elMensagem.html('CEP não encontrado').show();
          for(var campo in options.campos)
            $(options.campos[campo]).val(valor[campo]);
          elCep.focus();
        }        
        return;
      } else {
        if(options.sucesso) {
          options.sucesso(valor);
        } else {
          for(var campo in options.campos)
            $(options.campos[campo]).val(valor[campo]);

          options.elMensagem.html('').hide();          
        }        
      }

			if(options.evento == 'click')
				options.btnConsultar.button('reset');

      if(options.focarAposPara)
      	$(options.focarAposPara).focus();
    };
  	
  	options.btnConsultar = $(options.btnConsultar);
		options.elMensagem = $('<span/>', {
			class: options.classMensagem,
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