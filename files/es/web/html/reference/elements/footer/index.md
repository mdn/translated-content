---
title: footer
slug: Web/HTML/Reference/Elements/footer
original_slug: Web/HTML/Element/footer
---

{{HTMLSidebar}}

El _Elemento_ _HTML Footer_ (`<footer>`) representa un pie de página para el contenido de sección más cercano o el elemento [raíz de sección](/en-US/Sections_and_Outlines_of_an_HTML5_document#sectioning_root) (p.e, su ancestro mas cercano [`<article>`](/es/docs/Web/HTML/Reference/Elements/article), [`<aside>`](/es/docs/Web/HTML/Reference/Elements/aside), [`<nav>`](/es/docs/Web/HTML/Reference/Elements/nav), [`<section>`](/es/docs/Web/HTML/Reference/Elements/section),[`<blockquote>`](/es/docs/Web/HTML/Reference/Elements/blockquote), [`<body>`](/es/docs/Web/HTML/Reference/Elements/body), [`<details>`](/es/docs/Web/HTML/Reference/Elements/details), [`<fieldset>`](/es/docs/Web/HTML/Reference/Elements/fieldset), [`<figure>`](/es/docs/Web/HTML/Reference/Elements/figure), [`<td>`](/es/docs/Web/HTML/Reference/Elements/td)). Un pie de página típicamente contiene información acerca de el autor de la sección, datos de derechos de autor o enlaces a documentos relacionados.

\<meta http-equiv="content-type" content="text/html; charset=utf-8"/>

> [!NOTE]
>
> - Encierra la información acerca del autor en un elemento [`<address>`](/es/docs/Web/HTML/Reference/Elements/address) que puede ser incluido dentro del elemento \<footer>.
> - El elemento \<footer> no es contenido de sección y en consecuencia no introduce una nueva sección en el [esquema](/en-US/Sections_and_Outlines_of_an_HTML5_document).

### Contexto de uso

[![Editar sección](/skins/common/icons/icon-trans.gif)](/es/HTML/Elemento/footer#)

| Contenido Permitido            | [Contenido de flujo](/es/docs/Web/HTML/Guides/Content_categories#flow_content), pero sin descendientes \<footer> o [`<header>`](/es/docs/Web/HTML/Reference/Elements/header).                                                                                                                                                                    |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Omisión de Etiqueta            | Ninguna, tanto la etiqueta de inicio como la de cierre son obligatorias.                                                                                                                                                                                                                                                                         |
| Elementos ancestros permitidos | Cualquier elemento que acepte [contenido de flujo](/es/docs/Web/HTML/Guides/Content_categories#flow_content). Note que un elemento `<footer>` no debe ser un descendiente de los elementos [`<address>`](/es/docs/Web/HTML/Reference/Elements/address), [`<header>`](/es/docs/Web/HTML/Reference/Elements/header) o de otro elemento `<footer>`. |
| Documento normativo            | [HTML5, sección 4.4.9](https://www.whatwg.org/specs/web-apps/current-work/multipage/sections.html#the-footer-element)                                                                                                                                                                                                                            |

### Atributos

[![Editar sección](/skins/common/icons/icon-trans.gif)](/es/HTML/Elemento/footer#)

Este elemento no tiene otros atributos adicionales a los [atributos globales](/es/docs/Web/HTML/Reference/Global_attributes), comunes a todos los elementos.

### Interfaz DOM

[![Editar sección](/skins/common/icons/icon-trans.gif)](/es/HTML/Elemento/footer#)

Este elemento implementa la interfaz [`HTMLElement`](/es/docs/Web/API/Element).

### Vea también

[![Editar sección](/skins/common/icons/icon-trans.gif)](/es/HTML/Elemento/footer#)

- Otros elementos relacionados con secciones: [`<body>`](/es/docs/Web/HTML/Reference/Elements/body), [`<nav>`](/es/docs/Web/HTML/Reference/Elements/nav), [`<article>`](/es/docs/Web/HTML/Reference/Elements/article), [`<aside>`](/es/docs/Web/HTML/Reference/Elements/aside), [`<h1>`](/es/docs/Web/HTML/Reference/Elements/Heading_Elements), [`<h2>`](/es/docs/Web/HTML/Reference/Elements/Heading_Elements), [`<h3>`](/es/docs/Web/HTML/Reference/Elements/Heading_Elements), [`<h4>`](/es/docs/Web/HTML/Reference/Elements/Heading_Elements), [`<h5>`](/es/docs/Web/HTML/Reference/Elements/Heading_Elements), [`<h6>`](/es/docs/Web/HTML/Reference/Elements/Heading_Elements), [`<hgroup>`](/es/docs/Web/HTML/Reference/Elements/hgroup), [`<header>`](/es/docs/Web/HTML/Reference/Elements/header), [`<section>`](/es/docs/Web/HTML/Reference/Elements/section), [`<address>`](/es/docs/Web/HTML/Reference/Elements/address);
- [Secciones y esquemas de un documento HTML5](/en-US/Sections_and_Outlines_of_an_HTML5_document).
