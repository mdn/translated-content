---
title: Tipo CSS `<length>`
short-title: <length>
slug: Web/CSS/Reference/Values/length
l10n:
  sourceCommit: b25b4a98b757fbd05ce1fb74b1b78f3fcf917729
---

El [tipo de dato](/es/docs/Web/CSS/Reference/Values/Data_types) [CSS](/es/docs/Web/CSS) **`<length>`** representa un valor de distancia. Las longitudes se pueden usar en numerosas propiedades CSS, como {{Cssxref("width")}}, {{Cssxref("height")}}, {{Cssxref("margin")}}, {{Cssxref("padding")}}, {{Cssxref("border-width")}}, {{Cssxref("font-size")}} y {{Cssxref("text-shadow")}}.

> [!NOTE]
> Aunque los valores {{cssxref("&lt;percentage&gt;")}} se pueden usar en algunas de las mismas propiedades que aceptan valores `<length>`, no son en sí valores `<length>`. Consulta {{cssxref("&lt;length-percentage&gt;")}}.

## Sintaxis

El tipo de dato `<length>` consiste en un {{cssxref("&lt;number&gt;")}} seguido de una de las unidades que se listan más abajo. Como en todas las dimensiones CSS, no hay espacio entre el número y el literal de la unidad. Especificar la unidad de longitud es opcional si el número es `0`.

> [!NOTE]
> Algunas propiedades admiten valores `<length>` negativos y otras no.

### Valores especificados frente a valores calculados

El [valor especificado](/es/docs/Web/CSS/Guides/Cascade/Property_value_processing#valor_especificado) de una longitud (_longitud especificada_) se representa con su cantidad y su unidad. El [valor calculado](/es/docs/Web/CSS/Guides/Cascade/Property_value_processing#valor_calculado) de una longitud (_longitud calculada_) es la longitud especificada resuelta a una longitud absoluta, y su unidad no se distingue.

En algunas propiedades, como `border-width`, `outline-width`, `column-rule-width` y `outline-offset`, los valores `<length>` calculados se redondean a un número entero de {{glossary("device pixel", "píxeles de dispositivo")}} para garantizar una presentación visual razonable:

- Un valor distinto de cero y menor que 1 píxel de dispositivo se redondea hacia arriba.
- Un valor mayor que 1 píxel de dispositivo se redondea hacia abajo al píxel de dispositivo entero más cercano.

Por ejemplo, en una pantalla con un {{domxref("Window.devicePixelRatio", "devicePixelRatio")}} de 3, `border-width: 1.5px` se calcula como aproximadamente `1.33px` (redondeando de 4,5 a 4 píxeles de dispositivo), y `outline-width: 0.2px` se calcula como aproximadamente `0.33px` (redondeando de 0,6 a 1 píxel de dispositivo).

### Longitudes relativas frente a absolutas

Las unidades de `<length>` pueden ser relativas o absolutas. Las longitudes relativas representan una medida en función de otra distancia. Según la unidad, esa distancia puede ser el tamaño de un carácter concreto, la [altura de línea](/es/docs/Web/CSS/Reference/Properties/line-height) o el tamaño del {{Glossary("viewport", "área visible")}}. Las hojas de estilo que usan unidades de longitud relativas se adaptan con más facilidad de un entorno de salida a otro.

> [!NOTE]
> Los elementos hijos no heredan los valores relativos tal como se especificaron para su padre; heredan los valores calculados.

## Unidades de longitud relativas

Las unidades de longitud relativas de CSS se basan en el tamaño de la fuente, del contenedor o del área visible.

### Unidades de longitud relativas a la fuente

Las longitudes de fuente definen el valor `<length>` en función del tamaño de un carácter concreto o de un atributo de la fuente vigente en un elemento o en su padre.

> [!NOTE]
> Estas unidades, en especial `em` y su equivalente relativa a la raíz `rem`, se usan a menudo para crear diseños escalables que mantienen el ritmo vertical de la página aunque quien lee cambie el tamaño de fuente.

- `cap`
  - : Igual a la «altura de mayúsculas» (la altura nominal de las letras mayúsculas) de la {{Cssxref("font")}} del elemento.
- `ch`
  - : Representa el ancho o, más exactamente, la {{Glossary("advance measure", "medida de avance")}} del glifo `0` (cero, el carácter Unicode U+0030) en la {{Cssxref("font")}} del elemento.
    Cuando determinar la medida del glifo `0` es imposible o poco práctico, debe asumirse un ancho de `0.5em` y una altura de `1em`.
- `em`
  - : Representa el {{Cssxref("font-size")}} calculado del elemento. Si se usa en la propia propiedad {{Cssxref("font-size")}}, representa el tamaño de fuente _heredado_ por el elemento.
- `ex`
  - : Igual a la [altura de la x](https://es.wikipedia.org/wiki/Altura_x) de la {{Cssxref("font")}} del elemento. En las fuentes que tienen la letra `x`, suele ser la altura de las minúsculas; `1ex ≈ 0.5em` en muchas fuentes.
- `ic`
  - : Representa la {{Glossary("advance measure", "medida de avance")}} utilizada del glifo «水» (el ideograma CJK de agua, U+6C34) en la fuente con la que se dibuja.
- `lh`
  - : Igual al valor calculado de la propiedad {{Cssxref("line-height")}} del elemento sobre el que se usa, convertido a una longitud absoluta. Esta unidad permite calcular longitudes a partir del tamaño teórico de una línea vacía ideal. Sin embargo, el tamaño de las cajas de línea reales puede variar según su contenido.

### Unidades de longitud relativas a la fuente del elemento raíz

Estas unidades definen el valor `<length>` en función del tamaño de un carácter concreto o de un atributo de la fuente del elemento [raíz](/es/docs/Web/CSS/Reference/Selectors/:root):

- `rcap`
  - : Igual a la «altura de mayúsculas» (la altura nominal de las letras mayúsculas) de la {{Cssxref("font")}} del elemento raíz.
- `rch`
  - : Igual al ancho o a la {{Glossary("advance measure", "medida de avance")}} del glifo `0` (cero, el carácter Unicode U+0030) en la {{Cssxref("font")}} del elemento raíz.
- `rem`
  - : Representa el {{Cssxref("font-size")}} del elemento raíz (normalmente {{HTMLElement("html")}}). Cuando se usa dentro del {{Cssxref("font-size")}} del propio elemento raíz, representa su valor inicial. Un valor predeterminado habitual en los navegadores es `16px`, pero las preferencias de quien usa el navegador pueden modificarlo.
- `rex`
  - : Igual a la altura de la x de la {{Cssxref("font")}} del elemento raíz.
- `ric`
  - : Igual al valor de la unidad [`ic`](#ic) aplicada a la fuente del elemento raíz.
- `rlh`
  - : Igual al valor de la unidad [`lh`](#lh) aplicada a la fuente del elemento raíz. Esta unidad permite calcular longitudes a partir del tamaño teórico de una línea vacía ideal. Sin embargo, el tamaño de las cajas de línea reales puede variar según su contenido.

### Unidades de longitud relativas al área visible

Las **unidades de longitud en porcentaje del área visible** se basan en cuatro tamaños distintos del área visible: pequeño, grande, dinámico y predeterminado. La existencia de varios tamaños responde a que las interfaces de los navegadores se expanden y se contraen dinámicamente, ocultando y mostrando el contenido que hay debajo.

- **Unidades de área visible pequeña**
  - : Cuando quieras el área visible más pequeña posible frente a interfaces del navegador que se expanden dinámicamente, usa el tamaño de área visible pequeña. Ese tamaño permite que el contenido que diseñas llene toda el área visible cuando las interfaces del navegador están desplegadas. Elegirlo también puede dejar espacios vacíos cuando esas interfaces se retraen.

    Por ejemplo, si un elemento se dimensiona con unidades de porcentaje basadas en el área visible pequeña, llenará la pantalla a la perfección sin que se oculte nada de su contenido mientras todas las interfaces dinámicas del navegador estén visibles. Cuando se ocultan, en cambio, puede aparecer espacio de más alrededor del elemento. Por eso las unidades de área visible pequeña son «más seguras» en general, aunque quizá no produzcan el diseño más atractivo una vez que quien lee empieza a interactuar con la página.

    El tamaño de área visible pequeña se representa con el prefijo `sv` y da lugar a las unidades `sv*`. Sus tamaños son fijos y, por tanto, estables, salvo que cambie el tamaño del propio área visible.

- **Unidades de área visible grande**
  - : Cuando quieras el área visible más grande posible frente a interfaces del navegador que se retraen dinámicamente, usa el tamaño de área visible grande. Ese tamaño permite que el contenido que diseñas llene toda el área visible cuando las interfaces del navegador se están retrayendo. Ten en cuenta que el contenido puede quedar oculto cuando esas interfaces se expanden.

    Por ejemplo, en los teléfonos móviles, donde el espacio en pantalla es escaso, los navegadores suelen ocultar parte o toda la barra de título y de dirección cuando quien lee empieza a desplazar la página. Si un elemento se dimensiona con una unidad basada en el área visible grande, su contenido llenará toda la página visible mientras esas interfaces estén ocultas. Sin embargo, cuando se muestran, pueden tapar el contenido dimensionado o posicionado con unidades de área visible _grande_.

    La unidad de área visible grande se representa con el prefijo `lv` y da lugar a las unidades `lv*`. Sus tamaños son fijos y, por tanto, estables, salvo que cambie el tamaño del propio área visible.

- **Unidades de área visible dinámica**
  - : Cuando quieras que el área visible se dimensione automáticamente según se expandan o se retraigan las interfaces del navegador, puedes usar el tamaño de área visible dinámica. Ese tamaño permite que el contenido que diseñas encaje exactamente dentro del área visible, haya o no interfaces dinámicas del navegador.

    La unidad de área visible dinámica se representa con el prefijo `dv` y da lugar a las unidades `dv*`. Sus tamaños no son estables, ni siquiera cuando el área visible no cambia.

    > [!NOTE]
    > Aunque el tamaño de área visible dinámica da más control y flexibilidad, usar unidades basadas en él puede hacer que el contenido cambie de tamaño mientras se desplaza la página. Eso puede degradar la interfaz y penalizar el rendimiento.

- **Unidades de área visible predeterminada**
  - : El tamaño de área visible predeterminado lo define el navegador. El comportamiento de la unidad resultante puede equivaler al de la unidad basada en el área visible pequeña, en la grande, en un tamaño intermedio entre ambas, o en la dinámica.

    > [!NOTE]
    > Por ejemplo, un navegador podría implementar la unidad predeterminada de altura (`vh`) de forma equivalente a la unidad de altura de área visible grande (`lvh`). Si es así, podría ocultar contenido en una presentación a página completa mientras la interfaz del navegador está desplegada. Actualmente, todas las unidades predeterminadas (`vh`, `vw`, etc.) equivalen a sus homólogas de área visible grande (`lvh`, `lvw`, etc.).

Las longitudes en porcentaje del área visible definen valores `<length>` en porcentaje relativo al tamaño del [bloque contenedor](/es/docs/Web/CSS/Guides/Display/Containing_block) inicial, que a su vez se basa en el tamaño del {{Glossary("viewport", "área visible")}} o del área de la página, es decir, la porción visible del documento. Cuando cambia la altura o el ancho del bloque contenedor inicial, los elementos dimensionados a partir de ellos se escalan en consecuencia. Hay una variante de unidad de porcentaje del área visible por cada uno de los tamaños, como se describe abajo.

> [!NOTE]
> Las longitudes de área visible no son válidas en los bloques de declaración {{cssxref("@page")}}.

- `vh`
  - : Representa un porcentaje de la altura del [bloque contenedor](/es/docs/Web/CSS/Guides/Display/Containing_block) inicial del área visible. `1vh` es el 1 % de la altura del área visible. Por ejemplo, si esa altura es `300px`, un valor de `70vh` en una propiedad será `210px`.

    Las unidades correspondientes a los tamaños pequeño, grande y dinámico son `svh`, `lvh` y `dvh`. `vh` equivale a `lvh`, es decir, a la unidad basada en el área visible grande.

- `vw`
  - : Representa un porcentaje del ancho del [bloque contenedor](/es/docs/Web/CSS/Guides/Display/Containing_block) inicial del área visible. `1vw` es el 1 % del ancho del área visible. Por ejemplo, si ese ancho es `800px`, un valor de `50vw` en una propiedad será `400px`.

    Para los tamaños pequeño, grande y dinámico, las unidades correspondientes son `svw`, `lvw` y `dvw`.
    `vw` equivale a `lvw`, es decir, a la unidad basada en el área visible grande.

- `vmax`
  - : Representa en porcentaje el mayor de `vw` y `vh`.

    Para los tamaños pequeño, grande y dinámico, las unidades correspondientes son `svmax`, `lvmax` y `dvmax`.
    `vmax` equivale a `lvmax`, es decir, a la unidad basada en el área visible grande.

- `vmin`
  - : Representa en porcentaje el menor de `vw` y `vh`.

    Para los tamaños pequeño, grande y dinámico, las unidades correspondientes son `svmin`, `lvmin` y `dvmin`.
    `vmin` equivale a `lvmin`, es decir, a la unidad basada en el área visible grande.

- `vb`
  - : Representa el porcentaje del tamaño del [bloque contenedor](/es/docs/Web/CSS/Guides/Display/Containing_block) inicial en la dirección del [eje de bloque](/es/docs/Web/CSS/Guides/Logical_properties_and_values) del elemento raíz.

    Para los tamaños pequeño, grande y dinámico, las unidades correspondientes son `svb`, `lvb` y `dvb`.
    `vb` equivale a `lvb`, es decir, a la unidad basada en el área visible grande.

- `vi`
  - : Representa un porcentaje del tamaño del [bloque contenedor](/es/docs/Web/CSS/Guides/Display/Containing_block) inicial en la dirección del [eje en línea](/es/docs/Web/CSS/Guides/Logical_properties_and_values) del elemento raíz.

    Para los tamaños pequeño, grande y dinámico, las unidades correspondientes son `svi`, `lvi` y `dvi`.
    `vi` equivale a `lvi`, es decir, a la unidad basada en el área visible grande.

### Unidades de longitud de consulta de contenedor

Al aplicar estilos a un contenedor mediante consultas de contenedor, puedes usar unidades de longitud de consulta de contenedor.
Estas unidades especifican una longitud relativa a las dimensiones del contenedor consultado.
Los componentes que usan unidades relativas a su contenedor son más flexibles y se pueden reutilizar en contenedores distintos sin recalcular longitudes concretas.

Si no hay ningún contenedor apto para la consulta, la unidad recurre por defecto a la [unidad de área visible pequeña](#unidades_de_área_visible_pequeña) de ese eje (`sv*`).

Para más información, consulta [Consultas de contenedor](/es/docs/Web/CSS/Guides/Containment/Container_queries).

- `cqw`
  - : Representa un porcentaje del ancho del contenedor consultado. `1cqw` es el 1 % de ese ancho. Por ejemplo, si el ancho del contenedor consultado es `800px`, un valor de `50cqw` en una propiedad será `400px`.

- `cqh`
  - : Representa un porcentaje de la altura del contenedor consultado. `1cqh` es el 1 % de esa altura. Por ejemplo, si la altura del contenedor consultado es `300px`, un valor de `10cqh` en una propiedad será `30px`.

- `cqi`
  - : Representa un porcentaje del tamaño en línea del contenedor consultado. `1cqi` es el 1 % de ese tamaño. Por ejemplo, si el tamaño en línea del contenedor consultado es `800px`, un valor de `50cqi` en una propiedad será `400px`.

- `cqb`
  - : Representa un porcentaje del tamaño de bloque del contenedor consultado. `1cqb` es el 1 % de ese tamaño. Por ejemplo, si el tamaño de bloque del contenedor consultado es `300px`, un valor de `10cqb` en una propiedad será `30px`.

- `cqmin`
  - : Representa un porcentaje del menor entre el tamaño en línea y el tamaño de bloque del contenedor consultado. `1cqmin` es el 1 % de ese menor valor. Por ejemplo, si el tamaño en línea del contenedor consultado es `800px` y el de bloque `300px`, un valor de `50cqmin` en una propiedad será `150px`.

- `cqmax`
  - : Representa un porcentaje del mayor entre el tamaño en línea y el tamaño de bloque del contenedor consultado. `1cqmax` es el 1 % de ese mayor valor. Por ejemplo, si el tamaño en línea del contenedor consultado es `800px` y el de bloque `300px`, un valor de `50cqmax` en una propiedad será `400px`.

## Unidades de longitud absolutas

Las **unidades de longitud absolutas** representan una medida física cuando se conocen las propiedades físicas del medio de salida, como en la maquetación para impresión. Esto se consigue anclando una de las unidades a una **unidad física** o a la **unidad de ángulo visual** y definiendo las demás con respecto a ella. Las unidades físicas incluyen `cm`, `in`, `mm`, `pc`, `pt`, `px` y `Q`. El anclaje se hace de forma distinta en los dispositivos de baja resolución, como las pantallas, que en los de alta resolución, como las impresoras.

En los dispositivos de pocos ppp, la unidad `px` representa el _píxel de referencia_ físico, y las demás unidades se definen con respecto a ella. Así, `1in` se define como `96px`, que equivale a `72pt`. La consecuencia de esta definición es que, en esos dispositivos, las dimensiones descritas en pulgadas (`in`), centímetros (`cm`) o milímetros (`mm`) no coinciden necesariamente con el tamaño de la unidad física del mismo nombre.

En los dispositivos de muchos ppp, las pulgadas (`in`), los centímetros (`cm`) y los milímetros (`mm`) sí coinciden con sus equivalentes físicos. Por tanto, la unidad `px` se define con respecto a ellos (1/96 de `1in`).

> [!NOTE]
> Mucha gente aumenta el tamaño de fuente predeterminado de su {{Glossary("user agent", "agente de usuario")}} para que el texto se lea mejor. Las longitudes absolutas pueden causar problemas de accesibilidad porque son fijas y no se escalan según esos ajustes. Por eso conviene preferir longitudes relativas (como `em` o `rem`) al fijar el `font-size`.

- `px`
  - : Un píxel. En las pantallas representa tradicionalmente un {{glossary("device pixel", "píxel de dispositivo")}} (un punto). Sin embargo, en las _impresoras_ y las _pantallas de alta resolución_, un píxel CSS implica varios píxeles de dispositivo. `1px` = `1in / 96`.
- `cm`
  - : Un centímetro. `1cm` = `96px / 2.54`.
- `mm`
  - : Un milímetro. `1mm` = `1cm / 10`.
- `Q`
  - : Un cuarto de milímetro. `1Q` = `1cm / 40`.
- `in`
  - : Una pulgada. `1in` = `2.54cm` = `96px`.
- `pc`
  - : Una pica. `1pc` = `12pt` = `1in / 6`.
- `pt`
  - : Un punto. `1pt` = `1in / 72`.

## Interpolación

Al animarse, los valores del tipo de dato `<length>` se interpolan como números reales en coma flotante. La {{glossary("interpolation", "interpolación")}} se produce sobre el valor calculado. La velocidad de la interpolación la determina la [función de suavizado](/es/docs/Web/CSS/Reference/Values/easing-function) asociada a la animación.

## Ejemplos

### Comparar distintas unidades de longitud

El ejemplo siguiente te ofrece un campo de entrada en el que puedes escribir un valor `<length>` (por ejemplo `300px`, `50%`, `30vw`) para fijar el ancho de una barra de resultado que aparecerá debajo en cuanto pulses <kbd>Intro</kbd>.

Esto te permite comparar y contrastar los efectos de las distintas unidades de longitud.

#### HTML

```html
<div class="outer">
  <div class="input-container">
    <label for="length">Escribe un ancho:</label>
    <input type="text" id="length" />
  </div>
  <div class="inner"></div>
</div>
<div class="results"></div>
```

#### CSS

```css
html {
  font-family: sans-serif;
  font-weight: bold;
  box-sizing: border-box;
}

.outer {
  width: 100%;
  height: 50px;
  background-color: #eeeeee;
  position: relative;
}

.inner {
  height: 50px;
  background-color: #999999;
  box-shadow:
    inset 3px 3px 5px rgb(255 255 255 / 50%),
    inset -3px -3px 5px rgb(0 0 0 / 50%);
}

.result {
  height: 20px;
  box-shadow:
    inset 3px 3px 5px rgb(255 255 255 / 50%),
    inset -3px -3px 5px rgb(0 0 0 / 50%);
  background-color: orange;
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.result code {
  position: absolute;
  margin-left: 20px;
}

.results {
  margin-top: 10px;
}

.input-container {
  position: absolute;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
}

label {
  margin: 0 10px 0 20px;
}
```

#### JavaScript

```js
const inputDiv = document.querySelector(".inner");
const inputElem = document.querySelector("input");
const resultsDiv = document.querySelector(".results");

inputElem.addEventListener("change", () => {
  inputDiv.style.width = inputElem.value;

  const result = document.createElement("div");
  result.className = "result";
  result.style.width = inputElem.value;
  const code = document.createElement("code");
  code.textContent = `width: ${inputElem.value}`;
  result.appendChild(code);
  resultsDiv.appendChild(result);

  inputElem.value = "";
  inputElem.focus();
});
```

#### Resultado

{{EmbedLiveSample('Comparar distintas unidades de longitud', '100%', 700)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Aprende: valores y unidades](/es/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- Módulo [Valores y unidades de CSS](/es/docs/Web/CSS/Guides/Values_and_units)
- [Modelo de caja](/es/docs/Web/CSS/Guides/Box_model)
