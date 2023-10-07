---
title: Tomando decisões no seu código — condicionais
slug: Learn/JavaScript/Building_blocks/conditionals
---

{{LearnSidebar}}{{NextMenu("Learn/JavaScript/Building_blocks/Looping_code", "Learn/JavaScript/Building_blocks")}}

Em qualquer linguagem de programação, o código precisa tomar decisões e realizar ações de acordo, dependendo de diferentes entradas. Por exemplo, em um jogo, se o número de vidas do jogador é 0, então o jogo acaba. Em um aplicativo de clima, se estiver sendo observado pela manhã, ele mostra um gráfico do nascer do sol; Mostra estrelas e uma lua se for noite. Neste artigo, exploraremos como as chamadas declarações condicionais funcionam em JavaScript.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos:</th>
      <td>
        Conhecimento básico de algoritmos, um entendimento básico de HTML e CSS,
        <a href="/pt-BR/docs/Learn/JavaScript/First_steps">JavaScript </a
        >primeiros passos.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>Entender como usar estruturas condicionais em JavaScript.</td>
    </tr>
  </tbody>
</table>

## Você pode tê-lo em uma condição ...!

Seres humanos (e outros animais) tomam decisões o tempo todo que afetam suas vidas, desde pequenas ("devo comer um biscoito ou dois?") até grandes ("devo ficar no meu país de origem e trabalhar na fazenda do meu pai ou devo mudar para a América e estudar astrofísica?").

As declarações condicionais nos permitem representar tomadas de decisão como estas em _JavaScript_, a partir da escolha que deve ser feita (por exemplo, "um biscoito ou dois"), ao resultado obtido dessas escolhas (talvez o resultado de "comer um biscoito" possa ser "ainda sentido fome ", e o resultado de "comer dois biscoitos" pode ser "ter se sentido cheio, mas mamãe me falou para comer todos os biscoitos".)

![](cookie-choice-small.png)

## Declarações if ... else

De longe o tipo mais comum de declaração condicional que você usará em JavaScript — as modestas declarações [`if ... else`](/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else).

### Sintaxe básica if ... else

Veja a sintaxe básica do `if...else` no {{glossary("pseudocódigo")}}:

```
if (condicao) {
  codigo para executar caso a condição seja verdadeira
} else {
  senão, executar este código
}
```

Aqui nós temos:

1. A palavra reservada `if` seguida de um par de parênteses.
2. Um teste condicional, localizado dentro dos parênteses (normalmente "este valor é maior que esse", ou "este valor existe"). Esta condição pode fazer uso dos [operadores de comparação](/en-US/Learn/JavaScript/First_steps/Math#Comparison_operators) que discutimos no último módulo, e podem retornar `true` ou `false`.
3. Um par de chaves, e dentro dele temos código — pode ser qualquer código que queiramos, e só vai ser executado se o teste condicional retornar `true`.
4. A palavra reservada `else`.
5. Outro par de chaves, dentro dele temos mais um pouco de código — pode ser qualquer código que queiramos, e só vai executar se o teste condicional retornar um valor diferente de `true`, neste caso `not true`, ou `false`.

Este tipo de código é bem legível por seres humanos — ele diz: "**if** a condição for `true`, execute o bloco de código A, **else** execute o bloco de código B" (**se** a condição for **verdadeira**, execute o bloco de código A, **senão** execute o bloco de código B).

Você precisa saber que não é obrigado a colocar a palavra reservada `else` e o segundo bloco de par de chaves. O código apresentado a seguir é perfeitamente válido e não produz erros:

```
if (condicao) {
  codigo para executar se a condição for verdadeira
}

código a ser executado
```

Entretanto, você precisa ser cauteloso aqui — neste caso, repare que o segundo bloco de código não é controlado pela declaração condicional, então ele vai executar **sempre**, independente do teste condicional retornar `true` ou `false`. É claro, isto não é necessariamente uma coisa ruim, mas isso pode não ser o que você quer — com muita frequência você vai querer executar ou um bloco de código ou outro, não os dois juntos.

Por fim, você verá muitas vezes declarações `if...else` escritas sem as chaves, no seguinte estilo de escrita:

```
if (condicao) executar aqui se for verdadeira
else executar este outro codigo
```

Este é um código perfeitamente válido, mas não é recomendado — ele facilita que você escreva código fora do escopo do `if` e do `else`, o que seria mais difícil se você estivesse usando as chaves para delimitar os blocos de código, e usando multiplas linhas de código e identação.

### Um exemplo real

Para entender bem a sintaxe, vamos considerar um exemplo real. Imagine um filhote de humanos sendo chamdo a ajudar com as tarefas do Pai ou da Mãe. Os pais podem falar: "Ei querido, se você me ajudar a ir e fazer as compras, eu te dou uma grana extra para que você possa comprar aquele brinquedo que você quer." Em JavaScript, nós podemos representar isso como:

```js
var comprasFeitas = false;

if (comprasFeitas === true) {
  var granaFilhote = 10;
} else {
  var granaFilhote = 5;
}
```

Esse código como mostrado irá sempre resultar na variável `comprasFeitas` retornando `false`, sendo um desapontamento para nossas pobres crianças. Cabe a nós fornecer um mecanismo para o pai definir a variável `comprasFeitas` como `true` se o filho fez as compras.

> **Nota:** Você pode ver a versão completa desse exemplo no [GitHub](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/allowance-updater.html) (também veja [live](http://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html).)

### else if

O último exemplo nos forneceu duas opções ou resultados - mas e se quisermos mais do que dois?

Existe uma maneira de encadear escolhas/resultados extras ao seu `if...else` — usando `else if`. Cada escolha extra requer um bloco adicional para colocar entre `if() { ... }` e `else { ... }` — confira o seguinte exemplo mais envolvido, que pode fazer parte de um aplicativo simples de previsão do tempo:

```html
<label for="weather">Select the weather type today: </label>
<select id="weather">
  <option value="">--Make a choice--</option>
  <option value="sunny">Sunny</option>
  <option value="rainy">Rainy</option>
  <option value="snowing">Snowing</option>
  <option value="overcast">Overcast</option>
</select>

<p></p>
```

```js
var select = document.querySelector("select");
var para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
  var choice = select.value;

  if (choice === "sunny") {
    para.textContent =
      "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
  } else if (choice === "rainy") {
    para.textContent =
      "Rain is falling outside; take a rain coat and a brolly, and don't stay out for too long.";
  } else if (choice === "snowing") {
    para.textContent =
      "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
  } else if (choice === "overcast") {
    para.textContent =
      "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
  } else {
    para.textContent = "";
  }
}
```

{{ EmbedLiveSample('else_if', '100%', 100) }}

1. Aqui, temos um elemento HTML {{htmlelement("select")}} que nos permite fazer escolhas de clima diferentes e um simples parágrafo.
2. No JavaScript, estamos armazenando uma referência para ambos os elementos {{htmlelement("select")}} e {{htmlelement("p")}}, e adicionando um listener de evento ao elemento `<select>` para que, quando o valor for alterado, a função `setWeather()` é executada.
3. Quando esta função é executada, primeiro definimos uma variável chamada `choice` para o valor atual selecionado no elemento `<select>`. Em seguida, usamos uma instrução condicional para mostrar um texto diferente dentro do parágrafo, dependendo de qual é o valor de `choice` . Observe como todas as condições são testadas nos blocos `else if() {...}`, com exceção do primeiro, que é testado em um bloco `if() {...}`.
4. A última escolha, dentro do bloco `else {...}`, é basicamente uma opção de "último recurso" — o código dentro dele será executado se nenhuma das condições for `true`. Nesse caso, ele serve para esvaziar o texto do parágrafo, se nada for selecionado, por exemplo, se um usuário decidir selecionar novamente a opção de espaço reservado "- Make a choice--" mostrada no início.

> **Nota:** Você pode também [encontrar este exemplo no GitHub](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/simple-else-if.html) ([veja ele sendo executado](http://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html) lá também.)

### Uma nota sobre os operadores de comparação

Operadores de comparação são usados para testar as condições dentro de nossas declarações condicionais. Nós primeiro olhamos para operadores de comparação de volta em nosso artigo [Matemática básica em JavaScript - números e operadores](/en-US/Learn/JavaScript/First_steps/Math#Comparison_operators). Nossas escolhas são:

- `===` e `!==` — testar se um valor é idêntico ou não idêntico a outro.
- `<` e `>` — teste se um valor é menor ou maior que outro.
- `<=` e `>=` — testar se um valor é menor ou igual a, ou maior que ou igual a outro.

> **Nota:** Revise o material no link anterior se quiser atualizar suas memórias sobre eles.

Queríamos fazer uma menção especial do teste de valores boolean (`true`/`false`) , e um padrão comum que você vai encontrar de novo e de novo. Qualquer valor que não seja `false`, `undefined`, `null`, `0`, `NaN`, ou uma string vazia (`''`) retorna `true` quando testado como uma instrução condicional, portanto, você pode simplesmente usar um nome de variável para testar se é verdadeiro , ou mesmo que existe (ou seja, não é indefinido). Por exemplo:

```js
var cheese = "Cheddar";

if (cheese) {
  console.log("Yay! Cheese available for making cheese on toast.");
} else {
  console.log("No cheese on toast for you today.");
}
```

E, voltando ao nosso exemplo anterior sobre a criança fazendo uma tarefa para seu pai, você poderia escrevê-lo assim:

```js
var shoppingDone = false;

if (shoppingDone) {
  // don't need to explicitly specify '=== true'
  var childsAllowance = 10;
} else {
  var childsAllowance = 5;
}
```

### Aninhando if ... else

É perfeitamente correto colocar uma declaração `if...else` dentro de outra — para aninhá-las. Por exemplo, poderíamos atualizar nosso aplicativo de previsão do tempo para mostrar mais opções dependendo de qual é a temperatura:

```js
if (choice === "sunny") {
  if (temperature < 86) {
    para.textContent =
      "It is " +
      temperature +
      " degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.";
  } else if (temperature >= 86) {
    para.textContent =
      "It is " +
      temperature +
      " degrees outside — REALLY HOT! If you want to go outside, make sure to put some suncream on.";
  }
}
```

Mesmo que o código trabalhe em conjunto, cada uma das instruções `if...else` funcionam completamente independente uma da outra.

### Operadores lógicos: AND, OR e NOT

Se você quiser testar várias condições sem escrever instruções aninhadas `if...else`, os [operadores lógicos](/pt-BR/docs/Web/JavaScript/Reference/Operators/Logical_Operators) poderão ajudá-lo. Quando usado em condições, os dois primeiros fazem o seguinte:

- `&&` — AND; permite encadear duas ou mais expressões para que todas elas tenham que ser avaliadas individualmente como `true` assim toda a expressão retorna `true`.
- `||` — OR; permite encadear duas ou mais expressões para que uma ou mais delas tenham que ser avaliadas individualmente como `true` assim toda a expressão retorna `true`.

Para fornecer um exemplo AND, o fragmento de exemplo anterior pode ser reescrito assim:

```js
if (choice === "sunny" && temperature < 86) {
  para.textContent =
    "It is " +
    temperature +
    " degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.";
} else if (choice === "sunny" && temperature >= 86) {
  para.textContent =
    "It is " +
    temperature +
    " degrees outside — REALLY HOT! If you want to go outside, make sure to put some suncream on.";
}
```

Então, por exemplo, o primeiro bloco de código só será executado se ambas as condições `choice === 'sunny'` _e_ `temperature < 86` retornarem `true`.

Vamos ver um exemplo rápido de OR:

```js
if (iceCreamVanOutside || houseStatus === "on fire") {
  console.log("You should leave the house quickly.");
} else {
  console.log("Probably should just stay in then.");
}
```

O último tipo de operador lógico, NOT, expressado pelo operador `!`, pode ser usado para negar uma expressão. Vamos combiná-lo com OR no exemplo acima:

```js
if (!(iceCreamVanOutside || houseStatus === "on fire")) {
  console.log("Probably should just stay in then.");
} else {
  console.log("You should leave the house quickly.");
}
```

Nesse trecho, se a instrução OR retornar `true`, o operador NOT negará isso para que a expressão geral retorne `false`.

Você pode combinar tantas instruções lógicas quanto quiser, em qualquer estrutura. O exemplo a seguir executa o código interno apenas se ambos os conjuntos de instruções OR retornarem true, significando que a instrução AND global também retornará true:

```js
if ((x === 5 || y > 3 || z <= 10) && (loggedIn || userName === "Steve")) {
  // run the code
}
```

Um erro comum ao usar o operador OR lógico em instruções condicionais é tentar indicar a variável cujo valor você está verificando uma vez e, em seguida, fornecer uma lista de valores que poderia ser para retornar true, separados pelos operadores `||` (OR) . Por exemplo:

```js example-bad
if (x === 5 || 7 || 10 || 20) {
  // run my code
}
```

Nesse caso, a condição dentro de `if(...)` sempre será avaliada como verdadeira, já que 7 (ou qualquer outro valor diferente de zero) sempre é avaliado como verdadeiro. Esta condição está realmente dizendo "se x é igual a 5, ou 7 é verdade — o que sempre é". Isso logicamente não é o que queremos! Para fazer isso funcionar, você precisa especificar um teste completo ao lado de cada operador OR:

```js
if (x === 5 || x === 7 || x === 10 || x === 20) {
  // run my code
}
```

## Instruções switch

As instruções `if...else` fazem o trabalho de habilitar o código condicional bem, mas elas também possuem suas desvantagens. Elas são boas principalmente para casos em que você tem algumas opções, e cada uma requer uma quantidade razoável de código para ser executado, e / ou as condições são complexas (por exemplo, vários operadores lógicos). Nos casos em que você deseja definir uma variável para uma determinada opção de valor ou imprimir uma determinada instrução dependendo de uma condição, a sintaxe pode ser um pouco incômoda, especialmente se você tiver um grande número de opções.

As [instruções`switch`](/pt-BR/docs/Web/JavaScript/Reference/Statements/switch) são suas amigas aqui — elas tomam uma única expressão / valor como uma entrada e, em seguida, examinam várias opções até encontrarem um que corresponda a esse valor, executando o código correspondente que o acompanha. Aqui está mais um pseudocódigo, para você ter uma ideia:

```
switch (expression) {
  case choice1:
    run this code
    break;

  case choice2:
    run this code instead
    break;

  // include as many cases as you like

  default:
    actually, just run this code
}
```

Aqui nós temos:

1. A palavra-chave `switch`, seguido por um par de parênteses.
2. Uma expressão ou valor dentro dos parênteses.
3. A palavra-chave `case`, seguido por uma escolha que a expressão / valor poderia ser, seguido por dois pontos.
4. Algum código para ser executado se a escolha corresponder à expressão.
5. Uma instrução `break`, seguido de um ponto e vírgula. Se a opção anterior corresponder à expressão / valor, o navegador interromperá a execução do bloco de código aqui e passará para qualquer código que aparecer abaixo da instrução switch.
6. Como muitos outros casos (marcadores 3 a 5) que você quiser.
7. A palavra-chave `default`, seguido por exatamente o mesmo padrão de código de um dos casos (marcadores 3 a 5), exceto que o `default` não tem escolha após ele, e você não precisa da instrução `break`, pois não há nada para executar depois disso o bloco de qualquer maneira. Esta é a opção padrão que é executada se nenhuma das opções corresponder.

> **Nota:** Você não precisa incluir a seção `default` — você pode omiti-la com segurança se não houver chance de que a expressão possa se igualar a um valor desconhecido. Se houver uma chance disso, você precisará incluí-lo para lidar com casos desconhecidos.

### Um exemplo de switch

Vamos dar uma olhada em um exemplo real — vamos reescrever nosso aplicativo de previsão do tempo para usar uma instrução switch:

```html
<label for="weather">Select the weather type today: </label>
<select id="weather">
  <option value="">--Make a choice--</option>
  <option value="sunny">Sunny</option>
  <option value="rainy">Rainy</option>
  <option value="snowing">Snowing</option>
  <option value="overcast">Overcast</option>
</select>

<p></p>
```

```js
var select = document.querySelector("select");
var para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
  var choice = select.value;

  switch (choice) {
    case "sunny":
      para.textContent =
        "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
      break;
    case "rainy":
      para.textContent =
        "Rain is falling outside; take a rain coat and a brolly, and don't stay out for too long.";
      break;
    case "snowing":
      para.textContent =
        "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
      break;
    case "overcast":
      para.textContent =
        "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
      break;
    default:
      para.textContent = "";
  }
}
```

{{ EmbedLiveSample('A_switch_example', '100%', 100, "", "", "hide-codepen-jsfiddle") }}

> **Nota:** Você pode [encontrar este exemplo no GitHub](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/simple-switch.html) (veja-o em [execução](http://mdn.github.io/learning-area/javascript/building-blocks/simple-switch.html) lá também.)

## Operador ternário

Há um bit final de sintaxe que queremos apresentar a você antes de começar a brincar com alguns exemplos. O [operador ternário ou condicional](/pt-BR/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) é um pequeno bit de sintaxe que testa uma condição e retorna um valor / expressão se for `true`, e outro caso seja `false` — isso pode ser útil em algumas situações e pode ocupar muito menos código que um bloco `if...else` se você simplesmente tiver duas opções escolhidas entre uma condição `true`/`false` condition. O pseudocódigo é assim:

```
( condition ) ? run this code : run this code instead
```

Então, vamos dar uma olhada em um exemplo simples:

```js
var greeting = isBirthday
  ? "Happy birthday Mrs. Smith — we hope you have a great day!"
  : "Good morning Mrs. Smith.";
```

Aqui temos uma variável chamada `isBirthday` — se ela for `true`, nós damos ao nosso convidado uma mensagem de feliz aniversário; se não, damos a ela a saudação diária padrão.

### Exemplo de operador ternário

Você não precisa apenas definir valores de variáveis com o operador ternário; Você também pode executar funções ou linhas de código - qualquer coisa que você gosta. O exemplo ao vivo a seguir mostra um seletor de temas simples em que o estilo do site é aplicado usando um operador ternário.

```html
<label for="theme">Select theme: </label>
<select id="theme">
  <option value="white">White</option>
  <option value="black">Black</option>
</select>

<h1>This is my website</h1>
```

```js
var select = document.querySelector("select");
var html = document.querySelector("html");
document.body.style.padding = "10px";

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select.onchange = function () {
  select.value === "black"
    ? update("black", "white")
    : update("white", "black");
};
```

{{ EmbedLiveSample('Ternary_operator_example', '100%', 300) }}

Aqui nós temos um elemento {{htmlelement('select')}} para escolher um tema (preto ou branco), além de um simples {{htmlelement('h1')}} para exibir um título do site. Nós também temos uma função chamada `update()`, que leva duas cores como parâmetros (entradas). A cor do plano de fundo do site é definida para a primeira cor fornecida e sua cor de texto é definida para a segunda cor fornecida.

Finalmente, nós também temos um evento listener [onchange](/pt-BR/docs/Web/API/GlobalEventHandlers/onchange) que serve para executar uma função que contém um operador ternário. Começa com uma condição de teste — `select.value === 'black'`. Se este retornar `true`, nós executamos a função `update()` com parâmetros de preto e branco, o que significa que acabamos com a cor de fundo do preto e cor do texto de branco. Se retornar `false`, nós executamos a função `update()` com parâmetros de branco e preto, o que significa que a cor do site está invertida.

> **Nota:** Você pode também [encontrar este exemplo no GitHub](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/simple-ternary.html) (veja-o [executando](http://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html) lá também.)

## Aprendizado ativo: um calendário simples

Neste exemplo, você nos ajudará a concluir um aplicativo de calendário simples. No código que você tem:

- Um elemento {{htmlelement("select")}} para permitir que o usuário escolha entre diferentes meses.
- Um evento manipulador `onchange` para detectar quando o valor selecionado no menu `<select>` é mudado.
- Uma função chamada `createCalendar()` que desenha o calendário e exibe o mês correto no elemento {{htmlelement("h1")}} .

Precisamos que você escreva uma instrução condicional dentro da função do manipulador onchange, logo abaixo do comentário `// ADD CONDITIONAL HERE`. Ele deve:

1. Olhar para o mês selecionado (armazenado na variavel `choice`. Este será o valor do elemento `<select>` após o valor ser alterado, portanto, "Janeiro", por exemplo.
2. Definir uma variável chamada `days` para ser igual ao número de dias no mês selecionado. Para fazer isso, você terá que procurar o número de dias em cada mês do ano. Você pode ignorar anos bissextos para os propósitos deste exemplo.

Dicas:

- É aconselhável usar o OR lógico para agrupar vários meses em uma única condição; muitos deles compartilham o mesmo número de dias.
- Pense em qual número de dias é o mais comum e use isso como um valor padrão.

Se você cometer um erro, você sempre pode redefinir o exemplo com o botão "Reset". Se você ficar realmente preso, pressione "Mostrar solução" para ver uma solução.

```html hidden
<div class="output" style="height: 500px;overflow: auto;">
  <label for="month">Select month: </label>
  <select id="month">
    <option value="January">January</option>
    <option value="February">February</option>
    <option value="March">March</option>
    <option value="April">April</option>
    <option value="May">May</option>
    <option value="June">June</option>
    <option value="July">July</option>
    <option value="August">August</option>
    <option value="September">September</option>
    <option value="October">October</option>
    <option value="November">November</option>
    <option value="December">December</option>
  </select>

  <h1></h1>

  <ul></ul>
</div>

<hr />

<textarea id="code" class="playable-code" style="height: 500px;">
var select = document.querySelector('select');
var list = document.querySelector('ul');
var h1 = document.querySelector('h1');

select.onchange = function() {
  var choice = select.value;

  // ADD CONDITIONAL HERE

  createCalendar(days, choice);
}

function createCalendar(days, choice) {
  list.innerHTML = '';
  h1.textContent = choice;
  for (var i = 1; i <= days; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

createCalendar(31,'January');
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
```

```css hidden
.output * {
  box-sizing: border-box;
}

.output ul {
  padding-left: 0;
}

.output li {
  display: block;
  float: left;
  width: 25%;
  border: 2px solid white;
  padding: 5px;
  height: 40px;
  background-color: #4a2db6;
  color: white;
}
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
  "var select = document.querySelector('select');\nvar list = document.querySelector('ul');\nvar h1 = document.querySelector('h1');\n\nselect.onchange = function() {\n  var choice = select.value;\n  var days = 31;\n  if(choice === 'February') {\n    days = 28;\n  } else if(choice === 'April' || choice === 'June' || choice === 'September'|| choice === 'November') {\n    days = 30;\n  }\n\n  createCalendar(days, choice);\n}\n\nfunction createCalendar(days, choice) {\n  list.innerHTML = '';\n  h1.textContent = choice;\n for(var i = 1; i <= days; i++) {\n    var listItem = document.createElement('li');\n    listItem.textContent = i;\n    list.appendChild(listItem);\n  }\n }\n\ncreateCalendar(31,'January');";

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);
```

{{ EmbedLiveSample('Playable_code', '100%', 1110) }}

## Aprendizado ativo: mais opções de cores!

Neste exemplo, você terá o exemplo de operador ternário que vimos anteriormente e converterá o operador ternário em uma instrução switch que nos permitirá aplicar mais opções ao site simples. Olhe para a {{htmlelement("select")}} — desta vez você verá que não tem duas opções de tema, mas cinco. Você precisa adicionar uma instrução switch abaixo do comentário `// ADD SWITCH STATEMENT`:

- Ele deve aceitar a variável `choice` como sua expressão de entrada.
- Para cada caso, a escolha deve ser igual a um dos valores possíveis que podem ser selecionados, ou seja, branco, preto, roxo, amarelo ou psicodélico.
- Para cada caso, a função `update()` deve ser executada e receber dois valores de cor, o primeiro para a cor de segundo plano e o segundo para a cor do texto. Lembre-se de que valores de cores são strings, portanto, precisam ser agrupados entre aspas.

Se você cometer um erro, você sempre pode redefinir o exemplo com o botão "Reset". Se você ficar realmente travado, pressione "Show solution" para ver uma solução.

```html hidden
<div class="output" style="height: 300px;">
  <label for="theme">Select theme: </label>
  <select id="theme">
    <option value="white">White</option>
    <option value="black">Black</option>
    <option value="purple">Purple</option>
    <option value="yellow">Yellow</option>
    <option value="psychedelic">Psychedelic</option>
  </select>

  <h1>This is my website</h1>
</div>

<hr />

<textarea id="code" class="playable-code" style="height: 450px;">
var select = document.querySelector('select');
var html = document.querySelector('.output');

select.onchange = function() {
  var choice = select.value;

  // ADD SWITCH STATEMENT
}

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}</textarea
>

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
  "var select = document.querySelector('select');\nvar html = document.querySelector('.output');\n\nselect.onchange = function() {\n  var choice = select.value;\n\n  switch(choice) {\n    case 'black':\n      update('black','white');\n      break;\n    case 'white':\n      update('white','black');\n      break;\n    case 'purple':\n      update('purple','white');\n      break;\n    case 'yellow':\n      update('yellow','darkgray');\n      break;\n    case 'psychedelic':\n      update('lime','purple');\n      break;\n  }\n}\n\nfunction update(bgColor, textColor) {\n  html.style.backgroundColor = bgColor;\n  html.style.color = textColor;\n}";

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);
```

{{ EmbedLiveSample('Playable_code_2', '100%', 850) }}

## Conclusão

E isso é tudo que você realmente precisa saber sobre estruturas condicionais no JavaScript por agora! Tenho certeza que você terá entendido esses conceitos e trabalhou com os exemplos com facilidade; se houver algo que você não tenha entendido, sinta-se à vontade para ler o artigo novamente ou [contate-nos](/en-US/Learn#Contact_us) para pedir ajuda.

## Veja também

- [Operadores de comparação](/en-US/Learn/JavaScript/First_steps/Math#Comparison_operators)
- [Declarações condicionais em detalhes](/pt-BR/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#Conditional_statements)
- [Referência if...else](/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else)
- [Referência do operador condicional (ternário)](/pt-BR/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

## Teste suas habilidades!

Você chegou ao final deste artigo, mas você consegue se lembrar das informações mais importantes? Você pode encontrar mais alguns testes para verificar se reteve essas informações antes de prosseguir — Veja [Teste suas habilidades: Condicionais](/pt-BR/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Conditionals).

{{NextMenu("Learn/JavaScript/Building_blocks/Looping_code", "Learn/JavaScript/Building_blocks")}}
