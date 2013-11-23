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