---
title: Tipo CSS `<basic-shape>`
short-title: <basic-shape>
slug: Web/CSS/Reference/Values/basic-shape
l10n:
  sourceCommit: 6edb918a9e6bd17858d48dcfa5d76aa5ed5b9659
---

El [tipo de dato](/es/docs/Web/CSS/Reference/Values/Data_types) [CSS](/es/docs/Web/CSS) **`<basic-shape>`** representa una forma que se usa en las propiedades {{cssxref("border-shape")}}, {{cssxref("clip-path")}}, {{cssxref("offset-path")}} y {{cssxref("shape-outside")}}.

{{InteractiveExample("CSS Demo: &lt;basic-shape&gt;")}}

```css interactive-example-choice
clip-path: inset(22% 12% 15px 35px);
```

```css interactive-example-choice
clip-path: circle(6rem at 12rem 8rem);
```

```css interactive-example-choice
clip-path: ellipse(115px 55px at 50% 40%);
```

```css interactive-example-choice
clip-path: polygon(
  50% 2.4%,
  34.5% 33.8%,
  0% 38.8%,
  25% 63.1%,
  19.1% 97.6%,
  50% 81.3%,
  80.9% 97.6%,
  75% 63.1%,
  100% 38.8%,
  65.5% 33.8%
);
```

```css interactive-example-choice
clip-path: path("M 50,245 A 160,160 0,0,1 360,120 z");
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element"></div>
</section>
```

```css interactive-example
#default-example {
  background: #ffee99;
}

#example-element {
  background: linear-gradient(to bottom right, #ff5522, #0055ff);
  width: 100%;
  height: 100%;
}
```

## Sintaxis

El tipo de dato `<basic-shape>` se usa para crear formas básicas, entre ellas rectángulos [por desplazamientos desde el contenedor](#sintaxis_para_rectángulos_por_desplazamientos_desde_el_contenedor), [por distancia de coordenadas](#sintaxis_para_rectángulos_por_distancia) o [con dimensiones fijas](#sintaxis_para_rectángulos_con_dimensiones), [círculos](#sintaxis_para_círculos), [elipses](#sintaxis_para_elipses), [polígonos](#sintaxis_para_polígonos), [trazados](#sintaxis_para_trazados) y [formas creadas por el autor](#sintaxis_para_formas). Estas formas básicas se definen con una de las funciones CSS de `<basic_shape>`, y cada valor requiere un parámetro que sigue la sintaxis específica de la función de esa forma.

### Parámetros comunes

Los parámetros comunes a la sintaxis de algunas funciones de formas básicas son:

- `round <'border-radius'>`
  - : Define esquinas redondeadas para [rectángulos por desplazamientos desde el contenedor](#sintaxis_para_rectángulos_por_desplazamientos_desde_el_contenedor), [rectángulos por distancia](#sintaxis_para_rectángulos_por_distancia) y [rectángulos con dimensiones](#sintaxis_para_rectángulos_con_dimensiones), con la misma sintaxis que la propiedad abreviada CSS {{cssxref("border-radius")}}.

- `<shape-radius>`
  - : Define el radio de un [círculo](#sintaxis_para_círculos) o de una [elipse](#sintaxis_para_elipses). Los valores válidos son {{cssxref("length")}}, {{cssxref("percentage")}}, `closest-side` (el valor predeterminado), `farthest-side`, `closest-corner` y `farthest-corner`. Los valores negativos no son válidos.

    El valor de palabra clave `closest-side` usa la distancia desde el centro de la forma hasta el lado más cercano de la caja de referencia como longitud del radio. El valor de palabra clave `farthest-side` usa la distancia desde el centro de la forma hasta el lado más lejano de la caja de referencia.
    Del mismo modo, `closest-corner` y `farthest-corner` usan la distancia desde el centro de la forma hasta la esquina más cercana y la más lejana, respectivamente.

- `<position>`
  - : Define la posición {{cssxref("&lt;position&gt;")}} del centro de un [círculo](#sintaxis_para_círculos) o de una [elipse](#sintaxis_para_elipses). Si se omite, su valor predeterminado es `center`.

- `<fill-rule>`
  - : Establece la regla {{SVGAttr("fill-rule")}} que determina cómo se rellena el interior de la forma definida por las formas básicas [polígono](#sintaxis_para_polígonos), [trazado](#sintaxis_para_trazados) y [forma](#sintaxis_para_formas). Los valores posibles son `nonzero` (el valor predeterminado) y `evenodd`.

    > [!NOTE]
    > `<fill-rule>` no es compatible con {{cssxref("offset-path")}} y, si se usa, invalida la propiedad.

### Sintaxis para rectángulos: `<basic-shape-rect>`

El tipo `<basic-shape-rect>`, un subconjunto del tipo `<basic-shape>`, representa las funciones de formas básicas que se limitan a crear rectángulos: {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/rect","rect()")}} y {{cssxref("basic-shape/xywh","xywh()")}}.

Las funciones [`polygon()`](/es/docs/Web/CSS/Reference/Values/basic-shape/polygon), [`path()`](/es/docs/Web/CSS/Reference/Values/basic-shape/path) y [`shape()`](/es/docs/Web/CSS/Reference/Values/basic-shape/shape) también pueden crear rectángulos, pero no se limitan a formas de cuatro lados con ángulos rectos.

#### Sintaxis para rectángulos por desplazamientos desde el contenedor

La función {{cssxref("basic-shape/inset","inset()")}} crea un rectángulo insertado, cuyo tamaño se define por la distancia de desplazamiento de cada uno de los cuatro lados de su contenedor y, opcionalmente, con esquinas redondeadas.

```plain
inset( <length-percentage>{1,4} [ round <'border-radius'> ]? )
```

Cuando se proporcionan los cuatro primeros argumentos, representan los desplazamientos superior, derecho, inferior e izquierdo, desde la caja de referencia hacia el interior, que definen la posición de los bordes del rectángulo insertado. Estos argumentos siguen la sintaxis de la propiedad abreviada {{cssxref("margin")}}, que permite establecer los cuatro desplazamientos con uno, dos, tres o cuatro valores.

Si un par de desplazamientos de una dimensión suma más del 100 % de esa dimensión, ambos valores se reducen proporcionalmente para que su suma sea igual al 100 %. Por ejemplo, el valor `inset(90% 10% 60% 10%)` tiene un desplazamiento superior de `90%` y uno inferior de `60%`. Estos valores se reducen proporcionalmente a `inset(60% 10% 40% 10%)`. Las formas como esta, que no encierran ningún área y no tienen {{cssxref("shape-margin")}}, no afectan al ajuste del texto.

#### Sintaxis para rectángulos por distancia

La función {{cssxref("basic-shape/rect","rect()")}} define un rectángulo mediante las distancias especificadas desde los bordes superior e izquierdo de la caja de referencia, con esquinas redondeadas opcionales.

```plain
rect( [ <length-percentage> | auto ]{4} [ round <'border-radius'> ]? )
```

Con la función `rect()` no defines el ancho y el alto del rectángulo. En su lugar, especificas cuatro valores para crearlo, y sus dimensiones quedan determinadas por el tamaño de la caja de referencia y los cuatro valores de desplazamiento. Cada valor puede ser un {{cssxref("length")}}, un {{cssxref("percentage")}} o la palabra clave `auto`. La palabra clave `auto` se interpreta como `0%` para los valores superior e izquierdo y como `100%` para los valores inferior y derecho.

#### Sintaxis para rectángulos con dimensiones

La función {{cssxref("basic-shape/xywh","xywh()")}} define un rectángulo situado a las distancias especificadas desde los bordes izquierdo (`x`) y superior (`y`) de la caja de referencia, con el tamaño dado por el ancho (`w`) y el alto (`h`) especificados del rectángulo, en ese orden, y con esquinas redondeadas opcionales.

```plain
xywh( <length-percentage>{2} <length-percentage [0,∞]>{2} [ round <'border-radius'> ]? )
```

### Sintaxis para círculos

La función {{cssxref("basic-shape/circle","circle()")}} define un círculo mediante un radio y una posición.

```plain
circle( <shape-radius>? [ at <position> ]? )
```

El argumento `<shape-radius>` representa el radio del círculo, definido como un {{cssxref("length")}} o un {{cssxref("percentage")}}. Un valor en porcentaje se resuelve a partir del ancho y el alto usados de la caja de referencia como `sqrt(width^2+height^2)/sqrt(2)`. Si se omite, el radio se define con `closest-side`.

### Sintaxis para elipses

La función {{cssxref("basic-shape/ellipse","ellipse()")}} define una elipse mediante dos radios y una posición.

```plain
ellipse( [ <shape-radius>{2} ]? [ at <position> ]? )
```

Los argumentos `<shape-radius>` representan _rx_ y _ry_, los radios de la elipse en el eje x y en el eje y, en ese orden. Estos valores se especifican como un {{cssxref("length")}} o un {{cssxref("percentage")}}. Aquí, los valores en porcentaje se resuelven respecto al ancho usado (para el valor rx) y al alto usado (para el valor ry) de la caja de referencia. Si solo se proporciona un valor de radio, la función de forma `ellipse()` no es válida. Si no se proporciona ningún valor, se usa `50% 50%`.

### Sintaxis para polígonos

La función {{cssxref("basic-shape/polygon","polygon()")}} define un polígono mediante un conjunto de pares de coordenadas separados por comas, precedidos opcionalmente por una regla SVG {{SVGAttr("fill-rule")}}, un parámetro de redondeo de esquinas o ambos.

```plain
polygon( <'fill-rule'>? [ round <length> ]? , [ <length-percentage> <length-percentage> ]# )
```

El primer parámetro, opcional, puede contener uno o ambos de los siguientes elementos, separados por un espacio:

- Un valor SVG de {{SVGAttr("fill-rule")}}, `nonzero` o `evenodd`, que especifica el algoritmo con el que se rellena la forma del polígono.
- La palabra clave [`round`](/es/docs/Web/CSS/Reference/Values/basic-shape/polygon#round) seguida de un valor {{cssxref("length")}}, separados por un espacio. Indica que el polígono debe tener esquinas redondeadas, y el `<length>` especifica el radio de las esquinas.

Cada par de coordenadas consta de dos valores `<length-percentage>` separados por un espacio. Estos valores representan las coordenadas en el eje x y en el eje y de un vértice del polígono.

### Sintaxis para trazados

La función {{cssxref("basic-shape/path","path()")}} define una forma mediante una regla SVG {{SVGAttr("fill-rule")}} y una [definición de trazado](/es/docs/Web/SVG/Reference/Attribute/d) SVG.

```plain
path( <'fill-rule'>? , <string> )
```

El `<string>` obligatorio es un [trazado SVG](/es/docs/Web/SVG/Reference/Attribute/d) entre comillas. La función `path()` no es un valor válido para la propiedad {{cssxref("shape-outside")}}.

### Sintaxis para formas

La función {{cssxref("basic-shape/shape","shape()")}} define una forma mediante un punto de partida inicial y una serie de comandos de forma.

```plain
shape( <'fill-rule'>? from <coordinate-pair> , <shape-command># )
```

El parámetro `from <coordinate-pair>` representa el punto de partida del primer comando de forma, y `<shape-command>` define uno o más comandos de forma, que son similares a los [comandos de trazado SVG](/es/docs/Web/SVG/Reference/Attribute/d#path_commands). La función `shape()` no es un valor válido para la propiedad {{cssxref("shape-outside")}}.

## Descripción

Al crear una forma, la caja de referencia la define la propiedad que usa los valores `<basic-shape>`. De forma predeterminada, el sistema de coordenadas de la forma tiene su origen en la esquina superior izquierda de la caja de margen del elemento, con el eje x hacia la derecha y el eje y hacia abajo. Todas las longitudes expresadas en porcentajes se resuelven a partir de las dimensiones de la caja de referencia.

La caja de referencia predeterminada es la [`margin-box`](/es/docs/Web/CSS/Reference/Values/box-edge#margin-box), como se muestra en la imagen siguiente. La imagen muestra un círculo creado con `shape-outside: circle(50%)` y resalta las distintas partes del modelo de caja tal como se ven en las herramientas de desarrollo de un navegador. Aquí, la forma se define respecto a la caja de margen.

![Imagen de un círculo inspeccionado con el inspector de formas de las herramientas de desarrollo de Firefox. Las distintas partes del modelo de caja aparecen resaltadas.](shapes-reference-box.png)

### Valores calculados de las formas básicas

Los valores de una función `<basic-shape>` se calculan tal como se especifican, con estas consideraciones adicionales:

- Para cualquier valor omitido, se usa su valor predeterminado.
- Un valor {{cssxref("position_value", "&lt;position&gt;")}} en `circle()` o `ellipse()` se calcula como un par de desplazamientos desde la esquina superior izquierda de la caja de referencia: el primero es horizontal y el segundo, vertical. Cada desplazamiento se especifica como un valor {{cssxref("length-percentage")}}.
- Un valor [`<border-radius>`](/es/docs/Web/CSS/Reference/Properties/border-radius) en `inset()` se expande a una lista de ocho valores, cada uno de ellos un {{cssxref("length")}} o un {{cssxref("percentage")}}.
- Las funciones {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/rect","rect()")}} y {{cssxref("basic-shape/xywh","xywh()")}} se calculan como la función `inset()` equivalente.

### Interpolación de las formas básicas

Al animar entre dos funciones `<basic-shape>`, se siguen las reglas de {{Glossary("interpolation", "interpolación")}} que se indican a continuación. Los valores de los parámetros de cada función `<basic-shape>` forman una lista. Para que haya interpolación entre dos formas, ambas deben usar la misma caja de referencia, y el número y el tipo de valores de las dos listas `<basic-shape>` deben coincidir.

Cada valor de las listas de las dos funciones `<basic-shape>` se interpola según su valor calculado como un {{cssxref("number")}}, {{cssxref("length")}}, {{cssxref("percentage")}}, {{cssxref("angle")}} o {{cssxref("calc()")}} cuando es posible. La interpolación también puede ocurrir si los valores no son de uno de esos tipos de datos pero son idénticos en las dos funciones de formas básicas que se interpolan, como `nonzero`.

- **Ambas formas son de tipo `ellipse()` o de tipo `circle()`**: la interpolación se aplica entre cada par de valores correspondientes si sus radios se especifican como un {{cssxref("length")}} o un {{cssxref("percentage")}} (y no con palabras clave como `closest-side` o `farthest-side`).

- **Ambas formas son de tipo `inset()`**: la interpolación se aplica entre cada par de valores correspondientes.

- **Ambas formas son de tipo `polygon()`**: la interpolación se aplica entre cada par de valores correspondientes si usan el mismo `<fill-rule>` y tienen el mismo número de pares de coordenadas separados por comas.

- **Ambas formas son de tipo `path()`**: la interpolación se aplica a cada parámetro como un {{cssxref("&lt;number&gt;")}} si las cadenas de trazado de ambas formas coinciden en el número, el tipo y el orden de los [comandos de datos del trazado](/es/docs/Web/SVG/Reference/Attribute/d#path_commands).

- **Ambas formas son de tipo `shape()`**: la interpolación se aplica entre cada par de valores correspondientes si tienen la misma palabra clave de comando y usan la misma palabra clave `<by-to>`. Si `shape()` se usa en la propiedad {{cssxref("clip-path")}}, las dos formas se interpolan si además tienen el mismo `<fill-rule>`.
  - Si usan `<curve-command>` o `<smooth-command>`, el número de puntos de control debe coincidir para que haya interpolación.

  - Si usan `<arc-command>` con direcciones `<arc-sweep>` distintas, el resultado interpolado va en el sentido de las agujas del reloj (`cw`). Si usan palabras clave `<arc-size>` distintas, el tamaño se interpola con el valor `large`.

- **Una forma es de tipo `path()` y la otra de tipo `shape()`**: la interpolación se aplica entre cada par de valores correspondientes si la lista de comandos de datos del trazado es idéntica en número y en orden. La forma interpolada es una función `shape()` que mantiene la misma lista de comandos de datos del trazado.

En todos los demás casos, no hay interpolación y la animación es discreta.

## Ejemplos

### Polígono animado

En este ejemplo, usamos la regla-at [@keyframes](/es/docs/Web/CSS/Reference/At-rules/@keyframes) para animar un trazado de recorte entre dos polígonos. Observa que ambos polígonos tienen el mismo número de vértices, algo necesario para que este tipo de animación funcione.

#### HTML

```html
<div></div>
```

#### CSS

```css
div {
  width: 300px;
  height: 300px;
  background: repeating-linear-gradient(red, orange 50px);
  clip-path: polygon(
    50% 0%,
    60% 40%,
    100% 50%,
    60% 60%,
    50% 100%,
    40% 60%,
    0% 50%,
    40% 40%
  );
  animation: 4s poly infinite alternate ease-in-out;
  margin: 10px auto;
}

@keyframes poly {
  from {
    clip-path: polygon(
      50% 0%,
      60% 40%,
      100% 50%,
      60% 60%,
      50% 100%,
      40% 60%,
      0% 50%,
      40% 40%
    );
  }

  to {
    clip-path: polygon(
      50% 30%,
      100% 0%,
      70% 50%,
      100% 100%,
      50% 70%,
      0% 100%,
      30% 50%,
      0% 0%
    );
  }
}
```

#### Resultado

{{EmbedLiveSample('Polígono_animado','340', '340')}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- Propiedades que usan este tipo de dato: {{cssxref("border-shape")}}, {{cssxref("clip-path")}}, {{cssxref("offset-path")}}, {{cssxref("shape-outside")}}
- Elementos de forma SVG: {{SVGElement("circle")}}, {{SVGElement("ellipse")}}, {{SVGElement("line")}}, {{SVGElement("polygon")}}, {{SVGElement("polyline")}}, {{SVGElement("rect")}}
- [Descripción general de las formas CSS](/es/docs/Web/CSS/Guides/Shapes/Overview)
- Módulo de [formas CSS](/es/docs/Web/CSS/Guides/Shapes)
- [Introducción al enmascaramiento CSS](/es/docs/Web/CSS/Guides/Masking/Introduction)
- Módulo de [enmascaramiento CSS](/es/docs/Web/CSS/Guides/Masking)
- [Editar trazados de formas en las herramientas de desarrollo de Firefox](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html)
