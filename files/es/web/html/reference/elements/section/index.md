---
title: "<section>: El elemento de sección genérica"
slug: Web/HTML/Reference/Elements/section
original_slug: Web/HTML/Element/section
l10n:
  sourceCommit: e31cb5978e9f3c731c49db9ed0a15795b870e141
---

{{HTMLSidebar}}

El elemento de [HTML](/es/docs/Web/HTML) **`<section>`** representa una sección genérica independiente de un documento, que no tiene un elemento semántico más específico para representarla. Las secciones siempre deben tener un título, con muy pocas excepciones.

{{InteractiveExample("HTML Demo: &lt;section&gt;", "tabbed-standard")}}

```html interactive-example
<h1>Choosing an Apple</h1>
<section>
  <h2>Introduction</h2>
  <p>
    This document provides a guide to help with the important task of choosing
    the correct Apple.
  </p>
</section>

<section>
  <h2>Criteria</h2>
  <p>
    There are many different criteria to be considered when choosing an Apple —
    size, color, firmness, sweetness, tartness...
  </p>
</section>
```

```css interactive-example
h1,
h2 {
  margin: 0;
}
```

## Atributos

Este elemento solo incluye los [atributos globales](/es/docs/Web/HTML/Reference/Global_attributes).

## Notas de uso

Como se mencionó anteriormente, `<section>` es un elemento de sección genérico, y solo se debe usar si no hay un elemento más específico para representarlo. Como ejemplo, un menú de navegación debería estar incluido en un elemento {{htmlelement("nav")}}, pero una lista de resultados de una búsqueda o una visualización de mapa y sus controles no tienen elementos específicos y podrían colocarse dentro de un `<section>`.

También podrías considerar estos casos:

- Si el contenido del elemento representa una unidad atómica e independiente de contenido que tiene sentido distribuirse como una pieza independiente (p. ej. una publicación o un comentario de blog, o un artículo de periódico), el elemento {{HTMLElement("article")}} sería una mejor opción.
- Si los contenidos representan información tangencial útil que funciona junto con el contenido principal, pero que no forma parte directamente de él (como enlaces relacionados o la biografía de un autor), usa un {{HTMLElement("aside")}}.
- Si el contenido representa el área de contenido principal de un documento, usa {{HTMLElement("main")}}.
- Si solo estás usando el elemento como contenedor de estilo, usa un {{HTMLElement("div")}} en su lugar.

Para reiterar, cada `<section>` debe identificarse, normalmente incluyendo un encabezado (un elemento {{HTMLElement("Heading_Elements", "h1")}} - {{HTMLElement("Heading_Elements", "h6")}}) como hijo del elemento `<section>`, siempre que sea posible. Vea a continuación ejemplos de dónde puede ver un `<section>` sin encabezado.

## Ejemplos

### Ejemplo de uso sencillo

#### Antes

```html
<div>
  <h2>Encabezado</h2>
  <p>Un montón de contenido increíble</p>
</div>
```

##### Resultado

{{EmbedLiveSample('Antes')}}

#### Después

```html
<section>
  <h2>Encabezado</h2>
  <p>Un montón de contenido increíble</p>
</section>
```

##### Resultado

{{EmbedLiveSample('Después')}}

### Usar una sección sin encabezado

Las circunstancias en las que es posible que veas `<section>` sin un encabezado generalmente se encuentran en secciones de aplicaciones web/IU en lugar de en estructuras de documentos tradicionales. En un documento, realmente no tiene ningún sentido tener una sección separada de contenido sin un encabezado para describir su contenido. Estos títulos son útiles para todos los lectores, pero particularmente útiles para los usuarios de tecnologías de asistencia como lectores de pantalla, también son buenos para el SEO.

Considera, sin embargo, un mecanismo de navegación secundario. Si la navegación global ya está envuelta en un elemento `<nav>`, es posible que puedas envolver un menú anterior/siguiente en una `<section>`:

```html
<section>
  <a href="#">Artículo anterior</a>
  <a href="#">Siguiente artículo</a>
</section>
```

¿O qué tal algún tipo de barra de botones para controlar tu aplicación? Puede que no necesariamente necesite un título, pero sigue siendo una sección distinta del documento:

```html
<section>
  <button class="reply">Responder</button>
  <button class="reply-all">Responder a todos</button>
  <button class="fwd">Reenviar</button>
  <button class="del">Eliminar</button>
</section>
```

#### Resultado

{{EmbedLiveSample('Usar una sección sin encabezado')}}

Dependiendo del contenido, incluir un encabezado también podría ser bueno para el SEO, por lo que es una opción a considerar.

## Resumen técnico

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/es/docs/Web/HTML/Content_categories"
          >Categorías de contenido</a
        >
      </th>
      <td>
        <a href="/es/docs/Web/HTML/Content_categories#flujo_de_contenido"
          >Flujo de contenido</a
        >,
        <a
          href="/es/docs/Web/HTML/Content_categories#contenido_de_sección"
          >contenido de sección</a
        >, <a href="/es/docs/Web/HTML/Content_categories#contenido_palpable">contenido palpable</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenido permitido</th>
      <td>
        <a href="/es/docs/Web/HTML/Content_categories#flujo_de_contenido"
          >Flujo de contenido</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omisión de etiqueta</th>
      <td>Ninguna, tanto la etiqueta inicial como la final son obligatorias.</td>
    </tr>
    <tr>
      <th scope="row">Padres permitidos</th>
      <td>
        Cualquier elemento que acepte
        <a href="/es/docs/Web/HTML/Content_categories#flujo_de_contenido"
          >flujo de contenido</a
        >. Ten en cuenta que un elemento <code>&#x3C;section></code> no debe ser un
        descendiente de un elemento {{HTMLElement("address")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Rol ARIA implícito</th>
      <td>
        <code
          ><a href="/es/docs/Web/Accessibility/ARIA/Roles/region_role"
            >region</a
          ></code
        >
        si el elemento tiene un
        <a
          href="https://developer.paciellogroup.com/blog/2017/04/what-is-an-accessible-name/"
          >nombre accesible</a
        >, de lo contrario
        <code
          ><a href="/es/docs/Web/Accessibility/ARIA/Roles/generic_role"
            >generic</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Roles ARIA permitidos</th>
      <td>
        <a href="/es/docs/Web/Accessibility/ARIA/Roles/alert_role"><code>alert</code></a>, <a href="/es/docs/Web/Accessibility/ARIA/Roles/alertdialog_role"><code>alertdialog</code></a>,
        <a href="/es/docs/Web/Accessibility/ARIA/Roles/application_role"><code>application</code></a>, <a href="/es/docs/Web/Accessibility/ARIA/Roles/banner_role"><code>banner</code></a>,
        <a href="/es/docs/Web/Accessibility/ARIA/Roles/complementary_role"><code>complementary</code></a>,
        <a href="/es/docs/Web/Accessibility/ARIA/Roles/contentinfo_role"><code>contentinfo</code></a>, <a href="/es/docs/Web/Accessibility/ARIA/Roles/dialog_role"><code>dialog</code></a>,
        <a href="/es/docs/Web/Accessibility/ARIA/Roles/document_role"><code>document</code></a>, <a href="/es/docs/Web/Accessibility/ARIA/Roles/feed_role"><code>feed</code></a>,
        <a href="/es/docs/Web/Accessibility/ARIA/Roles/log_role"><code>log</code></a>, <a href="/es/docs/Web/Accessibility/ARIA/Roles/main_role"><code>main</code></a>,
        <a href="/es/docs/Web/Accessibility/ARIA/Roles/marquee_role"><code>marquee</code></a>, <a href="/es/docs/Web/Accessibility/ARIA/Roles/navigation_role"><code>navigation</code></a>,
        <a href="/es/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>, <a href="/es/docs/Web/Accessibility/ARIA/Roles/note_role"><code>note</code></a>,
        <a href="/es/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>, <a href="/es/docs/Web/Accessibility/ARIA/Roles/search_role"><code>search</code></a>,
        <a href="/es/docs/Web/Accessibility/ARIA/Roles/status_role"><code>status</code></a>, <a href="/es/docs/Web/Accessibility/ARIA/Roles/tabpanel_role"><code>tabpanel</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Interfaz en el DOM</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- Otros elementos relacionados con secciones: {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("Heading_Elements", "h1")}}, {{HTMLElement("Heading_Elements", "h2")}}, {{HTMLElement("Heading_Elements", "h3")}}, {{HTMLElement("Heading_Elements", "h4")}}, {{HTMLElement("Heading_Elements", "h5")}}, {{HTMLElement("Heading_Elements", "h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("address")}}
- [Usar secciones y esquemas de HTML](/es/docs/Web/HTML/Reference/Elements/Heading_Elements)
- [ARIA: Rol de región](/es/docs/Web/Accessibility/ARIA/Roles/region_role)
- [Por qué deberías elegir article de HTML5 en lugar de section](https://www.smashingmagazine.com/2020/01/html5-article-section/), por Bruce Lawson
