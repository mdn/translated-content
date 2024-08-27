---
title: Map.prototype.size
slug: Web/JavaScript/Reference/Global_Objects/Map/size
l10n:
  sourceCommit: 6a0f9553932823cd0c4dcf695d4b4813474964fb
---

{{JSRef}}

La propiedad de acceso **`size`** de las instancias {{jsxref("Map")}} regresa el número de elementos de este _map_.

{{EmbedInteractiveExample("pages/js/map-prototype-size.html")}}

## Descripción

El valor de `size` es un entero que representa, el número de entradas que el objeto `Map` tiene. La función de acceso para `size` es `undefined`; no puedes modificar esta propiedad.

## Ejemplos

### Usando size

```js
const myMap = new Map();
myMap.set("a", "alpha");
myMap.set("b", "beta");
myMap.set("g", "gamma");

console.log(myMap.size); // 3
```

## Especificaciones

{{Specifications}}

## Compatibilidad con nvegadores

{{Compat}}

## Véase también

- {{jsxref("Map")}}
