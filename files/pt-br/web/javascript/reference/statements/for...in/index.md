---
title: for...in
slug: Web/JavaScript/Reference/Statements/for...in
---

{{jsSidebar("Statements")}}

O laço **`for...in`** interage sobre propriedades enumeradas de um objeto, na ordem original de inserção. O laço pode ser executado para cada propriedade distinta do objeto.

## Syntax

```
for (variavel in objeto) {...
}
```

- `variavel`
  - : Uma propriedade diferente do objeto é atribuida em cada iteração.
- `objeto`
  - : Objeto com as propriedades enumeradas.

## Descrição

O laço for...in somente iterage sobre propriedades enumeradas. Objetos criados a partir de construtores built-in (arrays e object) herdam propriedades não enumeradas de object.prototype e String.prototype, assim como método {{jsxref("String")}}'s {{jsxref("String.indexOf", "indexOf()")}} ou {{jsxref("Object")}}'s {{jsxref("Object.toString", "toString()")}}. O laço irá iterar sobre todas as propriedades enumeráveis do próprio objeto e somente aquelas enumeráveis herdadas de construtores de objetos prototype.

### Propriedades deletadas, adicionadas ou modificadas

O laço `for...in` iterage sobre as propriedades de um objeto em uma ordem arbitrária (veja o {{jsxref("Operators/delete", "delete")}} ). Se uma propriedade é deletada durante a execução do loop, ela se torna indisponível para ser acessada depois. É recomendável não adicionar, remover ou alterar propriedades novas ao objeto durante a execução do laço (durante o loop)

### Iteração em Arrays e `for...in`

> **Nota:** `for...in` não deve ser usado para iteração em uma {{jsxref("Array")}} onde a ordem é importante, visto que ele iterage em uma ordem arbitrária.

Indices de arrays somente se tornam propriedades enumeradas com inteiros (integer). Não há garantia de que utilizando o laço for...in os indices de um array serão retornados em uma ordem particular ou irá retornar todas as propriedades enumeráveis. É recomendável utilizar o laço {{jsxref("Statements/for", "for")}} com índices numéricos ou {{jsxref("Array.prototype.forEach()")}} ou ainda {{jsxref("Statements/for...of", "for...of")}} quando iteragir sobre arrays onde a ordem é importante.

### Iteração apenas sobre suas próprias propriedades

Se você quer considerar somente as propriedades do próprio objeto e não as herdadas via prototype, use {{jsxref("Object.getOwnPropertyNames", "getOwnPropertyNames()")}} ou execute {{jsxref("Object.prototype.hasOwnProperty", "hasOwnProperty()")}} ou ({{jsxref("Object.prototype.propertyIsEnumerable", "propertyIsEnumerable")}}

## Exemplos

A função seguinte toma como argumento um objeto. O laço for...in iterage sobre todos as propriedades enumeráveis do objeto e retorna uma string com o nome das propriedades e seus respectivos valores.

```js
//Objeto
var obj = { a: 1, b: 2, c: 3 };

//Para prop (propriedade) in obj (objeto) faça
for (var prop in obj) {
  // ctrl+shift+k (para abrir o console no mozilla firefox)
  console.log("obj." + prop + " = " + obj[prop]);
}

//A saída (output) deverá ser:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"
```

A função seguinte ilustra o uso de {{jsxref("Object.prototype.hasOwnProperty", "hasOwnProperty()")}}: as propriedades herdadas não são exibidas.

```js
var triangle = { a: 1, b: 2, c: 3 };

function ColoredTriangle() {
  this.color = "red";
}

ColoredTriangle.prototype = triangle;

var obj = new ColoredTriangle();

for (var prop in obj) {
  if (obj.hasOwnProperty(prop)) {
    console.log("obj." + prop + " = " + obj[prop]);
  }
}

// Output:
// "obj.color = red"
```

## Specificações

| Specificação                                                                       | Status               | Comentário        |
| ---------------------------------------------------------------------------------- | -------------------- | ----------------- |
| {{SpecName('ESDraft', '#sec-for-in-and-for-of-statements', 'for...in statement')}} | {{Spec2('ESDraft')}} |                   |
| {{SpecName('ES6', '#sec-for-in-and-for-of-statements', 'for...in statement')}}     | {{Spec2('ES6')}}     |                   |
| {{SpecName('ES5.1', '#sec-12.6.4', 'for...in statement')}}                         | {{Spec2('ES5.1')}}   |                   |
| {{SpecName('ES3', '#sec-12.6.4', 'for...in statement')}}                           | {{Spec2('ES3')}}     |                   |
| {{SpecName('ES1', '#sec-12.6.3', 'for...in statement')}}                           | {{Spec2('ES1')}}     | Definição inicial |

## Compatibilidade com navegadores

{{Compat("javascript.statements.for_in")}}

## Compatibilidade: Initializer expressions

Anterior ao SpiderMonkey 40, era possível usar uma expressão inicial com o laço for...in, conforme exemplo que se segue:

```js example-bad
var obj = {a:1, b:2, c:3};
for(var i=0 in obj) {
  console.log(obj[i]);
}
// 1
// 2
// 3
```

Este não é o comportamento padrão e atualmente é ignorado a partir da versão 40 e posteriores e seu uso irá exibir o error {{jsxref("SyntaxError")}} ("for-in loop head declarations may not have initializers"). Outras engines como a v8 (Chrome), Chakra (IE/Edge) e JSC (Webkit/Safari) estão estudando o que fazer com esse comportamento.

## Veja também

- {{jsxref("Statements/for...of", "for...of")}} - laço similar que iterage sobre os valores das propriedades.
- {{jsxref("Statements/for_each...in", "for each in")}} - (deprecated).
- {{jsxref("Statements/for", "for")}}
- [Generator expressions](/pt-BR/docs/Web/JavaScript/Guide/Iterators_and_Generators) (uses the `for...in` syntax)
- [Enumerability and ownership of properties](/pt-BR/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Object.prototype.hasOwnProperty()")}}
- {{jsxref("Array.prototype.forEach()")}}
