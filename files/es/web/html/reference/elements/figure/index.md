---
title: figure
slug: Web/HTML/Reference/Elements/figure
original_slug: Web/HTML/Element/figure
---

{{HTMLSidebar}}

El _elemento HTML_ \<figure> representa contenido independiente, a menudo con un título. Si bien se relaciona con el flujo principal, su posición es independiente de éste. Por lo general, se trata de una imagen, una ilustración, un diagrama, un fragmento de código, o un esquema al que se hace referencia en el texto principal, pero que se puede mover a otra página o a un apéndice sin que afecte al flujo principal.

> [!NOTE]
>
> - Al ser una [seccionador raíz](/es/Secciones_y_esquema_de_un_documento_HTML_5#Seccionador_ra.c3.adz), el esbozo del contenido del elemento \<figure> está excluido del esbozo principal del documento.
> - Un título puede estar asociado con el elemento \<figure> mediante la inserción de un {{ HTMLElement ("figcaption") }} en su interior (como el primero o el último hijo).

### Contexto de uso

| Tipo                           | Seccionador raíz                                                                                                                                                                                                         |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Contenido permitido            | Un elemento {{ HTMLElement ("figcaption") }}, seguido por [contenido dinámico](/es/docs/Web/HTML/Guides/Content_categories#flow_content) , o contenido dinámico seguido por un elemento{{ HTMLElement ("figcaption") }}. |
| Omisión de etiquetas           | Ninguna, tanto la etiqueta inicial como la etiqueta de cierre son obligatorias                                                                                                                                           |
| Elementos primarios permitidos | Cualquier elemento que acepte elementos dinámicos.                                                                                                                                                                       |
| Documento normativo            | [HTML 5, sección 4.5.11](https://www.whatwg.org/specs/web-apps/current-work/multipage/text-level-semantics.html#the-mark-element)                                                                                        |

### Atributos

Este elemento no tiene atributos que no sean los [atributos globales](/es/docs/Web/HTML/Reference/Global_attributes), comunes a todos los elementos.

### Interfaz DOM

Este elemento implementa la interfaz [`HTMLElement`](/es/docs/Web/API/Element).

### Consulta también

El elemento {{ HTMLElement ("figcaption") }}.
