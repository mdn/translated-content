---
title: Object.isSealed()
slug: Web/JavaScript/Reference/Global_Objects/Object/isSealed
---

{{JSRef}}

O método **`Object.isSealed()`** determina se um objeto está selado.

{{EmbedInteractiveExample("pages/js/object-issealed.html")}}

## Sintaxe

```
Object.isSealed(obj)
```

### Parâmetros

- `obj`
  - : O objeto que deverá ser verificado.

### Valor retornado

Um {{jsxref("Boolean")}} indicando se o objeto fornecido está ou não selado.

## Descrição

Retorna `true` se o objeto está selado, senão `false`. Um objeto está selado se ele for "não {{jsxref("Object.isExtensible", "extensible", "", 1)}}" e se todas as suas propriedades estão como "não configuráveis" e assim sendo "não removíveis" (mas não necessariamente "não escrevíveis").

## Exemplos

```js
// Objetos não são selados por padrão.
var empty = {};
Object.isSealed(empty); // === false

// Se você fizer um objeto não extensível vazio,
// ele estará vagamente selado.
Object.preventExtensions(empty);
Object.isSealed(empty); // === true

// O mesmo não é verdadeiro em um objeto "não vazio",
// a não ser que todas as suas propriedades sejam "não configuráveis".
var hasProp = { fee: "fie foe fum" };
Object.preventExtensions(hasProp);
Object.isSealed(hasProp); // === false

// Mas torne-os todos "não configuráveis"
// e o objeto se tornará selado.
Object.defineProperty(hasProp, "fee", {
  configurable: false,
});
Object.isSealed(hasProp); // === true

// O jeito mais fácil de selar um objeto, com certeza,
// é Object.seal.
var sealed = {};
Object.seal(sealed);
Object.isSealed(sealed); // === true

// Um objeto selado é, por definição, não extensível.
Object.isExtensible(sealed); // === false

// Um objeto selado pode estar congelado,
// mas não precisa estar.
Object.isFrozen(sealed); // === true
// (todas as propriedades também não escrevíveis)

var s2 = Object.seal({ p: 3 });
Object.isFrozen(s2); // === false
// ('p' continua "escrevível")

var s3 = Object.seal({
  get p() {
    return 0;
  },
});
Object.isFrozen(s3); // === true
// (somente a configurabilidade importa nos assessores de propriedade)
```

## Notas

No ES5, se o argumento para esse método não é um objeto (um primitivo), então ele irá causar um {{jsxref("TypeError")}}. No ES2015, um argumento que não seja objeto irá ser tratado como se fosse um objeto selado qualquer, simplesmente retornando `true`.

```js
Object.isSealed(1);
// TypeError: 1 is not an object (ES5 code)

Object.isSealed(1);
// true                          (ES2015 code)
```

## Especificações

| Especificação                                                      | Estado               | Comentário                                           |
| ------------------------------------------------------------------ | -------------------- | ---------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.2.3.11', 'Object.isSealed')}}         | {{Spec2('ES5.1')}}   | Definição inicial. Implementado no JavaScript 1.8.5. |
| {{SpecName('ES6', '#sec-object.issealed', 'Object.isSealed')}}     | {{Spec2('ES6')}}     |                                                      |
| {{SpecName('ESDraft', '#sec-object.issealed', 'Object.isSealed')}} | {{Spec2('ESDraft')}} |                                                      |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Object.isSealed")}}

## Veja também

- {{jsxref("Object.seal()")}}
- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Object.freeze()")}}
- {{jsxref("Object.isFrozen()")}}
