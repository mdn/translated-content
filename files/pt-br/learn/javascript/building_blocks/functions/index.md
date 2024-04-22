---
title: Funções — blocos reutilizáveis de código
slug: Learn/JavaScript/Building_blocks/Functions
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Looping_code","Learn/JavaScript/Building_blocks/Build_your_own_function", "Learn/JavaScript/Building_blocks")}}

Outro conceito essencial em código é função, que permitem que você armazene um pedaço de código que realiza uma simples tarefa dentro de um bloco, e então chama aquele código sempre que você precisar usá-lo com um curto comando — em vez de ter que escrever o mesmo código multiplas vezes. Neste artigo nós vamos explorar conceitos fundamentais por trás das funções como sintaxe básica, como invocá-las e defini-las, escopo, e parâmetros.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Prerequisitos:</th>
      <td>
        Infrmática básica, um entendimento básico de HTML e CSS,
        <a href="/pt-BR/docs/Learn/JavaScript/First_steps"
          >Primeiros passos em JavaScript</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Entender conceitos fundamentais por trás das funções em JavaScript.
      </td>
    </tr>
  </tbody>
</table>

## Onde eu encontro funções?

Em JavaScript, você encontrará funções em todos os lugares, de fato, nós vamos usar funções ao longo de todo o curso; nós só não falaremos sobre elas em damasia. Agora está na hora, contudo, para falarmos sobre funções explicitamente, e realmente explorar sua sintaxe.

Praticamente sempre que você faz uso de um uma estrutura JavaScript em que tem um par de parenteses — `()` — e você **não** está usando uma estrutura embutida da linguagem como um [for loop](/en-US/Learn/JavaScript/Building_blocks/Looping_code#The_standard_for_loop), [while or do...while loop](/en-US/Learn/JavaScript/Building_blocks/Looping_code#while_and_do_..._while), ou [if...else statement](/en-US/Learn/JavaScript/Building_blocks/conditionals#if_..._else_statements), você está fazendo uso de uma função.

## Funções embutidas do navegador

Nós fizemos bastante uso de funções embutidas do navegador neste curso. Toda vez que manipulamos uma string de texto, por exemplo:

```js
var myText = "I am a string";
var newString = myText.replace("string", "sausage");
console.log(newString);
// the replace() string function takes a string,
// replaces one substring with another, and returns
// a new string with the replacement made
```

Ou toda vez que manipulamos uma lista:

```js
var myArray = ["I", "love", "chocolate", "frogs"];
var madeAString = myArray.join(" ");
console.log(madeAString);
// the join() function takes an array, joins
// all the array items together into a single
// string, and returns this new string
```

Ou toda vez que nós geramos um número aleatório:

```js
var myNumber = Math.random();
// the random() function generates a random
// number between 0 and 1, and returns that
// number
```

...nós usamos uma função!

> **Nota:** Fique a vontade para inserir essas linhas no console JavaScript do navegador para refamiliarizar-se com suas funcionalidades, se necessário.

A linguagem JavaScript tem muitas funções embutidas que o permitem fazer coisas úteis sem que você mesmo tenha que escrever aquele código. De fato, alguns dos códigos que você está chamando quando você **invoca** (uma palavra rebuscada para rodar, ou executar) uma função embutida de navegador não poderia ser escrita em JavaScript — muitas dessa funções são chamadas a partes de código base do navegador, que é escrita grandemente em linguages de sistema de baixo nível como C++, não linguagem Web como JavaScript.

Tenha em mente que algumas funções embutidas de navegador não são parte do core da linguagem JavaScript — algumas são definidas como partes de APIs do navegador, que são construídas no topo da linguagem padão para prover ainda mais funcionalidades (recorra a [esta seção inicial de nosso curso](/en-US/Learn/JavaScript/First_steps/What_is_JavaScript#So_what_can_it_really_do) para mais descrições). Nós olharemos o uso de APIs de navegador em mais detalhes em um módulo posterior.

## Funções versus métodos

Uma coisas que devemos esclarecer antes de seguir em frente — tecnicamente falando, funções embutidas de navegador não são funções — elas são **métodos**. Isso pode soar um pouco assustador e confuso, mas não se preocupe — as palavras funções e métodos são largamente intercambeáveis, ao menos para nossos propósitos, neste estágio de nosso aprendizado.

A distinção é que métodos são funções definidas dentro de objetos. Funções embutidas de navegador (métodos) e variáveis (que são chamadas **propriedades**) são armazenadas dentro de objetos estruturados, para tornar o código mais estruturado e fácil de manipular.

Você não precisa aprender sobre o funcionamento interno de objetos estruturados em JavaScript ainda — você pode esperar nosso módulo posterior que ensinará tudo sobre funcionamento interno de objetos, e como criar o seu próprio. Por hora, nós só queremos esclarecer qualquer confusão possível de método versus função — é provável que você encontre ambos termos enquanto você olhar os recursos disponível pela Web.

## Funções personalizadas

Nós vimos também várias funções personalizadas no curso até agora — funções definidas em seu código, não dentro do navegador. Sempre que você viu um nome personalizado com parênteses logo após ele, você estava usando funções personalizadas. em nosso exemplo [random-canvas-circles.html](http://mdn.github.io/learning-area/javascript/building-blocks/loops/random-canvas-circles.html) (veja também o [código fonte](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/loops/random-canvas-circles.html) completo) de nosso [loops article](/pt-BR/docs/Learn/JavaScript/Building_blocks/Looping_code), nós incluimos a função personalizada `draw()` que era semelhante a essa:

```js
function draw() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  for (var i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = "rgba(255,0,0,0.5)";
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill();
  }
}
```

Esta função desenha 100 círculos aleatórios dentro de um elemento {{htmlelement("canvas")}}. Toda vez que queremos fazer isso, nós podemos simplesmente invocar a função com isto

```js
draw();
```

ao invés de ter que escrever todo o código novamente todas as vezes que queremos repetí-lo. E funções podem conter qualquer código que você gosta — você pode até chamar outra função dentro das funções. A função acima por exemplo chama a função `random()` três vezes, o qual é definido pelo seguinte código:

```js
function random(number) {
  return Math.floor(Math.random() * number);
}
```

Nós precisamos desta função porque a função embutida do navegador[Math.random()](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random) só gera números decimais aleatórios entre 0 e 1. Nós queriamos um número aleatório inteiro entre 0 e um número especificado.

## Invocando funções

Provavelmente você já tem conhecimento sobre iso agora, mas... para realmente usar uma função depois dela ter sido definida, você tem que rodá-la — ou invocá-la. Isso é feito ao se incluir o nome da função em algum lugar do código, seguido por parênteses.

```js
function myFunction() {
  alert("hello");
}

myFunction();
// Chama a função um vez
```

## Funções anônimas

Você viu funções definidas e invocadas de maneiras ligeiramente diferentes. Até agora nós só criamos funções como esta:

```js
function myFunction() {
  alert("hello");
}
```

Mas você também pode criar funções que não tem nome:

```js
function() {
  alert('hello');
}
```

Isto é chamado **Função anônima** — não tem nome! E também não fará nada em si mesma. Você geralmente cria funções anônimas junto com um manipulador de eventos, o exemplo a seguir poderia rodar o código dentro da função sempre que o botão associado é clicado:

```js
var myButton = document.querySelector("button");

myButton.onclick = function () {
  alert("hello");
};
```

O exemplo acima requer que exista um elemento {{htmlelement("button")}} diponível na página para selecionar e clicar. Você já viu essa estrutura algumas vezes ao longo do curso, e aprenderá mais a respeito disso e o verá no próximo artigo.

Voce também pode atribuir uma função anônima para ser o valor de uma variável, por exemplo:

```js
var myGreeting = function () {
  alert("hello");
};
```

Esta função agora poder ser invocada usando:

```js
myGreeting();
```

Isso dá efetivamente um nome a função; você também pode atribuir uma função para ser o valor de múltiplas variáveis , por exemplo:

```js
var anotherGreeting = function () {
  alert("hello");
};
```

Esta função agora pode ser invocada usando qualquer das funções abaixo

```js
myGreeting();
anotherGreeting();
```

Mas isso pode simplesmente ser confuso, então não faça! Quando criar funções, é melhor ficar com apenas uma forma:

```js
function myGreeting() {
  alert("hello");
}
```

De modo geral você irá usar funções anônimas só para rodar um código em resposta a um disparo de evento — como um botão ao ser clicado — usando um gerenciador de eventos. Novamente, Isso é algo parecido com:

```js
myButton.onclick = function () {
  alert("hello");
  // Eu posso colocar código aqui
  // dentro o quanto eu quiser
};
```

## Parâmetro de funções

Algumas funções requerem **parâmetros** a ser especificado quando você está invocando-os — esses são valores que precisam ser inclusos dentro dos parênteses da função, o que é necessário para fazer seu trabalho apropriado.

> **Nota:** Parâmetros algumas vezes são chamados de argumentos, propriedades, ou até atributos.

Como um exemplo, a função embutida de navegador [Math.random()](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random) não requer nenhum parâmetro. Quando chamada, ela sempre retorna um número aleatório entre 0 e 1:

```js
var myNumber = Math.random();
```

A função embutida de navegador [replace()](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace) entretanto precisa de dois parâmetros — a substring para encotrar a string principal, e a substring para ser substituida com ela:

```js
var myText = "I am a string";
var newString = myText.replace("string", "sausage");
```

> **Nota:** Quando você precisa especificar multiplos parâmetros, eles são separados por vígulas.

Nota-se também que algumas vezes os parâmetros são opcionais — você não tem que especificá-los. Se você não o faz, a função geralmente adota algum tipo de comportamento padrão. Como exemplo, a função [join()](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join) tem parâmetro opcional:

```js
var myArray = ["I", "love", "chocolate", "frogs"];
var madeAString = myArray.join(" ");
// returns 'I love chocolate frogs'
var madeAString = myArray.join();
// returns 'I,love,chocolate,frogs'
```

Se nenhum parâmetro é incluído para especificar a combinação/delimitação de caractere, uma vírgula é usada por padrão.

## Função escopo e conflitos

vamos falar um pouco sobre {{glossary("scope")}} — um conceito muito importante quando lidamos com funções. Quando você cria uma função, as variáveis e outras coisas definidas dentro da função ficam dentro de seu próprio e separado **escopo**, significando que eles estão trancados a parte em seu próprio compartimento, inacesível de dentro de outras funções ou de código fora das funções.

O mais alto nível fora de todas suas funções é chamado de **escopo global**. Valores definidos no escopo global são acessíveis em todo lugar do código.

JavaScript é configurado assim por várias razões — mas principalmente por segurança e organização. Algumas vezes você não quer que variáveis sejam acessadas de todo lugar no código — scripts externos que você chama de algum outro lugar podem iniciar uma bagunça no seu código e causar problemas porque eles estão usando os mesmos nomes de variáveis que em outras partes do código, provocando conflitos. Isso pode ser feito maliciosamente, ou só por acidente.

Por exemplo, digamos que você tem um arquivo HTML que está chamando dois arquivos JavaScript externos, e ambos tem uma variável e uma função definidos que usam o mesmo nome:

```html
<!-- Excerpt from my HTML -->
<script src="first.js"></script>
<script src="second.js"></script>
<script>
  greeting();
</script>
```

```js
// first.js
var name = "Chris";
function greeting() {
  alert("Olá " + name + ": bem-vindo a nossa compania.");
}
```

```js
// second.js
var name = "Zaptec";
function greeting() {
  alert("Nossa compania é chamada " + name + ".");
}
```

Ambas as funções que você quer chamar são chamadas `greeting()`, mas você só pode acessar o arquivo `second.js` da função `greeting()` — Ele é aplicado no HTML depois no código fonte, então suas variáveis e funções sobrescrevem as de `first.js`.

> **Nota:** Você pode ver este exemplo [rodando no GitHub](http://mdn.github.io/learning-area/javascript/building-blocks/functions/conflict.html) (veja também [o código fonte](https://github.com/mdn/learning-area/tree/master/javascript/building-blocks/functions)).

Manter parte de seus código trancada em funções evita tais problemas, e é considerado boa prática.

Parece um pouco com um zoológico. Os leões, zebras, tigres, e pinguins são mantidos em seus próprios cercados, e só tem acesso as coisas dentro de seu cercado — da mesma maneira que escopos de função. Se eles forem capazes de entrar em outros cercados, problemas podem acontecer. No melhor caso, diferentes animais poderiam sentir-se ralmente desconfortáveis dentro de habitats não familiares — um leão e um tigre poderiam sentir-se muito mal dentro de um úmido e gelado terreno. No pior caso, os leões e tigres poderiam tentar comer os pinguins!

![](mdn-mozilla-zoo.png)

O zelador do zoológico é como o escopo global — ele ou ela tem as chaves para acessar cada cercado, reabastecer comida, tratar animais doentes, etc.

### Aprendizado ativo: Brincando com o escopo

Vamos observar um exemplo real para mostrar escopo.

1. Primeiro, faça uma cópia local de nosso exmplo [function-scope.html](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/functions/function-scope.html). Isto contém duas funções chamadas `a()` e `b()`, e três variáveis — `x`, `y`, e `z` — duas das quais estão definidas dentro de funções, e uma no escopo global. Ele também contém uma terceira função chamada `output()`, que leva um simples parâmetro e mostra-o em um parágrafo na página.
2. Abra o exemplo em um navegador e em um editor de textos.
3. Abra o console JavaScript no developer tools de seu navegador. No console JavaScript, digite o seguinte comando:

   ```js
   output(x);
   ```

   Você deve ver o valor da variável `x` exibida na página.

4. Agora tente digitar o seguinte no seu console:

   ```js
   output(y);
   output(z);
   ```

   Ambos dever retornar um erro com as seguintes linhas "[ReferenceError: y is not defined](/pt-BR/docs/Web/JavaScript/Reference/Errors/Not_defined)". Por que isso? Porque o escopo da função — `y` e `z` estão trancadas dentro das funções `a()` e `b()`, então `output()` não pode acessá-las quando chamadas do escopo global.

5. Contudo, que tal chamá-las de dentro de outra função? Tente editar `a()` e `b()` para que fiquem desta forma:

   ```js
   function a() {
     var y = 2;
     output(y);
   }

   function b() {
     var z = 3;
     output(z);
   }
   ```

   Salve o código e atualize o navegador, então tente chamar as funções `a()` e `b()` do console JavaScript:

   ```js
   a();
   b();
   ```

   Você verá os valores de `y` e `z` mostrados na página. Isso funciona bem, desde que a função `output()` está sendo chamada dentro de outra função — no mesmo escopo que as variáveis que estam imprimindo são definidas, em cada caso. `output()` em si é acessível de qualquer lugar, como é definido no escopo global.

6. Agora tente atualizar seu código como este:

   ```js
   function a() {
     var y = 2;
     output(x);
   }

   function b() {
     var z = 3;
     output(x);
   }
   ```

   Salve e atualize novamente, e tente isso novamente em seu console JavaScript:

   ```js
   a();
   b();
   ```

   Ambas chamadas de `a()` e `b()` devem mostrar o valor de x — 1. Isso dá certo porque até mesmo a chamada de `output()` não está no mesmo escopo em que `x` é definido, `x` é uma variável global então é disponível dentro de todo código, em toda parte.

7. Finalmente, tente atualizar o código o seguinte:

   ```js
   function a() {
     var y = 2;
     output(z);
   }

   function b() {
     var z = 3;
     output(y);
   }
   ```

   Salve e atualize novamente, e tente isso novamente em seu console JavaScript:

   ```js
   a();
   b();
   ```

   Desta vez as chamadas de `a()` e `b()` retornaram o irritante erro "[ReferenceError: z is not defined](/pt-BR/docs/Web/JavaScript/Reference/Errors/Not_defined)" — isto porque a chamada de `output()` e as variáveis que eles estão tentando imprimir não estão definidas dentro do mesmo escopo das funções — as variáveis são efetivamente invisíveis aquelas chamadas de função.

> **Nota:** As mesmas regras de escopo não se aplicam a laços (ex.: `for() { ... }`) e blocos condicionais (ex.: `if() { ... }`) — eles parecem muito semelhantes, mas eles não são a mesma coisa! Tome cuidado para não confudir-se.

> **Nota:** O erro [ReferenceError: "x" is not defined](/pt-BR/docs/Web/JavaScript/Reference/Errors/Not_defined) é um dos mais comuns que você encontrará. Se você receber este erro e tem certeza que definiu a variável em questão, cheque em que escopo ela está.

### Funções dentro de funções

Tenha em mente que você pode chamar uma função de qualquer lugar, até mesmo dentro de outra função. Isso é frenquentemente usado para manter o código organizado — se você tem uma função grande e complexa, é mais fácil de entendê-la se você quebrá-la em várias subfunções:

```js
function myBigFunction() {
  var myValue;

  subFunction1();
  subFunction2();
  subFunction3();
}

function subFunction1() {
  console.log(myValue);
}

function subFunction2() {
  console.log(myValue);
}

function subFunction3() {
  console.log(myValue);
}
```

Apenas certifique-se que os valores usados dentro da função estão apropriadamente no escopo. O exemplo acima deve lançar um erro `ReferenceError: myValue is not defined`, porque apesar da variável `myValue` estar definida no mesmo escopo da chamda da função, ela não está definida dentro da definição da função — o código real que está rodando quando as funções são chamadas. Para fazer isso funcionar, você deveria passar o valor dentro da função como um parâmetro, desta forma:

```js
function myBigFunction() {
  var myValue = 1;

  subFunction1(myValue);
  subFunction2(myValue);
  subFunction3(myValue);
}

function subFunction1(value) {
  console.log(value);
}

function subFunction2(value) {
  console.log(value);
}

function subFunction3(value) {
  console.log(value);
}
```

## Conclusão

Este arquivo explorou os conceitos fundamentais por trás das funções, pavimentando o caminho para o próximo no qual nos tornamos práticos e o levamos através de passos para construir suas próprias funções personalizadas.

## Veja também

- [Guia detalhado de funções](/pt-BR/docs/Web/JavaScript/Guide/Functions) — cobre algumas características avançadas não includas aqui.
- [Referências de funções](/pt-BR/docs/Web/JavaScript/Reference/Functions)
- [Parâmetros padrão](/pt-BR/docs/Web/JavaScript/Reference/Functions/Default_parameters), [Funções de flexa](/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions) — referências de conceito avançado

{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Looping_code","Learn/JavaScript/Building_blocks/Build_your_own_function", "Learn/JavaScript/Building_blocks")}}
