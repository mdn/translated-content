---
title: <template>
slug: Web/HTML/Element/template
---

El **elemento** **HTML `<template>`** es un mecanismo para mantener el contenido {{Glossary("HTML")}} del lado del cliente que no se renderiza cuando se carga una página, pero que posteriormente puede ser instanciado durante el tiempo de ejecución empleando JavaScript.

Piensa en la plantilla como un fragmento de contenido que está siendo almacenado para un uso posterior en el documento. El analizador procesa el contenido del elemento **`<template>`** durante la carga de la página, pero sólo lo hace para asegurar que esos contenidos son válidos; sin embargo, estos contenidos del elemento no se renderizan.

| [Categorías de Contenido](/es/docs/Web/HTML/Content_categories) | [Metadata content](/es/docs/Web/HTML/Content_categories#Metadata_content), [flow content](/es/docs/Web/HTML/Content_categories#Flow_content), [phrasing content](/es/docs/Web/Guide/HTML/Content_categories#Phrasing_content), script-supporting element                                                                                                                                                                                                      |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Contenido permitido                                             | Sin restricciones                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Omisión de etiquetas                                            | {{no_tag_omission}}                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Padres permitidos                                               | Cualquier elemento que acepte [metadata content](/es/docs/Web/Guide/HTML/Content_categories#Metadata_content), [phrasing content](/es/docs/Web/Guide/HTML/Content_categories#Phrasing_content), o [script-supporting elements](/es/docs/Web/Guide/HTML/Content_categories#Script-supporting_elements). También se permiten como hijos de un elemento {{HTMLElement("colgroup")}} que no tenga un atributo [`span`](/es/docs/Web/HTML/Element/colgroup#span) . |
| Implicit ARIA role                                              | [No corresponding role](https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role)                                                                                                                                                                                                                                                                                                                                                                           |
| Permitted ARIA roles                                            | No `role` permitted                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| DOM interface                                                   | {{domxref("HTMLTemplateElement")}}                                                                                                                                                                                                                                                                                                                                                                                                                            |

## Atributos

Este elemento sólo incluye [atributos globales](/es/docs/Web/HTML/Atributos_Globales).

Sin embargo, {{domxref("HTMLTemplateElement")}} tiene una propiedad {{domxref("HTMLTemplateElement.content", "content")}}, que es solo-lectura cuyo {{domxref("DocumentFragment")}} contiene el subárbol DOM que representa a la plantilla.

## Ejemplo

Primero empezamos con la parte HTML del ejemplo.

```html
<table id="producttable">
  <thead>
    <tr>
      <td>UPC_Code</td>
      <td>Product_Name</td>
    </tr>
  </thead>
  <tbody>
    <!-- datos opcionales pueden incluirse aquí opcionalmente -->
  </tbody>
</table>

<template id="productrow">
  <tr>
    <td class="record"></td>
    <td></td>
  </tr>
</template>
```

Inicialmente tenemos una tabla en la cual insertaremos más tarde contenido usando código JavaScript. Más abajo viene el template, el cual describe la estructura de un fragmento HTML representando la fila de una tabla.

Ahora que la tabla ha sido creada y el template definido, usamos JavaScript para insertar filas en la tabla, con cada fila siendo construida usando el template como su base.

```js
// Comprobar si el navegador soporta el elemento HTML template element chequeando
// si tiene el atributo 'content'
if ("content" in document.createElement("template")) {
  // Instanciar la tabla con el tbody existente
  // y la fila con el template
  var t = document.querySelector("#productrow"),
    td = t.content.querySelectorAll("td");
  td[0].textContent = "1235646565";
  td[1].textContent = "Stuff";

  // Clonar la nueva fila e insertarla en la tabla
  var tb = document.querySelector("tbody");
  var clone = document.importNode(t.content, true);
  tb.appendChild(clone);

  // Crear una nueva fila
  td[0].textContent = "0384928528";
  td[1].textContent = "Acme Kidney Beans";

  // Clonar la nueva fila e insertarla en la tabla
  var clone2 = document.importNode(t.content, true);
  tb.appendChild(clone2);
} else {
  // Buscar otra manera de añadir filas a la tabla porque el
  // elemento template no está soportado.
}
```

El resultado es la tabla HTML original HTML , con dos nuevas filas adjuntadas via JavaScript:

```css hidden
table {
  background: #000;
}
table td {
  background: #fff;
}
```

{{EmbedLiveSample("Examples", 500, 120)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- Web components: {{HTMLElement("slot")}} (e históríco: {{HTMLElement("shadow")}})
- [Usando templates y slots](/es/docs/Web/Web_Components/Using_templates_and_slots)
