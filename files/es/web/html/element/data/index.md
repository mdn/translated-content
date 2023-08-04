---
title: <data>
slug: Web/HTML/Element/data
---

## Resúmen

El **Elemento HTML `<data>`** vincula un contenido dado con una traducción legible por una máquina. Si el contenido está relacionado con `time-` o `date-`, debe usarse el elemento {{HTMLElement("time")}}.

| [Categorías de contenido](/es/docs/HTML/Content_categories) | [Flow content](/es/docs/HTML/Content_categories#Flow_content), [phrasing content](/es/docs/HTML/Content_categories#Phrasing_content), palpable content. |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Contenido permitido                                         | [Phrasing content](/es/docs/HTML/Content_categories#Phrasing_content).                                                                                  |
| Omisión de etiqueta                                         | {{no_tag_omission}}                                                                                                                                     |
| Elementos permitidos                                        | Any element that accepts [phrasing content](/es/docs/HTML/Content_categories#Phrasing_content).                                                         |
| interfaz DOM                                                | {{domxref("HTMLDataElement")}}                                                                                                                          |

## Atributos

Este elemento incluye [Atributos globales](/es/docs/HTML/Global_attributes)

- `value`
  - : This attribute specifies the machine-readable translation of the content of the element.

## Ejemplo

El siguiente ejemplo muestra nombres de productos pero también asocia a cada uno con su código UPC.

```html
<p>New Products</p>
<ul>
  <li><data value="3967381398">Mini Ketchup</data></li>
  <li><data value="3967381399">Jumbo Ketchup</data></li>
  <li><data value="3967381400">Mega Jumbo Ketchup</data></li>
</ul>
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- The HTML {{HTMLElement("time")}} element.

{{HTMLSidebar}}
