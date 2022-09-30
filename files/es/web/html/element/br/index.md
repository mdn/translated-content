---
title: <br>
slug: Web/HTML/Element/br
tags:
  - HTML
  - HTML:Elemento
  - Todas_las_Categorías
translation_of: Web/HTML/Element/br
original_slug: Web/HTML/Elemento/br
---
## Resumen

El elemento HTML _line break_ `<br>` produce un salto de línea en el texto (retorno de carro). Es útil para escribir un poema o una dirección, donde la división de las líneas es significante.

No utilices `<br>` para incrementar el espacio entre líneas de texto; para ello utiliza la propiedad {{cssxref('margin')}} de [CSS](/es/docs/CSS) o el elemento {{HTMLElement("p")}}.

| [Content categories](/es/docs/HTML/Content_categories) | [Flow content](/es/docs/HTML/Content_categories#Flow_content), [phrasing content](/es/docs/HTML/Content_categories#Phrasing_content). |
| -------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Contenido permitido                                                              | Ninguno, es {{Glossary("empty element")}}.                                                                                                                                                                   |
| Omisión de etiqueta                                                              | Debe tener etiqueta de inicio y no debe tener etiqueta de cierre. En documentos XHTML este elemento se escribe como `<br />`.                                                                                           |
| Elementos padre permitidos                                                       | Cualquier elemento que acepte [phrasing content](/es/docs/HTML/Content_categories#Phrasing_content).                                                                         |
| Interfaz DOM                                                                     | {{domxref("HTMLBRElement")}}                                                                                                                                                                                    |

## Atributos

Este elemento incluye los [atributos globales](/es/docs/HTML/Global_attributes).

- {{htmlattrdef("clear")}} {{deprecatedGeneric('inline','HTML4.01')}} {{obsoleteGeneric('inline','HTML5')}}
  - : Indica donde empieza la siguiente línea después del salto.

> **Nota:** **Nota de uso:** Este atributo está obsoleot en {{HTMLVersionInline(5)}} y **no debe utilizarse por los autores**. En su lugar utiliza la propiedad {{CSSxref('clear')}} de CSS.

## Ejemplo

```html
Mozilla Foundation<br>
1981 Landings Drive<br>
Building K<br>
Mountain View, CA 94043-0801<br>
USA
```

El HTML de arriba muestra:

Mozilla Foundation
1981 Landings Drive
Building K
Mountain View, CA 94043-0801
USA

## Especificaciones

| Especificación                                                                                                   | Estado                           | Comentario |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | ---------- |
| {{SpecName('HTML WHATWG', 'text-level-semantics.html#the-br-element', '&lt;br&gt;')}} | {{Spec2('HTML WHATWG')}} |            |
| {{SpecName('HTML5 W3C', 'text-level-semantics.html#the-br-element', '&lt;br&gt;')}} | {{Spec2('HTML5 W3C')}}     |            |
| {{SpecName('HTML4.01', 'struct/text.html#h-9.3.2.1', '&lt;br&gt;')}}                     | {{Spec2('HTML4.01')}}     |            |

## Compatibilidad de navegador

{{Compat("html.elements.br")}}

## Ver también

- Elemento {{HTMLElement("address")}}
- Elemento {{HTMLElement("p")}}

{{HTMLRef}}
