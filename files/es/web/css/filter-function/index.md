---
title: <filter-function>
slug: Web/CSS/filter-function
tags:
  - CSS
  - Efectos de Filtro
  - Referencia
  - Tipos de dato CSS
translation_of: Web/CSS/filter-function
---
{{cssref}}

El [tipo de datos](/es/docs/Web/CSS/CSS_Types) [CSS](/es/docs/Web/CSS) **`<filter-function>`** representa un efecto gráfico que puede cambiar la apariencia de una imagen de entrada. Se usa en las propiedades {{cssxref("filter")}} y {{cssxref("backdrop-filter")}}.

## Sintaxis

El tipo de datos `<filter-function>` se especifica utilizando una de las funciones de filtro enumeradas a continuación. Cada función requiere un argumento que, si no es válido, da como resultado que no se aplique ningún filtro.

- [`blur()`](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/blur)
  - : Difumina la imagen.
- [`brightness()`](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/brightness)
  - : Hace que la imagen sea más brillante o más oscura.
- [`contrast()`](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/contrast)
  - : Aumenta o disminuye el contraste de la imagen.
- [`drop-shadow()`](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/drop-shadow)
  - : Aplica una sombra paralela detrás de la imagen.
- [`grayscale()`](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/grayscale)
  - : Convierte la imagen a escala de grises.
- [`hue-rotate()`](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/hue-rotate)
  - : Cambia el tono general de la imagen.
- [`invert()`](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/invert)
  - : Invierte los colores de la imagen.
- [`opacity()`](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/opacity)
  - : Hace que la imagen sea transparente.
- [`saturate()`](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/saturate)
  - : Super-saturado o desaturado la imagen de entrada.
- [`sepia()`](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/sepia)
  - : Convierte la imagen a sepia.

## Especificación

| Especificación                                                                                                   | Estado                               | Comentarios         |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ------------------- |
| {{ SpecName('Filters 1.0', '#typedef-filter-function', '&lt;filter-function&gt;') }} | {{ Spec2('Filters 1.0') }} | Definición inicial. |

## Ver también

- Propiedades que usan este tipo de datos: {{cssxref("filter")}} y {{cssxref("backdrop-filter")}}
