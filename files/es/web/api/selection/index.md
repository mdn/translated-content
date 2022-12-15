---
title: Selection
slug: Web/API/Selection
---

{{ ApiRef("DOM") }}

### Introducción

Selección es la clase de objeto devuelto por [`window.getSelection()`](/es/DOM/window.getSelection) y otros métodos.

Un objeto de selección representa los [rangos](/es/DOM/range) que el usuario ha seleccionado. Suele llevar un sólo rango, accesado como sigue:

```
range = sel.getRangeAt(0);
```

Llamar al método [`toString()`](/es/DOM/Selection/toString) devuelve el texto contenido en la selección, ej:

```
selObj = window.getSelection();
window.alert(selObj.toString());
```

### Glosario

Otros términos claves usados en esta parte.

- anchor
  - : El ancla de una selección es el punto inicial de ésta. Cuando se hace una selección con el ratón, el ancla es el punto donde se presionó por primera vez el botón del ratón. Cuando el usuario mueve la selección utilizando el ratón o el teclado, el ancla no se mueve.
- focus
  - : El foco de una selección es el punto último de ésta. Cuando se hace la selección con el ratón, el foco es el punto donde se suelta el botón del ratón. Cuando el usuario mueve la selección utilizando el "mouse" o el teclado, el foco es el final de la selección que el usuario está moviendo.
- range
  - : Un rango es una parte contigua de un documento. Un rango puede contener un nodo entero así como porciones de nodos, por ejemplo una parte de un nodo de texto. Normalmente un usuario seleccionará únicamente un solo rango a la vez, pero también le es posible seleccionar múltiples rangos (por ejemplo, utilizando la tecla control*Ctrl* ). Un rango puede ser recuperado de una selección como un objeto de [rango](/es/DOM/range). Los objetos de rango también pueden ser creados vía el DOM y programadamente adheridos o removidos de una selección.

### Propiedades

- [anchorNode](/es/DOM/Selection/anchorNode)
  - : Devuelve el nodo en el cual empieza la selección.
- [anchorOffset](/es/DOM/Selection/anchorOffset)
  - : Devuelve el número de caracteres en que el ancla de la selección es colocada dentro de `anchorNode.`
- [focusNode](/es/DOM/Selection/focusNode)
  - : Devuelve el nodo en el cual acaba la selección.
- [focusOffset](/es/DOM/Selection/focusOffset)
  - : Devuelve el número de caracteres en que el foco de la selección es colocado dentro de `focusNode.`
- [isCollapsed](/es/DOM/Selection/isCollapsed)
  - : Devuelve un valor boleano verdadero si los puntos de inicio y fin de la selección están en la misma posición.
- [rangeCount](/es/DOM/Selection/rangeCount)
  - : Devuelve el número de los rangos que hay en la selección.

### Métodos

- [getRangeAt](/es/DOM/Selection/getRangeAt)
  - : Devuelve un objeto de rango representando uno de los rangos seleccionados.
- [collapse](/es/DOM/Selection/collapse)
  - : Pliega la selección a un simple punto.
- [extend](/es/DOM/Selection/extend)
  - : Traslada el foco de la selección a un punto especificado.
- [collapseToStart](/es/DOM/Selection/collapseToStart)
  - : Traslada el foco de la selección al mismo punto que el ancla.
- [collapseToEnd](/es/DOM/Selection/collapseToEnd)
  - : Traslada el ancla hasta el mismo punto del foco. El foco no se mueve.
- [selectAllChildren](/es/DOM/Selection/selectAllChildren)
  - : Añadirá todos los "hijos" del nodo especificado a la selección.
- [addRange](/es/DOM/Selection/addRange)
  - : Añade un objeto de rango a la selección.
- [removeRange](/es/DOM/Selection/removeRange)
  - : Quita un rango de la selección.
- [removeAllRanges](/es/DOM/Selection/removeAllRanges)
  - : Quita todos los rangos de la selección.
- [deleteFromDocument](/es/DOM/Selection/deleteFromDocument)
  - : Elimina del documento el contenido de la selección.
- [selectionLanguageChange](/es/DOM/Selection/selectionLanguageChange)
  - : NO IMPLEMENTADA, Cambia la direccion de la seleccion de Izquierda a Derecha a Derecha a Izquierda
- [toString](/es/DOM/Selection/toString)
  - : Devuelve una cadena de caracteres (texto), la cual es representada por el objeto de selección, es decir, el texto seleccionado.
- [containsNode](/es/DOM/Selection/containsNode)
  - : Indica si tal nodo es parte de la selección.

### Ver también

[window.getSelection](/es/DOM/window.getSelection), [Rango](/es/DOM/range)

### Enlaces externos

- [IDL definition in Mozilla cross-reference](http://lxr.mozilla.org/mozilla/source/content/base/public/nsISelection.idl)
