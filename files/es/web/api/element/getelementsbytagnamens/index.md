---
title: Element.getElementsByTagNameNS()
slug: Web/API/Element/getElementsByTagNameNS
---

{{APIRef}}

El método `Element.getElementsByTagNameNS()` devuelve una {{domxref("HTMLCollection")}} viva de elementos con el nombre de etiqueta dado perteneciente al espacio de nombres dado. Es similar a {{Domxref("Document.getElementsByTagNameNS")}}, con la excepción de que su búsqueda está limitada a los descendientes del elemento especificado.

## Sintaxis

```js
elementos = elemento.getElementsByTagNameNS(espacioNombreURI, nombreLocal);
```

- `elementos` es una {{domxref("HTMLCollection")}} viva de elementos encontrados en el orden en el que aparecen en el árbol.
- `elemento` es el elemento desde el cual la búsqueda debería comenzar. Nótese que sólo los descendientes de este elemento están incluídos en la búsqueda, no el nodo en sí.
- `espacioNombreURI` es el URI del espacio de nombres de los elementos a buscar (vea {{domxref("Node.namespaceURI")}}). Por ejemplo, si usted necesita buscar elementos XHTML, use el URI de espacio de nombres de XHTML, `https://www.w3.org/1999/xhtml`.
- nombreLocal puede ser el nombre local de los elementos a buscar o el valor especial `"*"`, que encuentra todos los elementos (vea {{domxref("Node.localName")}}).

## Ejemplo

```js
// verifica la alineación en un número de celdas en una tabla en un documento XHTML.
var table = document.getElementById("forecast-table");
var cells = table.getElementsByTagNameNS("https://www.w3.org/1999/xhtml", "td");

for (var i = 0; i < cells.length; i++) {
  var axis = cells[i].getAttribute("axis");
  if (axis == "year") {
    // obtiene los datos
  }
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
