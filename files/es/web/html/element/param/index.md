---
title: "<param>: El elemento parámetro de objeto"
slug: Web/HTML/Element/param
l10n:
  sourceCommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{HTMLSidebar}}{{Deprecated_Header}}

El elemento [HTML](/es/docs/Web/HTML) **`<param>`** define los parámetros para un elemento {{HTMLElement("object")}}.

## Atributos

Este elemento incluye los [atributos globales](/es/docs/Web/HTML/Global_attributes).

- `name` {{deprecated_inline}}
  - : Nombre del parámetro.
- `value` {{deprecated_inline}}
  - : Especifica el valor del parámetro.
- `type` {{deprecated_inline}}
  - : Se usa solo si `valuetype` es `ref`. Especifica el tipo MIME de los valores encontrados en la URI especificada por el valor.
- `valuetype` {{deprecated_inline}}

  - : Especifica el tipo del atributo `value`. Los posibles valores son:

    - `data`: Valor por defecto. El valor se pasa a la implementación del objeto como una cadena.
    - `ref`: El valor es una URI hacia un recurso donde se almacenan los valores en tiempo de ejecución.
    - `object`: Un ID de otro {{HTMLElement("object")}} que se encuentra en el mismo documento.

## Resumen técnico

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/es/docs/Web/HTML/Content_categories">Categorías de contenido</a>
      </th>
      <td>Ninguno</td>
    </tr>
    <tr>
      <th scope="row">Contenido permitido</th>
      <td>Ninguno; es un {{Glossary("void element", "elemento vacío")}}.</td>
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
        <a href="/es/docs/Web/HTML/Content_categories#flow_content"
          >contenido de flujo</a
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
      <th scope="row">Interfaz DOM</th>
      <td>{{domxref("HTMLParamElement")}}</td>
    </tr>
  </tbody>
</table>

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{HTMLElement("object")}}
