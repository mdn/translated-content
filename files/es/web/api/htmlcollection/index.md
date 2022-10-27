---
title: HTMLCollection
slug: Web/API/HTMLCollection
tags:
  - API
  - DOM
  - HTML DOM
  - HTMLCollection
  - Interfaz
  - Lista de elementos
  - Referencia
  - Referência DOM
translation_of: Web/API/HTMLCollection
---
{{APIRef("HTML DOM")}}

La interfaz **`HTMLCollection`** representa una colección genérica (objeto tipo array similar a arguments) de elementos (en orden de documento) y ofrece métodos y propiedades para seleccionarlos de la lista.

> **Nota:**Esta interfaz se llama `HTMLCollection` por razones históricas (antes del DOM moderno, las colecciones que implementaban esta interfaz sólo podían tener elementos HTML como sus ítems).

Una `HTMLCollection` en el DOM de HTML está viva; se actualiza automáticamente cuando el documento subyacente cambia.

## Propiedades

- {{domxref("HTMLCollection.length")}} {{readonlyInline}}
  - : Devuelve el numero de ítems en la colección.

## Métodos

- {{domxref("HTMLCollection.item()")}}
  - : Devuelve el nodo específicado en el índice en base cero dentro de la lista. Devuelve `null` si el índice está fuera de rango.
- {{domxref("HTMLCollection.namedItem()")}}
  - : Devuelve el nodo específico cuyo ID o, en último caso, cuyo nombre coincide con la cadena especificada por `name`. La coincidencia por nombre sólo se hace como último recurso, sólo en HTML, y sólo si el elemento referenciado soporta el atributo `name`. Devuelve `null` si no existe ningún nodo con el nombre indicado.

## Uso en JavaScript

`HTMLCollection` también expone a sus miembros directamente como propiedades tanto por name como por index. Los IDS de HTML deben contener `:` y `.` como caracteres válidos, los cuales necesitan del uso de corchetes para acceder a sus propiedades. Actualmente las HTMLCollections no reconocen los IDS puramente numéricos, lo que causaría conflicto con el acceso al estilo array, aunque HTML5 sí permite estos.

Por ejemplo, suponiendo que hay un elemento `<form>` en el documento y que su `id` es `"myForm"`:

```js
var elem1, elem2;

// document.forms es un HTMLCollection

elem1 = document.forms[0];
elem2 = document.forms.item(0);

alert(elem1 === elem2); // muestra: "true"

elem1 = document.forms.myForm;
elem2 = document.forms.namedItem("myForm");

alert(elem1 === elem2); // muestra: "true"

elem1 = document.forms["named.item.with.periods"];
```

## Especificación

| Especificación                                                                                   | Estado                           | Comentario          |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------- |
| {{SpecName('DOM WHATWG', '#htmlcollection', 'HTMLCollection')}}             | {{ Spec2('DOM WHATWG') }} |                     |
| {{SpecName('DOM2 HTML', 'html.html#ID-75708506', 'HTMLCollection')}}     | {{ Spec2('DOM2 HTML') }} |                     |
| {{SpecName('DOM1', 'level-one-html.html#ID-75708506', 'HTMLCollection')}} | {{ Spec2('DOM1') }}         | Definición inicial. |

## Compatibilidad con navegadores

{{Compat("api.HTMLCollection")}}

## Vea también

- {{domxref("NodeList")}}
- {{domxref("HTMLFormControlsCollection")}}, {{domxref("HTMLOptionsCollection")}}
