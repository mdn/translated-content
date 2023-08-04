---
title: section
slug: Web/HTML/Element/section
---

## Resumen

El elemento de _HTML section_ (`<section>`) representa una sección genérica de un documento. Sirve para determinar qué contenido corresponde a qué parte de un esquema. Piensa en el esquema como en el índice de contenido de un libro; un tema común y subsecciones relacionadas. Es, por lo tanto, una etiqueta semántica. Su funcionalidad principal es estructurar semánticamente un documento a la hora de ser representado por parte de un agente usuario. Por ejemplo, un agente de usuario que represente el documento en voz, podría exponer al usuario el índice de contenido por niveles para navegar rápidamente por las distintas partes.

> **Nota:**
>
> - Si la intención es indicar el contenido de un elemento {{HTMLElement("section")}} , es mejor usar el elemento {{HTMLElement("article")}} en su lugar, a modo de artículos independientes como en las revistas. {{HTMLElement("section")}} está diseñado para contenidos dependientes, pero diferenciados.
> - No se debe usar el elemento {{HTMLElement("section")}} como un mero contenedor genérico; para esto ya existe {{HTMLElement("div")}}, especialmente si el objetivo solamente es aplicar un estilo (CSS) a la sección. Como regla general, el título de una sección debería aparecer en el esquema del documento.

## Contexto de uso

| Contenido permitido         | [Contenido dinámico](/en/HTML/Content_categories#Flow_content)                                                                                                                                                     |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Omisión de etiquetas        | Ninguna, tanto la etiqueta de apertura como la de cierre son obligatorias.                                                                                                                                         |
| Elementos padres permitidos | Todo elemento que acepte [contenido dinámico](/en/HTML/Content_categories#Flow_content). Nótese que un elemento {{ HTMLElement("section") }} no debe ser descendiente de un elemento {{ HTMLElement("address") }}. |
| Documento normativo         | [HTML5, sección 4.4.2](http://www.whatwg.org/specs/web-apps/current-work/multipage/sections.html#the-section-element)                                                                                              |

## Atributos

Este elemento carece de otros atributos fuera de los [atributos globales](/en/HTML/Global_attributes), que son comunes a todos los elementos.

## Interfaz del DOM

Este elemento implementa la interfaz [`HTMLElement`](/en/DOM/element).

## Ejemplo 1

### Antes de HTML5

```html
<div>
  <h1>Encabezado</h1>
  <p>Un montón de contenido impresionante.</p>
</div>
```

### con HTML5

```html
<section>
  <h1>Encabezado</h1>
  <p>Un montón de contenido impresionante.</p>
</section>
```

## Ejemplo 2

### Antes de HTML5

```html
<div>
  <h2>Encabezado</h2>
  <img src="roble.jpg" alt="un roble" />
</div>
```

### con HTML5

```html
<section>
  <h2>Encabezado</h2>
  <img src="roble.jpg" alt="un roble" />
</section>
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- Otros elementos relacionados: {{ HTMLElement("body") }}, {{ HTMLElement("nav") }}, {{ HTMLElement("article") }}, {{ HTMLElement("aside") }}, {{ HTMLElement("h1") }}, {{ HTMLElement("h2") }}, {{ HTMLElement("h3") }}, {{ HTMLElement("h4") }}, {{ HTMLElement("h5") }}, {{ HTMLElement("h6") }}, {{ HTMLElement("hgroup") }}, {{ HTMLElement("header") }}, {{ HTMLElement("footer") }}, {{ HTMLElement("address") }};
- [Secciones y esquemas de un documento en HTML5](/en/Sections_and_Outlines_of_an_HTML5_document).
