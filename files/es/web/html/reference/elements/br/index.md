---
title: "<br>: El elemento de salto de línea"
slug: Web/HTML/Reference/Elements/br
original_slug: Web/HTML/Element/br
---

## Resumen

El elemento HTML _line break_ `<br>` produce un salto de línea en el texto (retorno de carro). Es útil para escribir un poema o una dirección, donde la división de las líneas es significante.

No utilices `<br>` para incrementar el espacio entre líneas de texto; para ello utiliza la propiedad {{cssxref('margin')}} de [CSS](/es/docs/Web/CSS) o el elemento {{HTMLElement("p")}}.

| [Content categories](/es/docs/Web/HTML/Guides/Content_categories) | [Flow content](/es/docs/Web/HTML/Guides/Content_categories#flow_content), [phrasing content](/es/docs/Web/HTML/Guides/Content_categories#phrasing_content). |
| ----------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Contenido permitido                                               | Ninguno, es {{Glossary("empty element")}}.                                                                                                                  |
| Omisión de etiqueta                                               | Debe tener etiqueta de inicio y no debe tener etiqueta de cierre. En documentos XHTML este elemento se escribe como `<br />`.                               |
| Elementos padre permitidos                                        | Cualquier elemento que acepte [phrasing content](/es/docs/Web/HTML/Guides/Content_categories#phrasing_content).                                             |
| Interfaz DOM                                                      | {{domxref("HTMLBRElement")}}                                                                                                                                |

## Atributos

Este elemento incluye los [atributos globales](/es/docs/Web/HTML/Reference/Global_attributes).

- `clear` {{Deprecated_Inline}}
  - : Indica donde empieza la siguiente línea después del salto.

> [!NOTE]
> Este atributo está obsoleto en HTML5 y **no debe utilizarse por los autores**. En su lugar utiliza la propiedad {{CSSxref('clear')}} de CSS.

## Ejemplo

```html
Mozilla Foundation<br />
1981 Landings Drive<br />
Building K<br />
Mountain View, CA 94043-0801<br />
USA
```

El HTML de arriba muestra:

Mozilla Foundation
1981 Landings Drive
Building K
Mountain View, CA 94043-0801
USA

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- Elemento {{HTMLElement("address")}}
- Elemento {{HTMLElement("p")}}

{{HTMLSidebar}}
