---
title: Object.prototype.isPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf
---

{{JSRef}}

O método **`isPrototypeOf()`** checa se um objeto existe em na cadeia de protótipos de um outro objeto.

> **Nota:** `isPrototypeOf()` difere do operador {{jsxref("Operators/instanceof", "instanceof")}}. Na expressão "`objeto instanceof UmaFuncaoQualquer`", a cadeia de protótipos do `objeto` é comparada com `UmaFuncaoQualquer.prototype`, e não com a própria função `UmaFuncaoQualquer`.

{{EmbedInteractiveExample("pages/js/object-prototype-isprototypeof.html")}}

## Sintaxe

```
prototypeObj.isPrototypeOf(objeto)
```

### Parâmetros

- `objeto`
  - : Objeto no qual será feito uma busca na cadeia de protótipos.

### Retorno

Um {{jsxref("Boolean")}} indicando se prototypeObj está na cadeia de protótipos do objeto.

### Erros possíveis

- {{jsxref("TypeError")}}
  - : Um {{jsxref("TypeError")}} é mostrado se `prototypeObj` é _undefined_ ou _null_.

## Descrição

O método `isPrototypeOf()` lhe permite checar se um objeto está ou não na cadeia de protótipos (cadeia hieráquica) de um outro objeto.

Em outras palavras, você pode descobrir se um objeto x (já instanciado) é herdeiro de um objeto y.

## Exemplos

Este exemplo demonstra que `Baz.prototype`, `Bar.prototype`, `Foo.prototype` e `Object.prototype` estão na cadeia de protótipos de `baz` , ou seja, baz herda atributos de Baz, Bar e Foo:

```js
function Foo() {}
function Bar() {}
function Baz() {}

Bar.prototype = Object.create(Foo.prototype);
Baz.prototype = Object.create(Bar.prototype);

const foo = new Foo();
const bar = new Bar();
const baz = new Baz();

// cadeia de protótipos:
// foo: Foo <- Object
// bar: Bar <- Foo <- Object
// baz: Baz <- Bar <- Foo <- Object
console.log(Baz.prototype.isPrototypeOf(baz)); // true
console.log(Baz.prototype.isPrototypeOf(bar)); // false
console.log(Baz.prototype.isPrototypeOf(foo)); // false
console.log(Bar.prototype.isPrototypeOf(baz)); // true
console.log(Bar.prototype.isPrototypeOf(foo)); // false
console.log(Foo.prototype.isPrototypeOf(baz)); // true
console.log(Foo.prototype.isPrototypeOf(bar)); // true
console.log(Object.prototype.isPrototypeOf(baz)); // true
```

O método`isPrototypeOf()`, junto com o operador {{jsxref("Operators/instanceof", "instanceof")}} vêm a ser útil se você tem um código que só pode funcionar quando estiver lidando com objetos que descendem de uma cadeia de protótipos específicos, por exemplo, para garantir que certos métodos ou propriedades estarão presentes naquele objeto que você precisa.

Por exemplo, checar se o objeto `baz` descende de `Foo.prototype`:

```js
if (Foo.prototype.isPrototypeOf(baz)) {
  // fazer algo seguramente
}
```

## Specificações

| Especificação                                                                                    | Status               | Comment             |
| ------------------------------------------------------------------------------------------------ | -------------------- | ------------------- |
| {{SpecName('ES3')}}                                                                              | {{Spec2('ES3')}}     | Initial definition. |
| {{SpecName('ES5.1', '#sec-15.2.4.6', 'Object.prototype.isPrototypeOf')}}                         | {{Spec2('ES5.1')}}   |                     |
| {{SpecName('ES6', '#sec-object.prototype.isprototypeof', 'Object.prototype.isPrototypeOf')}}     | {{Spec2('ES6')}}     |                     |
| {{SpecName('ESDraft', '#sec-object.prototype.isprototypeof', 'Object.prototype.isPrototypeOf')}} | {{Spec2('ESDraft')}} |                     |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Object.isPrototypeOf")}}

## Veja também

- {{jsxref("Operators/instanceof", "instanceof")}}
- {{jsxref("Object.getPrototypeOf()")}}
- {{jsxref("Object.setPrototypeOf()")}}
- [`Object.prototype.__proto__`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)
