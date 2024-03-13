---
title: Symbol.asyncIterator
slug: Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator
l10n:
  sourceCommit: 12da8f89b59995a777e13d518ffd39c331fb95d4
---

{{JSRef}}

El símbolo conocido **`Symbol.asyncIterator`** especifica el AsyncIterator por defecto para un objeto. Si se establece esta propiedad en un objeto, es un iterable asíncrono y puede utilizarse en un bucle [`for await...of`](/es/docs/Web/JavaScript/Reference/Statements/for-await...of).

## Descripción

El símbolo `Symbol.asyncIterator` es un símbolo incorporado que se utiliza para acceder al método `@@asyncIterator` de un objeto. Para que un objeto sea iterable asíncrono, debe tener una clave `Symbol.asyncIterator`.

{{js_property_attributes(0,0,0)}}

## Ejemplos

### Iterables asíncronos definidos por el usuario

Puedes definir tu propio iterable asíncrono estableciendo la propiedad `[Symbol.asyncIterator]` en un objeto.

```js
const myAsyncIterable = {
  async *[Symbol.asyncIterator]() {
    yield "hello";
    yield "async";
    yield "iteration!";
  },
};

(async () => {
  for await (const x of myAsyncIterable) {
    console.log(x);
    // resultado esperado:
    //    "hello"
    //    "async"
    //    "iteration!"
  }
})();
```

Cuando crees una API, recuerda que los iterables asíncronos están diseñados para representar algo _iterable_ — como un flujo de datos o una lista —, no para reemplazar completamente las devoluciones de llamada y los eventos en la mayoría de las situaciones.

### Iterables asíncronos incorporados

Actualmente no hay objetos JavaScript incorporados que tengan la clave `[Symbol.asyncIterator]` establecida por defecto. Sin embargo, los flujos de WHATWG están preparados para ser el primer objeto incorporado que sea iterable asíncrono, con `[Symbol.asyncIterator]` recientemente aterrizando en la especificación.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Protocolos de iteración](/es/docs/Web/JavaScript/Reference/Iteration_protocols)
- [for await... of](/es/docs/Web/JavaScript/Reference/Statements/for-await...of)
