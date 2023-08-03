---
title: Parâmetros Predefinidos
slug: Web/JavaScript/Reference/Functions/Default_parameters
---

{{jsSidebar("Functions")}}

**Os parâmetros predefinidos de uma função** permitem que parâmetros regulares sejam inicializados com com valores iniciais caso `undefined` ou nenhum valor seja passado.

## Sintaxe

```
function [nome]([param1[ = valorPredefinido1 ][, ..., paramN[ = valorPredefinidoN ]]]) {
   instruções
}
```

## Descrição

Em JavaScript, os parâmetros de funções tem `{{jsxref("undefined")}}` como valor predefinido. Contudo, em alguns casos pode ser útil utilizar algum outro valor. É nesta situação em que os parâmetros predefinidos podem ser úteis.

No passado, a estratégia de definir valores padrão para parâmetros era testar os valores do parâmetros no corpo da função e atribuir um valor se este for **`undefined`.** No exemplo a seguir, se nenhum valor for fornecido para **b** na chamada, este valor será **`undefined`**, quando `a*b` for calculado resultaria em `NaN`. No entanto, isto é capturado na segunda linha definindo um valor padrão para b:

```js
function multiply(a, b) {
  b = typeof b !== "undefined" ? b : 1;

  return a * b;
}

multiply(5, 2); // 10
multiply(5, 1); // 5
multiply(5); // 5
```

Com o parâmetros predefinidos a checagem no corpo da função nao é mais necessária. Agora você pode simplesmente colocar 1 como valor padrão para `b` na declaração da função:

```js
function multiply(a, b = 1) {
  return a * b;
}

multiply(5, 2); // 10
multiply(5, 1); // 5
multiply(5); // 5
```

## Exemplos

### Passando `undefined` vs. outros valores "falsy"

Na segunda chamada aqui, mesmo se o segundo argumento é definido explicitamente como `undefined` (com exceção de `null`) quando chamado, o valor para o argumento `num` será o padrão.

```
function test(num = 1) {
  console.log(typeof num);
}

test();          // 'number' (num é definido para 1)
test(undefined); // 'number' (num é definido para 1 também)

// teste com outros values "falsy":
test('');        // 'string' (num é definido para '')
test(null);      // 'object' (num é definido para null)
```

### Avaliado em tempo de chamada

Os parâmetros predefinidos são avaliados no momento da chamada da função, então diferente de ex.: Python, um novo objeto é criado cada vez que a funçao é chamada.

```js
function append(value, array = []) {
  array.push(value);
  return array;
}

append(1); //[1]
append(2); //[2], not [1, 2]
```

Este mesmo comportamento é aplicado para funções e variáveis:

```js
function callSomething(thing = something()) {
  return thing;
}

function something() {
  return "sth";
}

callSomething(); //sth
```

### Parâmetros predefinidos estão disponíveis para os parâmetros seguintes à sua definição

Parâmetros que já foram avaliados ficam disponíveis para uso para os parâmetros seguintes:

```js
function singularAutoPlural(singular, plural = singular+"s",
                            rallyingCry = plural + " ATTACK!!!") {
  return [singular, plural, rallyingCry ];
}

//["Gecko","Geckos", "Geckos ATTACK!!!"]
singularAutoPlural("Gecko");

//["Fox","Foxes", "Foxes ATTACK!!!"]
singularAutoPlural("Fox","Foxes");

//["Deer", "Deer", "Deer ... change."]
singularAutoPlural("Deer", "Deer", "Deer peaceably and respectfully
   petition the government for positive change.")
```

Esta funcionalidade torna-se uma maneira direta e demonstra quantos casos extremos são manipulados.

```js
function go() {
  return ":P";
}

function withDefaults(
  a,
  b = 5,
  c = b,
  d = go(),
  e = this,
  f = arguments,
  g = this.value,
) {
  return [a, b, c, d, e, f, g];
}
function withoutDefaults(a, b, c, d, e, f, g) {
  switch (arguments.length) {
    case 0:
      a;
    case 1:
      b = 5;
    case 2:
      c = b;
    case 3:
      d = go();
    case 4:
      e = this;
    case 5:
      f = arguments;
    case 6:
      g = this.value;
    default:
  }
  return [a, b, c, d, e, f, g];
}

withDefaults.call({ value: "=^_^=" });
// [undefined, 5, 5, ":P", window, arguments, "=^_^="]

withoutDefaults.call({ value: "=^_^=" });
// [undefined, 5, 5, ":P", window, arguments, "=^_^="]
```

### Funções definidadas dentro do corpo da função

Introduzido no Gecko 33. Funções declaradas no corpo da função não podem ser referenciada dentro de parâmetos padrão e lançará um {{jsxref("ReferenceError")}} (atualmente um {{jsxref("TypeError")}} no SpiderMonkey, veja [Erro do Firefox 1022967](https://bugzil.la/1022967)). Parâmetros padrão são sempre executados primeiro, declarações de funções dentro do corpo de outra função são avaliadas depois.

```js
// Não funciona! Throws ReferenceError.
function f(a = go()) {
  function go() {
    return ":P";
  }
}
```

### Parâmetros sem valor padrão depois de parâmetros com valores padrão

Antes do Gecko 26, o seguinte código resultaria em um {{jsxref("SyntaxError")}}. Isto foi corrigido no [Erro do Firefox 777060](https://bugzil.la/777060) e funciona como esperado em versões posteriores:

```js
function f(x = 1, y) {
  return [x, y];
}

f(); // [1, undefined]
```

### Parâmetro desestruturado com valores padrões

É possível definir valores padrões com a notação [destructuring assignment](/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment):

```js
function f([x, y] = [1, 2], { z: z } = { z: 3 }) {
  return x + y + z;
}

f(); // 6
```

## Especificações

| Especificação                                                            | Status           | Comentário         |
| ------------------------------------------------------------------------ | ---------------- | ------------------ |
| {{SpecName('ES6', '#sec-function-definitions', 'Function Definitions')}} | {{Spec2('ES6')}} | Definição Inicial. |

## Compatibilidade com navegadores

{{Compat("javascript.functions.default_parameters")}}

## Veja também

- [Original proposal at ecmascript.org](http://wiki.ecmascript.org/doku.php?id=harmony:parameter_default_values)
