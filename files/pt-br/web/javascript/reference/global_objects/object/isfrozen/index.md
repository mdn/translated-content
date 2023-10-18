---
title: Object.isFrozen()
slug: Web/JavaScript/Reference/Global_Objects/Object/isFrozen
---

{{JSRef}}

O método **`Object.isFrozen()`** determina se um objeto está {{jsxref("Object.freeze()", "frozen", "", 1)}}.

{{EmbedInteractiveExample("pages/js/object-isfrozen.html")}}

## Sintaxe

```
Object.isFrozen(obj)
```

### Parameters

- `obj`
  - : O objeto que será verificado.

### Return value

Um valor {{jsxref("Boolean")}} indicando se o objeto está frozen.

## Descrição

Um objeto estará frozen se, e apenas se, ele não for {{jsxref("Object.isExtensible()", "extensible", "", 1)}}, todas as suas propriedades não são configuráveis e todas suas propriedades de dados (propriedades que não são asessores de propriedades com getters ou setters) não podem ser modificadas.

## Examples

```js
// Um novo objeto é extensível, então ele não está frozen.
Object.isFrozen({}); // === false

// Um objeto vazio que não é extensível
// é vagamente frozen.
var vacuouslyFrozen = Object.preventExtensions({});
Object.isFrozen(vacuouslyFrozen); // === true

// Um novo objeto com uma propriedade também é extensível,
// portanto não está frozen.
var oneProp = { p: 42 };
Object.isFrozen(oneProp); // === false

// Impedir extensões do objeto ainda
// não o torna frozen, pois a propriedade ainda será
// configurável (e modificável).
Object.preventExtensions(oneProp);
Object.isFrozen(oneProp); // === false

// ...Porém, deletando a propriedade o objeto se tornará
// vagamente frozen.
delete oneProp.p;
Object.isFrozen(oneProp); // === true

// Um objeto não extensível e não modificável,
// mas com uma propriedade configurável não será frozen.
var nonWritable = { e: "plep" };
Object.preventExtensions(nonWritable);
Object.defineProperty(nonWritable, "e", {
  writable: false,
}); // tornar não modificável
Object.isFrozen(nonWritable); // === false

// Alterando a propriedade para não configurável
// tornará o objeto frozen.
Object.defineProperty(nonWritable, "e", {
  configurable: false,
}); // make non-configurable
Object.isFrozen(nonWritable); // === true

// Um objeto não extensível com uma propriedade não configurável
// mas modificável não será frozen.
var nonConfigurable = { release: "the kraken!" };
Object.preventExtensions(nonConfigurable);
Object.defineProperty(nonConfigurable, "release", {
  configurable: false,
});
Object.isFrozen(nonConfigurable); // === false

// Alterando a propriedade para não modificável
// tornará o objeto frozen.
Object.defineProperty(nonConfigurable, "release", {
  writable: false,
});
Object.isFrozen(nonConfigurable); // === true

// Um objeto não extensível com um assessor de propriedade
// configurável não será frozen.
var accessor = {
  get food() {
    return "yum";
  },
};
Object.preventExtensions(accessor);
Object.isFrozen(accessor); // === false

// ...Mas alterando essa propriedade para não configurável
// o objeto se tornará frozen.
Object.defineProperty(accessor, "food", {
  configurable: false,
});
Object.isFrozen(accessor); // === true

// A forma mais fácil para um objeto ser frozen
// é se o método Object.freeze foi usado nele.
var frozen = { 1: 81 };
Object.isFrozen(frozen); // === false
Object.freeze(frozen);
Object.isFrozen(frozen); // === true

// Por definição, um objeto frozen não é extensível.
Object.isExtensible(frozen); // === false

// Também por definição, um objeto frozen estará sealed.
Object.isSealed(frozen); // === true
```

## Notas

No ES5, se o argumento deste método não for um objeot (uma primitiva), ele irá lançar um {{jsxref("TypeError")}}. No ES2015, um argumento que não é objeto será sempre tratado como se fosse um objeto frozen, simplesmente retornando `true`.

```js
Object.isFrozen(1);
// TypeError: 1 is not an object (ES5 code)

Object.isFrozen(1);
// true                          (ES2015 code)
```

## Specifications

| Specification                                                      | Status               | Comment                                              |
| ------------------------------------------------------------------ | -------------------- | ---------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.2.3.12', 'Object.isFrozen')}}         | {{Spec2('ES5.1')}}   | Initial definition. Implemented in JavaScript 1.8.5. |
| {{SpecName('ES6', '#sec-object.isfrozen', 'Object.isFrozen')}}     | {{Spec2('ES6')}}     |                                                      |
| {{SpecName('ESDraft', '#sec-object.isfrozen', 'Object.isFrozen')}} | {{Spec2('ESDraft')}} |                                                      |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Object.isFrozen")}}

## Veja também

- {{jsxref("Object.freeze()")}}
- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Object.seal()")}}
- {{jsxref("Object.isSealed()")}}
