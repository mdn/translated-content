---
title: Métodos úteis de string
slug: Learn/JavaScript/First_steps/Useful_string_methods
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/Strings", "Learn/JavaScript/First_steps/Arrays", "Learn/JavaScript/First_steps")}}

Agora que nós vimos o básico de strings, vamos engatar a próxima marcha e começar a pensar sobre as operações úteis que podemos fazer em strings com métodos embutidos, como encontrar o comprimento de um string, unir e dividir sequências de caracteres, substituindo um caracter em uma string por outro, e muito mais.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos:</th>
      <td>
        Conhecimento básico de computador, uma compreensão básica de HTML e CSS,
        uma compreensão do que é o JavaScript.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        <p>
          Entender que strings são objetos e aprender a usar alguns do métodos
          básicos disponíveis nesses objetos para manipular strings.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Strings como objetos

Como dissemos antes e diremos novamente — _tudo_ é um objeto em JavaScript. Quando você cria um string, usando por exemplo

```js
var string = "This is my string";
```

sua variável torna-se uma instância do objeto string e, como resultado, tem um grande número de propriedades e métodos diponíveis para ela. Você pode ver isso se você for na página do objeto {{jsxref("String")}} e olhar para baixo na lista do lado da página!

**Agora, antes de seu cérebro começar a derreter, não se preocupe!** Você não precisa saber sobre a maioria deles no início da sua jornada de aprendizado. Mas há alguns que você potencialmente usará com bastante frequência que veremos aqui.

Vamos digitar alguns exemplos em um console novo. Nós fornecemos um abaixo (você também pode abrir este console em uma guia ou janela separada, ou usar o console do desenvolvedor do navegador, se preferir).

Nós fornecemos um abaixo (você também pode [abrir esse console](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/variables/index.html) em uma aba ou janela separada, ou usar o [console do navegador do desenvolvedor](/pt-BR/docs/Learn/Common_questions/What_are_browser_developer_tools) se você preferir).

```html hidden
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>JavaScript console</title>
    <style>
      * {
        box-sizing: border-box;
      }

      html {
        background-color: #0c323d;
        color: #809089;
        font-family: monospace;
      }

      body {
        max-width: 700px;
      }

      p {
        margin: 0;
        width: 1%;
        padding: 0 1%;
        font-size: 16px;
        line-height: 1.5;
        float: left;
      }

      .input p {
        margin-right: 1%;
      }

      .output p {
        width: 100%;
      }

      .input input {
        width: 96%;
        float: left;
        border: none;
        font-size: 16px;
        line-height: 1.5;
        font-family: monospace;
        padding: 0;
        background: #0c323d;
        color: #809089;
      }

      div {
        clear: both;
      }
    </style>
  </head>
  <body></body>

  <script>
    var geval = eval;
    function createInput() {
      var inputDiv = document.createElement("div");
      var inputPara = document.createElement("p");
      var inputForm = document.createElement("input");

      inputDiv.setAttribute("class", "input");
      inputPara.textContent = ">";
      inputDiv.appendChild(inputPara);
      inputDiv.appendChild(inputForm);
      document.body.appendChild(inputDiv);

      inputForm.addEventListener("change", executeCode);
    }

    function executeCode(e) {
      try {
        var result = geval(e.target.value);
      } catch (e) {
        var result = "error — " + e.message;
      }

      var outputDiv = document.createElement("div");
      var outputPara = document.createElement("p");

      outputDiv.setAttribute("class", "output");
      outputPara.textContent = "Result: " + result;
      outputDiv.appendChild(outputPara);
      document.body.appendChild(outputDiv);

      e.target.disabled = true;
      e.target.parentNode.style.opacity = "0.5";

      createInput();
    }

    createInput();
  </script>
</html>
```

{{ EmbedLiveSample('Hidden_code', '100%', 300) }}

### Descobrindo o comprimento de uma string

Essa é fácil — você simplesmente usa a propriedade {{jsxref("String.prototype.length", "length")}}. Tente digitar as linhas a seguir:

```js
var browserType = "mozilla";
browserType.length;
```

Isso deve retornar o número 7, porque "mozilla" tem 7 caracteres. Isso é útil por vários motivos; por exemplo, você pode querer encontrar os comprimentos de uma série de nomes para que você possa exibi-los em ordem de comprimento, ou deixar um usuário saber que um nome de usuário que ele informou em um campo de formulário é muito longo se este for maior do que um certo comprimento.

### Recuperando um caractere de string específico

Nota complementar: você pode retornar qualquer caractere dentro de uma string usando a **notação colchete** - isso significa que você inclui colchetes (`[]`) no final do nome da variável. Dentro dos colchetes, você inclui o número do caractere que deseja retornar, por exemplo, para recuperar a primeira letra, faça o seguinte:

```js
browserType[0];
```

Computadores contam a partir de 0, não 1! Para recuperar o último caractere de _qualquer_ string, nós podemos usar a linha a seguir, combinando essa técnica com a propriedade `length` que vimos anteriormente:

```js
browserType[browserType.length - 1];
```

O comprimento de "mozilla" é 7, mas porque a contagem começa de 0, a posição do caractere é 6, daí precisamos usar `length-1`. Você pode usar isso para, por exemplo, encontrar a primeira letra de uma série de strings e ordená-los alfabeticamente.

### Encontrando uma substring dentro de uma string e extraindo-a

1. Às vezes você quer saber se uma string menor está presente dentro de uma maior (geralmente dizemos _se uma substring está presente dentro de uma string_). Isso pode ser feito usando o método {{jsxref ("String.prototype.indexOf ()", "indexOf ()")}}, que leva um único {{glossary ("parameter")}} - a substring que deseja procurar. Experimente isso:

   ```js
   browserType.indexOf("zilla");
   ```

   Isso nos dá o resultado 2, porque a substring "zilla" se inicia na posição 2 (0, 1, 2 — então, 3 caraceteres) dentro de "mozilla". Esse código poderia ser usado para filtrar cadeias de caracteres. Por exemplo, podemos ter uma lista de endereços da web e apenas queremos imprimir aqueles que contenham "mozilla".

2. Isso pode ser feito de outro jeito, que é possivelmente mais eficaz. Experimente isso:

   ```js
   browserType.indexOf("vanilla");
   ```

   Isso deve lhe dar um resultado `-1` — isso é retornado quando a substring, neste caso 'vanilla', não é encontrada na string principal.

   Você pode usar isso para encontrar todas as instâncias de strings que **não contém** a substring 'mozilla', ou **contém**, se você usar o operador de negação, conforme mostrado abaixo. Você poderia fazer algo assim:

   ```js
   if (browserType.indexOf("mozilla") !== -1) {
     // faz coisas com a string
   }
   ```

3. Quando você sabe onde uma substring começa dentro de uma string e você sabe em qual caractere você deseja que ela termine, {{jsxref ("String.prototype.slice ()", "slice ()")}} pode ser usado para extrair isto. Tente o seguinte:

   ```js
   browserType.slice(0, 3);
   ```

   Isso retorna "moz" — o primeiro parâmetro é a posição do caractere a partir da qual será iniciada a extração, e o segundo parâmetro é a posição seguinte do último caractere a ser extraído. Então, a fatia ocorre da primeira posição, até a última posição, mas não incluindo. Você também pode dizer que o segundo parâmetro é igual ao comprimento da string que está sendo retornada.

Também, se você sabe que você deseja extrair todos os caracteres restantes em uma string após um certo caracter, você não tem que incluir o segundo parametro! Você apenas precisa incluir a posição do caracter a partir de onde você deseja extrar os caracteres restantes em uma string. Tente o seguinte:

```js
browserType.slice(2);
```

Isso retornará "zilla" — isso é porque a posição de caracter 2 é a letra z, e porque você não incluiu o segundo parametro, a substring retornou todos os caracteres restantes na string.

> **Nota:** O segundo parametro do `slice()` é opcional: Se você não incluir ele, o slice finaliza no fim da string original. Existem outras opções também; estude a {{jsxref("String.prototype.slice()", "slice()")}} pagina para ver o que mais você pode descobrir.

### Mudando entre maiúsculas e minúsculas

O método string {{jsxref("String.prototype.toLowerCase()", "toLowerCase()")}} e {{jsxref("String.prototype.toUpperCase()", "toUpperCase()")}} toma a string e converte todos os caracteres para minusculo - ou maiusculo, respectivamente. Este pode ser util, por exemplo, se você quer normalizar todas as entradas de dados do usuário antes de armazenar em um banco de dados.

Vamos testar inserindo as seguintes linhas para ver o que acontece:

```js
var radData = "My NaMe Is MuD";
radData.toLowerCase();
radData.toUpperCase();
```

### Atualizando partes de uma string

Você pode substituir uma substring dentro de uma string com uma outra substring usando o método {{jsxref("String.prototype.replace()", "replace()")}}. Este funciona muito simples em um nível básico, apesar haver algumas coisas avançadas que você pode fazer com ele, nós não iremos tão longe ainda.

Ele toma dois parametros — A string que você quer substituir e a string que você quer que substitua o primeiro parametro. Tente este exemplo:

```js
browserType.replace("moz", "van");
```

Observe que para realmente obter o valor atualizado refletido na variavel `browserType` em um programa real, você teria que setar o valor da variavel para ser o resultado da operação; não apenas atualizar o valor da substring automaticamente. Assim você teria que realmente escrever isso: `browserType = browserType.replace('moz','van');`

## Exemplos para aprendizado ativo

Nesta seção, tentaremos escrever um código de manipulação de string. Em cada exercício abaixo, temos uma matriz de strings e um loop que processa cada valor na matriz e o exibe em uma lista com marcadores. Você não precisa entender matrizes ou loops agora - isso será explicado em artigos futuros. Tudo o que você precisa fazer em cada caso é escrever o código que produzirá as strings no formato em que as queremos.

Cada exemplo vem com um botão "Reset", que você pode usar para redefinir o código original, isso se cometer um erro e não conseguir faze-lo funcionar novamente, e um botão "Show Solution" que você pode pressionar para ver aresposta em potencial se realmente estiver travado.

### Filtrando mensagens de saudação

No primeiro exercício, começaremos com simplicidade - temos várias mensagens de cartão, mas queremos classificá-las para listar apenas as mensagens de Natal. Queremos que você preencha um teste condicional dentro da estrutura if (...), para testar cada string e apenas imprimi-la na lista se for uma mensagem de Natal.

1. Primeiro pense em como você poderia testar se a mensagem em cada caso é uma mensagem de Natal. Qual string está presente em todas essas mensagens e que método você poderia usar para testar se ela está presente?
2. Em seguida, você precisará escrever um teste condicional do formulario operando2 operador operando1. A coisa à esquerda é igual à coisa à direita? Ou neste caso, o método chama à esquerda retorna o resultado à direita?
3. Dica: Nesse caso, é provavelmente mais útil testar se a chamada do método não é igual a um determinado resultado.

```html hidden
<div class="output" style="min-height: 125px;">
  <ul></ul>
</div>

<textarea id="code" class="playable-code" style="height: 290px;">
var list = document.querySelector('.output ul');
list.innerHTML = '';
var greetings = ['Happy Birthday!',
                 'Merry Christmas my love',
                 'A happy Christmas to all the family',
                 'You\'re all I want for Christmas',
                 'Get well soon'];

for (var i = 0; i < greetings.length; i++) {
  var input = greetings[i];
  // Seu teste condicional precisa ir dentro dos parênteses
  // na linha abaixo, substituindo o que está lá
  if (greetings[i]) {
    var result = input;
    var listItem = document.createElement('li');
    listItem.textContent = result;
    list.appendChild(listItem);
  }
}
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
```

```js hidden
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var solution = document.getElementById("solution");
var code = textarea.value;

function updateCode() {
  eval(textarea.value);
}

reset.addEventListener("click", function () {
  textarea.value = code;
  updateCode();
});

solution.addEventListener("click", function () {
  textarea.value = jsSolution;
  updateCode();
});

var jsSolution =
  "var list = document.querySelector('.output ul');\nlist.innerHTML = '';\nvar greetings = ['Happy Birthday!',\n                 'Merry Christmas my love',\n                 'A happy Christmas to all the family',\n                 'You\\'re all I want for Christmas',\n                 'Get well soon'];\n\nfor(var i = 0; i < greetings.length; i++) {\n  var input = greetings[i];\n  if(greetings[i].indexOf('Christmas') !== -1) {\n    var result = input;\n    var listItem = document.createElement('li');\n    listItem.textContent = result;\n    list.appendChild(listItem);\n  }\n}";

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);
```

{{ EmbedLiveSample('Playable_code', '100%', 490) }}

### Corrigindo a capitalização

Neste exercício, temos os nomes das cidades no Reino Unido, mas a capitalização está toda desarrumada. Nós queremos que você as altere para que elas sejam todas minúsculas, exceto pela primeira letra maiúscula. Uma boa maneira de fazer isso é:

1. Converta toda a cadeia contida na variável de entrada para minúscula e armazene-a em uma nova variável.
2. Pegue a primeira letra da string nesta nova variável e armazene-a em outra variável.
3. Usando esta última variável como substring, substitua a primeira letra da string em minúsculas pela primeira letra da string em minúsculas alterada para maiúscula. Armazene o resultado desse procedimento de substituição em outra nova variável.
4. Altere o valor da variável `result` para igual ao resultado final, não a `input`.

> **Nota:** Uma dica — os parâmetros dos métodos de string não precisam ser literais de string; eles também podem ser variáveis, ou mesmo variáveis com um método sendo invocado nelas.

```html hidden
<div class="output" style="min-height: 125px;">
  <ul></ul>
</div>

<textarea id="code" class="playable-code" style="height: 250px;">
var list = document.querySelector('.output ul');
list.innerHTML = '';
var cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];
for(var i = 0; i < cities.length; i++) {
  var input = cities[i];
  // write your code just below here

  var result = input;
  var listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
```

```js hidden
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var solution = document.getElementById("solution");
var code = textarea.value;

function updateCode() {
  eval(textarea.value);
}

reset.addEventListener("click", function () {
  textarea.value = code;
  updateCode();
});

solution.addEventListener("click", function () {
  textarea.value = jsSolution;
  updateCode();
});

var jsSolution =
  "var list = document.querySelector('.output ul');\nlist.innerHTML = '';\nvar cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];\n\nfor(var i = 0; i < cities.length; i++) {\n  var input = cities[i];\n  var lower = input.toLowerCase();\n  var firstLetter = lower.slice(0,1);\n  var capitalized = lower.replace(firstLetter,firstLetter.toUpperCase());\n  var result = capitalized;\n  var listItem = document.createElement('li');\n  listItem.textContent = result;\n  list.appendChild(listItem);\n\n}";

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);
```

{{ EmbedLiveSample('Playable_code_2', '100%', 450) }}

### Fazendo novas strings a partir de partes antigas

Neste último exercício, o array contém um monte de strings contendo informações sobre estações de trem no norte da Inglaterra. As strings são itens de dados que contêm o código da estação de três letras, seguido por alguns dados legíveis por máquina, seguidos por um ponto-e-vírgula, seguido pelo nome da estação legível por humanos. Por exemplo:

```
MAN675847583748sjt567654;Manchester Piccadilly
```

Queremos extrair o código e o nome da estação e juntá-los em uma string com a seguinte estrutura:

```
MAN: Manchester Piccadilly
```

Nós recomendamos que faça assim:

1. Extraia o código da estação de três letras e armazene-o em uma nova variável.
2. Encontre o número de índice do caractere do ponto e vírgula.
3. Extraia o nome da estação legível usando o número do índice de caracteres de ponto-e-vírgula como ponto de referência e armazene-o em uma nova variável.
4. Concatene as duas novas variáveis e uma string literal para fazer a string final.
5. Altere o valor da variável `result` para igual à string final, não a `input`.

```html hidden
<div class="output" style="min-height: 125px;">
  <ul></ul>
</div>

<textarea id="code" class="playable-code" style="height: 285px;">
var list = document.querySelector('.output ul');
list.innerHTML = '';
var stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
                'GNF576746573fhdg4737dh4;Greenfield',
                'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                'SYB4f65hf75f736463;Stalybridge',
                'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

for (var i = 0; i < stations.length; i++) {
  var input = stations[i];
  // write your code just below here

  var result = input;
  var listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
```

```js hidden
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var solution = document.getElementById("solution");
var code = textarea.value;

function updateCode() {
  eval(textarea.value);
}

reset.addEventListener("click", function () {
  textarea.value = code;
  updateCode();
});

solution.addEventListener("click", function () {
  textarea.value = jsSolution;
  updateCode();
});

var jsSolution =
  "var list = document.querySelector('.output ul');\nlist.innerHTML = '';\nvar stations = ['MAN675847583748sjt567654;Manchester Piccadilly',\n                'GNF576746573fhdg4737dh4;Greenfield',\n                'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',\n                'SYB4f65hf75f736463;Stalybridge',\n                'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];\n\nfor(var i = 0; i < stations.length; i++) {\n  var input = stations[i];\n  var code = input.slice(0,3);\n  var semiC = input.indexOf(';');\n  var name = input.slice(semiC + 1);\n  var result = code + ': ' + name;\n  var listItem = document.createElement('li');\n  listItem.textContent = result;\n  list.appendChild(listItem);\n}";

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);
```

{{ EmbedLiveSample('Playable_code_3', '100%', 485) }}

## Conclusão

Você não pode escapar do fato de que ser capaz de lidar com palavras e frases em programação é muito importante — particularmente em JavaScript, pois os sites são todos sobre comunicação com pessoas. Este artigo forneceu os fundamentos que você precisa saber sobre a manipulação de strings por enquanto. Isso deve atendê-lo bem ao abordar tópicos mais complexos no futuro. Em seguida, vamos ver o último tipo de dados importante que precisamos focar no curto prazo — arrays.

{{PreviousMenuNext("Learn/JavaScript/First_steps/Strings", "Learn/JavaScript/First_steps/Arrays", "Learn/JavaScript/First_steps")}}
