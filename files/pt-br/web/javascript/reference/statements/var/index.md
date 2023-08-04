---
title: var
slug: Web/JavaScript/Reference/Statements/var
---

{{jsSidebar("Statements")}}

## Sumário

O **`variable` statement** declara uma variável, opcionalmente é possível atribuir à ela um valor em sua inicialização.

## Sintaxe

```
var varname1 [= value1 [, varname2 [, varname3 ... [, varnameN]]]];
```

- `varnameN`
  - : Nome da variável. Pode ser utilizado qualquer identificador legal.
- `valueN`
  - : Valor inicial da variável. Pode ser qualquer expressão legal.

## Descrição

Declarações de variáveis, onde quer que elas ocorram, são processadas antes que qualquer outro código seja executado. O escopo de uma variável declarada com `var` é seu contexto atual em execução, o qual é a função a qual pertence ou, para variáveis declaradas fora de qualquer função, o escopo é o global.

Atribuir um valor a uma variável não declarada anteriormente implica em criar uma variável global (ela se torna uma propriedade do objeto global) quando a atribuição é executada. As diferenças entre uma variável declarada e uma não delcarada são:

1\. Variáveis declaradas estão relacionadas com o contexto de execução quando elas são criadas (por exemplo, uma função, objeto). Por outro lado, as variaveis não declaradas sempre são globais.

```js
function x() {
  y = 1; // Lança a exceção ReferenceError em modo restrito (strict mode)
  var z = 2;
}

x();

console.log(y); // logs "1"
console.log(z); // Lança a exceção ReferenceError: z não foi definida fora da função x()
```

2\. Variáveis declaradas são criadas antes de qualquer código ser executado. As variáveis não declaradas não existem até quando o código atribuir um valor a ela.

```js
console.log(a); // Lança a exceção ReferenceError.
console.log("still going..."); // Nunca será executado.
```

```js
var a;
console.log(a); // mostra "undefined" ou "" dependendo do naveador.
console.log("still going..."); // mostra "still going...".
```

3\. Variáveis declaradas são propriedades não configuráveis no contexto de execução (função ou global). Variaveis não declaradas são configuráveis (por exemplo, podem ser excluídas).

```js
var a = 1;
b = 2;

delete this.a; // Lança a exceção TypeError em modo restrito(strict mode). Caso contrário, Falha silenciosamente.
delete this.b;

console.log(a, b); // Throws a ReferenceError.
// A propriedade 'b' foi deletada e não existe mais.
```

Por conta dessas três diferenças, falha para declarar variáveis, muito provavelmente, levar a resultados inesperados. **Então, é recomendado sempre declarar as variáveis, independentemente se as variáveis estão em escopo de função ou escopo global**. E o modo restrito ([strict mode](/pt-BR/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode)) do ECMAScript 5 sempre lançará uma exceçao quando o código atribuir um valor a uma variável não declarada.

### var hoisting

Como as declarações de variáveis (e declarações em geral) são processadas antes de qualquer código seja executado, declarar uma variável em qualquer lugar no código é equivalente a declarar no inicio. Isso também significa que uma variável pode aparecer para ser usada antes dela ser declarada. Esse comportamento é chamado de "hoisting", a variável é movida para o inicio da função ou do código global.

```js
bla = 2;
var bla;
// ...

// é implicitamente entendido como:

var bla;
bla = 2;
```

Por essa razão, recomenda-se sempre declarar variáveis na parte superior do seu escopo de aplicação (o topo do código global e a parte superior do código da função). Por isso, é claro que as variáveis são função de escopo (local) e que são resolvidos na cadeia de escopo.

## Exemplos

### Declarando e inicializando duas variáveis

```js
var a = 0,
  b = 0;
```

### Atribuindo duas variáveis com uma única expressão

```js
var a = "A";
var b = a;

// Equivalente a:

var a,
  b = (a = "A");
```

É sempre importante lembrar da ordem da declaração das variáveis:

```js
var x = y,
  y = "A";
console.log(x + y); // undefinedA
```

Então, x e y são declarados antes de qualquer código seja executado, a atribuição ocorre posteriormente. Quando "x = y" for executado, y existe e nenhum exceção ReferenceError é lançada, e o valor de y será considerado como '`undefined`'. Por este motivo, este valor é atribuido a x. Depois disso, o valor 'A' é atribuido a variável y. Consequentemente, depois da primeira linha, x === undefined && y === 'A', então o resultado.

### Iniciando diversas variáveis

```js
var x = 0;

function f() {
  var x = (y = 1); // x é declarado localmente,y não é!
}
f();

console.log(x, y); // 0, 1
// x é uma variável global como experado
// y vazou para fora da função!
```

### Variável global implícita e fora do escopo da função

Variáveis que aparecem como variáveis globais implicitas podem ser referenciadas como variáveis fora do escopo da função:

```js
var x = 0; // x é declarada como global e é igual a 0

console.log(typeof z); // undefined, desde que z não tenha sido criada anteriormente

function a() {
  // quando a for chamada,
  var y = 2; // y é declarada como local desta função, e o valor 2 é atribuido

  console.log(x, y); // 0 2

  function b() {
    // quando b for chamado,
    x = 3; // atribui o valor 3 a variável global existente, ele não cria uma nova variável global
    y = 4; // atribui o valor 4 a uma variável fora, ele não cria uma nova variável
    z = 5; // cria uma nova variável global e atribui o valor 5.
  } // (Lança a exceção ReferenceError em modo restrito.)

  b(); // chamando b, o código irá criar z como variável global
  console.log(x, y, z); // 3 4 5
}

a(); // chamando a, também irá chamar b
console.log(x, z); // 3 5
console.log(typeof y); // indefinido já que y é uma variável local da função a
```

## Especificação

| Specification                                                        | Status             | Comment                                            |
| -------------------------------------------------------------------- | ------------------ | -------------------------------------------------- |
| ECMAScript 1st Edition                                               | Standard           | Primeira definição. Implementada no JavaScript 1.0 |
| {{SpecName('ES5.1', '#sec-12.2', 'var statement')}}                  | {{Spec2('ES5.1')}} |                                                    |
| {{SpecName('ES6', '#sec-variable-statement', 'variable statement')}} | {{Spec2('ES6')}}   |                                                    |

## Compatibilidade com navegadores

{{Compat("javascript.statements.var")}}

## Veja também

- [`let`](/pt-BR/docs/Web/JavaScript/Reference/Statements/let)
- [`const`](/pt-BR/docs/Web/JavaScript/Reference/Statements/const)
- [How One Missing `var` Ruined our Launch](http://blog.safeshepherd.com/23/how-one-missing-var-ruined-our-launch/)
