---
title: "Warning: JavaScript 1.6's for-each-in loops are deprecated"
slug: orphaned/Web/JavaScript/Reference/Errors/For-each-in_loops_are_deprecated
---

{{jsSidebar("Errors")}}

## Mensagem

```
Warning: JavaScript 1.6's for-each-in loops are deprecated; consider using ES6 for-of instead
```

## Tipo de mensagem

Warning

## O que aconteceu de errado?

A declaração {{jsxref("Statements/for_each...in", "for each (variable in obj)")}} do JavaScript 1.6 foi descontinuada e será removida num futuro próximo.

## Exemplos

### Iteração do objeto

{{jsxref("Statements/for_each...in", "for each...in")}} tem sido usada para iterar por valores específicos do objeto.

#### Sintaxe descontinuada

```js example-bad
var object = { a: 10, b: 20 };

for each (var x in object) {
  console.log(x);        // 10
                         // 20
}
```

#### Sintaxe padrão alternativa

Agora você pode utilizar o loop padrão {{jsxref("Statements/for...in", "for...in")}}, para iterar sobre chaves específicas do objeto e receber cada valor para dentro do loop:

```js example-good
var object = { a: 10, b: 20 };

for (var key in object) {
  var x = object[key];
  console.log(x);        // 10
                         // 20
}
```

Ou, utilizando {{jsxref("Statements/for...of", "for...of")}} (ES2015) e {{jsxref("Object.values")}} (ES2017), você pode ter um array dos valores específicos do objeto e iterar sobre o array da seguinte maneira:

```js example-good
var object = { a: 10, b: 20 };

for (var x of Object.values(object)) {
  console.log(x);        // 10
                         // 20
}
```

### Iteração sobre o Array

{{jsxref("Statements/for_each...in", "for each...in")}} tem sido usado para iterar sobre elementos específicos do array.

#### Sintaxe descontinuada

```js example-bad
var array = [10, 20, 30];

for each (var x in array) {
  console.log(x);        // 10
                         // 20
                         // 30
}
```

#### Sintaxe padrão alternativa

Isso agora é possível também com loops {{jsxref("Statements/for...of", "for...of")}} (ES2015).

```js example-good
var array = [10, 20, 30];

for (var x of array) {
  console.log(x);        // 10
                         // 20
                         // 30
}
```

### Iterando sobre um array null-able

{{jsxref("Statements/for_each...in", "for each...in")}} não faz nada se o valor especificado for `null` ou `undefined`, mas {{jsxref("Statements/for...of", "for...of")}} vai disparar uma exceção nestes casos.

#### Sintaxe descontinuada

```js example-bad
function func(array) {
  for each (var x in array) {
    console.log(x);
  }
}
func([10, 20]);        // 10
                       // 20
func(null);            // prints nothing
func(undefined);       // prints nothing
```

#### Sintaxe padrão alternativa

Para reescrever as declarações {{jsxref("Statements/for_each...in", "for each...in")}} de modo que os valores possam ser `null` ou `undefined` com {{jsxref("Statements/for...of", "for...of")}} também, você precisa utilizar algo como {{jsxref("Statements/for...of", "for...of")}}.

```js example-good
function func(array) {
  if (array) {
    for (var x of array) {
      console.log(x);
    }
  }
}
func([10, 20]);        // 10
                       // 20
func(null);            // prints nothing
func(undefined);       // prints nothing
```

### Iterando sobre um par chave-valor de um objeto

#### Sintaxe descontinuada

Existe um idioma descontinuado para iterar sobre pares chave-valor específicos de um objeto, utilizando {{jsxref("Statements/for_each...in", "for each...in")}} e o objeto descontinuado {{jsxref("Iterator")}}.

```js example-bad
var object = { a: 10, b: 20 };

for each (var [key, value] in Iterator(object)) {
  console.log(key, value);  // "a", 10
                            // "b", 20
}
```

#### Sintaxe padrão alternativa

Você pode utilizar agora o loop padrão {{jsxref("Statements/for...in", "for...in")}} para iterar sobre chaves específicas do objeto, e obter cada valor dentro do loop:

```js example-good
var object = { a: 10, b: 20 };

for (var key in object) {
  var value = object[key];
  console.log(key, value);  // "a", 10
                            // "b", 20
}
```

Ou utilizando {{jsxref("Statements/for...of", "for...of")}} (ES2015) e {{jsxref("Object.entries")}} (ES2017), você pode obter um array dos valores específicos do objeto e iterar sobre este array da seguinte maneira:

```js example-good
var object = { a: 10, b: 20 };

for (var [key, value] of Object.entries(object)) {
  console.log(key, value);  // "a", 10
                            // "b", 20
}
```

## Veja também

- {{jsxref("Statements/for...of", "for...of")}}
- {{jsxref("Object.values")}}
- {{jsxref("Object.entries")}}
