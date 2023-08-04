---
title: Uso de media queries
slug: Web/CSS/CSS_media_queries/Using_media_queries
---

{{CSSRef}}

Las **_Media queries_** le permiten aplicar estilos CSS según el tipo general de un dispositivo (como impresión o pantalla) u otras características como la resolución de la pantalla o el ancho del _{{glossary("viewport")}}_ del navegador.
Las _media queries_ se utilizan para lo siguiente:

- Para aplicar estilos condicionalmente utilizando las [reglas de arroba](/es/docs/Web/CSS/At-rule) [CSS](/es/docs/Web/CSS) {{cssxref("@media")}} e {{cssxref("@import")}}.
- Para segmentar medios específicos para {{HTMLElement("style")}}, {{HTMLElement("link")}}, {{HTMLElement("source")}} y otros [HTML](/es/docs/Web/HTML) con el atributo `media=`.
- Para [probar y monitorear los estados de los medios](/es/docs/Web/CSS/Media_Queries/Testing_media_queries) usando los métodos {{domxref("Window.matchMedia()")}} y {{domxref("EventTarget.addEventListener()")}}.

> **Nota:** Los ejemplos en esta página usan `@media` de CSS con fines ilustrativos, pero la sintaxis básica sigue siendo la misma para todos los tipos de consultas de medios.

## Sintaxis

Una _media query_ se compone de un _tipo de medio_ opcional y cualquier cantidad de expresiones de _características de medios_, que pueden combinarse opcionalmente de varias maneras usando _operadores lógicos_.
Las consultas de medios no distinguen entre mayúsculas y minúsculas.

- Los [tipos de medios](/es/docs/Web/CSS/@media#media_types) definen la amplia categoría de dispositivos para los que se aplica la consulta de medios: `all`, `print`, `screen`.

  El tipo es opcional (se asume que es `all`) excepto cuando se usan los operadores lógicos `not` o `only`.

- Las [características multimedia](/es/docs/Web/CSS/@media#media_features) describen una característica específica del {{glossary("user agent")}}, dispositivo de salida o entorno:

  - {{cssxref("@media/any-hover", "any-hover")}}
  - {{cssxref("@media/any-pointer", "any-pointer")}}
  - {{cssxref("@media/aspect-ratio", "aspect-ratio")}}
  - {{cssxref("@media/color", "color")}}
  - {{cssxref("@media/color-gamut", "color-gamut")}}
  - {{cssxref("@media/color-index", "color-index")}}
  - {{cssxref("@media/device-aspect-ratio", "device-aspect-ratio")}} {{deprecated_inline}}
  - {{cssxref("@media/device-height", "device-height")}} {{deprecated_inline}}
  - {{cssxref("@media/device-width", "device-width")}} {{deprecated_inline}}
  - {{cssxref("@media/display-mode", "display-mode")}}
  - {{cssxref("@media/dynamic-range", "dynamic-range")}}
  - {{cssxref("@media/forced-colors", "forced-colors")}}
  - {{cssxref("@media/grid", "grid")}}
  - {{cssxref("@media/height", "height")}}
  - {{cssxref("@media/hover", "hover")}}
  - {{cssxref("@media/inverted-colors", "inverted-colors")}}
  - {{cssxref("@media/monochrome", "monochrome")}}
  - {{cssxref("@media/orientation", "orientation")}}
  - {{cssxref("@media/overflow-block", "overflow-block")}}
  - {{cssxref("@media/overflow-inline", "overflow-inline")}}
  - {{cssxref("@media/pointer", "pointer")}}
  - {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}
  - {{cssxref("@media/prefers-contrast", "prefers-contrast")}}
  - {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}}
  - {{cssxref("@media/resolution", "resolution")}}
  - {{cssxref("@media/scripting", "scripting")}}
  - {{cssxref("@media/update-frequency", "update")}}
  - {{cssxref("@media/video-dynamic-range", "video-dynamic-range")}}
  - {{cssxref("@media/width", "width")}}.

  Por ejemplo, la característica {{cssxref("@media/hover", "hover")}} permite que una consulta pruebe si el dispositivo admite el desplazamiento sobre los elementos.
  Las expresiones de características de medios comprueban su presencia o valor y son completamente opcionales.
  Cada expresión de característica de medios debe estar entre paréntesis.

- Se pueden utilizar [operadores lógicos](/es/docs/Web/CSS/@media#logical_operators) para componer una _media query_ compleja: `not`, `and` y `only`.
  También puede combinar múltiples _media queries_ en una sola regla separándolas con comas.

Una _media query_ se calcula como `true` cuando el tipo de medio (si se especifica) coincide con el dispositivo en el que se muestra un documento y todas las expresiones de características de medios se computan como verdaderas.
Las consultas que involucran tipos de medios desconocidos siempre son falsas.

> **Nota:** Una hoja de estilo con una _media query_ adjunta a su etiqueta {{HTMLElement("link")}} [se descargará](https://scottjehl.github.io/CSS-Download-Tests/) incluso si la consulta devuelve `false`, la descarga se realizará pero la prioridad de la descarga será mucho menor.
> No obstante, su contenido no se aplicará a menos que y hasta que el resultado de la consulta cambie a `true`.
> Puede leer por qué sucede esto en el blog de Tomayac [Por qué el navegador descarga hojas de estilo con consultas de medios que no coinciden](https://medium.com/@tomayac/why-browsers-download-stylesheets-with-non-matching-media-consultas-eb61b91b85a2).

## Destinos de tipos de medios

Los tipos de medios describen la categoría general de un dispositivo determinado.
Aunque los sitios web suelen diseñarse teniendo en cuenta las pantallas, es posible que desee crear estilos destinados a dispositivos especiales, como impresoras o lectores de pantalla basados en audio.
Por ejemplo, este CSS es para las impresoras:

```css
@media print {
  /* … */
}
```

También puedes considerar múltiples dispositivos.
Por ejemplo, esta regla `@media` usa dos consultas de medios tanto para dispositivos de pantalla como de impresión:

```css
@media screen, print {
  /* … */
}
```

Consulte [tipos de medios](/es/docs/Web/CSS/@media#media_types) para obtener una lista de todos los tipos de medios.
Debido a que describen dispositivos solo en términos muy amplios, solo algunos están disponibles; para atributos más específicos, use _características de medios_ en su lugar.

## Destinos de características de los medios

Las características multimedia describen las características específicas de un {{glossary("user agent")}}, dispositivo de salida o entorno determinado.
Por ejemplo, puede aplicar estilos específicos a monitores de pantalla ancha, computadoras que usan ratón o dispositivos que se usan en condiciones de poca luz.
Este ejemplo aplica estilos cuando el mecanismo de entrada _principal_ del usuario (como un ratón) puede pasar sobre los elementos:

```css
@media (hover: hover) {
  /* … */
}
```

Muchas características de medios son _características de rango_, lo que significa que pueden tener el prefijo "min-" o "max-" para expresar restricciones de "condición mínima" o "condición máxima".
Por ejemplo, este CSS aplicará estilos solo si el ancho del {{glossary("viewport")}} de su navegador es igual o menor que 1250px:

```css
@media (max-width: 1250px) {
  /* … */
}
```

Si crea una consulta de características multimedia sin especificar un valor, los estilos anidados se utilizarán siempre que el valor de la función no sea cero (o `none`, en [Nivel 4](https://drafts.csswg.org/mediaqueries-4/)).
Por ejemplo, este CSS se aplicará a cualquier dispositivo con una pantalla a color:

```css
@media (color) {
  /* … */
}
```

Si una característica no se aplica al dispositivo en el que se ejecuta el navegador, las expresiones relacionadas con esa característica multimedia siempre son falsas.

Para obtener más ejemplos de [Características multimedia](/es/docs/Web/CSS/@media#media_features), consulte la página de referencia de cada característica específica.

## Creación de _media queries_ complejas

En ocasiones, es posible que desee crear una _media query_ que dependa de varias condiciones. Aquí es donde entran los _operadores lógicos_: `not`, `and` y `only`.
Además, puede combinar múltiples _media queries_ en una _lista separada por comas_; esto le permite aplicar los mismos estilos en diferentes situaciones.

En el ejemplo anterior, ya vimos el operador `and` usado para agrupar un _tipo_ de medios con una _característica_ de medios.
El operador `and` también puede combinar múltiples características de medios en una sola _media query_. Mientras tanto, el operador `not` niega una _media query_, básicamente invirtiendo su significado normal.
El operador `only` evita que los navegadores antiguos apliquen los estilos.

> **Nota:** En la mayoría de los casos, el tipo de medios `all` se usa de forma predeterminada cuando no se especifica ningún otro tipo.
> Sin embargo, si usa los operadores `not` u `only`, debe especificar explícitamente un tipo de medio.

### Combinación de múltiples tipos o características

La palabra clave `and` combina una característica de medios con un tipo de medio _u_ otras características de medios.
Este ejemplo combina dos características de medios para restringir los estilos a dispositivos orientados al paisaje con un ancho de al menos 30 ems:

```css
@media (min-width: 30em) and (orientation: landscape) {
  /* … */
}
```

Para limitar los estilos a los dispositivos con una pantalla, puede encadenar las características de medios al tipo de medios `screen`:

```css
@media screen and (min-width: 30em) and (orientation: landscape) {
  /* … */
}
```

### Pruebas para múltiples consultas

Puede usar una lista separada por comas para aplicar estilos cuando el dispositivo del usuario coincida con cualquiera de los diversos tipos de medios, características o estados.
Por ejemplo, la siguiente regla aplicará sus estilos si el dispositivo del usuario tiene una altura mínima de 680px _o_ es un dispositivo de pantalla en modo vertical:

```css
@media (min-height: 680px), screen and (orientation: portrait) {
  /* … */
}
```

Tomando el ejemplo anterior, si el usuario tuviera una impresora con una altura de página de 800px, la declaración de medios devolvería verdadero porque se aplicaría la primera consulta.
Del mismo modo, si el usuario estuviera en un teléfono inteligente en modo vertical con una altura de ventana gráfica de 480px, se aplicaría la segunda consulta y la declaración de medios seguiría siendo verdadera.

### Invertir el significado de una consulta

La palabra clave `not` invierte el significado de una _media query_ completa. Solo negará la _media query_ específica a la que se aplica.
(Por lo tanto, no se aplicará a todas las _media queries_ en una lista de _media queries_ separadas por comas).
La palabra clave `not` no se puede usar para negar una consulta de característica individual, solo una _media query_ completa.
El `not` se evalúa en último lugar en la siguiente consulta:

```css
@media not all and (monochrome) {
  /* … */
}
```

Esto significa que la consulta anterior se evalúa así:

```css
@media not (all and (monochrome)) {
  /* … */
}
```

No se evaluaría así:

```css example-bad
@media (not all) and (monochrome) {
  /* … */
}
```

Otro ejemplo es la siguiente _media query_:

```css
@media not screen and (color), print and (color) {
  /* … */
}
```

Esto significa que la consulta anterior se evalúa así:

```css
@media (not (screen and (color))), print and (color) {
  /* … */
}
```

### Mejora de la compatibilidad con navegadores más antiguos

La palabra clave `only` evita que los navegadores antiguos que no admiten _media queries_ con caracterñisticas de medios apliquen los estilos dados.
_No tiene efecto en los navegadores modernos._

```css
@media only screen and (color) {
  /* … */
}
```

## Mejoras de sintaxis en el nivel 4

La especificación Media Queries Level 4 incluye algunas mejoras de sintaxis para hacer que las _media queries_ utilicen características que tienen un tipo de "rango", por ejemplo, ancho o alto, menos detallado.
El nivel 4 agrega un _contexto de rango_ para escribir tales consultas. Por ejemplo, usando la funcionalidad `max-` para el ancho, podríamos escribir lo siguiente:

> **Nota:** La especificación Media Queries Level 4 tiene un soporte razonable en los navegadores modernos, pero algunas características multimedia no son compatibles.
> Consulte la [tabla de compatibilidad del navegador de `@media`](/es/docs/Web/CSS/@media#browser_compatibility) para obtener más detalles.

```css
@media (max-width: 30em) {
  /* … */
}
```

En Media Queries Level 4 esto se puede escribir como:

```css
@media (width <= 30em) {
  /* … */
}
```

Usando `min-` y `max-` podríamos probar un ancho entre dos valores como este:

```css
@media (min-width: 30em) and (max-width: 50em) {
  /* … */
}
```

Esto se convertiría a la sintaxis de nivel 4 como:

```css
@media (30em <= width <= 50em) {
  /* … */
}
```

La _media queries_ de Nivel 4 también agregan formas de combinar _media queries_ usando álgebra booleana completa con **`and`**, **`not`**, y **`or`**.

### Negar una característica con `not`

El uso de `not()` alrededor de una característica de medios niega esa característica en la consulta. Por ejemplo, `not(hover)` coincidiría si el dispositivo no tuviera capacidad de desplazamiento:

```css
@media (not(hover)) {
  /* … */
}
```

### Prueba de múltiples características con `or`

Puede usar `or` para probar una coincidencia entre más de una característica, resolviendo como `true` si alguna de las características es verdadera.
Por ejemplo, las siguientes consultas de prueba para dispositivos que tienen una pantalla monocromática o capacidad de desplazamiento:

```css
@media (not (color)) or (hover) {
  /* … */
}
```

## Véase también

- [@media](/es/docs/Web/CSS/@media)
- [_Container queries_](/es/docs/Web/CSS/CSS_Container_Queries)
- [Prueba de _media queries_ programáticamente](/es/docs/Web/CSS/Media_Queries/Testing_media_queries)
- [Animaciones CSS entre _media queries_](https://davidwalsh.name/animate-media-queries)
- [Características multimedia extendidas de Mozilla](/es/docs/Web/CSS/Mozilla_Extensions#media_features)
- [Características multimedia extendidas de WebKit](/es/docs/Web/CSS/WebKit_Extensions#media_features)
