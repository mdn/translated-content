---
title: text-orientation
slug: Web/CSS/text-orientation
---

{{CSSRef}}

La propiedad [CSS](/es/docs/Web/CSS)**`text-orientation`** define la orientación del texto en una línea de escritura. Ésta propiedad sólo tiene efecto en modo vertical, ésto es, cuando {{cssxref("writing-mode")}} no está establecido cómo `horizontal-tb`. Ésta propiedad CSS es util para controlar la forma en que se muestran los lenguajes que utilizan escritura vertical, y tambien para construir encabezados verticales para tablas.

```css
/* Palabras clave valor */
text-orientation: mixed;
text-orientation: upright;
text-orientation: sideways-right;
text-orientation: sideways;
text-orientation: use-glyph-orientation;

/* Valores globales */
text-orientation: inherit;
text-orientation: initial;
text-orientation: unset;
```

{{cssinfo}}

## Sintaxis

La propiedad `text-orientation` puede tener cómo valor una de las palabras clave listadas a continuación.

### Valores

- `mixed`
  - : Rota los caracteres de escritura horizontal 90° en sentido de las manecillas del reloj. Establece los caracteres de escritura vertical de forma natural. Este es el valor por defecto.
- `upright`
  - : Establece los caracteres de escritura horizontal de forma natural (pero se presentan de arriba hacia abajo), de igual manera establece de forma natural los glifos para escritura vertical. Note que ésta palabra clave causa que todos los caracteres sean considerados de forma izquierda-a-derecha: el valor utilizado para {{cssxref("direction")}} es forzado a ser `ltr`.
- `sideways`
  - : Causa que los caracteres sean presentados de la forma en que se presentarían de manera horizontal, pero con la línea de escritura rotada 90° en sentido de las manecillas del reloj.
- `sideways-right`
  - : Un alias para `sideways` que se mantiene para propositos de compatibilidad.
- `use-glyph-orientation`
  - : En elementos SVG, ésta palabra clave produce que sea utilizado el valor de las propiedades SVG desaprobadas `glyph-orientation-vertical` y `glyph-orientation-horizontal`.

### Sintaxis formal

{{csssyntax}}

## Ejemplos

### HTML

```html
<p>Lorem ipsum dolet semper quisquam.</p>
```

### CSS

```css
p {
  writing-mode: vertical-rl;
  text-orientation: upright;
}
```

### Resultado

{{EmbedLiveSample('Examples')}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea tambien

- Las otras propiedades CSS relacionadas con escritura vertical: {{cssxref("writing-mode")}}, {{cssxref("text-combine-upright")}}, y {{cssxref("unicode-bidi")}}.
