---
title: filter
slug: Web/CSS/filter
l10n:
  sourceCommit: 856b52f634b889084869d2ee0b8bb62c084be04d
---

{{CSSRef}}

La propiedad **`filter`** de [CSS](/es/docs/Web/CSS) aplica efectos gráficos como desenfoque o cambio de color a un elemento. Los filtros se usan comúnmente para ajustar la representación de imágenes, fondos y bordes.

Varias [funciones](#funciones), como `blur()` y `contrast()`, están disponibles para ayudarte a lograr efectos predefinidos.

{{EmbedInteractiveExample("pages/css/filter.html")}}

## Sintaxis

```css
/* Valores de <filter-function> */
filter: blur(5px);
filter: brightness(0.4);
filter: contrast(200%);
filter: drop-shadow(16px 16px 20px blue);
filter: grayscale(50%);
filter: hue-rotate(90deg);
filter: invert(75%);
filter: opacity(25%);
filter: saturate(30%);
filter: sepia(60%);

/* URL */
filter: url("filters.svg#filter-id");

/* Multiples filtros */
filter: contrast(175%) brightness(3%);
filter: drop-shadow(3px 3px red) sepia(100%) drop-shadow(-3px -3px blue);

/* Sin filtros */
filter: none;

/* Valores globales */
filter: inherit;
filter: initial;
filter: revert;
filter: revert-layer;
filter: unset;
```

Con una función, usa lo siguiente:

```css-nolint
filter: <filter-function> [<filter-function>]* | none;
```

Puedes usar `url()` para hacer referencia a un [elemento de filtro SVG](/es/docs/Web/SVG/Element/filter). Para una referencia a un elemento {{SVGElement("filter")}} de SVG, usa la siguiente sintaxis:

```css
filter: url(file.svg#filter-element-id);
```

## Funciones

La propiedad `filter` se especifica como `none` o una o más de las funciones enumeradas a continuación. Si el parámetro de alguna función no es válido, la función devuelve `none`. Excepto donde se indique, las funciones que toman un valor expresado con un signo de porcentaje (como en `34%`) también aceptan el valor expresado como decimal (como en `0.34`).

Cuando los valores de la propiedad `filter` contienen múltiples funciones, los filtros se aplican en orden.

- {{cssxref("filter-function/blur", "blur()")}}
  - : Aplica un desenfoque gaussiano a la imagen de entrada.

```css
filter: blur(5px);
```

- {{cssxref("filter-function/brightness", "brightness()")}}
  - : Aplica un multiplicador lineal a la imagen de entrada, haciéndola parecer más o menos brillante. Los valores son multiplicadores lineales del efecto, con `0%` creando una imagen completamente negra, `100%` no tiene ningún efecto y los valores superiores a `100%` iluminan la imagen.

```css
filter: brightness(2);
```

- {{cssxref("filter-function/contrast", "contrast()")}}
  - : Ajusta el contraste de la imagen de entrada. Un valor de `0%` hace que la imagen sea gris, `100%` no tiene ningún efecto y los valores superiores a `100%` crean un contraste.

```css
filter: contrast(200%);
```

- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
  - : Aplica el parámetro `<shadow>` como una sombra, siguiendo los contornos de la imagen. La sintaxis es similar a `<box-shadow>` (definida en el [módulo fondo y bordes CSS](/es/docs/Web/CSS/CSS_backgrounds_and_borders)), con la excepción de que la palabra clave `inset` y el parámetro `spread` no están permitidos. Al igual que con todos los valores de la propiedad `filter`, cualquier filtro después de `drop-shadow()` se aplica a la sombra.

```css
filter: drop-shadow(16px 16px 10px black);
```

- {{cssxref("filter-function/grayscale", "grayscale()")}}
  - : Convierte la imagen a escala de grises. Un valor de `100%` es completamente en escala de grises. El valor inicial de `0%` deja la entrada sin cambios. Los valores entre `0%` y `100%` producen multiplicadores lineales del efecto.

```css
filter: grayscale(100%);
```

- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
  - : Aplica una rotación de tono. El valor `<angle>` define el número de grados alrededor del círculo de color de tono en el que se ajustarán las muestras de entrada. Un valor de `0deg` deja la entrada sin cambios.

```css
filter: hue-rotate(90deg);
```

- {{cssxref("filter-function/invert", "invert()")}}
  - : Invierte las muestras en la imagen de entrada. Un valor de `100%` invierte completamente la imagen. Un valor de `0%` deja la entrada sin cambios. Los valores entre `0%` y `100%` tienen multiplicadores lineales en el efecto.

```css
filter: invert(100%);
```

- {{cssxref("filter-function/opacity", "opacity()")}}
  - : Aplica transparencia. `0%` hace que la imagen sea completamente transparente y `100%` deja la imagen sin cambios.

```css
filter: opacity(50%);
```

- {{cssxref("filter-function/saturate", "saturate()")}}
  - : Satura la imagen, con `0%` siendo completamente insaturado, `100%` dejando la imagen sin cambios, y valores de más de `100%` aumentando la saturación.

```css
filter: saturate(200%);
```

- {{cssxref("filter-function/sepia", "sepia()")}}
  - : Convierte la imagen a sepia, con un valor de `100%` haciendo que la imagen sea completamente sepia y `0%` sin hacer cambios.

```css
filter: sepia(100%);
```

## Combinar funciones

Puede combinar cualquier cantidad de funciones para manipular la representación. Los filtros se aplican en el orden declarado. El siguiente ejemplo mejora el contraste y el brillo de la imagen:

```css
filter: contrast(175%) brightness(103%);
```

### Interpolación

Cuando está animado, si tanto el filtro inicial como el final tienen una lista de funciones de la misma longitud sin {{cssxref("url","url()")}} en el mismo orden, cada una de sus funciones de filtro es {{Glossary("interpolation", "interpolada")}} según las reglas específicas de la función de filtro.

Si las listas de filtros tienen diferentes longitudes, las funciones de filtro equivalentes que faltan de la lista más larga se agregan al final de la lista más corta. Las funciones añadidas utilizan sus valores iniciales, sin modificación de filtro. Todos los filtros enumerados se interpolan de acuerdo con las reglas específicas de la función de filtro. De lo contrario, se utiliza la interpolación discreta.

## Definicion formal

{{cssinfo}}

## Sintaxis formal

{{csssyntax}}

## Ejemplos

### Aplicar funciones de filtro

La propiedad `filter` se aplica a la segunda imagen, atenuando y difuminando tanto la imagen como su borde.

```css
img {
  border: 5px solid yellow;
}
/* Ponga gris la segunda imagen en un 40% y desenfoque en 5px */
img:nth-of-type(2) {
  filter: grayscale(0.4) blur(5px);
}
```

```html
<img src="pencil.jpg" alt="La imagen original es nítida" />
<img
  src="pencil.jpg"
  alt="La imagen y el borde están borrosos y silenciados." />
```

{{EmbedLiveSample('Applying_filter_functions','100%','229px')}}

### Repetir funciones de filtro

Las funciones de filtro se aplican en orden de aparición. Se puede repetir la misma función de filtro.

```css
#MDN-logo {
  border: 1px solid blue;
  filter: drop-shadow(5px 5px 0 red) hue-rotate(180deg) drop-shadow(5px 5px 0
        red);
}
```

```html hidden
<svg
  id="MDN-logo"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 361 104.2"
  xml:space="preserve"
  role="img">
  <title>MDN Web Docs</title>
  <path
    d="M197.6 73.2h-17.1v-5.5h3.8V51.9c0-3.7-.7-6.3-2.1-7.9-1.4-1.6-3.3-2.3-5.7-2.3-3.2 0-5.6 1.1-7.2 3.4s-2.4 4.6-2.5 6.9v15.6h6v5.5h-17.1v-5.5h3.8V51.9c0-3.8-.7-6.4-2.1-7.9-1.4-1.5-3.3-2.3-5.6-2.3-3.2 0-5.5 1.1-7.2 3.3-1.6 2.2-2.4 4.5-2.5 6.9v15.8h6.9v5.5h-20.2v-5.5h6V42.4h-6.1v-5.6h13.4v6.4c1.2-2.1 2.7-3.8 4.7-5.2 2-1.3 4.4-2 7.3-2s5.3.7 7.5 2.1c2.2 1.4 3.7 3.5 4.5 6.4 1.1-2.5 2.7-4.5 4.9-6.1s4.8-2.4 7.9-2.4c3.5 0 6.5 1.1 8.9 3.3s3.7 5.6 3.7 10.2v18.2h6.1v5.5zm42.5 0h-13.2V66c-1.2 2.2-2.8 4.1-4.9 5.6-2.1 1.6-4.8 2.4-8.3 2.4-4.8 0-8.7-1.6-11.6-4.9-2.9-3.2-4.3-7.7-4.3-13.3 0-5 1.3-9.6 4-13.7 2.6-4.1 6.9-6.2 12.8-6.2s9.8 2.2 12.3 6.5V22.7h-8.6v-5.6h15.8v50.6h6v5.5zm-13.3-16.8V52c-.1-3-1.2-5.5-3.2-7.3s-4.4-2.8-7.2-2.8c-3.6 0-6.3 1.3-8.2 3.9-1.9 2.6-2.8 5.8-2.8 9.6 0 4.1 1 7.3 3 9.5s4.5 3.3 7.4 3.3c3.2 0 5.8-1.3 7.8-3.8 2.1-2.6 3.1-5.3 3.2-8zm61.5 16.8H269v-5.5h6V51.9c0-3.7-.7-6.3-2.2-7.9-1.4-1.6-3.4-2.3-5.7-2.3-3.1 0-5.6 1-7.4 3s-2.8 4.4-2.9 7v15.9h6v5.5h-19.3v-5.5h6V42.4h-6.2v-5.6h13.6V43c2.6-4.6 6.8-6.9 12.7-6.9 3.6 0 6.7 1.1 9.2 3.3s3.7 5.6 3.7 10.2v18.2h6v5.4h-.2z"
    style="fill: var(--text-primary);"></path>
  <g style="fill:blue;">
    <path
      d="M42 .2 13.4 92.3H1.7L30.2.2H42zM52.4.2v92.1H42V.2h10.4zm40.3 0L64.2 92.3H52.5L81 .2h11.7zM103.1.2v92.1H92.7V.2h10.4zM294 95h67v8.8h-67V95z"></path>
  </g>
</svg>
```

{{EmbedLiveSample('Repeating_filter_functions','100%','229px')}}

Los filtros se aplican en orden. Esta es la razón por la cual las sombras paralelas no son del mismo color: el tono de la primera sombra paralela se altera con la función `hue-rotate()` pero la segunda no.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- Propiedad CSS {{cssxref("backdrop-filter")}}
- Módulo de [composición y combinación](/es/docs/Web/CSS/CSS_compositing_and_blending) de CSS, incluidas las propiedades CSS {{cssxref("background-blend-mode")}} y {{cssxref("mix-blend-mode")}}.
- La propiedad CSS {{cssxref("mask")}}
- [SVG](/es/docs/Web/SVG), incluido el elemento SVG {{SVGElement("filter")}} y el atributo SVG {{SVGAttr("filter")}}.
- [Aplicación de efectos SVG al contenido HTML](/es/docs/Web/SVG/Applying_SVG_effects_to_HTML_content)
