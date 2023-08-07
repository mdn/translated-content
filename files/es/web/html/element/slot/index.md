---
title: <slot>
slug: Web/HTML/Element/slot
---

{{HTMLSidebar}}

**El elemento HTML `<slot>`** —parte de la suite tecnologica [Web Components](/es/docs/Web/Web_Components) — es un placeholder en un componente que tu puedes llenar con tu propio marcado, que te permite crear árboles DOM por separado y presentarlos juntos.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/es/docs/Web/HTML/Content_categories"
          >Categorias de contenido</a
        >
      </th>
      <td>
        <a href="/es/docs/Web/HTML/Content_categories#Flow_content"
          >Contenido de flujo</a
        >,
        <a href="/es/docs/Web/Guide/HTML/Content_categories#Phrasing_content"
          >contenido de fraseo</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Contenido permitido</th>
      <td>
        <a href="/es/docs/HTML/Content_categories#Transparent_content_model"
          >Transparente</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Eventos</th>
      <td>[`slotchange`](/es/docs/Web/Reference/Events/slotchange)</td>
    </tr>
    <tr>
      <th scope="row">Omisión de etiqueta</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Parentes permitidos</th>
      <td>
        Cualquier elemento que acepte
        <a href="/es/docs/HTML/Content_categories#Phrasing_content"
          >contenido de fraseo</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Rol ARIA implícito</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >No corresponding role</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Roles ARIA Permitidos</th>
      <td>No se permite <code>role</code></td>
    </tr>
    <tr>
      <th scope="row">Interfaz DOM</th>
      <td>{{domxref("HTMLSlotElement")}}</td>
    </tr>
  </tbody>
</table>

## Atributos

Este elemento incluye los [atributos globales](/es/docs/Web/HTML/Global_attributes).

- `name`

  - : El nombre del slot.

    Un **slot nombrado** es un elemento `<slot>` con el atributo `name`.

## Ejemplos

```html
<template id="element-details-template">
  <style>
    details {
      font-family: "Open Sans Light", Helvetica, Arial;
    }
    .name {
      font-weight: bold;
      color: #217ac0;
      font-size: 120%;
    }
    h4 {
      margin: 10px 0 -8px 0;
    }
    h4 span {
      background: #217ac0;
      padding: 2px 6px 2px 6px;
    }
    h4 span {
      border: 1px solid #cee9f9;
      border-radius: 4px;
    }
    h4 span {
      color: white;
    }
    .attributes {
      margin-left: 22px;
      font-size: 90%;
    }
    .attributes p {
      margin-left: 16px;
      font-style: italic;
    }
  </style>
  <details>
    <summary>
      <span>
        <code class="name"
          >&lt;<slot name="element-name">NEED NAME</slot>&gt;</code
        >
        <i class="desc"><slot name="description">NEED DESCRIPTION</slot></i>
      </span>
    </summary>
    <div class="attributes">
      <h4><span>Attributes</span></h4>
      <slot name="attributes"><p>None</p></slot>
    </div>
  </details>
  <hr />
</template>
```

> **Nota:** Puedes ver este ejemplo en accion en [element-details](https://github.com/mdn/web-components-examples/tree/master/element-details) (velo [running live](https://mdn.github.io/web-components-examples/element-details/)). Además, puedes encontrar una explicación en [Using templates and slots](/es/docs/Web/Web_Components/Using_templates_and_slots).

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
