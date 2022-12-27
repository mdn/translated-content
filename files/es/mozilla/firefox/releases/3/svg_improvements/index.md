---
title: Mejoras SVG en Firefox 3
slug: Mozilla/Firefox/Releases/3/SVG_improvements
tags:
  - Firefox 3
  - SVG
  - Todas_las_Categorías
translation_of: Mozilla/Firefox/Releases/3/SVG_improvements
original_slug: Mejoras_SVG_en_Firefox_3
---

{{FirefoxSidebar}}

Firefox 3 ofrece una mejor implementación de [Gráficos Vectoriales Escalables (SVG)](/es/SVG) en comparación con versiones anteriores de Firefox. Aunque estas características están documentadas en otros sitios, este artículo puede servir como una lista que indique fácilmente qué características se han añadido en Firefox 3.

- Se ha implementado el elemento `foreignObject` ({{ Bug(326966) }}). Vea la [especificación](https://www.w3.org/TR/SVG11/extend.html#ForeignObjectElement) o [este artículo](https://weblogs.mozillazine.org/roc/archives/2006/06/the_future_is_now.html) para más detalles.
- Implementado el elemento `pattern` ([especificación](https://www.w3.org/TR/SVG11/pservers.html#PatternElement)).
- Implementado el elemento `mask` ([especificación](https://www.w3.org/TR/SVG11/masking.html#MaskElement)).
- Implementados nuevos filtros ([especificación](https://www.w3.org/TR/SVG11/filters.html)):

  - `filter`
  - `feDistantLight`
  - `fePointLight`
  - `feSpotLight`
  - `feBlend`
  - `feColorMatrix`
  - `feConvolveMatrix`
  - `feComponentTransfer`, `feFuncR`, `feFuncG`, `feFuncB`, `feFuncA`
  - `feComposite`
  - `feConvolveMatrix`
  - `feDiffuseLighting`
  - `feDistantLight`
  - `feFlood`
  - `feGaussianBlur`
  - `feMerge`, `feMergeNode`
  - `feMorphology`
  - `feOffset`
  - `fePointLight`
  - `feSpecularLighting`
  - `feTurbulence`
  - `feTile`

- Se han arreglado varios fallos en la manipulación del elemento `<a>` en SVG; ver {{ Bug(267664) }}, {{ Bug(268135) }}, {{ Bug(316248) }}, {{ Bug(317270) }} y {{ Bug(320724) }}.
- Se han implementado los métodos de DOM en SVG `getNumberOfChars()`, `getComputedTextLength()`, `getSubStringLength()`, `getStartPositionOfChar()`, `getEndPositionOfChar()`, `getRotationOfChar()` y `getCharNumAtPosition()`.
- Implementación del atributo `xml:space` ([especificación](https://www.w3.org/TR/SVG/text.html#WhiteSpace)).
- Se ha implementado el comportamiento por defecto de `fill`/`stroke` ([especificación](https://www.w3.org/TR/SVG/painting.html#SpecifyingPaint)).
- Se implementan ya las unidades `em` y `ex` para indicar longitudes ({{ Bug(305859) }}).

### Vea también

- [SVG](/es/SVG)
- [SVG en Firefox](/es/SVG_en_Firefox)
- [Firefox 3 para desarrolladores](/es/Firefox_3_para_desarrolladores)
