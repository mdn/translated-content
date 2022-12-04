---
title: range
slug: Web/API/Range
---

{{ APIRef("DOM") }}

### Introducción

El objeto `Range` representa un fragmento de un documento que puede contener nodos y partes de nodos de texto en un documento dado.

Un rango puede ser creado usando el método [`createRange`](/es/DOM/document.createRange) del objeto [`document`](/es/DOM/document). Los objetos rango pueden ser recuperados usando el método [`getRangeAt`](/es/DOM/Selection/getRangeAt) del objeto [`Selection`](/es/DOM/selection).

### Propiedades

- [collapsed](/es/DOM/range.collapsed)
  - : Devuelve un valor booleano indicando si los puntos de inicio y fin están en la misma posición.
- [commonAncestorContainer](/es/DOM/range.commonAncestorContainer)
  - : Devuelve el nodo más profundo que contiene los nodos **startContainer** y **endContainer**.
- [endContainer](/es/DOM/range.endContainer)
  - : Devuelve el nodo dentro del cual termina el rango.
- [endOffset](/es/DOM/range.endOffset)
  - : Devuelve un número representando donde termina el `Range` en el `endContainer`.
- [startContainer](/es/DOM/range.startContainer)
  - : Devuelve el nodo dentro del cual comienza el rango.
- [startOffset](/es/DOM/range.startOffset)
  - : Devuelve un número representando donde empieza el `Range` en el `endContainer`.

### Métodos

#### Métodos de ubicación

Estos métodos definen el punto de inicio y fin de un rango.

- [setStart](/es/DOM/range.setStart)
  - : Define la posición inicial de un rango.
- [setEnd](/es/DOM/range.setEnd)
  - : Define la posición final de un rango.
- [setStartBefore](/es/DOM/range.setStartBefore)
  - : Define la posición inicial de un rango relativa a otro nodo.
- [setStartAfter](/es/DOM/range.setStartAfter)
  - : Define la posición inicial de un rango relativa a otro nodo.
- [setEndBefore](/es/DOM/range.setEndBefore)
  - : Define la posición final de un rango relativa a otro nodo.
- [setEndAfter](/es/DOM/range.setEndAfter)
  - : Define la posición final de un rango relativa a otro nodo.
- [selectNode](/es/DOM/range.selectNode)
  - : Define el rango a contener el nodo y sus contenidos.
- [selectNodeContents](/es/DOM/range.selectNodeContents)
  - : Define el rango a contener los contenidos de un nodo.
- [collapse](/es/DOM/range.collapse)
  - : Pliega el Rango a uno de sus puntos límite.

#### Editando métodos

Estos métodos recuperan nodos de un rango y modifican los contenidos de un rango.

- [cloneContents](/es/DOM/range.cloneContents)
  - : Devuelve un fragmento de documento copiando los nodos de un rango.
- [deleteContents](/es/DOM/range.deleteContents)
  - : Elimina del documento los contenidos de un rango.
- [extractContents](/es/DOM/range.extractContents)
  - : Mueve los contenidos de un rango del árbol de documento a un fragmento del documento.
- [insertNode](/es/DOM/range.insertNode)
  - : Inserta un nodo al comienzo de un rango.
- [surroundContents](/es/DOM/range.surroundContents)
  - : Mueve el contenido de un rango a un nodo nuevo.

#### Otros métodos

- [compareBoundaryPoints](/es/DOM/range.compareBoundaryPoints)
  - : Compara los puntos límite de dos rangos.
- [cloneRange](/es/DOM/range.cloneRange)
  - : Devuelve un objeto rango con puntos límites idénticos al rango clonado.
- [detach](/es/DOM/range.detach)
  - : Libera el Rango desde el uso para mejorar el rendimiento.
- [toString](/es/DOM/range.toString)
  - : Devuelve el texto del rango.

#### Métodos de Gecko

Esta sección describe métodos de `Range` que son particulares a Mozilla y no son parte de las especificaciones DOM W3C.

- [compareNode](/es/DOM/range.compareNode) {{deprecated_inline}}
  - : Devuelve una constante representando si el nodo está antes, después, dentro o alrededor del rango.
- [comparePoint](/es/DOM/range.comparePoint)
  - : Devuelve -1, 0, or 1 indicando si el punto ocurre antes, dentro o después del rango.
- [createContextualFragment](/es/DOM/range.createContextualFragment)
  - : Devuelve un fragmenteo de documento creado de un texto de código.
- [intersectsNode](/es/DOM/range.intersectsNode) {{deprecated_inline}}
  - : Devuelve un valor boleano verdadero si el nodo dado intersecta el rango.
- [isPointInRange](/es/DOM/range.isPointInRange)
  - : Devuelve un valor boleano verdadero indicando si el punto dado está en el rango.
