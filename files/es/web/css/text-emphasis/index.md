---
title: text-emphasis
slug: Web/CSS/text-emphasis
---

La **propiedad** **[CSS](/es/docs/Web/CSS)** de **text-emphasis**, es una propiedad _abreviada_ para establecer los valores de [text-empahasis-style](/es/docs/Web/CSS/text-emphasis-style) y [text-emphasis-color](/es/docs/Web/CSS/text-emphasis-color), en una sola declaración.

Esta **propiedad** aplicara el énfasis a cada carácter especificado en el texto del elemento, a excepción de caracteres separados como espacios y caracteres de control .

```css
/* Valor Inicial */
text-emphasis: none; /* No emphasis marks */

/* <string> valor */
text-emphasis: "x";
text-emphasis: "点";
text-emphasis: "\25B2";
text-emphasis: "*" #555;
text-emphasis: "foo"; /* Should NOT use. It may be computed to or rendered as 'f' only */

/* Valor de la Palabra Clave */
text-emphasis: filled;
text-emphasis: open;
text-emphasis: filled sesame;
text-emphasis: open sesame;

/* Valor de la Palabra clave combinada con un color */
text-emphasis: filled sesame #555;

/* Valores Globales */
text-emphasis: inherit;
text-emphasis: initial;
text-emphasis: unset;
```

La propiedad **text-emphasis** es diferente a la propiedad [text-decoration](/es/docs/Web/CSS/text-decoration).

[Text-decoration](/es/docs/Web/CSS/text-decoration) no hereda y la decoración se aplica atreves de todo el elemento. Sin embargo, la propiedad **test-emphasis** si hereda, lo que significa que es posible cambiar el **énfasis** para los descendientes.

The size of the emphasis symbol, like ruby symbols, is about 50% of the size of the font, and `text-emphasis` may affect line height when the current leading is not enough for the marks.

> **Nota:** `text-emphasis` doesn't reset the value of {{cssxref("text-emphasis-position")}}. This is because if the style and the color of emphasis marks may vary in a text, it is extremely unlikely that their position will. In the very rare cases when this is needed, the property {{cssxref("text-emphasis-position")}}.

{{cssinfo}}

## Sintaxis

### Valores

- `none`
  - : No emphasis marks.
- `filled`
  - : The shape is filled with solid color. If neither `filled` nor `open` is present, this is the default.
- `open`
  - : The shape is hollow.
- `dot`
  - : Display small circles as marks. The filled dot is `'•'` (`U+2022`), and the open dot is `'◦'` (`U+25E6`).
- `circle`
  - : Display large circles as marks. The filled circle is `'●'` (`U+25CF`), and the open circle is `'○'` (`U+25CB`). This is the default shape in horizontal writing modes when no other shape is given.
- `double-circle`
  - : Display double circles as marks. The filled double-circle is `'◉'` (`U+25C9`), and the open double-circle is `'◎'` (`U+25CE`).
- `triangle`
  - : Display triangles as marks. The filled triangle is `'▲'` (`U+25B2`), and the open triangle is `'△'` (`U+25B3`).
- `sesame`
  - : Display sesames as marks. The filled sesame is `'﹅'` (`U+FE45`), and the open sesame is `'﹆'` (`U+FE46`). This is the default shape in vertical writing modes when no other shape is given.
- `<string>`
  - : Display the given string as marks. Authors should not specify more than one _character_ in `<string>`. The UA may truncate or ignore strings consisting of more than one grapheme cluster.
- `<color>`
  - : Defines the color of the mark. If no color is present, it defaults to `currentColor`.

### Formal syntax

{{csssyntax}}

## Ejemplos

### A heading with emphasis shape and color

This example draws a heading with triangles used to emphasize each character.

#### CSS

```css
h2 {
  text-emphasis: triangle #d55;
}
```

#### HTML

```html
<h2>This is important!</h2>
```

#### Resultado

{{EmbedLiveSample("A_heading_with_emphasis_shape_and_color", 500, 70)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- The longhand properties {{cssxref('text-emphasis-style')}}, {{cssxref('text-emphasis-color')}}.
- The {{cssxref('text-emphasis-position')}} property allowing to define the position of the emphasis marks.
