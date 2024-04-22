---
title: aside
slug: Web/HTML/Element/aside
---

El **elemento HTML `<aside>`** representa una sección de una página que consiste en contenido que está indirectamente relacionado con el contenido principal del documento. Estas secciones son a menudo representadas como barras laterales o como inserciones y contienen una explicación al margen como una definición de glosario, elementos relacionados indirectamente, como publicidad, la biografía del autor, o en aplicaciones web, la información de perfil o enlaces a blogs relacionados.

> **Nota:** Notas de uso:
>
> - No utilices el elemento `<aside>` para etiquetar texto entre paréntesis, ya que este tipo de texto se considera parte del flujo principal.

### Contexto de uso

| Contenido permitido            | [Contenido dinámico](/en/HTML/Content_categories#flow_content)                                                                                                     |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Omisión de etiquetas           | Ninguna, tanto la etiqueta inicial y la etiqueta de cierre son obligatorias                                                                                        |
| Elementos primarios permitidos | Cualquier elemento que acepte contenido dinámico. Ten en cuenta que un elemento \<aside> no debe ser un descendiente de un elemento {{ HTMLElement ("address") }}. |
| Documento normativo            | [HTML 5, sección 4.4.5](http://www.whatwg.org/specs/web-apps/current-work/multipage/sections.html#the-aside-element)                                               |

### Atributos

Este elemento no tiene atributos que no sean los [atributos globales](/en/HTML/Global_attributes), comunes a todos los elementos.

### Interfaz DOM

Este elemento implementa la interfaz [`HTMLElement`](/en/DOM/element).

### Consulta también

- Otros elementos relacionados con esta sección: {{ HTMLElement("body") }}, {{ HTMLElement("article") }}, {{ HTMLElement("section") }}, {{ HTMLElement("nav") }}, {{ HTMLElement("h1") }}, {{ HTMLElement("h2") }}, {{ HTMLElement("h3") }}, {{ HTMLElement("h4") }}, {{ HTMLElement("h5") }}, {{ HTMLElement("h6") }}, {{ HTMLElement("hgroup") }}, {{ HTMLElement("header") }}, {{ HTMLElement("footer") }}, {{ HTMLElement("address") }};
- [Secciones y líneas generales de un documento HTML 5](/en/Sections_and_Outlines_of_an_HTML5_document) .
