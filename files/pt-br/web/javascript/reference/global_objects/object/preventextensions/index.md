---
title: Object.preventExtensions()
slug: Web/JavaScript/Reference/Global_Objects/Object/preventExtensions
---

{{JSRef}}

O método **`Object.preventExtensions()`** impede que novas propriedades sejam adicionadas a um objeto (isto é, impede futuras extensões ao objeto).

## Syntax

```
Object.preventExtensions(obj)
```

### Parâmetros

- `obj`
  - : O objeto a tornar-se não-extensível.

### Valor de retorno

Um objeto tornado não-extensível.

## Descrição

Um objeto é extensível se novas propriedades puderem der adicionadas ao mesmo. `Object.preventExtensions()` marca um objeto como não mais extensível, de forma que este nunca terá novas propriedades além daquelas que o objeto tinha quando foi marcado como não-extensível. Note que as propriedades de um objeto não-extensível, em geral, ainda poderão ser _apagadas_. Tentativas de adicionar novas propriedades a um objeto não-extensível falharão, tanto silenciosamente ou lançando uma exceção {{jsxref("TypeError")}} (mais comumente, mas não exclusivamente, quando em {{jsxref("Functions_and_function_scope/Strict_mode", "strict mode", "", 1)}}).

`Object.preventExtensions()` evita apenas a adição de novas propriedades diretas. Proprieades ainda poderão ser adicionadas ao protótipo do objeto.

É impossível tornar um objeto extensível novamente uma vez que o mesmo tenha se tornado não-extensível.

## Exemplos

```js
// Object.preventExtensions retorna o objeto
// tornado não-extensível.
var obj = {};
var obj2 = Object.preventExtensions(obj);
obj === obj2; // verdadeiro

// Objetos são extensíveis por padrão...
var empty = {};
Object.isExtensible(empty); // === verdadeiro

// ...mas isso pode ser mudado.
Object.preventExtensions(empty);
Object.isExtensible(empty); // === falso

// Object.defineProperty lança erro quando adiciona-se
// uma nova propriedade a um objeto não-extensível.
var nonExtensible = { removable: true };
Object.preventExtensions(nonExtensible);
Object.defineProperty(nonExtensible, "new", {
  value: 8675309,
}); // lança um TypeError

// No modo restrito, tentar adicionar novas propriedades a
// um objeto não-extensível lança um TypeError.
function fail() {
  "use strict";
  // lança um TypeError
  nonExtensible.newProperty = "FAIL";
}
fail();
```

O protótipo não-extensível de um objeto é imutável:

```js
var fixed = Object.preventExtensions({});
// lança um 'TypeError'.
fixed.__proto__ = { oh: "hai" };
```

## Notas

No ES5, se o argumento atribuído a este método não for um objeto (for um primitivo), isso causará um erro de tipo {{jsxref("TypeError")}}. No ES2015, um argumento não-objeto será tratado como se o mesmo fosse um objeto não-extensível comum, simplesmente retornando-o.

```js
Object.preventExtensions(1);
// TypeError: 1 não é um objeto (código ES5)

Object.preventExtensions(1);
// 1                             (código ES2015)
```

## Especificações

| Specification                                                                        | Status               | Comment                                              |
| ------------------------------------------------------------------------------------ | -------------------- | ---------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.2.3.10', 'Object.preventExtensions')}}                  | {{Spec2('ES5.1')}}   | Definição inicial. Implementado em JavaScript 1.8.5. |
| {{SpecName('ES6', '#sec-object.preventextensions', 'Object.preventExtensions')}}     | {{Spec2('ES6')}}     |                                                      |
| {{SpecName('ESDraft', '#sec-object.preventextensions', 'Object.preventExtensions')}} | {{Spec2('ESDraft')}} |                                                      |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Object.preventExtensions")}}

## Veja também

- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Object.seal()")}}
- {{jsxref("Object.isSealed()")}}
- {{jsxref("Object.freeze()")}}
- {{jsxref("Object.isFrozen()")}}
- {{jsxref("Reflect.preventExtensions()")}}
