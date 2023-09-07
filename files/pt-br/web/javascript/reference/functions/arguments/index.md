---
title: Arguments object
slug: Web/JavaScript/Reference/Functions/arguments
---

{{jsSidebar("Functions")}}

O objeto **`arguments`** é como um objeto Array correspondendo aos argumentos passados para uma função.

## Sintaxe

```
arguments
```

## Descrição

O objeto `arguments` é uma variável local disponível dentro de todas as funções. Você pode referenciar os argumentos de uma função dentro da função usando o objeto `arguments`. Esse objeto contém um registro para cada argumento fornecido para a função, com o índice do primeiro registro começando em 0. Por exemplo, se são passados três argumentos para uma função, você pode referenciá-los como a seguir:

```js
arguments[0];
arguments[1];
arguments[2];
```

Os argumentos também podem ser definidos:

```js
arguments[1] = "novo valor";
```

O objeto `argumentos` não é um {{jsxref("Array")}}. É similar a um Array, mas não possui as propriedades de `Array`, exceto [`length`](/pt-BR/docs/Web/JavaScript/Reference/Functions/arguments/length). Por exemplo, ele não possui o método [`pop`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/pop). Entretanto, ele pode ser convertido em um `Array` real:

```java
var args = Array.prototype.slice.call(arguments);
var args = [].slice.call(arguments);

// ES2015
var args = Array.from(arguments);
```

> **Aviso:** Usar slice nos argumentos impedem otimizações em alguns motores JavaScript (V8 por exemplo - [mais informações](https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments)). Se você precisar, tente construir um novo array iterando através dos argumentos do objeto. Uma alternativa seria usar o construtor do `Array` como uma função:
>
> ```js
> var args =
>   arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
> ```

Você pode usar o objeto `arguments` se você chamar uma função com mais argumentos do que ele é formalmente declarado para aceitar. Esta técnica é útil para funções que podem ser passada em um número de variáveis de argumentos. Você pode usar [`arguments.length`](/pt-BR/docs/JavaScript/Reference/Functions_and_function_scope/arguments/length) para determinar o número de argumentos passado para a função, e então processar cada argumento usando o objeto `arguments`. Para determinar o número de parâmetros declarados na [assinatura](/pt-BR/docs/Glossary/Signature/Function) da função, use a propriedade [`Function.length`](/pt-BR/docs/JavaScript/Reference/Global_Objects/Function/length).

### Usando typeof com Arguments

O comando `typeof arguments` retorna 'object'.

```js
console.log(typeof arguments); // 'object'
```

O `typeof` de argumentos individuais pode ser determinado com o uso do índice.

```js
console.log(typeof arguments[0]); //this will return the typeof individual arguments.
```

### Usando a Sintaxe Spread com Arguments

Você também pode usar o método {{jsxref("Array.from()")}} ou o [operador spread](/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_operator) para converter argumentos em um Array real:

```js
var args = Array.from(arguments);
var args = [...arguments];
```

## Propriedades

- [`arguments.callee`](/pt-BR/docs/Web/JavaScript/Reference/Functions/arguments/callee)
  - : Referência para a função atualmente em execução.
- [`arguments.caller`](/pt-BR/docs/Web/JavaScript/Reference/Functions/arguments/caller)
  - : Referência para a função que invocou a função atualmente em execução.
- [`arguments.length`](/pt-BR/docs/Web/JavaScript/Reference/Functions/arguments/length)
  - : Referência para o número de argumentos passados para a função.
- [`arguments[@@iterator]`](/pt-BR/docs/Web/JavaScript/Reference/Functions/arguments/@@iterator)
  - : Retorna um novo objeto Array Iterator que contém os valores para cada índice dos argumentos.

## Exemplos

### Definindo uma função que concatena várias strings

Este exemplo define uma função que concatena várias strings. O único argumento formal para a função é uma string que especifica os caracteres que separam os itens a concatenar. A função é definida como se segue:

```js
function myConcat(separator) {
  var args = Array.prototype.slice.call(arguments, 1);
  return args.join(separator);
}
```

Você pode passar qualquer número de argumentos para essa função e ela cria uma lista usando cada argumento como um item na lista.

```js
// returns "red, orange, blue"
myConcat(", ", "red", "orange", "blue");

// returns "elephant; giraffe; lion; cheetah"
myConcat("; ", "elephant", "giraffe", "lion", "cheetah");

// returns "sage. basil. oregano. pepper. parsley"
myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley");
```

### Definindo uma função que cria listas HTML

Este exemplo define uma função que cria uma string contatenado HTML para uma lista. O único argumento formal para a função é uma string que é "u" se a lista for desordenada (marcadores), ou "o" se a lista for ordenada (numerada). A função é definida como se segue:

```js
function list(type) {
  var result = "<" + type + "l><li>";
  var args = Array.prototype.slice.call(arguments, 1);
  result += args.join("</li><li>");
  result += "</li></" + type + "l>"; // end list

  return result;
}
```

Você pode passar qualquer número de argumentos para essa função, e ela adiciona cada argumento como um item para uma lista do tipo indicado. Por exemplo:

```js
var listHTML = list("u", "One", "Two", "Three");

/* listHTML is:

"<ul><li>One</li><li>Two</li><li>Three</li></ul>"

*/
```

### Rest, default e parâmetros desestruturados

O objeto `arguments` pode ser usado em conjunto com os parâmetros [rest](/pt-BR/docs/Web/JavaScript/Reference/Functions/rest_parameters), [default](/pt-BR/docs/Web/JavaScript/Reference/Functions/Default_parameters) e [destruturados](/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

```js
function foo(...args) {
  return args;
}
foo(1, 2, 3); // [1,2,3]
```

Enquanto a presença dos parâmetros [rest](/pt-BR/docs/Web/JavaScript/Reference/Functions/rest_parameters), [default](/pt-BR/docs/Web/JavaScript/Reference/Functions/Default_parameters), ou [desestruturados](/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) não alteram o [comportamento do objeto `arguments` no código em strict mode](/pt-BR/docs/Web/JavaScript/Reference/Strict_mode#Making_eval_and_arguments_simpler), existe uma sutil diferença para o código non-strict.

Quando uma função não-strict **não** contém parâmetros [rest](/pt-BR/docs/Web/JavaScript/Reference/Functions/rest_parameters), [default](/pt-BR/docs/Web/JavaScript/Reference/Functions/Default_parameters), ou [desestruturados](/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment), os valores no objeto `arguments` **modificam** os valores dos argumentos (e vice-versa). Veja o código:

```js
function func(a) {
  arguments[0] = 99; // updating arguments[0] also updates a
  console.log(a);
}
func(10); // 99
```

e

```js
function func(a) {
  a = 99; // updating a also updates arguments[0]
  console.log(arguments[0]);
}
func(10); // 99
```

Quando uma função não-strict **contém** parâmetros [rest](/pt-BR/docs/Web/JavaScript/Reference/Functions/rest_parameters), [default](/pt-BR/docs/Web/JavaScript/Reference/Functions/Default_parameters), ou [desestruturados](/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment), os valores no objeto `arguments` **não modificam** os valores dos argumentos (e vice-versa). Ao invés disso, eles refletem os argumentos fornecidos no momento da chamada:

```js
function func(a = 55) {
  arguments[0] = 99; // updating arguments[0] does not also update a
  console.log(a);
}
func(10); // 10
```

e

```js
function func(a = 55) {
  a = 99; // updating a does not also update arguments[0]
  console.log(arguments[0]);
}
func(10); // 10
```

e

```js
function func(a = 55) {
  console.log(arguments[0]);
}
func(); // undefined
```

## Especificações

| Especificações                                                                   | Status             | Comentário                                        |
| -------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------- |
| {{SpecName('ES1')}}                                                              | {{Spec2('ES1')}}   | Definição inicial. Implementado em JavaScript 1.1 |
| {{SpecName('ES5.1', '#sec-10.6', 'Arguments Object')}}                           | {{Spec2('ES5.1')}} |                                                   |
| {{SpecName('ES6', '#sec-arguments-exotic-objects', 'Arguments Exotic Objects')}} | {{Spec2('ES6')}}   |                                                   |

## Compatibilidade com navegadores

{{Compat("javascript.functions.arguments")}}

## Veja também

- {{jsxref("Function")}}
