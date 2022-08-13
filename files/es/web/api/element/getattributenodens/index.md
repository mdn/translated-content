---
title: Element.getAttributeNodeNS()
slug: Web/API/Element/getAttributeNodeNS
tags:
  - API
  - DOM
  - Referencia
  - metodo
translation_of: Web/API/Element/getAttributeNodeNS
---
{{ APIRef("DOM") }}

## Sumario

Dados namespace y nodeName del element, devuelve su `Attr` .

## Sintaxis

    attributeNode = element.getAttributeNodeNS(namespace,nodeName)

- `attributeNode` es el nodo para el atributo especificado.
- `namespace` es la cadena que define el namespace del atributo.
- `nodeName` es la cadena que define el name del atributo.

\== Example == TBD The example needs to be fixed pre> // html: \<div id="top" /> t = document.getElementById("top"); specialNode = t.getAttributeNodeNS( "<http://www.mozilla.org/ns/specialspace>", "id"); // iNode.value = "full-top" \</pre

## Notas

`getAttributeNodeNS` es más específica [getAttributeNode](en/DOM/element.getAttributeNode) en el sentido de que puedes especificar atributos de un namespace en particular. Su método setter es [setAttributeNodeNS](en/DOM/element.setAttributeNodeNS).

{{ DOMAttributeMethods() }}

## Especificación

[DOM Level 2 Core: getAttributeNodeNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElGetAtNodeNS)
