---
title: Selection
slug: Web/API/Selection
---

{{ ApiRef("DOM") }}

### Introducción

Selección es la clase de objeto devuelto por [`window.getSelection()`](/es/docs/Web/API/Window/getSelection) y otros métodos.

Un objeto de selección representa los [rangos](/es/docs/Web/API/Range) que el usuario ha seleccionado. Suele llevar un sólo rango, accesado como sigue:

```
range = sel.getRangeAt(0);
```

Llamar al método [`toString()`](/es/docs/Web/API/Selection/toString) devuelve el texto contenido en la selección, ej:

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
  - : Un rango es una parte contigua de un documento. Un rango puede contener un nodo entero así como porciones de nodos, por ejemplo una parte de un nodo de texto. Normalmente un usuario seleccionará únicamente un solo rango a la vez, pero también le es posible seleccionar múltiples rangos (por ejemplo, utilizando la tecla control*Ctrl* ). Un rango puede ser recuperado de una selección como un objeto de [rango](/es/docs/Web/API/Range). Los objetos de rango también pueden ser creados vía el DOM y programadamente adheridos o removidos de una selección.

### Propiedades

- [anchorNode](/es/docs/Web/API/Selection/anchorNode)
  - : Devuelve el nodo en el cual empieza la selección.
- [anchorOffset](/es/docs/Web/API/Selection/anchorOffset)
  - : Devuelve el número de caracteres en que el ancla de la selección es colocada dentro de `anchorNode.`
- [focusNode](/es/docs/Web/API/Selection/focusNode)
  - : Devuelve el nodo en el cual acaba la selección.
- [focusOffset](/es/docs/Web/API/Selection/focusOffset)
  - : Devuelve el número de caracteres en que el foco de la selección es colocado dentro de `focusNode.`
- [isCollapsed](/es/docs/Web/API/Selection/isCollapsed)
  - : Devuelve un valor boleano verdadero si los puntos de inicio y fin de la selección están en la misma posición.
- [rangeCount](/es/docs/Web/API/Selection/rangeCount)
  - : Devuelve el número de los rangos que hay en la selección.

### Métodos

- [getRangeAt](/es/docs/Web/API/Selection/getRangeAt)
  - : Devuelve un objeto de rango representando uno de los rangos seleccionados.
- [collapse](/es/docs/Web/API/Selection/collapse)
  - : Pliega la selección a un simple punto.
- [extend](/es/docs/Web/API/Selection/extend)
  - : Traslada el foco de la selección a un punto especificado.
- [collapseToStart](/es/docs/Web/API/Selection/collapseToStart)
  - : Traslada el foco de la selección al mismo punto que el ancla.
- [collapseToEnd](/es/docs/Web/API/Selection/collapseToEnd)
  - : Traslada el ancla hasta el mismo punto del foco. El foco no se mueve.
- [selectAllChildren](/es/docs/Web/API/Selection/selectAllChildren)
  - : Añadirá todos los "hijos" del nodo especificado a la selección.
- [addRange](/es/docs/Web/API/Selection/addRange)
  - : Añade un objeto de rango a la selección.
- [removeRange](/es/docs/Web/API/Selection/removeRange)
  - : Quita un rango de la selección.
- [removeAllRanges](/es/docs/Web/API/Selection/removeAllRanges)
  - : Quita todos los rangos de la selección.
- [deleteFromDocument](/es/docs/Web/API/Selection/deleteFromDocument)
  - : Elimina del documento el contenido de la selección.
- [selectionLanguageChange](/es/docs/DOM/Selection/selectionLanguageChange)
  - : NO IMPLEMENTADA, Cambia la direccion de la seleccion de Izquierda a Derecha a Derecha a Izquierda
- [toString](/es/docs/Web/API/Selection/toString)
  - : Devuelve una cadena de caracteres (texto), la cual es representada por el objeto de selección, es decir, el texto seleccionado.
- [containsNode](/es/docs/Web/API/Selection/containsNode)
  - : Indica si tal nodo es parte de la selección.

### Ver también

[window.getSelection](/es/docs/Web/API/Window/getSelection), [Rango](/es/docs/Web/API/Range)

### Enlaces externos

- [IDL definition in Mozilla cross-reference](http://lxr.mozilla.org/mozilla/source/content/base/public/nsISelection.idl)
