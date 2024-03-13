---
title: Trabalhando com texto — strings em JavaScript
slug: Learn/JavaScript/First_steps/Strings
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/Math", "Learn/JavaScript/First_steps/Useful_string_methods", "Learn/JavaScript/First_steps")}}

Agora vamos dar atenção às strings - isto é como é chamado em programação qualquer parte de texto. Neste artigo nós veremos tudo que você realmente deve saber sobre strings quando está aprendendo JavaScript. Como criar, fazer citações e como juntar strings.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos:</th>
      <td>
        Computação básica, um entendimento básico de HTML e CSS, e sobre o que é
        JavaScript.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>Ganhar familiaridade com o básico de strings em JavaScript.</td>
    </tr>
  </tbody>
</table>

## O poder das palavras

Palavras são muito importante para humanos - elas são uma grande parte de como nos comunicamos. Desde que a Web é largamente baseada em texto, projetada para permitir humanos a comunicar e compartilhar infomação, isto é útil para nós termos controle sobre como apresentar isso. {{glossary("HTML")}} fornece estrutura e significado para nosso texto, {{glossary("CSS")}} nos permite estilizar precisamente ele, e JavaScript contem um número de funcionalidades para manipular strings, criar mensagens de boas-vindas customizadas, mostrando rótulos quando preciso, sorteando termos de acordo como desejado e muito mais.

Muitos dos programas que temos visto até agora no curso está envolvido em alguma parte com manipulação de string.

## Strings — O básico

Em um primeiro relance, strings são tratadas de forma parecida como números, mas quando vamos mais a fundo, você começa a ver algumas diferenças importantes. Vamos começar a entrar em linhas básicas no console para nos familiarizar. Nós vamos fornecer abaixo (você pode também [abrir isto no console](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/variables/index.html) em uma guia ou janela separada, ou usar o [console do navegador](/pt-BR/docs/Learn/Common_questions/What_are_browser_developer_tools) se você preferir).

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

      if (document.querySelectorAll("div").length > 1) {
        inputForm.focus();
      }

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

{{ EmbedLiveSample('Hidden_code', '100%', 300, "", "", "hide-codepen-jsfiddle") }}

### Criando uma string

1. Para começar, digite as linhas seguintes:

   ```js
   var string = "The revolution will not be televised.";
   string;
   ```

   Como fizemos com números, nós declaramos uma variável, inicializando-a com um valor string, e então retornamos o valor. A única diferença aqui é que quando escrevemos uma string, você precisa colocá-la entre aspas.

2. Se você não fez isso, ou esqueceu uma das aspas, você recebeu um erro. Experimente digitar as linhas seguintes:

   ```js example-bad
   var badString = This is a test;
   var badString = 'This is a test;
   var badString = This is a test';
   ```

   Estas linhas não funcionam porque todo texto sem aspas são interpretados como um nome de variável, propriedade do nome, palavra reservada ou algo assim. Se o navegador não puder encontrar, então um erro é apresentado (ex.: "faltando; declaração anterior"). Se o navegador puder ver onde a string começa, mas não conseguir encontrar o fim, como indicado com as segundas aspas, é retornado um erro (com "string não terminada"). Se seu programa retorna tais erros, então volte e verifique todas suas strings para ter certeza que não faltam aspas.

3. O seguinte funcionará se você definiu previamente a variável `string` - tente isto agora:

   ```js
   var badString = string;
   badString;
   ```

   `badString` é agora definido para ter o mesmo valor de `string`.

### Aspas simples x aspas duplas

1. Em JavaScript, você pode escolher aspas simples ou duplas para envolver suas strings. Ambas linhas abaixo funcionará bem:

   ```js
   var sgl = "Single quotes.";
   var dbl = "Double quotes";
   sgl;
   dbl;
   ```

2. Há poucas diferenças entre as duas, e qual você usar é de preferência pessoal. Você deve escolher uma e permanecer nela, entretanto; diferentes aspas no código pode ser confuso, especialmente se você usa diferentes aspas na mesma string! O seguinte retornará erro:

   ```js example-bad
   var badQuotes = 'What on earth?";
   ```

3. O navegador interpretará como a string não tivesse fechada, porque o outro tipo de aspas pode aparecer dentro da sua string. Por exemplo, ambos exemplos abaixo são okay:

   ```js
   var sglDbl = 'Would you eat a "fish supper"?';
   var dblSgl = "I'm feeling blue.";
   sglDbl;
   dblSgl;
   ```

4. Entretanto, você não pode incluir o mesmo tipo de aspas dentro da sua string, se você usa para conter seu texto. O seguinte será um erro, como é confuso para o navegador onde a string termina:

   ```js example-bad
   var bigmouth = 'I've got no right to take my place...';
   ```

   Isto nos leva muito bem ao nosso próximo assunto.

### Caracteres de escape na string

Para corrigir o problema anterior, nós precisamos escapar o problema da aspa. Caracteres de escape significa que nós fazemos algo para ter certeza que eles são reconhecidos como texto, não parte do código. Em JavaScript, nós fazemos isso colocando uma barra invertida logo antes do caracter.Tente isso:

```js
var bigmouth = "I've got no right to take my place...";
bigmouth;
```

Isto funciona bem. Você pode escapar outros caracteres do mesmo jeito, ex.: `\"`, e há alguns códigos especiais também. Veja [Notação de escape](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String#Escape_notation) para mais detalhes.

## Concatenando strings

1. Concatenar é uma palavra chique da programação que significa "colocar junto". Para colocar strings juntas em JavaScript, usamos o operador (+), o mesmo usamos para adicionar números, mas neste contexto é algo diferente. Vamos tentar este exemplo no console.

   ```js
   var one = "Hello, ";
   var two = "how are you?";
   var joined = one + two;
   joined;
   ```

   O resultado disso é uma variável chamada `joined`, que contém o valor "Hello, how are you?".

2. No último exemplo, nós somente juntamos duas strings, mas você pode fazer quantas quiser, contanto que inclua um `+` entre cada uma.Experimente isso:

   ```js
   var multiple = one + one + one + one + two;
   multiple;
   ```

3. Você pore usar um mix de variáveis e strings reais. Tente isso:

   ```js
   var response = one + "I am fine — " + two;
   response;
   ```

> **Nota:** Quando você coloca uma string atual no seu código dentro de aspas simples ou duplas, é chamada uma **string literal**.

### Concatenação em contexto

Vamos dar uma olhada na concatenação em ação — aqui está um exemplo do curso anterior:

```html
<button>Pressione-me</button>
```

```js
var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual é o seu nome?");
  alert("Olá " + nome + ", prazer em conhecê-lo!");
};
```

{{ EmbedLiveSample('Concatenation_in_context', '100%', 50, "", "", "hide-codepen-jsfiddle") }}

Aqui estamos usando uma função {{domxref("Window.prompt()", "Window.prompt()")}} na linha 4, a qual pergunta ao usuário para responder uma questão via uma caixa de diálogo, então armazena o texto em uma variável — neste caso `nome`. Nós então usamos uma função {{domxref("Window.alert()", "Window.alert()")}} na linha 5 para mostrar outra caixa de diálogo contendo nossa string montada de duas strings literais e a variável `name`,via concatenação.

### Números x strings

1. Então o que acontece quando tentamos adicionar (ou concatenar) uma string e um número? Vamos tentar isso no console:

   ```js
   "Front " + 242;
   ```

   Você pode esperar um erro disto, mas funciona correto. Tentando representar uma string como um número, realmente não faz sentido. Mas representando um número como string, faz. Então o navegador espertamente converte o número em string e concatena as duas.

2. Você pode fazer isto até com dois números — você pode forçar um número a ser string colocando ele entre aspas. Experimente o seguinte (nós estamos usando o operador `typeof` para checar o que a variável é, se um número ou string):

   ```js
   var myDate = "19" + "67";
   typeof myDate;
   ```

3. Se você tem uma variável numérica que precisa converter em string, mas não mudar completamente, ou uma string e quer converter em número, você pode usar a construção seguinte:

   - O objeto {{jsxref("Number")}} converterá qualquer coisa passada em um número, se for possível. Tente o seguinte:

     ```js
     var myString = "123";
     var myNum = Number(myString);
     typeof myNum;
     ```

   - Por outro lado, todo número tem um método chamado [`toString()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) que converterá para a string equivalente. Tente isto:

     ```js
     var myNum = 123;
     var myString = myNum.toString();
     typeof myString;
     ```

   Estas construções podem ser bem úteis em algumas situações. Por exemplo, se o usuário colocar um número em um campo de texto, isso será uma string. Entretanto, se você quiser adicionar este número a algo, você precisa que seja um número, então você pode passar isto através do `Number()` para poder manipular.Nós fizemos exatamente isto no nosso [Number Guessing Game, in line 59](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/first-splash/number-guessing-game.html#L59).

## Conclusão

Então isto é o basico sobre strings em JavaScript. No próximo artigo nós iremos continuar daqui, vendo alguns métodos de construção de strings disponíveis em JavaScript e como nós podemos usá-los para manipular nossa string da forma como quisermos.

{{PreviousMenuNext("Learn/JavaScript/First_steps/Math", "Learn/JavaScript/First_steps/Useful_string_methods", "Learn/JavaScript/First_steps")}}
