---
title: image-rendering
slug: Web/CSS/image-rendering
---

{{CSSRef}}{{SeeCompatTable}}

La propiedad [CSS](/es/docs/Web/CSS) **`image-rendering`** provee una sugerencia al navegador acerca del algoritmo que debe usar para escalar imágenes.

```css
/* Keyword values */
image-rendering: auto;
image-rendering: crisp-edges;
image-rendering: pixelated;

/* Global values */
image-rendering: inherit;
image-rendering: initial;
image-rendering: unset;
```

Esta propiedad aplica tanto al elemento mismo, como a cualquier imagen provista en otra propiedad del elemento. No tiene efecto alguno en imágenes no-escaladas. Por ejemplo, si el tamaño natural de una imágen es _100×100px pero el autor de la página especifica sus dimenciones como_ `200×200px` (o `50×50px`), entonces la imágen se escalará (en cualquiér dirección) a sus nuevas dimensiones usando el algoritmo especificado. El escalado podría también aplicar por interacción del usuario (cambiando la escala).

> **Nota:** Un Canvas puede proveer una [solución de respaldo para crisp-edge/optimize-contrast](http://phrogz.net/tmp/canvas_image_zoom.html) a través de la manipulación manual de datos de la imagen.

{{cssinfo}}

## Sintaxis

### Valores

- **`auto`**
  - : Valor predeterminado, la imagen debe escalarse con un algoritmo que maximice la apariencia de la imagen. En particular, son aceptables los algoritmos de escala que "suavizan" colores, como la interpolación bilinear. So propósito son imágenes de fotografías. Desde la versión 1.9 (Firefox 3.0), Gecko usa remuestreo _bilinear_ (alta calidad).

<!---->

- **`crisp-edges`**
  - : La imagen se debe escalar con un algoritmo que preserve el contraste y los bordes de la imagen, y que no suavice los colores ni introduzca borrones en la imagen en el proceso. Los algoritmos adecuados incluyen algoritmos de escalamiento _nearest-neighbor_ y otros algoritmos de escalabilidad tales como algoritmos _2×SaI_ y _hqx-family_. Este valor está destinado a imágenes pixel-art, como en juegos de navegador.
- **`pixelated`**
  - : Al escalar la imagen, se debe usar el algoritmo de vecino más cercano, de modo que la imagen parezca estar compuesta de píxeles grandes. Cuando se reduce la escala, esto es lo mismo que 'auto'.

> **Nota:** Los valores `optimizeQuality` y `optimizeSpeed` presentes en un borrador anterior (y proviniendo de su contraparte SVG) son definidos como sinónimos del valor `auto`.

### Formal syntax

{{csssyntax}}

## Ejemplos

```css
/* aplica a imágenes GIF y PNG; eviar bordes borrosos */
img[src$=".gif"],
img[src$=".png"] {
  image-rendering: crisp-edges;
}
```

```css
div {
  background: url(chessboard.gif) no-repeat 50% 50%;
  image-rendering: crisp-edges;
}
```

### Ejemplos interactivos

#### image-rendering: auto

78% ![squares.gif](squares.gif) 100% ![squares.gif](squares.gif) 138% ![squares.gif](squares.gif) downsized ![hut.jpg](hut.jpg) upsized ![blumen.jpg](blumen.jpg)

#### image-rendering: pixelated; (-ms-interpolation-mode: nearest-neighbor)

78% ![squares.gif](squares.gif) 100% ![squares.gif](squares.gif) 138% ![squares.gif](squares.gif) downsized ![hut.jpg](hut.jpg) upsized ![blumen.jpg](blumen.jpg)

#### image-rendering: crisp-edges; (-webkit-optimize-contrast)

78% ![squares.gif](squares.gif) 100% ![squares.gif](squares.gif) 138% ![squares.gif](squares.gif) downsized ![hut.jpg](hut.jpg) upsized ![blumen.jpg](blumen.jpg)

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
