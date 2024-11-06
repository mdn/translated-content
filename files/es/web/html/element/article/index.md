---
title: "<article>: El elemento con contendio del artículo"
slug: Web/HTML/Element/article
l10n:
  sourceCommit: 8507170b71a6612358bdf2d9ec47b4e9b825bd78
---

{{HTMLSidebar}}

El Elemento de HTML **`<article>`** representa una composición auto-contenida en un documento, una página, una aplicación o en un sitio, que se quiere que sea distribuíble y/o reutilizable de manera independiente, por ejemplo, en la redifusión. Algunos ejemplos podrían ser un mensaje en un foro, un artículo de una revista o un periódico, una entrada de blog, el comentario de un usuario, un widget o gadget interactivo, o cualquier otro elemento de contenido independiente.

{{EmbedInteractiveExample("pages/tabbed/article.html", "tabbed-standard")}}

Un mismo documento puede tener varios artículos; por ejemplo, en un blog en el que se que muestran distintos mensajes a medida que el usuario va navegando, cada mensaje estaría en un elemento `<article>`, posiblemente con uno o más elemenentos `<section>` dentro.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <dfn
          ><a href="/es/docs/Web/Guide/HTML/Content_categories"
            >Categorías de contenido</a
          ></dfn
        >
      </th>
      <td>
        <a href="/es/docs/Web/Guide/HTML/Content_categories#flujo_de_contenido"
          >Contenido de flujo</a
        >,
        <a href="/es/docs/Web/Guide/HTML/Content_categories#contenido_de_sección"
          >contenido de sección</a
        >,
        <a href="/es/docs/Web/Guide/HTML/Content_categories#contenido_palpable"
          >contenido palpable</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenido permitido</th>
      <td>
        <a href="/es/docs/Web/Guide/HTML/Content_categories#flujo_de_contenido"
          >Contenido de flujo</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omisión de etiquetas</th>
      <td>
        Ninguna, tanto la etiqueta de apertura como la de cierre son obligatorias.
      </td>
    </tr>
    <tr>
      <th scope="row">Padres permitidos</th>
      <td>
        Todo elemento que permita
        <a href="/es/docs/Web/Guide/HTML/Content_categories#flujo_de_contenido"
          >contenido de flujo</a
        >. Un elemento <code>&#x3C;article></code> no puede ser hijo de
        un elemento
        <a href="/es/docs/Web/HTML/Element/address"
          ><code>&#x3C;address></code></a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rol ARIA implícito</th>
      <td>
        <a href="/es/docs/Web/Accessibility/ARIA/Roles/article_role"
          ><code>article (en-US)</code></a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Roles ARIA permitidos</th>
      <td>
        <a href="https://w3c.github.io/aria/#application">application</a>,
        <a href="https://w3c.github.io/aria/#document">document</a>,
        <a href="https://w3c.github.io/aria/#feed">feed</a>,
        <a href="https://w3c.github.io/aria/#main">main</a>,
        <a href="https://w3c.github.io/aria/#none">none</a>,
        <a href="https://w3c.github.io/aria/#presentation">presentation</a>,
        <a href="https://w3c.github.io/aria/#region">region</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Interfaz DOM</th>
      <td>
        <a href="/es/docs/Web/API/HTMLElement"><code>HTMLElement</code></a
        >.
      </td>
    </tr>
  </tbody>
</table>

## Atributos

Este elemento solo incluye los [atributos globales](/es/docs/Web/HTML/Global_attributes).

## Notas de uso

- Cada `<article>` debe ser identificado, normalmente con un elemento de encabezado (elementos [`<h1>` - `<h6>`](/es/docs/Web/HTML/Element/Heading_Elements)) como hijo.
- Cuando un `<article>` está incorporado dentro de otro, representa un artículo cuyo contenido está relacionado con el artículo que lo anida. Por ejemplo, un comentario en una entrada de blog puede ser un `<article>` dentro de otro `<article>` que representa la propia entrada del blog.
- La información del autor de un `<article>` se pueden proporcionar mediante el elemento [`<address>`](/es/docs/Web/HTML/Element/address), pero esto no se aplica a los artículos anidados dentro de otros.
- La fecha y momento de publicación de un elemento `<article>` pueden ser declarados mediante el atributo [`datetime`](/es/docs/Web/HTML/Element/time#attr-datetime) de un elemento [`<time>`](/es/docs/Web/HTML/Element/time).

## Ejemplo

```html
<article class="film_review">
  <h2>Jurassic Park</h2>
  <section class="main_review">
    <h3>Reseña</h3>
    <p>¡Los dinosaurios estuvieron genial!</p>
  </section>
  <section class="user_reviews">
    <h3>Reseñas de usuarios</h3>
    <article class="user_review">
      <h4>¡Demasiado aterrador!</h4>
      <p>Demasiado aterradores para mí</p>
      <footer>
        <p>
          Publicado el
          <time datetime="2015-05-16 19:00">16 de mayo</time>
          por Lisa.
        </p>
      </footer>
    </article>
    <article class="user_review">
      <h4>¡Amo a los dinos!</h4>
      <p>Estoy de acuerdo, los dinosaurios son mis favoritos.</p>
      <footer>
        <p>
          Publicado el
          <time datetime="2015-05-17 19:00">17 de mayo</time>
          por Tom.
        </p>
      </footer>
    </article>
  </section>
  <footer>
    <p>
      Publicado el
      <time datetime="2015-05-15 19:00">15 de mayo</time>
      por Staff.
    </p>
  </footer>
</article>
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- Otros elementos relacionados : [`<body>`](/es/docs/Web/HTML/Element/body), [`<nav>`](/es/docs/Web/HTML/Element/nav), [`<section>`](/es/docs/Web/HTML/Element/section), [`<aside>`](/es/docs/Web/HTML/Element/aside), [`<h1>`](/es/docs/Web/HTML/Element/Heading_Elements), [`<h2>`](/es/docs/Web/HTML/Element/Heading_Elements), [`<h3>`](/es/docs/Web/HTML/Element/Heading_Elements), [`<h4>`](/es/docs/Web/HTML/Element/Heading_Elements), [`<h5>`](/es/docs/Web/HTML/Element/Heading_Elements), [`<h6>`](/es/docs/Web/HTML/Element/Heading_Elements), [`<hgroup>`](/es/docs/Web/HTML/Element/hgroup), [`<header>`](/es/docs/Web/HTML/Element/header), [`<footer>`](/es/docs/Web/HTML/Element/footer), [`<address>`](/es/docs/Web/HTML/Element/address)
- [Uso de secciones y esquemas HTML](/es/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines)
