#jQuery Consultar CEP

Plugin jQuery para preencher campos de formulários a apartir de CEP digitado por usuário.


----------
###Instalação

Adicione o arquivo jquery.consultar-cep.min.js após o arquivo do jQuery

    <script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
    <script src="jquery.consultar-cep.min.js"></scrip>

###Utilização
    $('#cep').consultarCep({
       evento:        'blur',
       focarAposPara: '#numero',
       campos: {
         cep:         '#cep',
         logradouro:  '#endereco',
         bairro:      '#bairro',
         localidade:  '#cidade',
         uf:          '#uf'
       }
    });    

###Exemplos
[Consultar CEP ao clicar em botão][1]

[Consultar CEP ao deixar campo de texto][2]


  [1]: examples/on-click.html
  [2]: examples/on-blur.html
=======
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