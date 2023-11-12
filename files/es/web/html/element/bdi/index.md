---
title: <bdi>
slug: Web/HTML/Element/bdi
---

## Resumen

El elemento _HTML `<bdi>`_ (o elemento de aislamiento Bi-Direccional) aisla un trozo de texto para que pueda ser formateado con una dirección diferente al texto que hay fuera de él.

Es útil al embeber o incrustart texto del que se desconoce la direccionalidad, por ejemplo proveniente de una base de datos, dentro de un texto con una direccionalidad fija.

> **Nota:** Aunque el mismo efecto visual se puede conseguir usando la regla CSS {{cssxref("unicode-bidi")}}`: isolate` en un elemento {{HTMLElement("span")}} u otro elemento de formateado de texto, el significado semántico sólo se consigue usando el elemento `<bdi>`. En especial los navegadores permiten ignorar los estilos CSS. En tal caso el texto se mostrará correctamente usando el elemento HTML pero será basura usando CSS para fijar la semántica.

| [Content categories](/es/docs/HTML/Content_categories) | [Flow content](/es/docs/HTML/Content_categories#Flow_content), [phrasing content](/es/docs/HTML/Content_categories#Phrasing_content), contenido palpable. |
| ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Contenido permitido                                    | [Phrasing content](/es/docs/HTML/Content_categories#Phrasing_content).                                                                                    |
| Omisión de etiqueta                                    | {{no_tag_omission}}                                                                                                                                       |
| Elementos padre permitidos                             | Any element that accepts [phrasing content](/es/docs/HTML/Content_categories#Phrasing_content).                                                           |
| Interfaz DOM                                           | {{domxref("HTMLElement")}}                                                                                                                                |

## Atributos

Como los demás elementos HTML , este elemento tiene los [global attributes](/es/docs/HTML/Global_attributes), pero con una pequeña diferencia semántica: el atributo **dir** no se hereda. Si no está definidio, su valor por defecto es `auto` y permitirá a los navegadores decidir la dirección basándose en el contexto del elemento.

## Ejemplo

```html
<p dir="ltr">
  Esta palabara arábica<bdi>ARABIC_PLACEHOLDER</bdi> se muestra automáticamente
  de derecha a izquierda.
</p>
```

### Resultado

Esta palabra arábica REDLOHECALP_CIBARA se muestra automáticamente de derecha a izquierda.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver además

- Elementos HTML relacionados: {{HTMLElement("bdo")}}
- Propiedades HTML relacionadas: {{cssxref("direction")}}, {{cssxref("unicode-bidi")}}

{{HTMLSidebar}}
