---
title: <length>
slug: Web/CSS/length
---

{{CSSRef}}

## Resumen

El tipo de dato [CSS](/es/docs/Web/CSS) `<length>` denota medidas de distancia. Es un valor {{cssxref("&lt;number&gt;")}} seguido por una unidad de longitud (`px`, `em`, `pc`, `in`, `mm`, …). Al igual que en cualquier dimensión CSS, no debe haber espacio entre la unidad y el número. La unidad de longitud es opcional después del valor {{cssxref("&lt;number&gt;")}} `0`.

Muchas propiedades CSS ([CSS properties](/es/CSS_Reference)) reciben valores `<length>`, como por ejemplo {{ Cssxref("width") }}, {{ Cssxref("margin-top") }}, y {{ Cssxref("font-size") }}.

Para algunas propiedades, el uso de longitudes negativas es un error de sintaxis, mientras que para algunas propiedades está permitido. Nótese que aunque los valores {{cssxref("&lt;percentage&gt;")}} también son dimensiones CSS y son aceptadas por algunas propiedades CSS que aceptan valores `<length>`, no son valores `<length>` en sí.

## Interpolación

Los valores de tipo `<length>` pueden ser interpolados para permitir animaciones. En este caso son interpolados como números reales, de punto flotante. La interpolación sucede en el valor calculado. La velocidad de la interpolación es definida por la función {{cssxref("&lt;timing-function&gt;")}} asociada a la animación.

## Unidades

### Unidades de longitud relativa

#### Longitudes relativas a la fuente

- `em`

  - : Esta unidad representa el tamaño calculado de fuente ({{Cssxref("font-size")}}) del elemento. Si se usa dentro de la propiedad {{Cssxref("font-size")}}, representa el tamaño de fuente _heredado_ por el elemento.

    > [!NOTE]
    > Esta unidad se usa por lo general para crear interfaces escalables, que mantengan el [ritmo vertical de la página](http://24ways.org/2006/compose-to-a-vertical-rhythm), aun cuando el usuario cambie el tamaño de las fuentes. Las propiedades CSS {{cssxref("line-height")}}, {{cssxref("font-size")}}, {{cssxref("margin-bottom")}} y {{cssxref("margin-top")}} generalemente tienen valores expresados en **em**.

- `ex`
  - : Esta unidad representa la [altura de la x](https://es.wikipedia.org/wiki/Altura_de_la_x) de la fuente ({{Cssxref("font")}}) del elemento. En fuentes que incluyen la letra 'x', es generalmente la altura de letras minúsculas en la fuente; `1ex ≈ 0.5em` en muchas fuentes.
- `ch`
  - : Esta unidad representa la anchura, o más precisamente, la medida de avance, del glifo '0' (cero, de caracter Unicode U+0030) en la fuente ({{Cssxref("font")}}) del elemento.
- `rem`

  - : Esta unidad representa el tamaño ({{Cssxref("font-size")}}) del elemento raíz (p.ej. el tamaño de fuente del elemento {{HTMLElement("html")}}). Cuando se aplica a {{Cssxref("font-size")}} del elemento raíz, representa su valor inicial.

    > [!NOTE]
    > Esta unidad es práctica para crear interfaces perfectamente escalables. Si no es soportada por los navegadores, se puede recurrir a unidades **em**, aunque estas son ligeramente más complejas.

#### Longitudes de porcentaje del viewport

Las longitudes de porcentaje del viewport definen una longitud relativa al tamaño del viewport, que es la porción visible del documento. Solamente los navegadores basados en Gecko actualizan los valores del viewport dinámicamente, cuando el tamaño de éste es modificado (al cambiar el tamaño de la ventana en una computadora de escritorio, o al girar el dispositivo, en teléfonos y tablets).

En conjunto con `overflow:auto`, el espacio tomado por barras de desplazamiento no es restado al tamaño del viewport, mientras en el caso de `overflow:scroll`, sí lo es.

En un bloque de declaración de la regla-at {{cssxref("@page")}}, el uso de longitudes de viewport es inválido, y la declaración será desechada.

- `vh`
  - : 1/100 de la altura del viewport.
- `vw`
  - : 1/100 de la anchura del viewport.
- `vmin`
  - : 1/100 del valor mínimo entre la altura y anchura del viewport.
- `vmax`
  - : 1/100 del valor máximo entre la altura y anchura del viewport.

### Unidades de longitud absoluta

Las unidades de longitud absoluta representan una medida física, y cuando las propiedades físicas del medio de salida son conocidas, como en diseño para impresión. Esto se hace anclando una de las unidades a una unidad física, y definiendo el resto con relación a ésta. La definición del ancla difiere entre dispositivos de baja resolución, como pantallas, y dispositivos de alta resolución, como impresoras.

Para dispositivos de ppp bajo, la unidad **px** representa el _píxel de referencia_ físico, y el resto son definidos con relación a éste. Así, `1in` es definido como `96px`, que equivalen a `72pt`. La consecuencia de esta definición es que en dichos dispositivos, las longitudes descritas en pulgadas (`in`), centrímetros (`cm`), milímetros (`mm`) no necesariamente conincidirán con la longitud de la unidad física del mismo nombre.

Para dispositivos de alto ppp, las pulgadas (`in`), centrímetros (`cm`), milímetros (`mm`) son definidos como su contraparte física. De esta forma, la unidad **px** es definida con relación a ellas (1/96 de 1 pulgada).

> [!NOTE]
> Los usuarios pueden incrementar el tamaño de fuente por razones de accesibilidad. Para permitir interfaces usables sin importar el tamao de fuente, use únicamente unidades de longitud absolutas cuando las características físicas del medio de salida son conocidas, como imágenes de mapa de bits. Al establecer longitudes relacionadas al tamaño de fuente, es preferible usar unidades relativas, como `em` o `rem`.

- `px`
  - : Relativa al dispositivo de visualización.
    Para pantallas, generalmente es el tamaño de un píxel (punto) de la pantalla del dispositivo.
    Para _impresoras_ y _pantallas de muy alta resolución_, un píxel CSS implica múltiples píxeles del dispositivo, de modo que el número de píxeles por pulgada se mantenga al rededor de 96.
- `mm`
  - : Un milímetro.
- `q`
  - : Un cuarto de milímetro (1/40° de centímetro).
- `cm`
  - : Un centímetro (10 milímetros).
- `in`
  - : Una pulgada (2.54 centímetros).
- `pt`
  - : Un punto (1/72° de pulgada).
- `pc`
  - : Una pica (12 puntos).
- `mozmm` {{non-standard_inline}}
  - : Una unidad experimental que intenta generar exactamente un milímetro, sin importar el tamaño de resolución de la pantalla. Esto raramente será lo que se desea, pero podría ser útil para dispositivos móviles, en particular.

## Unidades CSS y puntos por pulgada (dots-per-inch)

> [!NOTE]
> La unidad `in` no representa una pulgada física en pantalla, sino `96px`. Esto significa que sin importar la densidad de píxeles real en pantalla, se asume que serán `96ppp`. En dispositivos con mayor densidad de píxeles, `1in` será menor que una pulgada física. De forma similar, `mm`, `cm`, y `pt` no son longitudes absolutas.

Algunos ejemplos específicos:

- `1in` siempre son `96px,`
- `3pt` siempre son `4px`,
- `25.4mm` siempre son `96px.`

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
