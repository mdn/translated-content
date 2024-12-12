---
title: footer
slug: Web/HTML/Element/footer
---

{{HTMLSidebar}}

El _Elemento_ _HTML Footer_ (`<footer>`) representa un pie de página para el contenido de sección más cercano o el elemento [raíz de sección](/en-US/Sections_and_Outlines_of_an_HTML5_document#sectioning_root) (p.e, su ancestro mas cercano [`<article>`](/es/docs/HTML/Element/article), [`<aside>`](/es/docs/HTML/Element/aside), [`<nav>`](/es/docs/HTML/Element/nav), [`<section>`](/es/docs/Web/HTML/Element/section),[`<blockquote>`](/es/docs/HTML/Element/blockquote), [`<body>`](/es/docs/HTML/Element/body), [`<details>`](/es/docs/HTML/Element/details), [`<fieldset>`](/es/docs/HTML/Element/fieldset), [`<figure>`](/es/docs/HTML/Element/figure), [`<td>`](/es/docs/HTML/Element/td)). Un pie de página típicamente contiene información acerca de el autor de la sección, datos de derechos de autor o enlaces a documentos relacionados.

\<meta http-equiv="content-type" content="text/html; charset=utf-8"/>

> [!NOTE]
>
> - Encierra la información acerca del autor en un elemento [`<address>`](/es/docs/HTML/Element/address) que puede ser incluido dentro del elemento \<footer>.
> - El elemento \<footer> no es contenido de sección y en consecuencia no introduce una nueva sección en el [esquema](/en-US/Sections_and_Outlines_of_an_HTML5_document).

### Contexto de uso

[![Editar sección](/skins/common/icons/icon-trans.gif)](/es/HTML/Elemento/footer#)

| Contenido Permitido            | [Contenido de flujo](/en-US/HTML/Content_categories#flow_content), pero sin descendientes \<footer> o [`<header>`](/es/docs/HTML/Element/header).                                                                                                                                                     |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Omisión de Etiqueta            | Ninguna, tanto la etiqueta de inicio como la de cierre son obligatorias.                                                                                                                                                                                                                              |
| Elementos ancestros permitidos | Cualquier elemento que acepte [contenido de flujo](/en-US/HTML/Content_categories#flow_content). Note que un elemento `<footer>` no debe ser un descendiente de los elementos [`<address>`](/es/docs/HTML/Element/address), [`<header>`](/es/docs/HTML/Element/header) o de otro elemento `<footer>`. |
| Documento normativo            | [HTML5, sección 4.4.9](https://www.whatwg.org/specs/web-apps/current-work/multipage/sections.html#the-footer-element)                                                                                                                                                                                 |

### Atributos

[![Editar sección](/skins/common/icons/icon-trans.gif)](/es/HTML/Elemento/footer#)

Este elemento no tiene otros atributos adicionales a los [atributos globales](/en-US/HTML/global_attributes), comunes a todos los elementos.

### Interfaz DOM

[![Editar sección](/skins/common/icons/icon-trans.gif)](/es/HTML/Elemento/footer#)

Este elemento implementa la interfaz [`HTMLElement`](/en-US/DOM/element).

### Vea también

[![Editar sección](/skins/common/icons/icon-trans.gif)](/es/HTML/Elemento/footer#)

- Otros elementos relacionados con secciones: [`<body>`](/es/docs/HTML/Element/body), [`<nav>`](/es/docs/HTML/Element/nav), [`<article>`](/es/docs/HTML/Element/article), [`<aside>`](/es/docs/HTML/Element/aside), [`<h1>`](/es/docs/HTML/Element/h1), [`<h2>`](/es/docs/HTML/Element/h2), [`<h3>`](/es/docs/HTML/Element/h3), [`<h4>`](/es/docs/HTML/Element/h4), [`<h5>`](/es/docs/HTML/Element/h5), [`<h6>`](/es/docs/HTML/Element/h6), [`<hgroup>`](/es/docs/Web/HTML/Element/hgroup), [`<header>`](/es/docs/HTML/Element/header), [`<section>`](/es/docs/Web/HTML/Element/section), [`<address>`](/es/docs/HTML/Element/address);
- [Secciones y esquemas de un documento HTML5](/en-US/Sections_and_Outlines_of_an_HTML5_document).
