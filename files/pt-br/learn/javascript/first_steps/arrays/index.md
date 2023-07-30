---
title: Arrays
slug: Learn/JavaScript/First_steps/Arrays
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/Useful_string_methods", "Learn/JavaScript/First_steps/Silly_story_generator", "Learn/JavaScript/First_steps")}}

Neste artigo final do módulo, nós vamos dar uma olhada em arrays - um elegante meio de armazenar uma lista de itens em uma mesmo variável. Aqui nós vemos o porquê isto é útil, depois exploraremos como criar uma array, recuperar, adicionar e remover itens armazenados em uma array, e mais.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos:</th>
      <td>
        Leitura básica sobre computadores, um básico entendimento de HTML e CSS,
        e conhecimento sobre o que é JavaScript.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>Entender o que é array e como manipular ela em JavaScript.</td>
    </tr>
  </tbody>
</table>

## O que é uma array?

Arrays são geralmente descritas como "lista de objetos"; elas são basicamente objetos que contem múltiplos valores armazenados em uma lista. Um objeto array pode ser armazenado em variáveis e ser tratado de forma muito similar a qualquer outro tipo de valor, a diferença está em podermos acessar cada valor dentro da lista individualmente, e fazer super úteis e eficientes coisas com a lista, como laço através da lista e fazer a mesma coisa para cada valor. Talvez nós pegamos uma série de produtos e seus preços armazenados em uma array, e nós queremos fazer um laço através de todos eles e mostrar em um recibo, enquanto somamos todos os preços e mostramos o preço total ao final.

Se nós não tivessemos arrays, teríamos que armazenar cada item em uma variável separada, então chamar o código para mostrar e adicionar separadamente cada item. Isto seria muito mais longo de escrever, menos eficiente e mais suscetível a erros. Se nós temos 10 itens para adicionar na fatura, isto é ruim o bastante, mas e se fosse 100 itens ou 1000? Nós vamos retornar a este exemplo mais tarde neste artigo.

Como no artigo anterior, vamos aprender o básico de arrays introduzindo com alguns exemplos dentro de um console JavaScript. Nós fornecemos um abaixo (você também pode [abrir este console](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/variables/index.html) em uma aba separada ou janela, ou usar o [console de desenvolvedor do navegador](/pt-BR/docs/Learn/Common_questions/What_are_browser_developer_tools) se preferir).

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

### Criando uma array

Arrays são contruídas de colchetes, os quais contém uma lista de itens separada por vírgulas.

1. Vamos supor que queremos armazenar uma lista de compras em uma array — nós temos algo como o seguinte. Digite as linhas abaixo no seu console:

   ```js
   var shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
   shopping;
   ```

2. Neste caso, cada item na array é uma string, mas tenha em mente que você pode armazenar qualquer item em uma array — string, número, objeto, outra variável, até outra array. Você pode também misturar e combinar tipos de itens — eles não têm que ser todos números, strings, etc. Tente isto:

   ```js
   var sequence = [1, 1, 2, 3, 5, 8, 13];
   var random = ["tree", 795, [0, 1, 2]];
   ```

3. Tente criar um par de arrays você mesmo, antes de seguir em frente.

### Acessando e modificando itens de uma array

Você pode acessar itens individuais em uma array usando a notação de colchetes, da mesma forma que você [acessa as letras em uma string](/en-US/Learn/JavaScript/First_steps/Useful_string_methods#Retrieving_a_specific_string_character).

1. Digite o seguinte no seu console:

   ```js
   shopping[0];
   // returns "bread"
   ```

2. Você também pode modificar um item em uma array simplesmente dando um novo valor ao item. Tente isto:

   ```js
   shopping[0] = "tahini";
   shopping;
   // shopping vai retornar agora [ "tahini", "milk", "cheese", "hummus", "noodles" ]
   ```

   > **Nota:** Nós dissemos isto antes, mas como lembrete — computadores começam a contar do 0!

3. Note que uma array dentro de uma array é chamada de array multidimensional. Você pode acessar um item dentro de uma array que está localizada dentro de outra array, colocando dois conjuntos de colchetes juntos. Por exemplo, para acessar um dos itens dentro de uma array, que é o terceiro item dentro da array `random` (veja a seção anterior), nós podemos fazer algo tipo isto:

   ```js
   random[2][2];
   ```

4. Antes de continuar, faça algumas modificações nos exemplos, crie seus próprios arrays e veja o que funciona e o que não funciona. Divirta-se!

### Encontrando o comprimento de uma array

Você pode encontrar o comprimento de uma array (quantos itens existem nela) exatamente do mesmo jeito que você encontra o comprimento (em caracteres) de uma string — usando a propriedade {{jsxref("Array.prototype.length","length")}}. Tente o seguinte:

```js
sequence.length;
// deve retornar 7
```

Isto tem outras funcionalidades, mas é mais comum usar em um laço para seguir todos os itens em uma array. Então, por exemplo:

```js
var sequence = [1, 1, 2, 3, 5, 8, 13];
for (var i = 0; i < sequence.length; i++) {
  console.log(sequence[i]);
}
```

Você irá aprender sobre laços propriamente em um artigo futuro, mas, brevemente, este código está dizendo:

1. Comece o laço no item número 0 na array.
2. Pare o laço no item de número igual ao comprimento da array. Isto funcionará para uma array de qualquer tamanho, mas neste caso vai parar o laço no item 7 (isto é bom, como o último item — que nós queremos que o laço cubra — é 6.
3. Para cada item, imprima no console do navegador com [`console.log()`](/pt-BR/docs/Web/API/Console/log).

## Alguns métodos úteis em array

Nesta seção vamos ver alguns métodos relacionados a array úteis que nos permitem dividir strings em itens de array e vice-versa, e adicionar novos itens em arrays.

### Convertendo entre strings e arrays

Frequentemente você vai se deparar com alguns dados contidos em uma grande e longa string, e você pode querer separar os itens em uma forma mais útil e então manipular eles, como mostrar em uma tabela. Para fazer isto, nós podemos usar o método {{jsxref("String.prototype.split()","split()")}}. Nesta forma mais simples, ela pega um parâmetro solitário, o caracter que você deseja separar da string e retorna o restante antes e depois do item separado na array.

> **Nota:** Ok, isto é tecnicamente um método de string, não um método de array, mas nós podemos colocar em arrays já que cai bem.

1. Vamos brincar com isto para ver como funciona. Primeiro, crie uma string no seu console:

   ```js
   var myData = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
   ```

2. Agora vamos dividir isto em cada vírgula:

   ```js
   var myArray = myData.split(",");
   myArray;
   ```

3. Finalmente, tentamos encontrar o comprimento da sua nova array, e recuperar alguns itens dela:

   ```js
   myArray.length;
   myArray[0]; // the first item in the array
   myArray[1]; // the second item in the array
   myArray[myArray.length - 1]; // the last item in the array
   ```

4. Você também pode ir no sentido oposto usando o método {{jsxref("Array.prototype.join()","join()")}}. Tente o seguinte:

   ```js
   var myNewString = myArray.join(",");
   myNewString;
   ```

5. Outro jeito de converter uma array em uma string é usar o método {{jsxref("Array.prototype.toString()","toString()")}}. `toString()` é indiscutivelmente mais simples que o `join()` pois não necessita um parâmetro, mas mais limitado. Com `join()` você pode especificar diferentes separadores (tente o passo 4 com um caracter diferente da vírgula).

   ```js
   var dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
   dogNames.toString(); //Rocket,Flash,Bella,Slugger
   ```

### Adicionando e removendo itens de arrays

Nós ainda não falamos sobre adicionar e remover itens de uma array — vamos dar uma olhada agora. Nós vamos usar a array `myArray` que acabamos de criar na última seção. Se você não viu a última seção, primeiro crie a array no seu console:

```js
var myArray = [
  "Manchester",
  "London",
  "Liverpool",
  "Birmingham",
  "Leeds",
  "Carlisle",
];
```

Antes de tudo, para adicionar ou remover um item no final de uma array, nós podemos usar {{jsxref("Array.prototype.push()","push()")}} e {{jsxref("Array.prototype.pop()","pop()")}} respectivamente.

1. note que você precisa para incluir um ou mais itens ao final da sua array. Tente isto:

   ```js
   myArray.push("Cardiff");
   myArray;
   myArray.push("Bradford", "Brighton");
   myArray;
   ```

2. O novo comprimento da array é retornado quando a chamada do método completa. Se você quer armazenar o novo comprimento da array em uma variável, você poderia fazer algo como isto:

   ```js
   var newLength = myArray.push("Bristol");
   myArray;
   newLength;
   ```

3. Removendo o último item da array é tão simples como um `pop()` nele. Tente isto:

   ```js
   myArray.pop();
   ```

4. O item que foi removido é retornado quando a chamada do método completa. Para salvar o item em uma nova variável, você poderia fazer isto:

   ```js
   var removedItem = myArray.pop();
   myArray;
   removedItem;
   ```

{{jsxref("Array.prototype.unshift()","unshift()")}} e {{jsxref("Array.prototype.shift()","shift()")}} funciona exatamente do mesmo modo que `push()` e `pop()`, respectivamente, exceto que eles funcionam no começo da array, não no final.

1. Primeiro `unshift()` — tente os seguintes comandos:

   ```js
   myArray.unshift("Edinburgh");
   myArray;
   ```

2. Agora `shift()`;Tente estes!

   ```js
   var removedItem = myArray.shift();
   myArray;
   removedItem;
   ```

## Aprendizado ativo: Imprimindo aqueles produtos!

Vamos retornar ao exemplo que descrevemos antes — imprimindo nomes de produtos e preços em uma fatura, então totalizando os preços e imprindindo eles ao final. No exemplo editável abaixo há comentários contendo números — cada um deles marcam um lugar onde você tem que acidionar algo ao código. Eles são como segue:

1. Abaixo do comentário `// number 1` está um número de strings, cada uma contendo um nome de produto e preço separado por uma vírgula. Nós gostaríamos que você colocasse eles dentro de uma array e armazenasse eles na array chamada `products`.
2. Na mesma linha o comentário `// number 2` está no começo de um laço for. Nesta linha nós temos `i<=0`, o qual é um teste condicional que faz o [laço for](/en-US/Learn/JavaScript/First_steps/A_first_splash#Loops) parar imediatamente, porque está dizendo "pare quando `i` for menor ou igual a 0", e `i` começa em 0. Nós gostaríamos de substituir isto com um teste condicional que termina o laço quando o `i`for menor que o tamanho da array `products`.
3. Logo abaixo do comentário `// number 3` nós queremos que você escreva uma linha de código que divide o item da array (`name:price`) em dois itens separados, um contendo somente o nome e outro só com o preço. Se você não tem certeza de como fazer isto, consulte o artigo [Métodos úteis em string](/pt-BR/docs/Learn/JavaScript/First_steps/Useful_string_methods)para alguma ajuda, ou ainda melhor, veja a seção [Converting between strings and arrays](#converting_between_strings_and_arrays) neste artigo.
4. Como parte da linha de código acima, você também quer converter o preço de string para número. Se você não se lembra como fazer isto, veja o [artigo primeiras strings](/en-US/Learn/JavaScript/First_steps/Strings#Numbers_versus_strings).
5. Há uma variável chamada `total` que é criada e atribuída o valor 0 no começo do código. Dentro do loop (abaixo `// number 4`) nós queremos que você escreva uma linha que adicione o preço atual ao total em cada iteração do laço, então ao final do código o preço total é impresso na fatura. Você pode precisar de um [operador aritiméticos](/en-US/Learn/JavaScript/First_steps/Math#Assignment_operators) para isto.
6. Nós queremos que você mude a linha logo abaixo de `// number 5` para que a variável `itemText` seja igual a "nome do item atual - $preço do item atual", por exemplo "Shoes - $23.99" em cada caso, então a informação correta para cada item é impressa na fatura. Esta é uma simples concatenação de string, a qual deveria ser familiar para você.

```html hidden
<h2>Live output</h2>

<div class="output" style="min-height: 150px;">
  <ul></ul>

  <p></p>
</div>

<h2>Editable code</h2>

<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>

<textarea id="code" class="playable-code" style="height: 410px;width: 95%">
var list = document.querySelector('.output ul');
var totalBox = document.querySelector('.output p');
var total = 0;
list.innerHTML = '';
totalBox.textContent = '';
// number 1
                'Underpants:6.99'
                'Socks:5.99'
                'T-shirt:14.99'
                'Trousers:31.99'
                'Shoes:23.99';

for (var i = 0; i <= 0; i++) { // number 2
  // number 3

  // number 4

  // number 5
  itemText = 0;

  var listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);
}

totalBox.textContent = 'Total: $' + total.toFixed(2);
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
var userEntry = textarea.value;

function updateCode() {
  eval(textarea.value);
}

reset.addEventListener("click", function () {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = jsSolution;
  solution.value = "Show solution";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "Show solution") {
    textarea.value = solutionEntry;
    solution.value = "Hide solution";
  } else {
    textarea.value = userEntry;
    solution.value = "Show solution";
  }
  updateCode();
});

var jsSolution =
  "var list = document.querySelector('.output ul');\nvar totalBox = document.querySelector('.output p');\nvar total = 0;\nlist.innerHTML = '';\ntotalBox.textContent = '';\n\nvar products = ['Underpants:6.99',\n 'Socks:5.99',\n 'T-shirt:14.99',\n 'Trousers:31.99',\n 'Shoes:23.99'];\n\nfor(var i = 0; i < products.length; i++) {\n var subArray = products[i].split(':');\n var name = subArray[0];\n var price = Number(subArray[1]);\n total += price;\n itemText = name + ' — $' + price;\n\n var listItem = document.createElement('li');\n listItem.textContent = itemText;\n list.appendChild(listItem);\n}\n\ntotalBox.textContent = 'Total: $' + total.toFixed(2);";
var solutionEntry = jsSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = function (e) {
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  var scrollPos = textarea.scrollTop;
  var caretPos = textarea.selectionStart;

  var front = textarea.value.substring(0, caretPos);
  var back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos = caretPos + text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = function () {
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if (solution.value === "Show solution") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background-color: #f5f9fa;
}
```

{{ EmbedLiveSample('Playable_code', '100%', 730, "", "", "hide-codepen-jsfiddle") }}

## Aprendizado ativo: Top 5 buscadores

Um bom uso para os métodos de array como {{jsxref("Array.prototype.push()","push()")}} e {{jsxref("Array.prototype.pop()","pop()")}} está quando você está mantendo um registro de itens atuais ativos em um aplicativo web. Em uma cena animada, por exemplo, você pode ter uma array de objetos representando o gráfico de fundo mostrado atualmente, e você pode querer somente mostrar 50 por vez, para performace ou alguma razão de ordem. Como novos objetos são criados e adicionados na array, os antigos podem ser deletados da array para manter o número desejado.

Neste exemplo nós vamos mostrar um uso bem mais simples — aqui nós estamos dando a você um falso site de busca, com uma caixa de busca. A idéia é que quando termos são digitados na caixa de busca, os 5 principais termos de busca anterior sejam mostrados na lista. Quando o número de termos passar de 5, o último termo começa sendo deletado. A cada vez um novo termo é adicionado ao topo, então os 5 termos anteriores são sempre mostrados.

> **Nota:** Em um aplicativo de busca real, você seria, provavelmente, habilitado a clicar nos termos anteriores para retornar às pesquisas, e isto iria mostrar o reusltado atual! Nós estamos só mantendo simples, por agora.

Para completar o aplicativo, nós precisamos que você:

1. Adicione uma linha abaixo do comentário `// number 1` que adicione o valor digitado atual na busca ao começo da array. Isto pode ser recuperado usando `searchInput.value`.
2. Adicione uma linha abaixo do comentário `// number 2` que remova o último valor no fim da array.

```html hidden
<h2>Live output</h2>
<div class="output" style="min-height: 150px;">
  <input type="text" /><button>Search</button>

  <ul></ul>
</div>

<h2>Editable code</h2>

<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>

<textarea id="code" class="playable-code" style="height: 370px; width: 95%">
var list = document.querySelector('.output ul');
var searchInput = document.querySelector('.output input');
var searchBtn = document.querySelector('.output button');

list.innerHTML = '';

var myHistory = [];

searchBtn.onclick = function() {
  // we will only allow a term to be entered if the search input isn't empty
  if (searchInput.value !== '') {
    // number 1

    // empty the list so that we don't display duplicate entries
    // the display is regenerated every time a search term is entered.
    list.innerHTML = '';

    // loop through the array, and display all the search terms in the list
    for (var i = 0; i < myHistory.length; i++) {
      itemText = myHistory[i];
      var listItem = document.createElement('li');
      listItem.textContent = itemText;
      list.appendChild(listItem);
    }

    // If the array length is 5 or more, remove the oldest search term
    if (myHistory.length >= 5) {
      // number 2

    }

    // empty the search input and focus it, ready for the next term to be entered
    searchInput.value = '';
    searchInput.focus();
  }
}
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var solution = document.getElementById("solution");
var code = textarea.value;
var userEntry = textarea.value;

function updateCode() {
  eval(textarea.value);
}

reset.addEventListener("click", function () {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = jsSolution;
  solution.value = "Show solution";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "Show solution") {
    textarea.value = solutionEntry;
    solution.value = "Hide solution";
  } else {
    textarea.value = userEntry;
    solution.value = "Show solution";
  }
  updateCode();
});

var jsSolution =
  "var list = document.querySelector('.output ul');\nvar searchInput = document.querySelector('.output input');\nvar searchBtn = document.querySelector('.output button');\n\nlist.innerHTML = '';\n\nvar myHistory= [];\n\nsearchBtn.onclick = function() {\n if(searchInput.value !== '') {\n myHistory.unshift(searchInput.value);\n\n list.innerHTML = '';\n\n for(var i = 0; i < myHistory.length; i++) {\n itemText = myHistory[i];\n var listItem = document.createElement('li');\n listItem.textContent = itemText;\n list.appendChild(listItem);\n }\n\n if(myHistory.length >= 5) {\n myHistory.pop();\n }\n\n searchInput.value = '';\n searchInput.focus();\n }\n}";
var solutionEntry = jsSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = function (e) {
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  var scrollPos = textarea.scrollTop;
  var caretPos = textarea.selectionStart;

  var front = textarea.value.substring(0, caretPos);
  var back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos = caretPos + text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = function () {
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if (solution.value === "Show solution") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Playable_code_2', '100%', 700, "", "", "hide-codepen-jsfiddle") }}

## Conclusão

Depois de ler este artigo, nós temos certeza que você concordará que arrays parecem muito úteis; você verá elas surgirem em todo lugar em JavaScript, frequentemente associadas com laços para fazer a mesma coisa para cada item de uma array. Nós estaremos ensinando a você todo o básico que há para saber sobre laços no próximo módulo, mas por agora você deve se dar uma palmada de incentivo e dar uma bem merecida parada; você trabalhou durante todo os artigos neste módulo!

A única coisa que resta a fazer é trabalhar na avaliação deste módulo, a qual vai testar seu entendimento dos artigos anteriores a este.

## Veja também

- [Coleções indexadas](/pt-BR/docs/Web/JavaScript/Guide/Indexed_collections) — um guia avançado guia de arrays e seus primos, _typed arrays_.
- {{jsxref("Array")}} — a página de referência `Array` — para um guia de referência detalhado para as funcionalidades discutidas nesta página e muito mais.

{{PreviousMenuNext("Learn/JavaScript/First_steps/Useful_string_methods", "Learn/JavaScript/First_steps/Silly_story_generator", "Learn/JavaScript/First_steps")}}
