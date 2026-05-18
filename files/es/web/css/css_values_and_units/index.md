---
title: Valores y unidades CSS
slug: Web/CSS/CSS_values_and_units
l10n:
  sourceCommit: 11ef719d1a0bd75b1600d39abd6dfbdcd835c1e2
---

Cada declaración CSS consiste en un par de propiedad y valor. El valor puede tomar varias formas dependiendo de la propiedad, como un solo entero, palabra clave, función o una combinación de diferentes elementos; algunos valores tienen unidades, mientras que otros no las tienen. Cada propiedad también acepta los valores globales de CSS. El módulo de valores y unidades CSS define los tipos de datos — valores y unidades — que aceptan las propiedades CSS. Este módulo también define la sintaxis de definición de valores, o gramática formal, utilizada para definir el conjunto de valores válidos para cada propiedad y función en CSS.

## Referencia

### Propiedades

- {{cssxref("interpolate-size")}}

### Funciones

- {{cssxref("abs()")}}
- {{cssxref("acos()")}}
- {{cssxref("asin()")}}
- {{cssxref("atan()")}}
- {{cssxref("atan2()")}}
- {{cssxref("attr()")}}
- {{cssxref("calc()")}}
- {{cssxref("calc-size()")}}
- {{cssxref("clamp()")}}
- {{cssxref("cos()")}}
- {{cssxref("exp()")}}
- {{cssxref("hypot()")}}
- {{cssxref("ident()")}}
- {{cssxref("if()")}}
- {{cssxref("inherit()")}}
- {{cssxref("log()")}}
- {{cssxref("max()")}}
- {{cssxref("min()")}}
- {{cssxref("mod()")}}
- {{cssxref("pow()")}}
- {{cssxref("progress()")}}
- {{cssxref("rem()")}}
- {{cssxref("round()")}}
- {{cssxref("sibling-count()")}}
- {{cssxref("sibling-index()")}}
- {{cssxref("sign()")}}
- {{cssxref("sin()")}}
- {{cssxref("sqrt()")}}
- {{cssxref("tan()")}}
- {{cssxref("url_function", "url()")}}

El módulo de valores y unidades CSS también introduce las funciones `calc-mix()`, `crossorigin()`, `first-valid()`, `integrity()`, `random()`, `random-item()`, `referrerpolicy()`, `src()`, `type()` y `toggle()`. Actualmente, ningún navegador es compatible con estas funciones.

### Tipos de datos

- [`<angle-percentage>`](/es/docs/Web/CSS/angle-percentage)
- [`<angle>`](/es/docs/Web/CSS/angle)
- [`<animation-timeline>`](/es/docs/Web/CSS/animation-timeline)
- [`<attr-name>`](/es/docs/Web/CSS/attr#attr-name)
- [`<attr-type>`](/es/docs/Web/CSS/attr#attr-type)
- {{CSSxRef("&lt;calc-keyword&gt;")}} (`e`, `pi`, `infinity`, {{glossary("NaN")}})
- [`<calc-size-basis>`](/es/docs/Web/CSS/calc-size#calc-size-basis)
- [`<calc-sum>`](/es/docs/Web/CSS/calc-sum)
- [`<custom-ident>`](/es/docs/Web/CSS/custom-ident)
- [`<dashed-ident>`](/es/docs/Web/CSS/dashed-ident)
- [`<dimension>`](/es/docs/Web/CSS/dimension)
- [`<easing-function>`](/es/docs/Web/CSS/easing-function)
- [`<first-valid()>`](/es/docs/Web/CSS)
- [`<ident>`](/es/docs/Web/CSS/ident)
- [`<integer>`](/es/docs/Web/CSS/integer)
- [`<length-percentage>`](/es/docs/Web/CSS/length-percentage)
- [`<length>`](/es/docs/Web/CSS/length)
- [`<number>`](/es/docs/Web/CSS/number)
- [`<percentage>`](/es/docs/Web/CSS/percentage)
- [`<position>`](/es/docs/Web/CSS/position)
- [`<ratio>`](/es/docs/Web/CSS/ratio)
- [`<resolution>`](/es/docs/Web/CSS/resolution)
- [`<rounding-strategy>`](/es/docs/Web/CSS/round#rounding-strategy) (`down`, `up`, `to-zero`)
- [`<string>`](/es/docs/Web/CSS/string)
- [`<syntax>`](/es/docs/Web/CSS/CSS_syntax/Syntax)
- [`<time-percentage>`](/es/docs/Web/CSS/time-percentage)
- [`<time>`](/es/docs/Web/CSS/time)
- [`<url>`](/es/docs/Web/CSS/url_value)
- [`<url-modifier>`](/es/docs/Web/CSS/url_function#url-modifier)
- [`<view-timeline-name>`](/es/docs/Web/CSS/view-timeline-name)

El módulo de valores y unidades CSS también introduce los tipos de datos [`<frequency>`](/es/docs/Web/CSS/frequency) y [`<frequency-percentage>`](/es/docs/Web/CSS/frequency-percentage). Actualmente, ningún navegador es compatible con estos tipos de datos.

#### Unidades

- [`%` (porcentaje)](/es/docs/Web/CSS/percentage)
- [`cap`](/es/docs/Web/CSS/length#cap)
- [`ch`](/es/docs/Web/CSS/length#ch)
- [`cm`](/es/docs/Web/CSS/length#cm)
- [`deg`](/es/docs/Web/CSS/angle#deg)
- [`dpcm`](/es/docs/Web/CSS/resolution#dpcm)
- [`dpi`](/es/docs/Web/CSS/resolution#dpi)
- [`dppx`](/es/docs/Web/CSS/resolution#dppx)
- [`dvb`](/es/docs/Web/CSS/length#vb)
- [`dvh`](/es/docs/Web/CSS/length#vh)
- [`dvi`](/es/docs/Web/CSS/length#vi)
- [`dvmax`](/es/docs/Web/CSS/length#vmax)
- [`dvmin`](/es/docs/Web/CSS/length#vmin)
- [`dvw`](/es/docs/Web/CSS/length#vw)
- [`em`](/es/docs/Web/CSS/length#em)
- [`ex`](/es/docs/Web/CSS/length#ex)
- [`grad`](/es/docs/Web/CSS/angle#grad)
- [`Hz`](/es/docs/Web/CSS/frequency#hz)
- [`ic`](/es/docs/Web/CSS/length#ic)
- [`in`](/es/docs/Web/CSS/length#in)
- [`kHz`](/es/docs/Web/CSS/frequency#khz)
- [`lh`](/es/docs/Web/CSS/length#lh)
- [`lvb`](/es/docs/Web/CSS/length#vb)
- [`lvh`](/es/docs/Web/CSS/length#vh)
- [`lvi`](/es/docs/Web/CSS/length#vi)
- [`lvmax`](/es/docs/Web/CSS/length#vmax)
- [`lvmin`](/es/docs/Web/CSS/length#vmin)
- [`lvw`](/es/docs/Web/CSS/length#vw)
- [`mm`](/es/docs/Web/CSS/length#mm)
- [`ms`](/es/docs/Web/CSS/time#ms)
- [`pc`](/es/docs/Web/CSS/length#pc)
- [`pt`](/es/docs/Web/CSS/length#pt)
- [`px`](/es/docs/Web/CSS/length#px)
- [`Q`](/es/docs/Web/CSS/length#q)
- [`rad`](/es/docs/Web/CSS/angle#rad)
- [`rcap`](/es/docs/Web/CSS/length#rcap)
- [`rch`](/es/docs/Web/CSS/length#rch)
- [`rem`](/es/docs/Web/CSS/length#rem)
- [`rex`](/es/docs/Web/CSS/length#rex)
- [`ric`](/es/docs/Web/CSS/length#ric)
- [`rlh`](/es/docs/Web/CSS/length#rlh)
- [`s`](/es/docs/Web/CSS/time#s)
- [`svb`](/es/docs/Web/CSS/length#vb)
- [`svh`](/es/docs/Web/CSS/length#vh)
- [`svi`](/es/docs/Web/CSS/length#vi)
- [`svmax`](/es/docs/Web/CSS/length#vmax)
- [`svmin`](/es/docs/Web/CSS/length#vmin)
- [`svw`](/es/docs/Web/CSS/length#vw)
- [`turn`](/es/docs/Web/CSS/angle#turn)
- [`vb`](/es/docs/Web/CSS/length#vb)
- [`vh`](/es/docs/Web/CSS/length#vh)
- [`vi`](/es/docs/Web/CSS/length#vi)
- [`vmax`](/es/docs/Web/CSS/length#vmax)
- [`vmin`](/es/docs/Web/CSS/length#vmin)
- [`vw`](/es/docs/Web/CSS/length#vw)
- [`x`](/es/docs/Web/CSS/resolution#x)

[Unidades flexibles](/es/docs/Web/CSS/CSS_values_and_units/Numeric_data_types#unidades_flexibles) (`fr`) y [unidades de contenedor](/es/docs/Web/CSS/CSS_values_and_units/Numeric_data_types#unidades_de_contenedor) (`cqb`, `cqh`, `cqi`, `cqmax`, `cqmin`, `cqw`) son definidas en los módulos [CSS grid layout](/es/docs/Web/CSS/CSS_grid_layout) y [CSS reglas condicionales](/es/docs/Web/CSS/CSS_conditional_rules), respectivamente.

#### Categorizaciones de unidades

- [Unidades de longitud absoluta](/es/docs/Web/CSS/CSS_values_and_units/Numeric_data_types#unidades_de_longitud_absoluta) (`cm`, `in`, `mm`, `pc`, `pt`, `px`, `Q`)
- [Unidades de ángulo](/es/docs/Web/CSS/CSS_values_and_units/Numeric_data_types#unidades_de_ángulo) (`deg`, `grad`, `rad`, `turn`)
- [Unidades del viewport por defecto](/es/docs/Web/CSS/length#unidades_del_viewport_por_defecto) (`vb` , `vh`, `vi` , `vmax`, `vmin`, `vw`)
- [Unidades dinámicas del viewport](/es/docs/Web/CSS/length#unidades_dinámicas_del_viewport) (`dvb`, `dvh`, `dvi`, `dvmax`, `dvmin`, `dvw`)
- [Unidades de frecuencia](/es/docs/Web/CSS/CSS_values_and_units/Numeric_data_types#unidades_de_frecuencia) (`Hz`, `kHz`)
- [Unidades del porcentaje del viewport grande](/es/docs/Web/CSS/length#unidades_del_viewport_grande) (`lvb`, `lvh`, `lvi`, `lvmax`, `lvmin`, `lvw`)
- [Unidades de longitud relativas a la fuente local](/es/docs/Web/CSS/CSS_values_and_units/Numeric_data_types#longitudes_relativas_a_la_fuente_local) (`cap`, `ch`, `em`, `ex`, `ic`, `lh`)
- [Unidades físicas](/es/docs/Web/CSS/CSS_values_and_units/Numeric_data_types#unidades_de_longitud_absoluta) (`cm`, `in`, `mm`, `pc`, `pt`, `Q`)
- [Unidades de longitud relativa](/es/docs/Web/CSS/CSS_values_and_units/Numeric_data_types) (`cap`, `ch`, `em`, `ex`, `ic`, `lh`, `rem`, `rlh`, `vb`, `vh`, `vi`, `vmax`, `vmin`, `vw`)
- [Unidades de resolución](/es/docs/Web/CSS/CSS_values_and_units/Numeric_data_types#unidades_de_resolución) (`dpcm`, `dpi` , `dppx`, `x`)
- [Unidades de longitud relativas a la fuente raíz](/es/docs/Web/CSS/CSS_values_and_units/Numeric_data_types#longitudes_relativas_a_la_fuente_raíz) (`rcap`, `rch`, `rem`, `rex`, `ric`, `rlh`)
- [Unidades del porcentaje del viewport pequeño](/es/docs/Web/CSS/length#unidades_del_viewport_pequeño) (`svb`, `svh`, `svi`, `svmax`, `svmin`, `svw`)
- [Unidades de tiempo](/es/docs/Web/CSS/CSS_values_and_units/Numeric_data_types#unidades_de_tiempo) (`ms`, `s`)
- [Unidades del viewport](/es/docs/Web/CSS/CSS_values_and_units/Numeric_data_types#unidades_del_viewport) (`dvh`, `dvw`, `lvh`, `lvw`, `svh`, `svw`, `vb` , `vh`, `vi` , `vmax`, `vmin`, `vw`)
- [Unidad del ángulo visual](/es/docs/Web/CSS/CSS_values_and_units/Numeric_data_types#unidades_de_longitud_absoluta) (`px`)

### Conceptos clave

- {{glossary("Advance measure")}}
- [Notación de rango entre corchetes](/es/docs/Web/CSS/CSS_values_and_units/Value_definition_syntax#notación_de_rango_entre_corchetes_minmax)
- [Combinadores de valores de componentes](/es/docs/Web/CSS/CSS_values_and_units/Value_definition_syntax#combinadores_de_valores_de_componentes)
- [Palabras clave globales en CSS](/es/docs/Web/CSS/CSS_values_and_units/CSS_data_types#palabras_clave_globales_en_CSS)
- {{glossary("Device pixel")}}
- [Notación funcional](/es/docs/Web/CSS/CSS_values_and_units/CSS_value_functions)
- {{glossary("Identifier")}}
- {{glossary("Interpolation")}}
- {{glossary("Keyword")}}
- [Funciones matemáticas](/es/docs/Web/CSS/CSS_values_and_units/Using_CSS_math_functions)
- [Tipos de datos numéricos](/es/docs/Web/CSS/CSS_values_and_units/Numeric_data_types)
- {{glossary("Origin")}}
- {{glossary("Pixel")}}
- [Tipos de datos textuales](/es/docs/Web/CSS/CSS_values_and_units/Textual_data_types)
- {{glossary("URL")}}
- [Sintaxis de definición de valores](/es/docs/Web/CSS/CSS_values_and_units/Value_definition_syntax)

## Guías

- [Tipos de datos en CSS](/es/docs/Web/CSS/CSS_values_and_units/CSS_data_types)
  - : Introducción a los tipos de datos en CSS que definen valores típicos que son aceptados por las propiedades y funciones en CSS.

- [Tipos de datos numéricos](/es/docs/Web/CSS/CSS_values_and_units/Numeric_data_types)
  - : Resumen de los tipos de datos numéricos, incluyendo los enteros, números, porcentajes y dimensiones, junto con dimensiones relativas y absolutas, ángulos y unidades de tiempo.

- [Tipos de datos textuales](/es/docs/Web/CSS/CSS_values_and_units/Textual_data_types)
  - : Resumen de los tipos de datos textuales, incluyendo valores predefinidos de palabras clave, valores globales de palabras clave y las URLs.

- [Funciones de valor en CSS](/es/docs/Web/CSS/CSS_values_and_units/CSS_value_functions)
  - : Resumen de las declaraciones de CSS que invocan procesamiento especial de datos o cálculos para devolver un valor de CSS para una propiedad de CSS.

- [Usando funciones de matemáticas en CSS](/es/docs/Web/CSS/CSS_values_and_units/Using_CSS_math_functions)
  - : Las funciones de matemáticas en CSS que permiten que un valor de una propiedad se escriba como una expresión matemática.

- [Sintaxis de definición de valores](/es/docs/Web/CSS/CSS_values_and_units/Value_definition_syntax)
  - : La gramática formal utilizada para definir el conjunto de valores válidos para propiedades y funciones en CSS.

- [Usando aritmética tipada en CSS](/es/docs/Web/CSS/CSS_values_and_units/Using_CSS_typed_arithmetic)
  - : Una explicación del comportamiento de aritmética tipada y los casos de uso que permite.

- [Aprende: Valores y unidades](/es/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
  - : Una revisión de unos de los tipos de valores más frecuentemente utilizados, qué son y cómo funcionan.

## Módulos relacionados

- [Cascada y herencia en CSS](/es/docs/Web/CSS/CSS_cascade)
  - {{cssxref("initial")}}
  - {{cssxref("inherit")}}
  - {{cssxref("revert")}}
  - {{cssxref("revert-layer")}}
  - {{cssxref("unset")}}
  - {{cssxref("all")}}

- [CSS grid layout](/es/docs/Web/CSS/CSS_grid_layout)
  - {{cssxref("&lt;flex&gt;")}}
  - [Unidades flexibles](/es/docs/Web/CSS/CSS_values_and_units/Numeric_data_types#unidades_flexibles) (`fr`)

- [Reglas condicionales en CSS](/es/docs/Web/CSS/CSS_conditional_rules)
  - [Unidades de contenedor en CSS](/es/docs/Web/CSS/CSS_values_and_units/Numeric_data_types#unidades_de_contenedor) (`cqb`, `cqh`, `cqi`, `cqmax`, `cqmin`, `cqw`)

- [Colores en CSS](/es/docs/Web/CSS/CSS_colors)
  - {{cssxref("&lt;color&gt;")}}
  - {{cssxref("system-color")}}
  - [`color-mix()`](/es/docs/Web/CSS/color_value/color-mix)

- [Imágenes en CSS](/es/docs/Web/CSS/CSS_images)
  - {{cssxref("&lt;image&gt;")}}
  - {{cssxref("&lt;gradient&gt;")}}

## Especificaciones

{{Specifications}}

## Véase también

- El módulo del [sintaxis de CSS](/es/docs/Web/CSS/CSS_syntax)
- El módulo de los [selectores de CSS](/es/docs/Web/CSS/CSS_selectors)
