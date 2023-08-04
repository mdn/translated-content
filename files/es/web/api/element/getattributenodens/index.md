---
title: Element.getAttributeNodeNS()
slug: Web/API/Element/getAttributeNodeNS
---

{{ APIRef }}

## Sumario

Dados namespace y nodeName del element, devuelve su `Attr` .

## Sintaxis

```js
attributeNode = element.getAttributeNodeNS(namespace, nodeName);
```

- `attributeNode` es el nodo para el atributo especificado.
- `namespace` es la cadena que define el namespace del atributo.
- `nodeName` es la cadena que define el name del atributo.

## Notas

`getAttributeNodeNS` es más específica [getAttributeNode](en/DOM/element.getAttributeNode) en el sentido de que puedes especificar atributos de un namespace en particular. Su método setter es [setAttributeNodeNS](en/DOM/element.setAttributeNodeNS).

{{ DOMAttributeMethods() }}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
