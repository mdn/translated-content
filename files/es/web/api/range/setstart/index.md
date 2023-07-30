---
title: Range.setStart()
slug: Web/API/Range/setStart
---

{{ApiRef("DOM")}}

El método **`Range.setStart()`** establece la posición de inicio de un {{ domxref("Range") }}.

Si `startNode` es un {{ domxref("Node") }} de tipo `Text`, `Comment`, o `CDATASection`, entonces `startOffset` es el número de caracteres de partida de `startNode`. Para otros tiposde nodos, `startOffset` es el número de nodos hijos entre el inicio de los `startNode`.

Setting the start point below (lower in the document) the end point will result in a collapsed range with the start and end points both set to the specified start position.

Definiendo el punto de partida abajo (más abajo en el documento) el punto final resultará en un rango colapsado con el punto tanto de inicio como de entrada establecidos a la posición de partida especificada.

## Sintaxis

```
range.setStart(startNode, startOffset);
```

### Parámetros

- _startNode_
  - : El {{ domxref("Node") }} donde {{ domxref("Range") }} debe empezar.
- _startOffset_
  - : Un entero mayor o igual a cero representando el offset o desplazamiento de caracteres para el inicio del {{ domxref("Range") }} desde el comienzo de `startNode`.

## Ejemplo

```js
var range = document.createRange();
var startNode = document.getElementsByTagName("p").item(2);
var startOffset = 0;
range.setStart(startNode, startOffset);
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [The DOM interfaces index](/es/docs/DOM/DOM_Reference)
