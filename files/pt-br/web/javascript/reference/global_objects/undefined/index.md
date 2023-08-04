---
title: undefined
slug: Web/JavaScript/Reference/Global_Objects/undefined
---

{{jsSidebar("Objects")}}

## Resumo

O valor global `undefined` representa um valor indefinido. Trata-se de um dos {{Glossary("Primitivo", "tipos primitivos")}} do JavaScript.

{{js_property_attributes(0,0,0)}}

## Sintaxe

```
undefined
```

## Descrição

O `undefined` é uma propriedade do objeto `global`, ou seja, é uma variável no escopo global. O valor inicial de `undefined` é o valor primitivo `undefined`.

Nos browsers modernos (JavaScript 1.8.5 / Firefox 4+), a especificação ECMAScript 5 define que o `undefined` é uma propriedade não configurável e somente leitura. Mesmo quando esse não for o caso, evite sobrescrevê-lo.

Uma variável que não teve um valor atribuído é do tipo `undefined`. Um método ou sentença também retorna `undefined` se a variável que está sendo avaliada não tem um valor atribuído. Uma função retorna `undefined` se um valor não for {{jsxref("Statements/return", "retornado")}}.

Uma vez que undefined não é uma {{jsxref("Reserved_Words", "palavra reservada")}}, ele pode ser usado como um [identificador](/pt-BR/docs/Web/JavaScript/Guide/Values,_variables,_and_literals#Variables) (nome de variável) em qualquer escopo que não seja o escopo global.

```js
// escreve no console "foo string"
(function () {
  var undefined = "foo";
  console.log(undefined, typeof undefined);
})();

// escreve no console "foo string"
(function (undefined) {
  console.log(undefined, typeof undefined);
})("foo");
```

## Exemplos

### Igualdade estrita (===) e `undefined`

Voce pode utilizar `undefined` com os operadores de igualdade e desigualdade estritas para determinar se a variável possui um valor. No código a seguir, a variável `x` não foi definida, e o resultado do `if` é verdadeiro.

```js
var x;
if (x === undefined) {
  // sentenças aqui são executadas
} else {
  // o código aqui não é executado
}
```

> **Nota:** Observação: O operador de igualdade estrita (`===`) tem que ser utilizado aqui uma vez que `x == undefined` também checa se `x` é nulo, enquanto o operador não o faz. `null` não é equivalente à `undefined`. Veja {{jsxref("Operators/Comparison_Operators", "operadores de comparação")}} (em inglês) para maiores detalhes.

### `Operador Typeof` e `undefined`

Alternativamente, {{jsxref("Operators/typeof", "typeof")}} pode ser usado:

```js
var x;
if (typeof x === "undefined") {
  // esse código é executado
}
```

Uma das principais razões para usar o {{jsxref("Operators/typeof", "typeof")}} é que ele não lança erros caso a variável não tenha sido inicializada.

```js
// x não foi atribuída anteriormente
if (typeof x === "undefined") {
  // retorna verdadeiro sem lançar erros
  // esse código executa
}

if (x === undefined) {
  // lança um ReferenceError para x
}
```

No entanto, esse tipo de técnica deveria ser evitada. A linguagem JavaScript é uma linguagem com escopo estático, portanto o conhecimento sobre se uma variável está definida pode ser adquirido pela verificação de sua definição dentro do contexto à qual ela pertence. A única exceção é para o escopo global. No entanto, o escopo global é anexado ao objeto global, portanto a verificação da existência de uma variável no contexto global pode ser feita através de uma checagem na propriedade do objeto global usando o operador {{jsxref("Operators/in", "in")}}, por exemplo.

### `Operador Void` e `undefined`

O operador {{jsxref("Operators/void", "void")}} é a terceira alternativa.

```js
var x;
if (x === void 0) {
  // esse código executa
}

// y não foi definido antes
if (y === void 0) {
  // lança uma ReferenceError (ao contrário de `typeof`)
}
```

## Especificação

| Especificação                                       | Status             | Comentários                                       |
| --------------------------------------------------- | ------------------ | ------------------------------------------------- |
| ECMAScript 1st Edition.                             | Standard           | Definição inicial. Implementado no JavaScript 1.3 |
| {{SpecName('ES5.1', '#sec-15.1.1.3', 'undefined')}} | {{Spec2('ES5.1')}} |                                                   |
| {{SpecName('ES6', '#sec-undefined', 'undefined')}}  | {{Spec2('ES6')}}   |                                                   |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.undefined")}}
