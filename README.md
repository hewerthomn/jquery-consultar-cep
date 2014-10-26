# jQuery Consultar CEP

_Plugin jQuery para preencher campos de formulários a apartir de CEP._

## Exemplos

*  [Exemplo com clique](http://hewerthomn.github.io/jquery-consultar-cep/examples/on-click.html)
*  [Exemplo com blur](http://hewerthomn.github.io/jquery-consultar-cep/examples/on-blur.html)
*  [Função callback personalizada](http://hewerthomn.github.io/jquery-consultar-cep/examples/custom-callback.html)

## Instalação

Um arquivo de origem embalado inclui tudo que você precisa para usar o plugin.

*  [jquery.consultar-cep.js](http://hewerthomn.github.io/jquery-consultar-cep/jquery.consultar-cep.js) <br>
*  [jquery.consultar-cep.min.js](http://hewerthomn.github.io/jquery-consultar-cep/jquery.consultar-cep.min.js)

## Bower

_Se você é bom em linha de comando, pode usar o [Bower](http://bower.io) para instalar esse plugin._

```sh
$ bower install jquery-consultar-cep
```

## Inicializando

### Javascript

```js
$('#cep').consultarCep({
    focarAposPara: '#numero',
    mensagem: '<i class="fa fa-spin fa-spinner"></i>',
    classMensagem: 'label label-default',
    campos: {
        logradouro:  '#endereco',
        bairro:      '#bairro',
        localidade:  '#cidade',
        uf:          '#uf'
    }
);
```

Com função callback personalizada

```js
$('#cep').consultarCep({
    focarAposPara: '#numero',
    mensagem: '<i class="fa fa-spin fa-spinner"></i>',
    classMensagem: 'label label-default',
    sucesso: function(endereco) {
        // 
    },
    falha: function(erro) {
        // 
    },
    sempre: function() {
        // escreva o código para executar sempre, em sucesso ou falha
    }
);
```

## Contribuindo
 
1. Faça um fork!
2. Crie sua branch: `git checkout -b meu-novo-recurso`
3. Faça um commit de suas modificações: `git commit -am 'Adiciona mais recursos'`
4. Realize um push na sua branch: `git push origin meu-novo-recurso`
5. Realize um pull request :D

## Licença
[Licença MIT](https://github.com/hewerthomn/jquery-consultar-cep/blob/master/LICENSE.txt) © Éverton de Souza Mendes Inocêncio
