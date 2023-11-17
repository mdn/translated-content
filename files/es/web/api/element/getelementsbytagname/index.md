---
title: element.getElementsByTagName
slug: Web/API/Element/getElementsByTagName
---

{{ APIRef }}

## Resumen

Devuelve una lista de elementos que tienen un [tag name](/es/DOM/element.tagName) determinado. Se explora el árbol por debajo del elemento dado, excluyendo el propio elemento.

## Sintaxis

```js
elements = element.getElementsByTagName(tagName);
```

- `elements` es un `NodeList` del elemento encontrado en el orden en que aparece en el árbol.
- `element` es el elemento a partir del cual debe empezar la búsqueda. Recuerda que sólo se buscan los elementos descendentes del elemento dado, sin incluir el propio elemento.
- `tagName` es el nombre que se busca. La cadena especial `"*"` representa todos los elementos.

> **Nota:** En Firefox 2 (Gecko 1.8.1) y anteriores, este método no funcionaba correctamente si el árbol contenía algún elemento con etiqueta de nombre conteniendo espacios. (Ver [Error 206053 en Firefox](https://bugzil.la/206053) para más detalles).
>
> Es recomendable usar [DOM:document.getElementsByTagNameNS](/es/DOM/document.getElementsByTagNameNS) cuando se manejan documentos con "multi-namespace".

## Ejemplo

```js
// comprueba la alineación de las celdas en una tabla.
var table = document.getElementById("forecast-table");
var cells = table.getElementsByTagName("td");
for (var i = 0; i < cells.length; i++) {
  status = cells[i].getAttribute("status");
  if (status == "open") {
    // grab the data
  }
}
```

## Notas

`element.getElementsByTagName` es similar a [document.getElementsByTagName](/es/DOM/document.getElementsByTagName), excepto por que su búsqueda está restringida a los elementos que descienden del elemento especificado.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
