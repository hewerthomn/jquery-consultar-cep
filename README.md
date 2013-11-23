# jQuery Consultar CEP

***

_Plugin jQuery para preencher campos de formulários a apartir de CEP._

## Exemplos

*  [Exemplo com clique](http://hewerthomn.github.io/jquery-consultar-cep/examples/on-click.html)
*  [Exemplo com blur](http://hewerthomn.github.io/jquery-consultar-cep/examples/on-blur.html)

***

## Instalação

Um arquivo de origem embalado inclui tudo que você precisa para usar o plugin.

*  [jquery.consultar-cep.js](http://hewerthomn.github.io/jquery-consultar-cep/jquery.consultar-cep.js) <br>
*  [jquery.consultar-cep.min.js](http://hewerthomn.github.io/jquery-consultar-cep/jquery.consultar-cep.min.js)

***

## Bower

_Se você é bom em linha de comando, pode usar o [Bower](http://bower.io) para instalar esse plugin._

```
bower install jquery-consultar-cep
```
***

## Inicializando

### Javascript

```

$('#cep').consultarCep({
    focarAposPara: '#numero',
    mensagem: '<i class="fa fa-spin fa-spinner"></i>',
    classMensagem: 'label label-default',
    campos: {
    logradouro:  '#endereco',
    bairro:      '#bairro',
    localidade:  '#cidade',
    uf:          '#uf'
});

```