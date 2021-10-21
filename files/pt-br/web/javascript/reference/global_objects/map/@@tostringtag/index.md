---
title: Map.prototype[@@toStringTag]
slug: Web/JavaScript/Reference/Global_Objects/Map/@@toStringTag
tags:
  - ECMAScript 2015
  - JavaScript
  - Map
  - Property
  - Prototype
  - Reference
browser-compat: javascript.builtins.Map.@@toStringTag
---
{{JSRef}}

A propriedade **`Map[@@toStringTag]`** tem o valor inicial do `Map`.

{{EmbedInteractiveExample("pages/js/map-prototype-@@tostringtag.html","shorter")}}{{js_property_attributes(0,0,1)}}

## Sintaxe

```js
Map[Symbol.toStringTag]
```

## Exemplos

### Usando o toStringTag

```js
Object.prototype.toString.call(new Map()) // "[object Map]"
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Symbol.toStringTag")}}
