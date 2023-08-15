---
title: "<q>: El elemento de cita en línea"
slug: Web/HTML/Element/q
---

{{HTMLSidebar}}

El **elemento HTML `<q>`** indica que el texto adjunto es una cita corta en línea. La mayoría de los navegadores modernos implementan esto rodeando el texto entre comillas. Este elemento está destinado a citas breves que no requieren saltos de párrafo; para citas de bloque independiente, utiliza el elemento {{HTMLElement("blockquote")}}.

{{ EmbedInteractiveExample("pages/tabbed/q.html", "tabbed-shorter") }}

La fuente de este ejemplo interactivo se almacena en un repositorio de GitHub. Si deseas contribuir al proyecto de ejemplos interactivos, clona <https://github.com/mdn/interactive-examples> y envíanos una solicitud de extracción.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/es/docs/Web/HTML/Content_categories"
          >Categorías de contenido</a
        >
      </th>
      <td>
        <a href="/es/docs/Web/HTML/Content_categories#Flow_content"
          >Flujo de contenido</a
        >,
        <a href="/es/docs/Web/HTML/Content_categories#Phrasing_content"
          >redacción de contenido</a
        >, contenido palpable.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenido permitido</th>
      <td>
        <a href="/es/docs/Web/HTML/Content_categories#Phrasing_content"
          >Redacción de contenido</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omisión de etiqueta</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Padres autorizados</th>
      <td>
        Cualquier elemento que acepte
        <a href="/es/docs/Web/HTML/Content_categories#Phrasing_content"
          >redacción de contenido</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rol de ARIA implícito</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >Rol no correspondiente</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Roles ARIA permitidos</th>
      <td>Algunos</td>
    </tr>
    <tr>
      <th scope="row">Interfaz DOM</th>
      <td>{{DOMxRef("HTMLQuoteElement")}}</td>
    </tr>
  </tbody>
</table>

> **Nota:** La mayoría de los navegadores modernos automáticamente agregarán comillas alrededor del texto dentro de un elemento `<q>`. Es posible que se necesite una regla de estilo para agregar comillas en navegadores antiguos.

## Atributos

Este elemento incluye los [atributos globales](/es/docs/Web/HTML/Global_attributes).

- `cite`
  - : El valor de este atributo es una URL que designa un documento o mensaje fuente para la información citada. Este atributo está destinado a señalar información que explica el contexto o la referencia de la cita.

## Ejemplo

```html
<p>
  Conforme al sitio web de Mozilla,
  <q cite="https://www.mozilla.org/en-US/about/history/details/"
    >Firefox 1.0 fue lanzado en 2004 y se convirtió en un gran éxito.</q
  >
</p>
```

{{EmbedLiveSample('Ejemplo')}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ve también

- El elemento {{HTMLElement("blockquote")}} para citas de bloque independiente.
- El elemento {{HTMLElement("cite")}} para citas de fuentes.
