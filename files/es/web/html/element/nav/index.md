---
title: "<nav>: El elemento de sección de navegación"
slug: Web/HTML/Element/nav
---

{{HTMLSidebar}}

El **elemento** **HTML `<nav>`** representa una sección de una página cuyo propósito es proporcionar enlaces de navegación, ya sea dentro del documento actual o a otros documentos. Ejemplos comunes de secciones de navegación son menús, tablas de contenido e índices.

| [Content categories](/es/docs/Web/Guide/HTML/categorias_de_contenido) | [Flow content](/es/docs/HTML/Content_categories#Flow_content), [sectioning content](/es/docs/HTML/Content_categories#Sectioning_content), palpable content. |
| --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Contenido permitido                                                   | [Flow content](/es/docs/HTML/Content_categories#Flow_content).                                                                                              |
| Omisión de etiquetas                                                  | {{no_tag_omission}}                                                                                                                                         |
| Elementos padres permitidos                                           | Cualquier elemento que acepte [flow content](/es/docs/HTML/Content_categories#Flow_content).                                                                |
| Roles ARIA permitidos                                                 | Ninguno                                                                                                                                                     |
| Interfaz DOM                                                          | {{domxref("HTMLElement")}}                                                                                                                                  |

## Atributos

Este elemento sólo incluye [atributos globales](/es/docs/Web/HTML/Atributos_Globales).

## Notas de uso

- No es necesario que todos los enlaces estén contenidos en un elemento `<nav>`. `<nav>` está destinado sólo para el bloque principal de enlaces de navegación; por lo general, el elemento {{HTMLElement("footer")}} a menudo tiene una lista de enlaces que no necesitan estar en un elemento {{HTMLElement("nav")}}.
- Un documento puede tener varios elementos {{HTMLElement("nav")}}, por ejemplo, uno para la navegación del sitio y otro para la navegación dentro de la página. [`aria-labelledby`](/es/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute) puede ser utilizado en tal caso para promover la accesibilidad, ver [ejemplo](/es/docs/Web/HTML/Element/Heading_Elements#Labeling_section_content).
- Los agentes de usuario, como los lectores de pantalla dirigidos a usuarios con discapacidades, pueden usar este elemento para determinar si se omite la representación inicial del contenido de solo navegación.

## Ejemplo

En este ejemplo, un bloque `<nav>` es usado para contener una lista no ordenada ({{HTMLElement("ul")}}) de enlaces. Con el CSS apropiado, esto puede ser presentado como una barra lateral, una barra de navegación o un menú desplegable.

```html
<nav class="menu">
  <ul>
    <li><a href="#">Inicio</a></li>
    <li><a href="#">Sobre nosotros</a></li>
    <li><a href="#">Contacto</a></li>
  </ul>
</nav>
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- Otros elementos relacionados con la sección: {{HTMLElement("body")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("aside")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("address")}};
- [Secciones y esquema de un documento HTML5](/es/docs/Sections_and_Outlines_of_an_HTML5_document).
- [ARIA: Rol de navegación](/es/docs/Web/Accessibility/ARIA/Roles/Navigation_Role)
