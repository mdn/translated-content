---
title: <main>
slug: Web/HTML/Element/main
---

## Resumen

El **elemento HTML `<main>`** representa el contenido principal del {{HTMLElement("body")}} de un documento o aplicación. El área principal del contenido consiste en el contenido que está directamente relacionado, o se expande sobre el tema central de un documento o la funcionalidad central de una aplicación. Este contenido debe ser único al documento, excluyendo cualquier contenido que se repita a través de un conjunto de documentos como barras laterales, enlaces de navegación, información de derechos de autor, logos del sitio y formularios de búsqueda (a menos, claro, que la función principal del documento sea un formulario de búsqueda).

> **Nota:** **no debe haber** más de un elemento `<main>` en un documento, y este **no debe ser** descendiente de un elemento {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("footer")}}, {{HTMLElement("header")}}, o {{HTMLElement("nav")}}.

- _[Content categories](/es/docs/Web/HTML/Content_categories)_[Flow content](/es/docs/Web/HTML/Content_categories#Flow_content), palpable content.
- _Contenido permitido_ [Flow content](/es/docs/Web/HTML/Content_categories#Flow_content).
- _Omisión de etiquetas_ Ninguna; ambas etiqueta inical y de fin son obligatorias.
- _Elementos padres permitidos_ Cualquier elemento que acepte [flow content](/es/docs/Web/HTML/Content_categories#Flow_content), pero no debe ser un descendiente de un elemento {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("footer")}}, {{HTMLElement("header")}}, o {{HTMLElement("nav")}}.
- _Interfaz DOM_ {{domxref("HTMLElement")}}

## Atributos

Este elemento solo incluye [atributos globales.](/es/docs/Web/HTML/Global_attributes)

## Ejemplo

```html
<!-- other content -->

<main>
  <h1>Apples</h1>
  <p>The apple is the pomaceous fruit of the apple tree.</p>

  <article>
    <h2>Red Delicious</h2>
    <p>
      These bright red apples are the most common found in many supermarkets.
    </p>
    <p>...</p>
    <p>...</p>
  </article>

  <article>
    <h2>Granny Smith</h2>
    <p>These juicy, green apples make a great filling for apple pies.</p>
    <p>...</p>
    <p>...</p>
  </article>
</main>

<!-- other content -->
```

## Sobre Accesibilidad

Algunos lectores de pantalla reconocen la etiqueta `main` y proveen un atajo para que el usuario pueda saltar directamente al contenido de esta etiqueta sin tener que pasar por el resto.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- Basic structural elements: {{HTMLElement("html")}}, {{HTMLElement("head")}}, {{HTMLElement("body")}}
- Section-related elements: {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("footer")}}, {{HTMLElement("header")}}, or {{HTMLElement("nav")}}
