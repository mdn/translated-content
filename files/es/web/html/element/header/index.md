---
title: header
slug: Web/HTML/Element/header
---

El _elemento de HTML Header_ (\<header>) representa un grupo de ayudas introductorias o de navegación. Puede contener algunos elementos de encabezado, así como también un logo, un formulario de búsqueda, un nombre de autor y otros componentes.

> **Nota:**
>
> - El elemento `<header>` no es contenido de sección y, por lo tanto, no introduce una nueva sección en [descripción](/en/Sections_and_Outlines_of_an_HTML5_document).

### Contexto de uso

| Contenido permitido         | [Contenido dinámico](/en/HTML/Content_categories#flow_content), pero sin un \<header> o {{ HTMLElement("footer") }} descendente                                                                                                                                                                 |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Omisión de la etiqueta      | No está permitido, tanto la etiqueta de inicio como la de final son obligatorias                                                                                                                                                                                                                |
| Elementos padres permitidos | Cualquier elemento que acepte [contenido dinámico](/en/HTML/Content_categories#flow_content). Ten en cuenta que un elemento `<header>` no debe ser descendiente de un elemento {{ HTMLElement("address") }}, {{ HTMLElement("footer") }} o cualquier otro elemento {{ HTMLElement("header") }}. |
| Roles ARIA permitidos       | [`group`](/es/docs/Web/Accessibility/ARIA/Roles/group_role), [`presentation`](/es/docs/Web/Accessibility/ARIA/Roles/presentation_role)                                                                                                                                                          |
| Interfaz DOM                | {{domxref("HTMLElement")}}                                                                                                                                                                                                                                                                      |
| Documento normativo         | [HTML5, sección 4.4.8](http://www.whatwg.org/specs/web-apps/current-work/multipage/sections.html#the-header-element)                                                                                                                                                                            |

### Atributos

Este elemento no tiene otros atributos que no sean los [atributos generales](/en/HTML/global_attributes), comunes a todos los elementos.

### Interfaz DOM

Este elemento implementa la interfaz [`HTMLElement`](/en/DOM/element).

### Mira también

- Otros elementos relacionados con secciones: {{ HTMLElement("body") }}, {{ HTMLElement("nav") }}, {{ HTMLElement("article") }}, {{ HTMLElement("aside") }}, {{ HTMLElement("h1") }}, {{ HTMLElement("h2") }}, {{ HTMLElement("h3") }}, {{ HTMLElement("h4") }}, {{ HTMLElement("h5") }}, {{ HTMLElement("h6") }}, {{ HTMLElement("hgroup") }}, {{ HTMLElement("footer") }}, {{ HTMLElement("section") }}, {{ HTMLElement("address") }};
- [Sections and outlines of an HTML5 document](/en/Sections_and_Outlines_of_an_HTML5_document).
