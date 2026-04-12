---
title: Valores y Unidades de CSS
short-title: Valores y unidades
slug: Web/CSS/Guides/Values_and_units
l10n:
  sourceCommit: c8522f47d8123fe529f39851b13b9fc01345ffbf
---

Cada declaración CSS, consiste en un par propiedad/valor. El valor puede tomar varias formas dependiendo de la propiedad, como puede ser un solo entero, una palabra clave, una función o una combinacion de elementos diferentes; algunos valores tienen unidades, mientras que otros no. Cada propiedad acepta también los valores de todo CSS. El módulo de valores y unidades, define los tipos de datos - valores y unidades - que las propiedades CSS aceptan. Este módulo también define la sintáxis de valores CSS, o la grámatica formal usada para definir un conjunto de valores validos para cada propiedad y función CSS.

> [!NOTE]
> Esta página introduce un módulo CSS. Para encontrar una lista exaustiva de todos los valores, tipos y funciones definidas por la especificación de CSS, vea la página de referencia de los [valores](/es/docs/Web/CSS/Reference/Values).


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
- {{cssxref("random()")}}
- {{cssxref("rem()")}}
- {{cssxref("round()")}}
- {{cssxref("sibling-count()")}}
- {{cssxref("sibling-index()")}}
- {{cssxref("sign()")}}
- {{cssxref("sin()")}}
- {{cssxref("sqrt()")}}
- {{cssxref("tan()")}}
- {{cssxref("url_function", "url()")}}

El módulo de valores y unidades CSS también introduce las funciones `calc-mix()`, `first-valid()`, `integrity()`, `random-item()`, `src()`, `type()`, y `toggle()`. Actualmente, ningún navegador soporta estas funciones.

### Tipos de datos

- {{cssxref("angle-percentage")}}
- {{cssxref("angle")}}
- [`<attr-name>`](/es/docs/Web/CSS/Reference/Values/attr#attr-name)
- [`<attr-type>`](/es/docs/Web/CSS/Reference/Values/attr#attr-type)
- {{CSSxRef("&lt;calc-keyword&gt;")}} (`e`, `pi`, `infinity`, {{glossary("NaN")}})
- [`<calc-size-basis>`](/es/docs/Web/CSS/Reference/Values/calc-size#calc-size-basis)
- {{cssxref("calc-sum")}}
- {{cssxref("custom-ident")}}
- {{cssxref("dashed-ident")}}
- {{cssxref("dimension")}}
- {{cssxref("easing-function")}}
- {{cssxref("ident")}}
- {{cssxref("integer")}}
- {{cssxref("length-percentage")}}
- {{cssxref("length")}}
- {{cssxref("number")}}
- {{cssxref("percentage")}}
- {{cssxref("&lt;position&gt;")}}
- {{cssxref("ratio")}}
- {{cssxref("resolution")}}
- [`<rounding-strategy>`](/es/docs/Web/CSS/Reference/Values/round#rounding-strategy) (`down`, `up`, `to-zero`)
- {{cssxref("string")}}
- [`<syntax>`](/es/docs/Web/CSS/Guides/Syntax/Introduction)
- {{cssxref("time-percentage")}}
- {{cssxref("time")}}
- {{cssxref("url_value", "&lt;url&gt;")}}
- [`<url-modifier>`](/es/docs/Web/CSS/Reference/Values/url_function#url-modifier)

El módulo de valores y unidades también introduce los tipos de datos {{cssxref("frequency")}} y {{cssxref("frequency-percentage")}}. Actualmente, ningún navegador soporta estos tipos de dato.

#### Unidades

- [`%` (percentage)](/es/docs/Web/CSS/Reference/Values/percentage)
- [`cap`](/es/docs/Web/CSS/Reference/Values/length#cap)
- [`ch`](/es/docs/Web/CSS/Reference/Values/length#ch)
- [`cm`](/es/docs/Web/CSS/Reference/Values/length#cm)
- [`deg`](/es/docs/Web/CSS/Reference/Values/angle#deg)
- [`dpcm`](/es/docs/Web/CSS/Reference/Values/resolution#dpcm)
- [`dpi`](/es/docs/Web/CSS/Reference/Values/resolution#dpi)
- [`dppx`](/es/docs/Web/CSS/Reference/Values/resolution#dppx)
- [`dvb`](/es/docs/Web/CSS/Reference/Values/length#vb)
- [`dvh`](/es/docs/Web/CSS/Reference/Values/length#vh)
- [`dvi`](/es/docs/Web/CSS/Reference/Values/length#vi)
- [`dvmax`](/es/docs/Web/CSS/Reference/Values/length#vmax)
- [`dvmin`](/es/docs/Web/CSS/Reference/Values/length#vmin)
- [`dvw`](/es/docs/Web/CSS/Reference/Values/length#vw)
- [`em`](/es/docs/Web/CSS/Reference/Values/length#em)
- [`ex`](/es/docs/Web/CSS/Reference/Values/length#ex)
- [`grad`](/es/docs/Web/CSS/Reference/Values/angle#grad)
- [`Hz`](/es/docs/Web/CSS/Reference/Values/frequency#hz)
- [`ic`](/es/docs/Web/CSS/Reference/Values/length#ic)
- [`in`](/es/docs/Web/CSS/Reference/Values/length#in)
- [`kHz`](/es/docs/Web/CSS/Reference/Values/frequency#khz)
- [`lh`](/es/docs/Web/CSS/Reference/Values/length#lh)
- [`lvb`](/es/docs/Web/CSS/Reference/Values/length#vb)
- [`lvh`](/es/docs/Web/CSS/Reference/Values/length#vh)
- [`lvi`](/es/docs/Web/CSS/Reference/Values/length#vi)
- [`lvmax`](/es/docs/Web/CSS/Reference/Values/length#vmax)
- [`lvmin`](/es/docs/Web/CSS/Reference/Values/length#vmin)
- [`lvw`](/es/docs/Web/CSS/Reference/Values/length#vw)
- [`mm`](/es/docs/Web/CSS/Reference/Values/length#mm)
- [`ms`](/es/docs/Web/CSS/Reference/Values/time#ms)
- [`pc`](/es/docs/Web/CSS/Reference/Values/length#pc)
- [`pt`](/es/docs/Web/CSS/Reference/Values/length#pt)
- [`px`](/es/docs/Web/CSS/Reference/Values/length#px)
- [`Q`](/es/docs/Web/CSS/Reference/Values/length#q)
- [`rad`](/es/docs/Web/CSS/Reference/Values/angle#rad)
- [`rcap`](/es/docs/Web/CSS/Reference/Values/length#rcap)
- [`rch`](/es/docs/Web/CSS/Reference/Values/length#rch)
- [`rem`](/es/docs/Web/CSS/Reference/Values/length#rem)
- [`rex`](/es/docs/Web/CSS/Reference/Values/length#rex)
- [`ric`](/es/docs/Web/CSS/Reference/Values/length#ric)
- [`rlh`](/es/docs/Web/CSS/Reference/Values/length#rlh)
- [`s`](/es/docs/Web/CSS/Reference/Values/time#s)
- [`svb`](/es/docs/Web/CSS/Reference/Values/length#vb)
- [`svh`](/es/docs/Web/CSS/Reference/Values/length#vh)
- [`svi`](/es/docs/Web/CSS/Reference/Values/length#vi)
- [`svmax`](/es/docs/Web/CSS/Reference/Values/length#vmax)
- [`svmin`](/es/docs/Web/CSS/Reference/Values/length#vmin)
- [`svw`](/es/docs/Web/CSS/Reference/Values/length#vw)
- [`turn`](/es/docs/Web/CSS/Reference/Values/angle#turn)
- [`vb`](/es/docs/Web/CSS/Reference/Values/length#vb)
- [`vh`](/es/docs/Web/CSS/Reference/Values/length#vh)
- [`vi`](/es/docs/Web/CSS/Reference/Values/length#vi)
- [`vmax`](/es/docs/Web/CSS/Reference/Values/length#vmax)
- [`vmin`](/es/docs/Web/CSS/Reference/Values/length#vmin)
- [`vw`](/es/docs/Web/CSS/Reference/Values/length#vw)
- [`x`](/es/docs/Web/CSS/Reference/Values/resolution#x)

[Flex units](/es/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#flex_units) (`fr`) and [container units](/es/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#container_units) (`cqb`, `cqh`, `cqi`, `cqmax`, `cqmin`, `cqw`) are defined in the [CSS grid layout](/es/docs/Web/CSS/Guides/Grid_layout) and [CSS conditional rules](/es/docs/Web/CSS/Guides/Conditional_rules) modules, respectively.

#### Categorización de las unidades

- [Absolute length units](/es/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#absolute_length_units) (`cm`, `in`, `mm`, `pc`, `pt`, `px`, `Q`)
- [Angle units](/es/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#angle_units) (`deg`, `grad`, `rad`, `turn`)
- [Default viewport units](/es/docs/Web/CSS/Reference/Values/length#default_viewport_units) (`vb` , `vh`, `vi` , `vmax`, `vmin`, `vw`)
- [Dynamic viewport units](/es/docs/Web/CSS/Reference/Values/length#dynamic_viewport_units) (`dvb`, `dvh`, `dvi`, `dvmax`, `dvmin`, `dvw`)
- [Frequency units](/es/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#frequency_units) (`Hz`, `kHz`)
- [Large viewport-percentage units](/es/docs/Web/CSS/Reference/Values/length#large_viewport_units) (`lvb`, `lvh`, `lvi`, `lvmax`, `lvmin`, `lvw`)
- [Local font-relative length units](/es/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#local_font-relative_lengths) (`cap`, `ch`, `em`, `ex`, `ic`, `lh`)
- [Physical units](/es/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#absolute_length_units) (`cm`, `in`, `mm`, `pc`, `pt`, `Q`)
- [Relative length units](/es/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types) (`cap`, `ch`, `em`, `ex`, `ic`, `lh`, `rem`, `rlh`, `vb`, `vh`, `vi`, `vmax`, `vmin`, `vw`)
- [Resolution units](/es/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#resolution_units) (`dpcm`, `dpi` , `dppx`, `x`)
- [Root font-relative length units](/es/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#root_font-relative_lengths) (`rcap`, `rch`, `rem`, `rex`, `ric`, `rlh`)
- [Small viewport-percentage unit](/es/docs/Web/CSS/Reference/Values/length#small_viewport_units) (`svb`, `svh`, `svi`, `svmax`, `svmin`, `svw`)
- [Time units](/es/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#time_units) (`ms`, `s`)
- [Viewport units](/es/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#viewport_units) (`dvh`, `dvw`, `lvh`, `lvw`, `svh`, `svw`, `vb` , `vh`, `vi` , `vmax`, `vmin`, `vw`)
- [Visual angle unit](/es/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#absolute_length_units) (`px`)

### Conceptos clave

- {{glossary("Advance measure")}}
- [Bracketed range notation](/es/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax#bracketed_range_notation_minmax)
- [Component value combinators](/es/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax#component_value_combinators)
- [CSS-wide keywords](/es/docs/Web/CSS/Reference/Values/Data_types#css-wide_keywords)
- {{glossary("Device pixel")}}
- [Functional notation](/es/docs/Web/CSS/Reference/Values/Functions)
- {{glossary("Identifier")}}
- {{glossary("Interpolation")}}
- {{glossary("Keyword")}}
- [Math function](/es/docs/Web/CSS/Guides/Values_and_units/Using_math_functions)
- [Numeric data types](/es/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types)
- {{glossary("Origin")}}
- {{glossary("Pixel")}}
- [Textual data types](/es/docs/Web/CSS/Guides/Values_and_units/Textual_data_types)
- {{glossary("URL")}}
- [Value definition syntax](/es/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)

## Guías

- [CSS data types](/es/docs/Web/CSS/Reference/Values/Data_types)
  - : Introducción a los tipos de datos CSS que definen valores aceptados por propiedades y funciones CSS.

- [Tipo de dato Númericos](/es/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types)
  - : Descripción general de los tipos de dato númericos, incluyendo enteros, numbero, porcentajes y dimensiones, junto con dimensiones absolutas y relativas, ángulos y unidades de tiempo.

- [Tipo de dato Textuales](/es/docs/Web/CSS/Guides/Values_and_units/Textual_data_types)
  - : Descripción general de los tipos de dato textuales, incluye valores de palabras reservadas predefinidas, valores de palabras resesrvadas CSS globales y URLs.

- [CSS value functions](/es/docs/Web/CSS/Reference/Values/Functions)
  - : Descripción general de declaraciones CSS que invocan procesamiento especial de datos o cálculos que regresan un valor CSS para una propiedad.

- [Usando funciones matemáticas CSS](/es/docs/Web/CSS/Guides/Values_and_units/Using_math_functions)
  - : Las funciones matemáticas CSS que permiten que los valores de propiedades se escriban como expresiones matemáticas.

- [Sintaxis de definición de Valores](/es/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
  - : La gramótica formal usada para definir un conjunto de valores válidos para propiedades y funciones CSS.

- [Usando aritmética tipada CSS](/es/docs/Web/CSS/Guides/Values_and_units/Using_typed_arithmetic)
  - : Una explicación del comportamiento del tipado aritmético CSS y casos de uso que éste habilita.

- [Aprende: Valores y unidades](/es/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
  - : Una mirada a los tipos de valores usados más frecuentemente, cuáles son y cómo funcionan.

- [Serialización de valores CSS](/es/docs/Web/API/CSS_Object_Model/CSS_value_serialization)
  - : Como las [APIs CSSOM](/es/docs/Web/API/CSS_Object_Model) serializan color y otros valores en representaciones estándar.

## Relacionado

- [Cascada y herencia CSS](/es/docs/Web/CSS/Guides/Cascade)
  - {{cssxref("initial")}}
  - {{cssxref("inherit")}}
  - {{cssxref("revert")}}
  - {{cssxref("revert-layer")}}
  - {{cssxref("unset")}}
  - {{cssxref("all")}}

- [CSS grid layout](/es/docs/Web/CSS/Guides/Grid_layout)
  - {{cssxref("&lt;flex&gt;")}}
  - [Flex units](/es/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#flex_units) (`fr`)

- [Reglas condicionales CSS](/es/docs/Web/CSS/Guides/Conditional_rules)
  - [Container units](/es/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#container_units) (`cqb`, `cqh`, `cqi`, `cqmax`, `cqmin`, `cqw`)

- [Colores CSS](/es/docs/Web/CSS/Guides/Colors)
  - {{cssxref("&lt;color&gt;")}}
  - {{cssxref("system-color")}}
  - [`color-mix()`](/es/docs/Web/CSS/Reference/Values/color_value/color-mix)

- [Imagenes CSS](/es/docs/Web/CSS/Guides/Images)
  - {{cssxref("image")}}
  - {{cssxref("gradient")}}

## Especificaciones

{{Specifications}}

## Vea también

- [Sintaxis CSS](/es/docs/Web/CSS/Guides/Syntax)
- [Selectores CSS](/es/docs/Web/CSS/Guides/Selectors)
