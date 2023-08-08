---
title: Funções
slug: Web/JavaScript/Reference/Functions
---

{{jsSidebar("Functions")}}

De modo geral, função é um "subprograma" que pode ser _chamado_ por código externo (ou interno no caso de recursão) à função. Assim como o programa em si, uma função é composta por uma sequência de instruções chamada _corpo da função_. Valores podem ser _passados_ para uma função e ela vai _retornar_ um valor.

Em JavaScript, funções são objetos de primeira classe, pois elas podem ter propriedades e métodos como qualquer outro objeto. O que as difere de outros objetos é que as funções podem ser chamados. Em resumo, elas são objetos [`Function`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function).

Para mais exemplos e explicações, veja também o [Guia de JavaScript sobre funções](/pt-BR/docs/Web/JavaScript/Guide/Functions).

## Descrição

Toda função em JavaScript é um objeto `Function`. Veja {{jsxref("Function")}} para informação das propriedades e métodos dos objetos `Function`.

Funções não são como procedimentos (_procedure_). Uma função sempre retorna um valor, mas um procedimento pode ou não retornar um valor.

Para retornar um valor diferente do padrão, uma função deve ter uma instrução [return](/pt-BR/docs/Web/JavaScript/Reference/Statements/return) que específica o valor a ser retornado. Uma função sem um `return` retornará um valor padrão. No caso de um [método construtor](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) chamado com a palavra reservada [`new`](/pt-BR/docs/Web/JavaScript/Reference/Operators/new), o valor padrão é o valor do parâmetro `this`. Para todas as outras funções, o valor padrão de retorno é `undefined`.

Os parâmetros de uma função são chamados de argumentos da função. Argumentos são passados para a função _por valor_. Se uma função muda o valor de um argumento, esta mudança não é refletida globalmente ou na chamada da função. Contudo, referência de objetos são valores também, e eles são especiais: se a função muda as propriedades do objeto referenciado, estas mudanças são visíveis fora da função, como é mostrado no exemplo a seguir:

```js
/* Declare a função 'minhaFunção' */
function minhaFuncao(objeto) {
  objeto.marca = "Toyota";
}

/*
 * Declare a variável 'meucarro';
 * crie e inicialize um novo Objeto;
 * atribua referência para 'meucarro'
 */
var meucarro = {
  marca: "Honda",
  modelo: "Accord",
  ano: 1998,
};

/* Exibe 'Honda' */
console.log(meucarro.marca);

/* Passe a referência do objeto para a função */
minhaFuncao(meucarro);

/*
 * Exibe 'Toyota' como valor para a propriedade 'marca'
 * do objeto, mudado pela função.
 */
console.log(meucarro.marca);
```

A palavra reservada [`this`](/pt-BR/docs/Web/JavaScript/Reference/Operators/this) não se refere a função sendo executada no momento, então você deve referenciar um objeto `Function` pelo nome, mesmo dentro do corpo da função.

## Definindo funções

Há várias maneiras de definir funções:

### Declaração de função (Instrução `function`)

Há um sintaxe especial para declarar funções (veja [Instrução function](/pt-BR/docs/Web/JavaScript/Reference/Statements/function) para detalhes):

```
function nome([param[, param[, ... param]]]) {
   instruções
}
```

- `nome`
  - : O nome da função.
- `param`
  - : O nome de um argumento a ser passado para a função.
- `instruções`
  - : As instruções que formam o corpo da função.

### A expressão function (Operador `function`)

Uma expressão function é parecida com uma declaração function e tem até a mesma sintaxe (veja [Operador function](/pt-BR/docs/Web/JavaScript/Reference/Operators/function) para detalhes):

```
function [nome]([param] [, param] [..., param]) {
   instruções
}
```

- `nome`
  - : O nome da função. Pode ser omitido, e neste caso a função é conhecida como função anônima.
- `param`
  - : O nome de um argumento a ser passado para a função.
- `instruções`
  - : As instruções que formam o corpo da função.

### O gerador de declaração de função (instrução `function*`)

> **Nota:** Expressão Arrow function é uma tecnologia experimental, parte da proposta do ECMAScript 6, e ainda não é amplamente suportada pelos navegadores.

Uma expressão arrow function tem uma sintaxe curta e conecta seu valor lexicamente (veja [arrow functions](/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions) para mais detalhes):

```
([param] [, param]) => {
   instruções
}

param => expressão
```

- `param`
  - : O nome de um argumento. Quando não há argumentos deve ser indicado com o uso dos parênteses ( ). Para apenas um argumento os parênteses não são obrigatórios. (por exemplo `foo => 1`)
- `instruções ou expressão`
  - : Múltiplas instruções precisam ser envolvidas por chaves. Uma única expressão não requer chaves. A expressão também é implicitamente o valor de retorno dessa função.

### O construtor `Function`

> **Nota:** O uso do construtor Function para criar funções não é recomendado uma vez que é requerido o corpo da função como string, o que pode impedir algumas otimizações por parte do motor JS e pode também causar outros problemas.

Como todos os outros objetos, objetos {{jsxref("Function")}} podem ser criados usando o operador new:

```
new Function (arg1, arg2, ... argN, corpoDaFuncao)
```

- `arg1, arg2, ... argN`
  - : Nenhum ou mais nomes para serem usados pela função como nomes formais de argumentos. Cada um deve ser uma string em conformidade com as regras para um identificador JavaScript válido ou uma lista com tais strings separadas por vírgula; por exemplo "x", "oValor", ou "a, b".
- _corpoDaFuncao_
  - : Uma string contento as instruções JavaScript correspondendo a definição da função.

Invocar o construtor Function como uma função (sem usar o operador new) the o mesmo efeito de invocá-lo como um construtor comum.

## Parâmetros de Função

> **Nota:** Parâmetros Default e Rest são tecnologias experimentais, parte da proposta do ECMAScript 6, e ainda não são amplamente suportados pelos navegadores.

### Parâmetros Default

Parâmetro Default de função permite que parâmetros formais sejam inicializados com valores padrão se nenhum valor ou valor undefined é passado. Para mais detalhes, veja [parâmetros default](/pt-BR/docs/Web/JavaScript/Reference/Functions/Default_parameters).

### Parâmetros Rest

A sintaxe do parâmetro rest permite representar um número indefinido de argumentos em forma de array. Para mais detalhes, veja [parâmetros rest](/pt-BR/docs/Web/JavaScript/Reference/Functions/rest_parameters).

## O objeto `arguments`

Você pode referenciar aos argumentos da função dentro da função utilizando o objeto arguments. Veja [arguments](/pt-BR/docs/Web/JavaScript/Reference/Functions/arguments).

- [`arguments`](/pt-BR/docs/JavaScript/Reference/Functions_and_function_scope/arguments): Um objeto array-like contendo os argumentos passados para a função atualmente em execução.
- [`arguments.callee`](/pt-BR/docs/JavaScript/Reference/Functions_and_function_scope/arguments/callee) {{Deprecated_inline}}: A função atualmente em execução.
- [`arguments.caller`](/pt-BR/docs/JavaScript/Reference/Functions_and_function_scope/arguments/caller): A função que invocou a função atualmente em execução.
- [`arguments.length`](/pt-BR/docs/JavaScript/Reference/Functions_and_function_scope/arguments/length): O número de argumentos passados para a função.

## Definindo Métodos de Funções

### Funções Getter e setter

Você pode definir getters (métodos de acesso) and setters (métodos de alteração) em qualquer objeto interno padrão ou objeto definido pelo usuário que ofereça suporte à adição de novas propriedades. A sintaxe para definir getters e setters usa a sintaxe literal do objeto.

- [get](/pt-BR/docs/Web/JavaScript/Reference/Functions/get)
  - : Vincula uma propriedade de objeto a uma função que será chamada quando essa propriedade é requisitada.
- [set](/pt-BR/docs/Web/JavaScript/Reference/Functions/set)
  - : Vincula uma propriedade de objeto a uma função a ser chamada quando há uma tentativa de definir essa propriedade.

### Sintaxe dos métodos de funções

> **Nota:** Definições de métodos são tecnologias experimentais, parte da proposta do ECMAScript 6, e ainda não são amplamente suportados pelos navegadores.

Começando com ECMAScript 6, você é capaz de definir métodos próprios em uma sintaxe mais curta, semelhante aos getters e setters. Veja [method definitions](/pt-BR/docs/Web/JavaScript/Reference/Functions/Method_definitions) para mais informações.

```js
var obj = {
  foo() {},
  bar() {},
};
```

## `Function` constructor vs. function declaration vs. function expression

Compare o seguinte:

Uma função definida com `Function` _constructor_ atribuída à variável `multiply`

```js
var multiply = new Function("x", "y", "return x * y");
```

Uma _function expression_ de uma função anônima atribuída à variável `multiply`

```js
var multiply = function (x, y) {
  return x * y;
};
```

Uma _function expression_ de uma função chamada `func_name` atribuída à variável `multiply`

```js
var multiply = function func_name(x, y) {
  return x * y;
};
```

### Diferenças

Todas fazem aproximadamente a mesma coisa, com algumas diferenças sutis:

Há uma distinção entre o nome da função e a variável à qual a função é atribuída. O nome da função não pode ser alterado, enquanto a variável à qual a função está atribuída pode ser reatribuída. O nome da função pode ser usado somente dentro do corpo da função. A tentativa de usá-lo fora do corpo da função resulta em um _error_ (ou _undefined_ se o nome da função foi declarado anteriormente por meio de uma declaração de variável). Por exemplo:

```js
var y = function x() {};
alert(x); // throws an error
```

O nome da função também aparece quando a função é serializada através do [`método toString de Function()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function/toString).

Por outro lado, a variável à qual a função é atribuída é limitada somente pelo seu escopo, garantindo-se que ele inclui o escopo onde a função é declarada.

Como o quarto exemplo mostra, o nome da função pode ser diferente da variável à qual a função é atribuída. Eles não têm relação um com o outro. Uma declaração de função também cria uma variável com o mesmo nome da função. Assim, ao contrário daquelas definidas por expressões de função, funções definidas por declarações de função podem ser acessadas pelo seu nome no escopo onde elas foram definidas:

Uma função definida por '`new Function'` não possui um nome. Entretanto, na máquina de JavaScript [SpiderMonkey](/pt-BR/docs/Mozilla/Projects/SpiderMonkey), a forma serializada da função aparece como se ela tivesse o nome "anonymous". Por exemplo, `alert(new Function())` gera como saída:

```js
function anonymous() {}
```

Já que a função na realidade não possui um nome, `anonymous` não é uma variável que possa ser acessada dentro da função. Por exemplo, o código seguinte iria resultar em um erro:

```js
var foo = new Function("alert(anonymous);");
foo();
```

Ao contrário das funções definidas por expressões de função ou pelo construtor `Function`, uma função definida por uma declaração de função pode ser usada antes da declaração da função em si. Por exemplo:

```js
foo(); // alerts FOO!
function foo() {
  alert("FOO!");
}
```

Uma função definida por uma expressão de função herda o escopo atual. Isto é, a função forma um closure. Por outro lado, uma função definida por um construtor `Function` não herda qualquer escopo a não ser o escopo global (que todas as funções herdam).

Funções definidas por expressões de função e declarações de função são analisadas somente uma vez, enquanto aquelas definidas pelo construtor `Function` não são. Isto é, a string que forma o corpo da função, passada para o construtor `Function` precisa ser analisada toda vez que o construtor é chamado. Embora uma expressão de função crie um closure a cada vez, o corpo da função não é reanalisado, assim expressões de função ainda são mais rápidas do que "`new Function(...)`". Assim, o construtor `Function` deve geralmente ser evitado sempre que possível.

Deve ser notado, entretanto, que expressões de função e declarações de função aninhadas dentro de uma função gerada pela análise da string de um construtor `Function` não são analisadas repetidamente. Por exemplo:

```js
var foo = new Function(
  "var bar = 'FOO!';\nreturn(function() {\n\talert(bar);\n});",
)();
foo(); // O segmento "function() {\n\talert(bar);\n}" do corpo da função não é reanalisado.
```

Uma declaração de função é muito facilmente (e às vezes de forma não intencional) transformada em uma expressão de função. Uma declaração de função deixa de ser o que ela é nos casos em que:

- se torna parte de uma expressão; ou
- não é mais um "elemento fonte" de uma função ou do script em si. Um "elemento fonte" é uma instrução não aninhada no script ou no corpo de uma função:

```js
var x = 0; // elemento fonte
if (x == 0) {
  // elemento fonte
  x = 10; // não é um elemento fonte
  function boo() {} // não é um elemento fonte
}
function foo() {
  // elemento fonte
  var y = 20; // elemento fonte
  function bar() {} // elemento fonte
  while (y == 10) {
    // elemento fonte
    function blah() {} // não é um elemento fonte
    y++; // não é um elemento fonte
  }
}
```

### Examples

```js
// declaração de função
function foo() {}

// expressão de função
(function bar() {});

// expressão de função
x = function hello() {};

if (x) {
  // expressão de função
  function world() {}
}

// declaração de função
function a() {
  // declaração de função
  function b() {}
  if (0) {
    // expressão de função
    function c() {}
  }
}
```

## Definindo uma função condicionalmente

As funções podem ser definidas condicionalmente usando instruções de função (uma extensão permitida para o padrão ECMA-262 Edição 3) ou o construtor 'Function'. Observe que essas instruções de funções não são mais permitidas no ES5 strinct. Além disso, esse recurso não funciona de forma consistente em navegadores, portanto, você não deve confiar nele.

No script a seguir, a função 'zero' nunca é definida e não pode ser chamada, porque 'if (0)' avalia sua condição como falso:

```js
if (0) {
  function zero() {
    document.writeln("Isso é zero.");
  }
}
```

If the script is changed so that the condition becomes '`if (1)`', function `zero` is defined.

Nota: Although this kind of function looks like a function declaration, it is actually an expression (or statement), since it is nested within another statement. See differences between function declarations and function expressions.

Nota: Some JavaScript engines, not including [SpiderMonkey](/pt-BR/docs/SpiderMonkey), incorrectly treat any function expression with a name as a function definition. This would lead to `zero` being defined, even with the always-false `if` condition. A safer way to define functions conditionally is to define the function anonymously and assign it to a variable:

```js
if (0) {
  var zero = function () {
    document.writeln("Aqui tem zero.");
  };
}
```

## Exemplo

### Exemplo: Retornando um número formatado

A função a seguir retorna uma sequência contendo a representação formatada de um número preenchido com zeros à esquerda.

```js
// Esta função retorna uma string preenchida com zeros à esquerda
function padZeros(num, totalLen) {
  var numStr = num.toString(); // Inicializar valor de retorno como string
  var numZeros = totalLen - numStr.length; // Calcular números de zeros
  for (var i = 1; i <= numZeros; i++) {
    // Preencher a quantidade de zeros
    numStr = "0" + numStr;
  }
  return numStr; // Retorna a string já preenchida
}
```

The following statements call the padZeros function.

```js
var resultado;
resultado = padZeros(42, 4); // retorno "0042"
resultado = padZeros(42, 2); // retorno "42"
resultado = padZeros(5, 4); // retorno "0005"
```

### Example: Determining whether a function exists

You can determine whether a function exists by using the `typeof` operator. In the following example, a test is peformed to determine if the `window` object has a property called `noFunc` that is a function. If so, it is used; otherwise some other action is taken.

```js
if ("function" == typeof window.noFunc) {
  // use noFunc()
} else {
  // do something else
}
```

Note that in the `if` test, a reference to `noFunc` is used—there are no brackets "()" after the function name so the actual function is not called.

## Especificações

| Specification                                                            | Status             | Comment                                                                        |
| ------------------------------------------------------------------------ | ------------------ | ------------------------------------------------------------------------------ |
| ECMAScript 1st Edition.                                                  | Standard           | Initial definition. Implemented in JavaScript 1.0                              |
| {{SpecName('ES5.1', '#sec-13', 'Function Definition')}}                  | {{Spec2('ES5.1')}} |                                                                                |
| {{SpecName('ES6', '#sec-function-definitions', 'Function definitions')}} | {{Spec2('ES6')}}   | New: Arrow functions, Generator functions, default parameters, rest parameters |

## Compatibilidade com navegadores

{{Compat("javascript.functions")}}

## Veja também

- [`Function`](/pt-BR/docs/JavaScript/Reference/Global_Objects/Function)
- [`function` statement](/pt-BR/docs/JavaScript/Reference/Statements/function)
- [`function` operator](/pt-BR/docs/JavaScript/Reference/Operators/function)
