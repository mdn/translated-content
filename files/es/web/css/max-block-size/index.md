---
title: max-block-size
slug: Web/CSS/max-block-size
browser-compat: css.properties.max-block-size
---
{{CSSRef}}

La propiedad **`max-block-size`** [CSS](/es/docs/Web/CSS) especifica el tamaño máximo de un elemento en la dirección opuesta a la escritura dirigida como se especifica por {{cssxref("writing-mode")}}. Es decir, si la dirección de escritura es horizontal, entonces `max-block-size` es equivalente a {{cssxref("max-height")}}; si la dirección de escritura es vertical, `max-block-size` es el mismo que {{cssxref("max-width")}}.

El tamaño máximo de la otra dimensión se especifica usando la propiedad {{cssxref("max-inline-size")}}.

Esto es útil porque `max-width` se usa siempre para tamaños horizontales y `max-height` para tamaños verticales, y si necesita establecer longitudes basadas en el tamaño de su contenido de texto, debe ser capaz de hacerlo con la dirección de escritura en cuenta.

En los momentos que normalmente utilizaría `max-height` o `max-width`, debería usar `max-block-size` para establecer el "alto" máximo del contenido (incluso si esto no es un valor vertical) y `max-inline-size` para establecer el "ancho" máximo del contenido (aunque esto puede ser vertical en lugar de horizontal). Vea el {{SectionOnPage("/es/docs/Web/CSS/writing-mode", "Ejemplo")}}, que muestra los diferentes modos de escritura en acción.

{{EmbedInteractiveExample("pages/css/max-block-size.html")}}

## Sintaxis

```css
/* Valores de longitud <length> */
max-block-size: 300px;
max-block-size: 25em;

/* Valores de porcentaje <percent> */
max-block-size: 75%;

/* Valores de palabras clave */
max-block-size: none;
max-block-size: max-content;
max-block-size: min-content;
max-block-size: fit-content(20em);

/* Valores globales */
max-block-size: inherit;
max-block-size: initial;
max-block-size: revert;
max-block-size: revert-layer;
max-block-size: unset;
```

### Valores

El valor de la propiedad `max-block-size` puede ser cualquier valor que sea legal para las propiedades {{cssxref("max-width")}} y {{cssxref("max-height")}}:

- {{cssxref("&lt;length&gt;")}}
  - : Define `max-block-size` como un valor absoluto.
- {{cssxref("&lt;percentage&gt;")}}
  - : Define `max-block-size` como un porcentaje del tamaño del contenedor en el eje de bloque.
- `none`
  - : Sin límite en el tamaño del elemento.
- `max-content`
  - : El preferido intrínseco para `max-block-size`.
- `min-content`
  - : El mínimo intrínseco para `max-block-size`.
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})`
  - : Usa la fórmula `fit-content` con el espacio disponible reemplazado por el argumento especificado, es decir, `min(max-content, max(min-content, argument))`.

### Cómo afecta el writing-mode a la direccionalidad

Los valores de `writing-mode` afectan al mapeo de `max-block-size` a `max-width` o `max-height` como a continuación:

| Valores de `writing-mode`                                                                                                                                              | `max-block-size` es equivalente a |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| `horizontal-tb`, `lr` {{deprecated_inline}}, `lr-tb` {{deprecated_inline}}, `rl` {{deprecated_inline}}, `rb` {{deprecated_inline}}, `rb-rl` {{deprecated_inline}}     | {{cssxref("max-height")}}         |
| `vertical-rl`, `vertical-lr`, `sideways-rl` {{experimental_inline}}, `sideways-lr` {{experimental_inline}}, `tb` {{deprecated_inline}}, `tb-rl` {{deprecated_inline}} | {{cssxref("max-width")}}          |

> **Nota:** Los valores de `writing-mode`: `sideways-lr` y `sideways-rl`, fueron eliminados de la especificación de escritura de nivel 3 de CSS en el proceso de diseño de sucesión. Pueden ser restaurados en el nivel 4.

> **Nota:** Los modos de escritura `lr`, `lr-tb`, `rl`, `rb`, y `rb-tl` ya no están permitidos en contextos {{Glossary("HTML")}}; sólo se pueden usar en contextos 1.x {{Glossary("SVG")}}.

## Definición formal

{{cssinfo}}

## Sintaxis formal

{{csssyntax}}

## Ejemplos

### Configuración de max-block-size con texto horizontal y vertical

En este ejemplo, el mismo texto (las oraciones de apertura de {{interwiki("wikipedia", "Herman Melville", "Herman Melville's")}} en la novela _{{interwiki("wikipedia", "Moby-Dick")}}_) se presenta en ambos modos de escritura `horizontal-tb` y `vertical-rl`.

#### HTML

El HTML establece dos bloques {{HTMLElement("div")}} que se presentarán con su {{cssxref("writing-mode")}} establecido usando las clases `horizontal` o `vertical`. Ambos cuadros comparten la clase `standard-box`, que establece el color, el relleno y sus respectivos valores de `max-block-size`.

```html
<p>Modo de escritura <code>horizontal-tb</code> (el valor predeterminado):</p>
<div class="standard-box horizontal">
  Llámame Ishmael. Hace algunos años, no importa cuántos años exactamente,
  sin dinero en mi bolsillo ni nada de interés particular, Pensé en navegar
  un poco y ver la parte acuosa del mundo. Eso es una forma que tengo de 
  expulsar el bazo y regular la circulación.
</div>

<p>Modo de escritura <code>vertical-rl</code>:</p>
<div class="standard-box vertical">
  Llámame Ishmael. Hace algunos años, no importa cuántos años exactamente,
  sin dinero en mi bolsillo ni nada de interés particular, Pensé en navegar
  un poco y ver la parte acuosa del mundo. Eso es una forma que tengo de 
  expulsar el bazo y regular la circulación.
</div>
```

#### CSS

El CSS define tres clases. La primera, `standard-box`, se aplica a ambos cuadros, como se ve arriba. Establece estilos estándar incluyendo el tamaño mínimo y máximo del bloque, el tamaño de la fuente, y así sucesivamente.

Después de eso vienen las clases `horizontal` y `vertical`, que añaden la propiedad {{cssxref("writing-mode")}} al cuadro, con el valor `horizontal-tb` o `vertical-rl` dependiendo de qué clase se utiliza.

```css
.standard-box {
  padding: 4px;
  background-color: #abcdef;
  color: #000;
  font: 16px "Open Sans", "Helvetica", "Arial", sans-serif;
  max-block-size: 160px;
  min-block-size: 100px;
}

.horizontal {
  writing-mode: horizontal-tb;
}

.vertical {
  writing-mode: vertical-rl;
}
```

#### Resultado

{{EmbedLiveSample("Setting_max-block-size_with_horizontal_and_vertical_text", 600, 850)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- Las propiedades físicas mapeadas: {{cssxref("max-width")}} y {{cssxref("max-height")}}
- Establecer el tamaño máximo de la otra dirección: {{cssxref("max-inline-size")}}
- {{cssxref("writing-mode")}}
