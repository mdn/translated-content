---
title: Ejes
slug: Web/XPath/Axes
l10n:
  sourceCommit: b6f343538eac4a803943b4e99b0c0545b372645a
---

{{XsltSidebar}}

Hay trece ejes diferentes en la especificación [XPath](/es/docs/Web/XPath). Un eje representa una relación con el nodo actual y se utiliza para ubicar nodos relativos a ese nodo en el árbol.

Para obtener más información sobre el uso de expresiones XPath, consulte la sección [Lecturas adicionales](/es/docs/Web/XSLT/Transforming_XML_with_XSLT#for_further_reading) al final de [Transformación de XML con XSLT](/es/docs/Web/XSLT/Transforming_XML_with_XSLT). Consulte también la sección ['ejes' (axes) en la especificación xpath] (https://www.w3.org/TR/xpath-30/#axes).

- `ancestor`
  - : Indica todos los ancestros del nodo actual comenzando con el nodo principal y viajando hasta el nodo raíz.
- `ancestor-or-self`
  - : Indica el nodo actual y todos sus ancestros, incluido el nodo raíz.
- `attribute`
  - : Indica los atributos del nodo actual. Sólo los elementos tienen atributos. Este eje se puede abreviar con el signo de arroba (`@`).
- `child`
  - : Indica los hijos del nodo actual. Si una expresión XPath no especifica un eje, esto se entiende por defecto. Dado que solo el nodo raíz o los nodos de elementos tienen hijos, cualquier otro uso no seleccionará nada.
- `descendant`
  - : Indica todos los hijos del nodo actual, y todos sus hijos, y así sucesivamente. Los nodos de atributo y espacio de nombres **no** están incluidos: el `parent` de un nodo `attribute` es un nodo de elemento, pero los nodos `attribute` no son los hijos de sus padres.
- `descendant-or-self`
  - : Indica el nodo actual y todos sus descendientes. Los nodos de atributo y espacio de nombres **no** están incluidos: el `parent` de un nodo `attribute` es un nodo de elemento, pero los nodos `attribute` no son los hijos de sus padres.
- `following`
  - : Indica todos los nodos que aparecen después del nodo actual, excepto los nodos `descendant`, `attribute` y `namespace`.
- `following-sibling`
  - : Indica todos los nodos que tienen el mismo padre que el nodo actual y aparecen después del nodo actual en el documento de origen.
- `namespace` _(no soportado)_
  - : Indica todos los nodos que están en el ámbito del nodo actual. En este caso, el nodo actual debe ser un nodo de elemento.
- `parent`
  - : Indica el nodo único que es el padre del nodo actual. Se puede abreviar como dos puntos (`..`).
- `preceding`
  - : Indica todos los nodos que preceden al nodo actual en el documento, excepto los nodos `ancestor`, `attribute` y `namespace`.
- `preceding-sibling`
  - : Indica todos los nodos que tienen el mismo padre que el nodo actual y aparecen antes del nodo actual en el documento de origen.
- `self`
  - : Indica el propio nodo actual. Se puede abreviar como un solo punto (`.`).
