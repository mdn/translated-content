---
title: "<param>: The Object Parameter element"
slug: Web/HTML/Element/param
page-type: html-element
status:
  - deprecated
browser-compat: html.elements.param
---

{{HTMLSidebar}}{{Deprecated_Header}}

El elemento [HTML](/es/web/html/index.md) **`<param>`** define los parámetros para un elemento {{HTMLElement("object")}}.

## Atributos

Este elemento incluye los [atributos globales](/es/web/html/global_attributes/index.md).

- `name` {{deprecated_inline}}
  - : Nombre del parámetro.
- `value` {{deprecated_inline}}
  - : Especifica el valor del parámetro.
- `type` {{deprecated_inline}}
  - : Se usa solo si `valuetype` es `ref`. Especifica el tipo MIME de los valores encontrados en la URI especificada por valor.
- `valuetype` {{deprecated_inline}}

  - : Especifica el tipo del atributo `value`. Los posibles valores son:

    - `data`: Valor por defecto. El valor se pasa a la implementación del objeto como un string.
    - `ref`: el valor es una URI hacia un recurso donde se almacenan los valores en tiempo de ejecución.
    - `object`: Un ID de otro {{HTMLElement("object")}} que se encuentra en el mmismo documento.

## Resumen

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/es/web/html/content_categories/index.md">Categorías de contenido</a>
      </th>
      <td>Ninguno</td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>Ninguno; es un {{Glossary("void element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Omisión de etiquetas</th>
      <td>
        Como es un elemento vacío, la etiqueta de apertura debe estar presente y la etiqueta de cierre no.
      </td>
    </tr>
    <tr>
      <th scope="row">Elementos padre permitidos</th>
      <td>
        Un {{HTMLElement("object")}} antes de cualquier
        <a href="/es/web/html/content_categories/index.md"
          >Categorías de contenido</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Roles ARIA implícitos</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >No corresponde</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Roles ARIA permitidos</th>
      <td>Ningún <code>rol</code> permitido</td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLParamElement")}}</td>
    </tr>
  </tbody>
</table>

## Especificaciones

{{Specifications}}

## Compatibilidad

{{Compat}}

## Ver también

- {{HTMLElement("object")}}
