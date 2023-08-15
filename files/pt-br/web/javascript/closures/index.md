---
title: Closures
slug: Web/JavaScript/Closures
---

{{jsSidebar("Intermediate")}}

Uma **closure** é a combinação de uma função com as referências ao estado que a circunda (o **ambiente léxico**). Em outras palavras, uma closure lhe dá acesso ao escopo de uma função externa a partir de uma função interna. Em JavaScript, as closures são criadas toda vez que uma função é criada, no momento da criação da função.

## Escopo léxico

Considere a função abaixo:

```js
function init() {
  var name = "Mozilla"; // name é uma variável local criada pelo init
  function displayName() {
    // displayName() é a função interna, uma closure
    console.log(name); // usa a variável declarada na função pai
  }
  displayName();
}
init();
```

A função `init()` cria uma variável local chamada `name`, e depois define uma função chamada `displayName()`. `displayName()` é uma função aninhada (uma _closure_) — ela é definida dentro da função `init()`, e está disponivel apenas dentro do corpo daquela função. Diferente de init(), `displayName()` não tem variáveis locais próprias, e ao invés disso reusa a variável `name` declarada na função pai.

[Rode](http://jsfiddle.net/xAFs9/3/) o código e veja que isso funciona. Este é um exemplo de _escopo léxico:_ em JavaScript, o escopo de uma variável é definido por sua localização dentro do código fonte (isto é aparentemente _léxico_) e funções aninhadas têm acesso às variáveis declaradas em seu escopo externo.

## Closure

Agora considere o seguinte exemplo:

```js
function makeFunc() {
  var name = "Mozilla";
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();
```

Se você rodar este código o mesmo terá exatamente o mesmo efeito que o `init()` do exemplo anterior: a palavra "Mozilla" será mostrada na caixa de alerta. O que é diferente - e interessante - é o fato de que a função interna do `displayName()` foi retornada da função externa antes de ser executada.

Pode parecer não muito intuitivo de que o código de fato funciona. Normalmente variáveis locais de uma função, apenas existem pela duração de sua execução. Uma vez que `makeFunc()` terminou de executar, é razoável esperar que a variável `name` não será mais necessária. Dado que o código ainda funciona como o esperado, este não é o caso.

A solução para tal problema é que a função `myFunc` tornou-se uma `closure`. Uma closure trata-se de um tipo especial de objeto que combina duas coisas: a função e o ambiente onde a função foi criada. Este ambiente consiste de quaisquer variáveis que estavam no escopo naquele momento em que a função foi criada. Neste caso, `myFunc` é a closure que incorpora tanto a função `displayName` quanto a palavra _Mozilla_ que existia quando a closure foi criada.

Aqui temos um exemplo um pouco mais interessante, a função `makeAdder`:

```js
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

print(add5(2)); // 7
print(add10(2)); // 12
```

Neste exemplo definimos a função `makeAdder(x)` que toma um único argumento `x` e retorna uma nova função. A função retornada toma então um único argumento, `y`, e retorna então a soma de `x` e de `y`.

Na essência o `makeAdder` trata-se de uma _função fábrica -_ irá construir outras funções que podem adicionar um determinado valor específico a seu argumento. No exemplo acima usamos a fábrica de funções para criar duas novas funções - uma que adiciona 5 ao argumento, e outra que adiciona 10.

Ambas as funções `add5` e `add10` são closures. Compartilham o mesmo corpo de definição de função mas armazenam diferentes ambientes. No ambiente da `add5`, por exemplo, `x` equivale a 5, enquanto na `add10` o valor de x é 10.

## Closures na prática

Esta é a teoria — mas closures são realmente úteis? Vamos considerar suas aplicações práticas. Uma closure deixa você associar dados (do ambiente) com uma função que trabalha estes dados. Isto está diretamente ligado com programação orientada a objetos, onde objetos nos permitem associar dados (as propriedades do objeto) utilizando um ou mais métodos.

Consequentemente, você pode utilizar uma closure em qualquer lugar onde você normalmente utilizaria um objeto de único método.

Situações onde você poderia utilizar isto são comuns em ambientes web. Muitos códigos escritos em JavaScript para web são baseados em eventos - nós definimos algum comportamento e então, o atribuimos a um evento que será disparado pelo usuário (quando uma tecla for pressionada, por exemplo). Nosso código normalmente é utilizado como callback: uma função que será executada como resposta ao evento.

Aqui temos um exemplo prático: suponha que queremos adicionar alguns botões para ajustar o tamanho do texto de uma página. Um jeito de fazer seria especificar o tamanho da fonte no elemento body e então definir o tamanho dos outros elementos da página (os cabeçalhos, por exemplo) utilizando a unidade relativa em:

```css
body {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 12px;
}

h1 {
  font-size: 1.5em;
}
h2 {
  font-size: 1.2em;
}
```

Nossos botões interativos de tamanho de texto podem alterar a propriedade font-size do elemento body, e os ajustes serão refletidos em outros elementos graças à unidade relativa.

O código JavaScript:

```js
function makeSizer(size) {
  return function () {
    document.body.style.fontSize = size + "px";
  };
}

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);
```

`size12`, `size14` e `size16` agora são funções que devem redimensionar o texto do elemento body para 12, 14 e 16 pixels respectivamente. Nós podemos designá-las a botões (neste caso, links) como feito a seguir:

```js
document.getElementById("size-12").onclick = size12;
document.getElementById("size-14").onclick = size14;
document.getElementById("size-16").onclick = size16;
```

```html
<a href="#" id="size-12">12</a>
<a href="#" id="size-14">14</a>
<a href="#" id="size-16">16</a>
```

[View on JSFiddle](https://jsfiddle.net/vnkuZ)

## Emulando métodos privados com closures

Linguagens como Java oferecem a habilidade de declarar métodos privados, o que significa que eles só poderão ser chamados por outros métodos na mesma classe.

O JavaScript não oferece uma maneira nativa de fazer isso, mas é possível emular métodos privados usando closures. Métodos privados não são somente úteis para restringir acesso ao código: eles também oferecem uma maneira eficaz de gerenciar seu namespace global, evitando que métodos não essenciais baguncem a interface pública do seu código.

Veja como definir algumas funções públicas que acessam funções e variáveis privadas, usando closures que também é conhecido como [module pattern](http://www.google.com/search?q=javascript+module+pattern):

```js
var Counter = (function () {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return privateCounter;
    },
  };
})();

alert(Counter.value()); /* Alerts 0 */
Counter.increment();
Counter.increment();
alert(Counter.value()); /* Alerts 2 */
Counter.decrement();
alert(Counter.value()); /* Alerts 1 */
```

Tem muita coisa acontecendo aqui. Nos exemplos anteriores cada closure teve o seu próprio ambiente; aqui nós criamos um ambiente único que é compartilhado por três funções: `Counter.increment`, `Counter.decrement` e `Counter.value`.

O ambiente compartilhado é criado no corpo de uma função anônima, da qual é executada assim que é definida. O ambiente contém dois itens privados: uma variável chamada `privateCounter` e uma função chamada `changeBy`. Nenhum desses itens privados podem ser acessados diretamente de fora da função anônima. Ao invés disso, eles devem ser acessados pelas três funções públicas que são retornadas.

Aquelas três funções públicas são closures que compartilham o mesmo ambiente. Graças ao escopo léxico do JavaScript, cada uma delas tem acesso a variável `privateCounter` e à função `changeBy`.

> **Nota:** Você perceberá que estamos definindo uma função anônima que cria um contador , e então o executamos imediatamente e atribuímos o resultado à variável `Counter`. Poderíamos armazenar essa função em uma variável separada e usá-la para criar diversos contadores.

```js
var makeCounter = function () {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return privateCounter;
    },
  };
};

var Counter1 = makeCounter();
var Counter2 = makeCounter();
alert(Counter1.value()); /* Alerts 0 */
Counter1.increment();
Counter1.increment();
alert(Counter1.value()); /* Alerts 2 */
Counter1.decrement();
alert(Counter1.value()); /* Alerts 1 */
alert(Counter2.value()); /* Alerts 0 */
```

Observe como cada um dos contadores mantém a sua independência em relação ao outro. Seu ambiente durante a execução da função `makeCounter()` é diferente a cada vez que ocorre. A variável `privateCounter` contém uma instância diferente a cada vez.

> **Nota:** Usar closures desta maneira oferece uma série de benefícios que estão normalmente associados a programação orientada a objetos, em particular encapsulamento e ocultação de dados.

## Criando closures dentro de loops: Um erro comum

Antes da introdução da palavra chave [`let`](/pt-BR/docs/JavaScript/Reference/Statements/let) no JavaScript 1.7, um problema comum ocorria com closures quando eram criadas dentro de um loop. Considere o exemplo:

```html
<p id="help">Notas úteis aparecerão aqui</p>
<p>E-mail: <input type="text" id="email" name="email" /></p>
<p>Nome: <input type="text" id="name" name="name" /></p>
<p>Idade: <input type="text" id="age" name="age" /></p>
```

```js
function showHelp(help) {
  document.getElementById("help").innerHTML = help;
}

function setupHelp() {
  var helpText = [
    { id: "email", help: "Seu e-mail" },
    { id: "name", help: "Seu nome completo" },
    { id: "age", help: "Sua idade (você deve ter mais de 16 anos)" },
  ];

  for (var i = 0; i < helpText.length; i++) {
    // O culpado é o uso do `var` nesta linha
    var item = helpText[i];
    document.getElementById(item.id).onfocus = function () {
      showHelp(item.help);
    };
  }
}

setupHelp();
```

[View on JSFiddle](https://jsfiddle.net/v7gjv)

O array `helpText` define três dicas úteis, cada uma associada ao ID de um input no documento. O loop percorre essas definições, atrelando um evento `onfocus` para cada um que mostra o método de ajuda associado.

Se você tentar executar esse código, Você verá que não vai funcionar como esperado. Não importa em qual campo ocorre o focus, a mensagem sobre a sua idade será mostrada.

O motivo disto é que as funções atreladas ao `onfocus` são closures; elas consistem na definição da função e do ambiente capturado do escopo da função `setupHelp`. Três closures foram criados, mas todos eles compartilham o mesmo ambiente. No momento em que os callbacks do `onfocus` são executados, o loop segue seu curso e então a variável `item` (compartilhada por todos os três closures) fica apontando para a última entrada na lista `helpText`.

Uma solução seria neste caso usar mais closures: em particular, usar uma fábrica de funções como descrito anteriormente:

```js
function showHelp(help) {
  document.getElementById("help").textContent = help;
}

function makeHelpCallback(help) {
  return function () {
    showHelp(help);
  };
}

function setupHelp() {
  var helpText = [
    { id: "email", help: "Seu e-mail" },
    { id: "name", help: "Seu nome completo" },
    { id: "age", help: "Sua idade (você deve ter mais de 16 anos)" },
  ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
  }
}

setupHelp();
```

[View on JSFiddle](https://jsfiddle.net/v7gjv/1)

Isto funciona conforme o esperado. Ao invés dos callbacks compartilharem o mesmo ambiente, a função `makeHelpCallback` cria um novo ambiente para cada um no qual `help` se refere à string correspondente do array `helpText`.

Uma outra maneira de escrever o mesmo usando closures anônimas é:

```js
function showHelp(help) {
  document.getElementById("help").textContent = help;
}

function setupHelp() {
  var helpText = [
    { id: "email", help: "Seu e-mail" },
    { id: "name", help: "Seu nome completo" },
    { id: "age", help: "Sua idade (você deve ter mais de 16 anos)" },
  ];

  for (var i = 0; i < helpText.length; i++) {
    (function () {
      var item = helpText[i];
      document.getElementById(item.id).onfocus = function () {
        showHelp(item.help);
      };
    })(); // Expressão de função invocada imediatamente com o valor atual do item (preservado até a iteração).
  }
}

setupHelp();
```

Se você não quiser usar mais closures, você pode usar a palavra-chave [`let`](/pt-BR/docs/JavaScript/Reference/Statements/let) ou [`const`](/pt-BR/docs/Web/JavaScript/Reference/Statements/const):

```js
function showHelp(help) {
  document.getElementById("help").textContent = help;
}

function setupHelp() {
  var helpText = [
    { id: "email", help: "Seu e-mail" },
    { id: "name", help: "Seu nome completo" },
    { id: "age", help: "Sua idade (você deve ter mais de 16 anos)" },
  ];

  for (let i = 0; i < helpText.length; i++) {
    const item = helpText[i];
    document.getElementById(item.id).onfocus = () => {
      showHelp(item.help);
    };
  }
}

setupHelp();
```

Este exemplo usa `const` em vez de `var`, portanto cada closure vincula a variável com escopo de bloco, o que significa que nenhuma closure adicional é necessária.

Outra alternativa poderia ser usar `forEach()` para iterar sobre o array `helpText` e anexar um ouvinte a cada [`<input>`](/pt-BR/docs/Web/HTML/Element/input), conforme mostrado:

```js
function showHelp(help) {
  document.getElementById("help").textContent = help;
}

function setupHelp() {
  var helpText = [
    { id: "email", help: "Seu e-mail" },
    { id: "name", help: "Seu nome completo" },
    { id: "age", help: "Sua idade (você deve ter mais de 16 anos)" },
  ];

  helpText.forEach(function (text) {
    document.getElementById(text.id).onfocus = function () {
      showHelp(text.help);
    };
  });
}

setupHelp();
```

## Considerações de performance

Não é sábio criar funções dentro de outras funções se a closure não for necessário para uma tarefa em particular, pois ele afetará a performance do script de forma bem negativa tanto em velocidade de processamento quanto em consumo de memória.

Por exemplo, ao criar uma nova classe/objeto, os métodos devem normalmente estar associados ao protótipo do objeto do que definido no construtor. O motivo disso é que sempre que o construtor for chamado os métodos serão reatribuídos (isto é, para cada criação de objeto).

Considere o seguinte exemplo pouco prático porém demonstrativo:

```js
function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
  this.getName = function () {
    return this.name;
  };

  this.getMessage = function () {
    return this.message;
  };
}
```

O código anterior não aproveita os benefícios dos closures e portanto poderia ser reformulado assim:

```js
function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}
MyObject.prototype = {
  getName: function () {
    return this.name;
  },
  getMessage: function () {
    return this.message;
  },
};
```

Ou assim:

```js
function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}
MyObject.prototype.getName = function () {
  return this.name;
};
MyObject.prototype.getMessage = function () {
  return this.message;
};
```

Nos dois exemplos anteriores, o protótipo herdado pode ser compartilhado por todos os objetos, e as definições de métodos não precisam ocorrer sempre que o objeto for criado. Veja [Detalhes do modelo de objeto](/pt-BR/docs/JavaScript/Guide/Details_of_the_Object_Model) para mais detalhes.
