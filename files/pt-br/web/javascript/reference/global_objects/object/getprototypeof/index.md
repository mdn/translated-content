---
title: Object.getPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf
---

{{JSRef}}

O método **`Object.getPrototypeOf()`** retorna o prototype (isto é, o valor da propriedade interna `[[Prototype]]`) do objeto especificado.

## Sintaxe

```
Object.getPrototypeOf(obj)
```

### Parâmetros

- `obj`
  - : O objeto cujo prototype será retornado.

## Exemplos

```js
var proto = {};
var obj = Object.create(proto);
Object.getPrototypeOf(obj) === proto; // true
```

## Notas

No ES5 será lançada uma exceção {{jsxref("TypeError")}} se o parâmetro obj não for um objeto. No ES6, no entanto, esse valor será submetido a um {{jsxref("Object")}} equivalente ao seu tipo e retornado.

```js
Object.getPrototypeOf("foo");
// TypeError: "foo" não é um objeto (código ES5)
Object.getPrototypeOf("foo");
// String.prototype                  (código ES6)
```

## Especificação

| Especificação                                                             | Status             | Comentário         |
| ------------------------------------------------------------------------- | ------------------ | ------------------ |
| {{SpecName('ES5.1', '#sec-15.2.3.2', 'Object.getPrototypeOf')}}           | {{Spec2('ES5.1')}} | definição inicial. |
| {{SpecName('ES6', '#sec-object.getprototypeof', 'Object.getProtoypeOf')}} | {{Spec2('ES6')}}   |                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Object.getPrototypeOf")}}

## Notas específicas para o Opera

Embora as versões mais antigas do Opera não suportem `Object.getPrototypeOf()`, ele suporta a propriedade não oficial [`Object.prototype.__proto__`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) desde de a sua versão 10.50.

## Veja também

- {{jsxref("Object.prototype.isPrototypeOf()")}}
- {{jsxref("Object.setPrototypeOf()")}} {{experimental_inline}}
- [`Object.prototype.__proto__`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)
- John Resig's post on [getPrototypeOf](http://ejohn.org/blog/objectgetprototypeof/)
- {{jsxref("Reflect.getPrototypeOf()")}}
