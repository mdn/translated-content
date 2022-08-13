---
title: selectAllChildren
slug: Web/API/Selection/selectAllChildren
tags:
  - páginas_a_traducir
translation_of: Web/API/Selection/selectAllChildren
---
{{ ApiRef("DOM") }}

### Resumen

Añadirá todos los "hijos" del nodo especificado a la selección. La selección previa se pierde.

### Sintaxis

    sel.selectAllChildren(
    parentNode)

### Parámetros

- _`parentNode`_
  - : Todos los "hijos" de
    _`parentNode`_
    serán seleccionados. El mismo
    _`parentNode`_
    no es parte de la selección.

### Ejemplos

    footer = document.getElementById("footer");
    window.getSelection().selectAllChildren(footer);
    /* Todo el contendio del pie de página ahora está seleccionado */

{{ languages( { "en": "en/DOM/Selection/selectAllChildren", "it": "it/DOM/Selection/selectAllChildren", "pl": "pl/DOM/Selection/selectAllChildren" } ) }}
