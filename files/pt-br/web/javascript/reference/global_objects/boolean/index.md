---
title: Boolean
slug: Web/JavaScript/Reference/Global_Objects/Boolean
---

{{JSRef}}

O objeto **`Boolean`** é um objeto wrapper para um valor booleano.

## Sintaxe

```
new Boolean([value])
```

### Parâmetros

- `value`
  - : Opcional. O valor inicial do objeto `Boolean.`

## Descrição

O valor passado como primeiro parâmetro é convertido para um valor boleano, se necessário. Se o valor é omitido ou é `0`, `-0`, {{jsxref("null")}}, `false`, {{jsxref("NaN")}}, {{jsxref("undefined")}} ou é uma string vazia(`""`), o objeto terá um valor inicial de `false`. Todos outros valores, incluindo qualquer objeto ou string `"false"`, criam um objeto com valor inicial `true`.

Não confunda os valores primitivos Boolean `true` e `false` com os valores `true` and `false` do objeto `Boolean`.

Qualquer objeto cujo o valor não é {{jsxref("undefined")}} ou {{jsxref("null")}}, incluindo um objeto `Boolean` que o valor seja `false`, é avaliado para `true` quando passa por uma declaração condicional. Por exemplo, a condição a seguir {{jsxref("Statements/if...else", "if")}} a declaração é avaliada como `true`:

```js
var x = new Boolean(false);
if (x) {
  // esse código é executado
}
```

Esse comportamento não se aplica aos primitivos `Boolean`. Por exemplo, a condição a seguir {{jsxref("Statements/if...else", "if")}} a declaração é avaliada como `false`:

```js
var x = false;
if (x) {
  // esse código não é executado
}
```

Não use um objeto `Boolean` para converter um valor não-boleano para um valor boleano. Ao invés disso use `Boolean` como uma função para executar essa tarefa:

```js
var x = Boolean(expression); // preferido
var x = new Boolean(expression); // não use
```

Se você especificar qualquer objeto, incluindo um objeto `Boolean` cujo valor é `false`, como valor inicial de um objeto `Boolean`, o novo objeto `Boolean` terá o valor de `true`.

```js
var myFalse = new Boolean(false); // valor inicial false
var g = new Boolean(myFalse); // valor inicial true
var myString = new String("Hello"); // objeto String
var s = new Boolean(myString); // valor inicial true
```

Não use um um objeto `Boolean` no lugar de um primitivo B`oolean`.

## Propriedades

- `Boolean.length`
  - : Propriedade Length cujo valor é 1.
- {{jsxref("Boolean.prototype")}}
  - : Representa o protótipo para o construtor `Boolean`.

## Métodos

O objeto global `Boolean` contém métodos próprios, entretanto, ele herda alguns métodos através da cadeia de protótipos:

## Instâncias `Boolean`

Todas instâncias `Boolean` herdam de {{jsxref("Boolean.prototype")}}. Assim como todos os construtores, o protótipo do objeto dita as propriedades e métodos herdados.

### Propriedades

{{page('/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Boolean/prototype', 'Properties')}}

### Métodos

{{page('/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Boolean/prototype', 'Methods')}}

## Exemplos

### Criando objetos `Boolean` com um valor inicial `false`

```js
var bNoParam = new Boolean();
var bZero = new Boolean(0);
var bNull = new Boolean(null);
var bEmptyString = new Boolean("");
var bfalse = new Boolean(false);
```

### Criando objetos `Boolean` com um valor inicial `true`

```js
var btrue = new Boolean(true);
var btrueString = new Boolean("true");
var bfalseString = new Boolean("false");
var bSuLin = new Boolean("Su Lin");
var bArrayProto = new Boolean([]);
var bObjProto = new Boolean({});
```

## Especificações

| Especificação                                          | Status             | Comentário                                          |
| ------------------------------------------------------ | ------------------ | --------------------------------------------------- |
| {{SpecName('ES1')}}                                    | {{Spec2('ES1')}}   | Definição inicial. Implementado no Java Script 1.0. |
| {{SpecName('ES5.1', '#sec-15.6', 'Boolean')}}          | {{Spec2('ES5.1')}} |                                                     |
| {{SpecName('ES6', '#sec-boolean-objects', 'Boolean')}} | {{Spec2('ES6')}}   |                                                     |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Boolean")}}

## Veja também

- {{jsxref("Boolean.prototype")}}
- {{Glossary("Boolean")}}
- [Boolean data type (Wikipedia)](http://en.wikipedia.org/wiki/Boolean_data_type)
