---
title: Node.lastChild
slug: Web/API/Node/lastChild
tags:
  - API
  - DOM
  - NecesitaCompatibilidadNavegador
  - Propiedad
  - Referencia
translation_of: Web/API/Node/lastChild
---
{{APIRef("DOM")}}

La propiedad de sólo lectura **`Node.lastChild`** devuelve el último hijo del nodo. Si su padre es un elemento, entonces el hijo es generalmente un nodo de element, nodo de texto o un nodo de comentario. Devuelve `null` si no hay elementos hijos.

## Sintaxis

    var nodoHijo= nodo.lastChild;

## Ejemplo

```js
var tr = document.getElementById("row1");
var corner_td = tr.lastChild;
```

## Especificaciones

| Especificación                                                                                   | Estado                           | Comentario         |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------ |
| {{SpecName('DOM WHATWG', '#dom-node-lastchild', 'Node.lastChild')}}         | {{Spec2('DOM WHATWG')}} | Sin cambio         |
| {{SpecName('DOM3 Core', 'core.html#ID-61AD09FB', 'Node.lastChild')}}     | {{Spec2('DOM3 Core')}}     | Sin cambio         |
| {{SpecName('DOM2 Core', 'core.html#ID-61AD09FB', 'Node.lastChild')}}     | {{Spec2('DOM2 Core')}}     | Sin cambio         |
| {{SpecName('DOM1', 'level-one-core.html#ID-61AD09FB', 'Node.lastChild')}} | {{Spec2('DOM1')}}         | Definición inicial |

## Compatibilidad en navegador

{{Compat("api.Node.lastChild")}}
