---
title: article
slug: Web/HTML/Element/article
translation_of: Web/HTML/Element/article
original_slug: Web/HTML/Elemento/article
---
El _Elemento article de HTML_ (\<article>) representa una composición auto-contenida en un documento, página, una aplicación o en el sitio, que se destina a distribuir de forma independiente o reutilizable, por ejemplo, en la indicación. Podría ser un mensaje en un foro, un artículo de una revista o un periódico, una entrada de blog, un comentario de un usuario, un widget interactivo o gadget, o cualquier otro elemento independiente del contenido.

> **Nota:** Notas de uso:
>
> - Cuando los elementos `<article>` están anidados, los internos representan artículos relacionados con el exterior. Por ejemplo, los comentarios de un blog pueden ser elementos `<article>` anidados al que representa la entrada del blog.
> - Los datos del autor de un elemento `<article>` pueden ser proporcionados a través del elemento {{ HTMLElement ("address") }}, pero no se aplica a los elementos `<article>` anidados.
> - La fecha de publicación y el tiempo de un elemento `<article>` pueden ser descritos con el atributo {{ htmlattrxref ("pubdate", "time") }} atributo de un elemento {{ HTMLElement("time") }}.

### Contexto de uso

| Contenido permitido         | Contenido dinámico                                                                                                                                                                     |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Omisión de etiquetas        | Ninguna, tanto la etiqueta inicial como la etiqueta de cierre son obligatorias                                                                                                         |
| Elementos padres permitidos | Cualquier elemento que acepte el contenido dinámico . Tenga en cuenta que un elemento `<article>` no debe ser un descendiente de un elemento {{ HTMLElement ("address") }}. |
| Documento normativo         | [HTML 5, sección 4.4.4](http://www.whatwg.org/specs/web-apps/current-work/multipage/sections.html#the-article-element)                                                                 |

### Atributos

Este elemento no tiene atributos que no sean los atributos globales, comunes a todos los elementos.

### Interfaz DOM

Este elemento implementa la interfaz HTMLElement.

### Consulta también

- Otros elementos relacionados con secciones: {{ HTMLElement("body") }}, {{ HTMLElement("nav") }}, {{ HTMLElement("section") }}, {{ HTMLElement("aside") }}, {{ HTMLElement("h1") }}, {{ HTMLElement("h2") }}, {{ HTMLElement("h3") }}, {{ HTMLElement("h4") }}, {{ HTMLElement("h5") }}, {{ HTMLElement("h6") }}, {{ HTMLElement("hgroup") }}, {{ HTMLElement("header") }}, {{ HTMLElement("footer") }}, {{ HTMLElement("address") }}
- [Sections and outlines of an HTML5 document](/en/Sections_and_Outlines_of_an_HTML5_document).
