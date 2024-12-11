---
title: range
slug: Web/API/Range
---

{{ APIRef("DOM") }}

### Introducción

El objeto `Range` representa un fragmento de un documento que puede contener nodos y partes de nodos de texto en un documento dado.

Un rango puede ser creado usando el método [`createRange`](/es/docs/Web/API/Document/createRange) del objeto [`document`](/es/docs/Web/API/Document). Los objetos rango pueden ser recuperados usando el método [`getRangeAt`](/es/docs/Web/API/Selection/getRangeAt) del objeto [`Selection`](/es/docs/Web/API/Selection).

### Propiedades

- [collapsed](/es/docs/Web/API/Range/collapsed)
  - : Devuelve un valor booleano indicando si los puntos de inicio y fin están en la misma posición.
- [commonAncestorContainer](/es/docs/Web/API/Range/commonAncestorContainer)
  - : Devuelve el nodo más profundo que contiene los nodos **startContainer** y **endContainer**.
- [endContainer](/es/docs/DOM/range.endContainer)
  - : Devuelve el nodo dentro del cual termina el rango.
- [endOffset](/es/docs/DOM/range.endOffset)
  - : Devuelve un número representando donde termina el `Range` en el `endContainer`.
- [startContainer](/es/docs/DOM/range.startContainer)
  - : Devuelve el nodo dentro del cual comienza el rango.
- [startOffset](/es/docs/DOM/range.startOffset)
  - : Devuelve un número representando donde empieza el `Range` en el `endContainer`.

### Métodos

#### Métodos de ubicación

Estos métodos definen el punto de inicio y fin de un rango.

- [setStart](/es/docs/DOM/range.setStart)
  - : Define la posición inicial de un rango.
- [setEnd](/es/docs/DOM/range.setEnd)
  - : Define la posición final de un rango.
- [setStartBefore](/es/docs/DOM/range.setStartBefore)
  - : Define la posición inicial de un rango relativa a otro nodo.
- [setStartAfter](/es/docs/DOM/range.setStartAfter)
  - : Define la posición inicial de un rango relativa a otro nodo.
- [setEndBefore](/es/docs/DOM/range.setEndBefore)
  - : Define la posición final de un rango relativa a otro nodo.
- [setEndAfter](/es/docs/DOM/range.setEndAfter)
  - : Define la posición final de un rango relativa a otro nodo.
- [selectNode](/es/docs/DOM/range.selectNode)
  - : Define el rango a contener el nodo y sus contenidos.
- [selectNodeContents](/es/docs/DOM/range.selectNodeContents)
  - : Define el rango a contener los contenidos de un nodo.
- [collapse](/es/docs/DOM/range.collapse)
  - : Pliega el Rango a uno de sus puntos límite.

#### Editando métodos

Estos métodos recuperan nodos de un rango y modifican los contenidos de un rango.

- [cloneContents](/es/docs/DOM/range.cloneContents)
  - : Devuelve un fragmento de documento copiando los nodos de un rango.
- [deleteContents](/es/docs/DOM/range.deleteContents)
  - : Elimina del documento los contenidos de un rango.
- [extractContents](/es/docs/DOM/range.extractContents)
  - : Mueve los contenidos de un rango del árbol de documento a un fragmento del documento.
- [insertNode](/es/docs/DOM/range.insertNode)
  - : Inserta un nodo al comienzo de un rango.
- [surroundContents](/es/docs/DOM/range.surroundContents)
  - : Mueve el contenido de un rango a un nodo nuevo.

#### Otros métodos

- [compareBoundaryPoints](/es/docs/DOM/range.compareBoundaryPoints)
  - : Compara los puntos límite de dos rangos.
- [cloneRange](/es/docs/DOM/range.cloneRange)
  - : Devuelve un objeto rango con puntos límites idénticos al rango clonado.
- [detach](/es/docs/DOM/range.detach)
  - : Libera el Rango desde el uso para mejorar el rendimiento.
- [toString](/es/docs/DOM/range.toString)
  - : Devuelve el texto del rango.

#### Métodos de Gecko

Esta sección describe métodos de `Range` que son particulares a Mozilla y no son parte de las especificaciones DOM W3C.

- [compareNode](/es/docs/DOM/range.compareNode) {{deprecated_inline}}
  - : Devuelve una constante representando si el nodo está antes, después, dentro o alrededor del rango.
- [comparePoint](/es/docs/DOM/range.comparePoint)
  - : Devuelve -1, 0, or 1 indicando si el punto ocurre antes, dentro o después del rango.
- [createContextualFragment](/es/docs/DOM/range.createContextualFragment)
  - : Devuelve un fragmenteo de documento creado de un texto de código.
- [intersectsNode](/es/docs/DOM/range.intersectsNode) {{deprecated_inline}}
  - : Devuelve un valor boleano verdadero si el nodo dado intersecta el rango.
- [isPointInRange](/es/docs/DOM/range.isPointInRange)
  - : Devuelve un valor boleano verdadero indicando si el punto dado está en el rango.
