---
title: "<q>: El elemento de cita en línea"
slug: Web/HTML/Reference/Elements/q
original_slug: Web/HTML/Element/q
---

{{HTMLSidebar}}

El **elemento HTML `<q>`** indica que el texto adjunto es una cita corta en línea. La mayoría de los navegadores modernos implementan esto rodeando el texto entre comillas. Este elemento está destinado a citas breves que no requieren saltos de párrafo; para citas de bloque independiente, utiliza el elemento {{HTMLElement("blockquote")}}.

{{InteractiveExample("HTML Demo: &lt;q&gt;", "tabbed-shorter")}}

```html interactive-example
<p>
  When Dave asks HAL to open the pod bay door, HAL answers:
  <q
    cite="https://www.imdb.com/title/tt0062622/quotes/?item=qt0396921&ref_=ext_shr_lnk">
    I'm sorry, Dave. I'm afraid I can't do that.
  </q>
</p>
```

```css interactive-example
q {
  font-style: italic;
}
```

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
      <td>Ninguna, tanto la etiqueta inicial como la final son obligatorias.</td>
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

> [!NOTE]
> La mayoría de los navegadores modernos automáticamente agregarán comillas alrededor del texto dentro de un elemento `<q>`. Es posible que se necesite una regla de estilo para agregar comillas en navegadores antiguos.

## Atributos

Este elemento incluye los [atributos globales](/es/docs/Web/HTML/Reference/Global_attributes).

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
