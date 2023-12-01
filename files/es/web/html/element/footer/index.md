---
title: footer
slug: Web/HTML/Element/footer
---

El _Elemento_ _HTML Footer_ (`<footer>`) representa un pie de página para el contenido de sección más cercano o el elemento [raíz de sección](/en/Sections_and_Outlines_of_an_HTML5_document#sectioning_root) (p.e, su ancestro mas cercano [`<article>`](/es/HTML/Element/article), [`<aside>`](/es/HTML/Element/aside), [`<nav>`](/es/HTML/Element/nav), [`<section>`](/es/HTML/Element/section),[`<blockquote>`](/es/HTML/Element/blockquote), [`<body>`](/es/HTML/Element/body), [`<details>`](/es/HTML/Element/details), [`<fieldset>`](/es/HTML/Element/fieldset), [`<figure>`](/es/HTML/Element/figure), [`<td>`](/es/HTML/Element/td)). Un pie de página típicamente contiene información acerca de el autor de la sección, datos de derechos de autor o enlaces a documentos relacionados.

\<meta http-equiv="content-type" content="text/html; charset=utf-8"/>

> **Nota:**
>
> - Encierra la información acerca del autor en un elemento [`<address>`](/es/HTML/Element/address) que puede ser incluido dentro del elemento \<footer>.
> - El elemento \<footer> no es contenido de sección y en consecuencia no introduce una nueva sección en el [esquema](/en/Sections_and_Outlines_of_an_HTML5_document).

### Contexto de uso

[![Editar sección](/skins/common/icons/icon-trans.gif)](/es/HTML/Elemento/footer#)

| Contenido Permitido            | [Contenido de flujo](/en/HTML/Content_categories#flow_content), pero sin descendientes \<footer> o [`<header>`](/es/HTML/Element/header).                                                                                                                                                |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Omisión de Etiqueta            | Ninguna, tanto la etiqueta de inicio como la de cierre son obligatorias.                                                                                                                                                                                                                 |
| Elementos ancestros permitidos | Cualquier elemento que acepte [contenido de flujo](/en/HTML/Content_categories#flow_content). Note que un elemento `<footer>` no debe ser un descendiente de los elementos [`<address>`](/es/HTML/Element/address), [`<header>`](/es/HTML/Element/header) o de otro elemento `<footer>`. |
| Documento normativo            | [HTML5, sección 4.4.9](http://www.whatwg.org/specs/web-apps/current-work/multipage/sections.html#the-footer-element)                                                                                                                                                                     |

### Atributos

[![Editar sección](/skins/common/icons/icon-trans.gif)](/es/HTML/Elemento/footer#)

Este elemento no tiene otros atributos adicionales a los [atributos globales](/en/HTML/global_attributes), comunes a todos los elementos.

### Interfaz DOM

[![Editar sección](/skins/common/icons/icon-trans.gif)](/es/HTML/Elemento/footer#)

Este elemento implementa la interfaz [`HTMLElement`](/en/DOM/element).

### Vea también

[![Editar sección](/skins/common/icons/icon-trans.gif)](/es/HTML/Elemento/footer#)

- Otros elementos relacionados con secciones: [`<body>`](/es/HTML/Element/body), [`<nav>`](/es/HTML/Element/nav), [`<article>`](/es/HTML/Element/article), [`<aside>`](/es/HTML/Element/aside), [`<h1>`](/es/HTML/Element/h1), [`<h2>`](/es/HTML/Element/h2), [`<h3>`](/es/HTML/Element/h3), [`<h4>`](/es/HTML/Element/h4), [`<h5>`](/es/HTML/Element/h5), [`<h6>`](/es/HTML/Element/h6), [`<hgroup>`](/es/HTML/Element/hgroup), [`<header>`](/es/HTML/Element/header), [`<section>`](/es/HTML/Element/section), [`<address>`](/es/HTML/Element/address);
- [Secciones y esquemas de un documento HTML5](/en/Sections_and_Outlines_of_an_HTML5_document).
