---
title: <content>
slug: Web/HTML/Element/content
original_slug: Web/HTML/Elemento/content
---

{{Deprecated_header}}

El elemento [HTML](/es/docs/Web/HTML) `<content>` es usado dentro de un [Shadow DOM](/es/docs/Web/Web_Components/Using_shadow_DOM) como un {{glossary("insertion point")}} . No está pensado para ser usado en HTML ordinario . Es usado con [Web Components](/es/docs/Web/Web_Components).

> **Nota:** Aunque está presente en un draft inicial de las especificaciones e implementado en varios exploradores , este elemento ha sido removido en versiones posteriores a la especificación .

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a
          href="/es/docs/Web/Guide/HTML/Content_categories"
          title="HTML/Content_categories"
          >Categorías de contenido</a
        >
      </th>
      <td>Modelo de contenido transparente</td>
    </tr>
    <tr>
      <th scope="row">Contenido permitido</th>
      <td>Contenido dinámico</td>
    </tr>
    <tr>
      <th scope="row">Omisión de etiquetas</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Elementos padre permitidos</th>
      <td>Any element that accepts flow content.</td>
    </tr>
    <tr>
      <th scope="row">Interfase DOM</th>
      <td>{{domxref("HTMLContentElement")}}</td>
    </tr>
  </tbody>
</table>

## Atributos

Este elemento incluye los [atributos globales](/es/docs/Web/HTML/Global_attributes).

- select
  - : Una lista de selectores separada por comas . Estos tienen la misma sintaxis que los selectores de CSS . Seleccionan el contenido a insertar en lugar del elemento \<content> .

## Ejemplo

Aquí hay un ejemplo simple del uso del elemento \<content> . Es un archivo HTML con todo lo necesario en el .

> **Nota:** Para que este código funcione , el explorador en el que se muestre debe de soportar Web Components . Ver [Enabling Web Components in Firefox](/es/docs/Web/Web_Components#enabling_web_components_in_firefox) .

```html
<html>
  <head></head>
  <body>
  <!-- The original content accessed by <content> -->
  <div>
    <h4>My Content Heading</h4>
    <p>My content text</p>
  </div>

  <script>
  // Get the <div> above.
  var myContent = document.querySelector('div');
  // Create a shadow DOM on the <div>
  var shadowroot = myContent.createShadowRoot();
  // Insert into the shadow DOM a new heading and
  // part of the original content: the <p> tag.
  shadowroot.innerHTML =
   '<h2>Inserted Heading</h2> <content select="p"></content>';
  </script>

  </body>
</html>
```

Si muestras esto en un explorador web , debe de verse como lo siguiente .

![content example](content-example.png)

## Especificaciones

Este elemento ya no está definido por ninguna especificación.

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Web Components](/es/docs/Web/Web_Components)
- {{HTMLElement("shadow")}}, {{HTMLElement("template")}}, {{HTMLElement("element")}}

{{HTMLSidebar}}
