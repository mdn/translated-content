---
title: Object.isExtensible()
slug: Web/JavaScript/Reference/Global_Objects/Object/isExtensible
---

{{JSRef}}

O método **`Object.isExtensible()`** verifica se um objeto pode ser extendido (se é ou não possível adicinar novas propriedades).

{{InteractiveExample("JavaScript Demo: Object.isExtensible()")}}

```js interactive-example
const object1 = {};

console.log(Object.isExtensible(object1));
// Expected output: true

Object.preventExtensions(object1);

console.log(Object.isExtensible(object1));
// Expected output: false
```

## Sintaxe

```
Object.isExtensible(obj)
```

### Parâmetros

- `obj`
  - : O objeto a ser verificado.

### Valor de retorno

Um valor booleano ({{jsxref("Boolean")}}) que indica se o objeto pode ser extendido.

## Descrição

Objetos são extensíveis por padrão: novas propriedades podem ser adicionadas, e (em ambientes que suportam [`Object.prototype.__proto__`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) {{deprecated_inline}}) a propriedade \_\_proto\_\_ pode ser modificada. Um objeto pode ser marcado como não extensível usando {{jsxref("Object.preventExtensions()")}}, {{jsxref("Object.seal()")}}, ou {{jsxref("Object.freeze()")}}.

## Exemplos

```js
// Novos objetos podem ser extendidos.
var empty = {};
Object.isExtensible(empty); // === true

// ...mas isso pode mudar.
Object.preventExtensions(empty);
Object.isExtensible(empty); // === false

// Objetos selados, não podem ser extendidos.
var sealed = Object.seal({});
Object.isExtensible(sealed); // === false

// Objetos congelados também não podem ser extendidos.
var frozen = Object.freeze({});
Object.isExtensible(frozen); // === false
```

## Notas

No ES5, se o argumento fornecido não for um objeto (um tipo primitivo), isso vai causar um erro do tipo {{jsxref("TypeError")}}. No ES2015, um argumento que não é um objeto será tratado como um objeto não extensível, simplesmente retornando `false`.

```js
Object.isExtensible(1);
// TypeError: 1 is not an object (ES5 code)

Object.isExtensible(1);
// false                         (ES2015 code)
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## See also

- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Object.seal()")}}
- {{jsxref("Object.isSealed()")}}
- {{jsxref("Object.freeze()")}}
- {{jsxref("Object.isFrozen()")}}
- {{jsxref("Reflect.isExtensible()")}}
