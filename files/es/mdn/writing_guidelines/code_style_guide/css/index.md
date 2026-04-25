---
title: Directrices para escribir ejemplos de código CSS
short-title: Ejemplos de CSS
slug: MDN/Writing_guidelines/Code_style_guide/CSS
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Las siguientes directrices abordan cómo escribir ejemplos de código CSS para MDN Web Docs.

## Directrices generales para ejemplos de código CSS

### Elección de formato

Las opiniones sobre la correcta sangría, espacios en blanco y longitudes de líneas siempre han sido controvertidas. Las discusiones sobre estos temas son una distracción de la creación y mantenimiento del contenido.

En MDN Web Docs, utilizamos [Prettier](https://prettier.io/) como formateador de código para mantener consistente el estilo del código (y evitar discusiones fuera de tema). Puedes consultar nuestro [archivo de configuración](https://github.com/mdn/content/blob/main/.prettierrc.json) para conocer las reglas actuales y leer la [documentación de Prettier](https://prettier.io/docs/en/index.html).

Prettier formatea todo el código y mantiene el estilo consistente. Sin embargo, hay algunas reglas adicionales que debes seguir.

### Planifica tu CSS

Antes de sumergirte y escribir grandes fragmentos de CSS, planifica cuidadosamente tus estilos. ¿Qué estilos generales serán necesarios, qué diferentes diseños necesitas crear, qué anulaciones específicas deben crearse y son reutilizables? Sobre todo, debes tratar de **evitar demasiadas anulaciones**. Si te encuentras escribiendo estilos y luego cancelándolos unas reglas más abajo, probablemente necesites reconsiderar tu estrategia.

### Utiliza funciones modernas de CSS cuando sean compatibles

Puedes usar nuevas funciones una vez que todos los navegadores principales — Chrome, Edge, Firefox y Safari — las admiten (también conocido como {{glossary("Baseline")}}).

Esta regla no se aplica a la función de CSS que se está documentando en la página (que se determina por los [criterios de inclusión](/es/docs/MDN/Writing_guidelines/Criteria_for_inclusion)). Por ejemplo, puedes documentar funciones [no estándar o experimentales](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete) y escribir ejemplos completos que demuestren su comportamiento, pero debes evitar usar estas funciones en las demostraciones de otras funciones no relacionadas, como una API web.

### Sigue las mejores prácticas comunes

Hay algunos principios universalmente reconocidos que no necesitamos exponer aquí exhaustivamente:

- Asegúrate de que tu código no tenga errores de sintaxis, lo que puede resultar en que la [propiedad o declaración sea ignorada](/es/docs/Web/CSS/Guides/Syntax/Error_handling). La sintaxis estándar que no se ha implementado es aceptable, si se ajusta a nuestra [regla general sobre funciones modernas de CSS](#utiliza_funciones_modernas_de_css_cuando_sean_compatibles).
- No uses funciones [no estándar, obsoletas o en desuso](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete). Esta directiva se extiende a [funciones con prefijos](/es/docs/Glossary/Vendor_Prefix#css_prefixes): usa la alternativa con prefijo _solo si_ la función estándar no está disponible (consulta nuestra [regla general sobre funciones modernas de CSS](#utiliza_funciones_modernas_de_css_cuando_sean_compatibles)). Si el lector necesita una compatibilidad más amplia, puede agregar el respaldo con prefijo por sí mismo o usar un postprocesador de CSS.
- No escribas código redundante o no funcional, que es un indicador común de errores o restos de refactorización. Esto incluye propiedades repetidas en una declaración, declaraciones vacías, comentarios vacíos o selectores que no coinciden con ningún elemento.

### No uses preprocesadores

No utilices la sintaxis de preprocesadores, como [Sass](https://sass-lang.com/), [Less](https://lesscss.org/) o [Stylus](https://stylus-lang.com/), en el código de ejemplo. En MDN Web Docs, documentamos el lenguaje CSS puro. El uso de preprocesadores solo dificultará la comprensión de los ejemplos, potencialmente confundiendo a los lectores.

### No uses metodologías CSS específicas

En el mismo espíritu que la guía anterior, no escribas códigos de ejemplo en MDN Web Docs utilizando una metodología CSS específica como [BEM](https://getbem.com/naming/) o [SMACSS](https://smacss.com/). Aunque son sintaxis CSS válidas, las convenciones de nombres pueden resultar confusas para personas que no están familiarizadas con esas metodologías.

### No uses reinicios (resets)

Para tener un control máximo sobre CSS en todas las plataformas, mucha gente solía utilizar reinicios de CSS para eliminar todos los estilos y luego construir las cosas nuevamente. Esto ciertamente tiene sus méritos, pero especialmente en el mundo moderno, los reinicios de CSS pueden ser excesivos, resultando en un gasto de tiempo adicional reimplementando cosas que no estaban completamente rotas en primer lugar, como los márgenes predeterminados y estilos de lista.

### Sintaxis formal y pseudocódigo

La sintaxis formal es una parte integral de la documentación de CSS de MDN (como ejemplo, consulta la sección [Sintaxis formal](/es/docs/Web/CSS/Reference/Properties/background-image#formal_syntax) en la página de la propiedad `background-image`). Dado que muchos desarrolladores están familiarizados con la sintaxis en este formato, es aceptable escribir pseudocódigo de una manera similar a la sintaxis formal en descripciones y ejemplos. Sin embargo, cualquier código que no sea CSS sintácticamente bien formado no debe marcarse como CSS. Los errores de sintaxis en bloques de código `css` hacen que el código no sea analizable por verificadores estáticos, confunden a los lectores que esperan ver código CSS válido y pueden incluso resultar en un resaltado de sintaxis sin sentido. Marca tu bloque de código como `plain` o usa la macro `CSSSyntaxRaw` para representar la sintaxis formal completa.

No escribas descripciones como esta (de todos modos, esto no es sintaxis formal real; es solo CSS seudocódigo con algunos marcadores de posición):

````md example-bad
La propiedad `border` tiene la siguiente forma general:

```css
border: <border-width> <border-style> <border-color>;
```
````

En su lugar, usa `plain`:

````md example-good
La propiedad `border` tiene la siguiente forma general:

```plain
border: <border-width> <border-style> <border-color>;
```
````

O, cuando lo consideres apropiado, escribe la sintaxis formal real usando la macro `CSSSyntaxRaw`:

```md example-good
La propiedad `border` se especifica como un ancho de línea, un estilo de línea y un color, en cualquier orden:

\{{CSSSyntaxRaw(`border = <line-width> || <line-style> || <color>`)}}
```

Además, un solo valor no es CSS sintácticamente bien formado. El código CSS requiere al menos una propiedad y su valor. Si estás documentando la función `rgb()`, escribe esto:

```css example-good
color: rgb(31 41 59);
color: rgb(31 41 59 / 26%);
```

No uses este estilo:

```css example-bad
rgb(31 41 59);
rgb(31 41 59 / 26%);
```

Ten en cuenta que esta regla no se aplica al primer bloque de código en la sección "Sintaxis", que se especifica en su lugar por [Secciones de sintaxis](/es/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections#css_reference_syntax), y requiere que las funciones se escriban sin el nombre de la propiedad.

## Animaciones

### Selectores de fotogramas clave

Al especificar fotogramas clave, los selectores `0%` y `100%` también se pueden escribir como `from` y `to`. Si una regla `@keyframes` _solo contiene_ estos dos selectores, usa `from` y `to` en lugar de `0%` y `100%`. Esto hace que tu código sea más semántico.

Entonces evita esto:

```css example-bad
@keyframes example {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
```

Usa `from` y `to` en su lugar:

```css example-good
@keyframes example {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

Por otro lado, si tu regla `@keyframes` contiene más que solo los fotogramas inicial y final, usa los selectores `0%` y `100%` para mantener la uniformidad.

```css example-good
@keyframes example {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
}
```

## Cascada, propiedades y selectores

### Controlar la especificidad

Si es posible, evita sorpresas al aumentar o disminuir la especificidad, como el uso excesivo de la pseudoclase [`:where()`](/es/docs/Web/CSS/Reference/Selectors/:where) o la duplicación de selectores. En su lugar, considera las siguientes técnicas para gestionar la especificidad:

- Cambiar el orden de las declaraciones para aprovechar la cascada
- Reordenar las propiedades en cada declaración de manera que no se anulen entre sí
- Usar selectores de ID, en casos donde el [`id` de HTML en sí está justificado](#usa_selectores_de_clase)

### !important

`!important` es el último recurso que generalmente se usa solo cuando necesitas anular algo y no hay otra forma de hacerlo. Usar `!important` es una mala práctica y debes evitarlo siempre que sea posible.

```css example-bad
.bad-code {
  font-size: 4rem !important;
}
```

### Ordenamiento

Generalmente, cuando dos declaraciones tienen como objetivo los mismos elementos, la que tenga mayor especificidad debe aparecer más adelante en la hoja de estilos.

```css example-good
button {
  color: blue;
}

.my-form button {
  color: red;
}
```

Dentro de una declaración, es preferible tener propiedades relacionadas (como para dimensionamiento, posicionamiento y color) ubicadas juntas. Las propiedades personalizadas deben declararse en la parte superior del bloque de declaración, lo que permite una identificación rápida de todas las propiedades personalizadas disponibles.

### Líneas vacías

Se recomiendan líneas vacías entre bloques de declaración. Puedes eliminarlas si las declaraciones consecutivas están muy relacionadas, como variaciones de la misma clase de utilidad.

Las líneas vacías entre propiedades deben usarse con moderación. Agrégalas solo cuando cada grupo de propiedades forme un bloque semántico claro.

### Propiedades abreviadas

- Si _cada_ propiedad constituyente de una propiedad abreviada tiene asignado un valor no predeterminado, usa la propiedad abreviada en lugar de las propiedades detalladas constituyentes. Esto hace que tu código sea más corto y fácil de leer.

  Reemplaza estas propiedades detalladas:

  ```css example-bad
  margin-top: 1em;
  margin-right: 2em;
  margin-bottom: 1em;
  margin-left: 2em;
  ```

  con su abreviatura correspondiente:

  ```css example-good
  margin: 1em 2em;
  ```

- Si solo _algunas_ propiedades constituyentes de una propiedad abreviada tienen asignado un valor no predeterminado, el uso de la propiedad abreviada es opcional. Ambos son aceptables:

  ```css example-good
  margin-top: 1em;
  margin-bottom: 1em;
  ```

  ```css example-good
  margin: 1em 0;
  ```

- Usa la sintaxis abreviada más corta disponible. Escribe esto:

  ```css example-good
  margin: 1em;
  ```

  Evita estos:

  ```css example-bad
  margin: 1em 1em;
  margin: 1em 1em 1em 1em;
  ```

- Escribe las propiedades abreviadas en el [orden canónico](/es/docs/Glossary/Canonical_order). Escribe esto:

  ```css example-good
  /* ancho estilo color */
  border: 1px solid red;
  ```

  No escribas esto:

  ```css example-bad
  border: solid red 1px;
  ```

- Para cada abreviatura, úsala o usa sus componentes detallados, y nunca una mezcla de ambos, porque la relación de anulación es compleja y propensa a errores. Evita estos:

  ```css example-bad
  margin-top: 1em;
  margin: 2em; /* Ups, margin-top se ignora */

  border-width: 1px;
  border-bottom-width: 5px; /* Anula solo el ancho de un borde */
  ```

### Usa selectores de clase

Generalmente, prefiere [selectores de clase](/es/docs/Web/CSS/Reference/Selectors/Class_selectors) (y usa `class` en lugar de `id` en tu HTML). Se pueden componer: varios elementos pueden usar la misma clase, y la misma clase se puede usar para varios elementos.

```css example-good
.footnote {
  /* ... */
}
```

```css example-bad
#footnote {
  /* ... */
}
```

Usa clases para el estilo y reserva los ID para fines que no sean de CSS, como para usar en JavaScript o para vincular a anclajes de página únicos (`<a href="#seccion1">`). En el caso donde el uso de ID está justificado, puedes usarlo como selector, potencialmente para [controlar la especificidad](#controlar_la_especificidad).

### Selectores de pseudoelemento antiguos

Los pseudoelementos [`::before`](/es/docs/Web/CSS/Reference/Selectors/::before), [`::after`](/es/docs/Web/CSS/Reference/Selectors/::after), [`::first-letter`](/es/docs/Web/CSS/Reference/Selectors/::first-letter) y [`::first-line`](/es/docs/Web/CSS/Reference/Selectors/::first-line) también se pueden escribir con dos puntos simples (como `:before`). Evita la sintaxis de dos puntos simples porque está desaconsejada y podría identificarse erróneamente como una [pseudoclase](/es/docs/Web/CSS/Reference/Selectors/Pseudo-classes) (`:hover`) por los lectores.

### Listas de selectores complejas

Las pseudoclases [`:is()`](/es/docs/Web/CSS/Reference/Selectors/:is), [`:where()`](/es/docs/Web/CSS/Reference/Selectors/:where) y [`:not()`](/es/docs/Web/CSS/Reference/Selectors/:not) aceptan [listas de selectores complejos](/es/docs/Web/CSS/Guides/Selectors/Selector_structure#complex_selector). Úsalas para acortar tu selector.

Escribe esto:

```css example-good
input:not(:checked, :disabled) {
  /* ... */
}
```

No escribas esto:

```css example-bad
input:not(:checked):not(:disabled) {
  /* ... */
}
```

## Uso de mayúsculas y minúsculas

De forma predeterminada, todos los identificadores deben estar en minúsculas. Esto se aplica a selectores, funciones y palabras clave. Los identificadores personalizados deben usar [kebab-case](/es/docs/Glossary/Kebab_case), como `--custom-property` o `my-animation`. Consulta la [guía de estilo de HTML](/es/docs/MDN/Writing_guidelines/Code_style_guide/HTML#casing_convention_on_mdn) para las convenciones de uso de mayúsculas y minúsculas de ID y clases de HTML que se referencian como selectores CSS.

Las excepciones incluyen valores de palabras clave definidos en SVG, que por razones históricas están en [camelCase](/es/docs/Glossary/Camel_case), y deben escribirse como tales para mejorar la legibilidad. Estas palabras clave incluyen: [`currentColor`](/es/docs/Web/CSS/Reference/Values/color_value#currentcolor_keyword), valores de {{cssxref("text-rendering")}}, valores de {{cssxref("shape-rendering")}}, valores de {{cssxref("pointer-events")}} y valores de {{cssxref("color-interpolation-filters")}}.

## Colores

### Elección de notación

Generalmente, si la paleta de colores específica no es una preocupación, usa de forma predeterminada colores con nombre comunes. Por ejemplo, usa `black` en lugar de `rgb(0 0 0)` o `#000000`, y `green` en lugar de `chartreuse`.

Si se necesita un color específico, usa de forma predeterminada la notación `rgb()`. `hsl()` y otras funciones solo deben usarse donde la representación particular tenga un significado (por ejemplo, una rueda de colores o un gradiente). La notación hexadecimal es más concisa pero puede ser menos legible; es intercambiable con `rgb()` dependiendo de cuál te sea más conveniente.

Cualquier función de color que uses, siempre usa la sintaxis moderna (`rgb(31 41 59 / 0.26)`), no la heredada separada por comas. Siempre usa la función sin el sufijo `a` (`rgb` en lugar de `rgba`), porque es más corta y no requiere cambiar el nombre si luego decides agregar o eliminar el canal alfa.

Al usar la notación hexadecimal, usa siempre la versión de seis (u ocho) dígitos para evitar la carga cognitiva: `#aabbcc` en lugar de `#abc`.

### Parámetros de color

Para mantener la coherencia, todos los parámetros deben usar números de forma predeterminada en lugar de porcentajes o grados. Esto también se aplica al canal alfa. Sin embargo, si una representación específica es significativa (por ejemplo, en animaciones, gradientes o cálculos), usa el tipo adecuado en el contexto.

Si el canal alfa es `1`, omítelo. Escribe `rgb(31 41 59)` en lugar de `rgb(31 41 59 / 1)`.

### Elección de colores

Además de la recomendación de usar colores con nombre comunes, tu paleta de colores debe cumplir nuestras [directrices de accesibilidad](/es/docs/Web/Accessibility/Guides/Colors_and_Luminance). En particular, si los colores distinguen elementos (como una "caja roja" y una "caja azul"), asegúrate de que los colores sean distinguibles para personas con deficiencia de visión del color. Apunta a al menos una relación de contraste de 4.5:1 (WCAG AA) entre el texto y el fondo.

## Comentarios

Usa comentarios de estilo CSS para comentar código que no se autodocumenta. También ten en cuenta que debes dejar un espacio entre los asteriscos y el comentario.

```css example-good
/* Este es un comentario de estilo CSS */
```

Coloca tus comentarios en líneas separadas antes del código al que hacen referencia, de la siguiente manera:

```css example-good
h3 {
  /* Crea una sombra roja con desplazamiento de 1px a la derecha y hacia abajo, con un radio de desenfoque de 2px */
  text-shadow: 1px 1px 2px red;
  /* Establece el tamaño de fuente al doble del tamaño de fuente predeterminado del documento */
  font-size: 2rem;
}
```

## Fuentes

### Especificar familias de fuentes

Al especificar una familia de fuentes, agrega siempre un nombre de [familia de fuentes genérica](/es/docs/Web/CSS/Reference/Properties/font-family#generic-name) como último respaldo. Esto asegura que si la fuente especificada no está disponible, el navegador muestre una fuente de respaldo más adecuada. Las [fuentes web seguras](/es/docs/Learn_web_development/Core/Text_styling/Fundamentals#web_safe_fonts) están exentas de esta regla.

```css example-bad
body {
  font-family: "Helvetica";
}
```

```css example-good
body {
  /* La familia "sans-serif" no es necesaria porque Arial es una fuente web segura */
  font-family: "Helvetica", "Arial";
}

math {
  font-family: "Latin Modern Math", "STIX Two Math", math;
}
```

### Especificar pesos de fuente

Prefiere valores de palabras clave como `normal` y `bold`, y pesos relativos como `bolder` y `lighter`. Solo usa valores numéricos donde se desee el peso específico. Siempre debes reemplazar `400` con `normal` y `700` con `bold`, excepto al declarar rangos con fuentes variables, o para mantener la coherencia con otras declaraciones similares.

## Longitudes

### Usa unidades flexibles/relativas

Para obtener la máxima flexibilidad en la mayor cantidad posible de dispositivos, usa de forma predeterminada unidades relativas como `em`, `rem`, porcentajes y unidades de la ventana gráfica (si deseas que varíen según el ancho de la ventana gráfica) para todas las longitudes. Puedes obtener más información sobre esto en nuestra [guía de valores y unidades CSS](/es/docs/Learn_web_development/Core/Styling_basics/Values_and_units#relative_length_units).

Escribe esto:

```css example-good
margin: 0.5em;
max-width: 50%;
```

Evita esto:

```css example-bad
margin: 20px;
max-width: 500px;
```

## Media queries

### Sintaxis de rango

Usa la sintaxis de rango moderna en lugar de `min-` y `max-`. La primera permite especificar rangos exclusivos, permite especificar simultáneamente límites superiores e inferiores, y es generalmente más concisa y legible.

```css example-good
@media (width >= 480px) {
  /* ... */
}
@media (600px < height < 900px) {
  /* ... */
}
```

```css example-bad
@media (min-width: 480px) {
  /* ... */
}
@media (min-height: 600px) and (max-height: 900px) {
  /* ... */
}
```

Este principio se extiende al uso no CSS de media queries, como el atributo [`media`](/es/docs/Web/HTML/Reference/Elements/link#media) de los elementos `<link>` o {{domxref("window.matchMedia()")}}.

Si tienes diferentes estilos alternativos seleccionados por umbrales de media, ten especial cuidado con tus media queries. Recuerda que `width` y `height` pueden tener valores fraccionarios; asegúrate de que con cada valor, haya uno y solo un estilo alternativo en efecto.

### Media queries centradas en móviles

En una hoja de estilo que contiene estilos de [media queries](/es/docs/Web/CSS/Guides/Media_queries/Using) para diferentes tamaños de ventana gráfica de dispositivos, primero incluye el estilo para pantallas estrechas/móviles antes de encontrar cualquier otra media query. Agrega estilos para tamaños de ventana gráfica más amplios mediante media queries sucesivas. Seguir esta regla tiene muchas ventajas que se explican en [Diseño responsivo](/es/docs/Learn_web_development/Core/CSS_layout/Responsive_Design).

```css example-good
/* Diseño CSS predeterminado para pantallas estrechas */

@media (width >= 480px) {
  /* CSS para pantallas de ancho medio */
}

@media (width >= 800px) {
  /* CSS para pantallas anchas */
}

@media (width >= 1100px) {
  /* CSS para pantallas realmente anchas */
}
```

## Cadenas

Siempre que las comillas sean opcionales en la sintaxis CSS, úsalas y usa comillas dobles. Haz esto:

```css example-good
[data-vegetable="liquid"] {
  background-image: url("../../media/examples/lizard.png");
  font-family: "Helvetica", "Arial";
}
```

No hagas lo siguiente, porque los tipos de caracteres permitidos son más limitados y a veces conducen a errores de sutiles:

```css-nolint example-bad
[data-vegetable=liquid] {
  background-image: url(../../media/examples/lizard.png);
  font-family: Helvetica, Arial;
}
```

Con la regla-at `@import`, especifica la ruta del módulo como una cadena, no como una `url()`.

```css example-good
@import "style.css";
```

```css example-bad
@import url("style.css");
```

## Véase también

[Índice de referencia de CSS](/es/docs/Web/CSS/Reference#index) - navega por nuestras páginas de referencia de propiedades CSS para ver algunos fragmentos de CSS buenos, concisos y significativos. Nuestros ejemplos interactivos en la sección "Pruébalo" generalmente están escritos siguiendo las pautas descritas en esta página.
