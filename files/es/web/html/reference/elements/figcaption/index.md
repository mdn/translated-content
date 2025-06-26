---
title: <figcaption>
slug: Web/HTML/Reference/Elements/figcaption
original_slug: Web/HTML/Element/figcaption
---

{{HTMLSidebar}}

El elemento **HTML `<figcaption>`** representa un subtítulo o leyenda asociado al contenido del elemento padre {{HTMLElement("figure")}}, pudiendo ser colocado como primer o último hijo. Es importante destacar que el elemento **`<figcaption>`** es opcional.

{{InteractiveExample("HTML Demo: &lt;figcaption&gt;", "tabbed-shorter")}}

```html interactive-example
<figure>
  <img
    src="/shared-assets/images/examples/elephant.jpg"
    alt="Elephant at sunset" />
  <figcaption>An elephant at sunset</figcaption>
</figure>
```

```css interactive-example
figure {
  border: thin #c0c0c0 solid;
  display: flex;
  flex-flow: column;
  padding: 5px;
  max-width: 220px;
  margin: auto;
}

img {
  max-width: 220px;
  max-height: 150px;
}

figcaption {
  background-color: #222;
  color: #fff;
  font: italic smaller sans-serif;
  padding: 3px;
  text-align: center;
}
```

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a
          href="/es/docs/HTML/Content_categories"
          title="HTML/Content_categories"
          >Content categories</a
        >
      </th>
      <td>Ninguna</td>
    </tr>
    <tr>
      <th scope="row">Contenido Permitido</th>
      <td>
        <a
          href="/es/docs/HTML/Content_categories#Flow_content"
          title="HTML/Content categories#Flow content"
          >Flow content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omisión de etiqueta</th>
      <td>Ninguna, tanto la etiqueta inicial como la final son obligatorias.</td>
    </tr>
    <tr>
      <th scope="row">Elementos padre permitidos</th>
      <td>
        En un elemento {{HTMLElement("figure")}} el elemento
        <code>&#x3C;figcaption></code> debe ser el primero o el último hijo.
      </td>
    </tr>
    <tr>
      <th scope="row">Interfaz DOM</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
    <tr>
      <th scope="row">Contento en el que puede ser usado</th>
      <td>
        Como the first o last child de un <strong>&#x3C;figure></strong> element
      </td>
    </tr>
  </tbody>
</table>

## Atributos

Este elemento sólo incluye los [global attributes](/es/docs/Web/HTML/Reference/Global_attributes).

## Ejemplos

Para ejemplos con `<figcaption>`, por favor ver la página {{HTMLElement("figure")}}.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver además

- El elemento {{HTMLElement("figure")}}.
