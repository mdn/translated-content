---
title: text-emphasis-color
slug: Web/CSS/text-emphasis-color
---

{{CSSRef}}

La propiedad [CSS](/es/docs/Web/CSS) **`text-emphasis-color`** (que podría traducirse como color del texto con énfasis) define el color de las marcas de énfasis. Este valor también puede definirse usando el atajo {{cssxref("text-emphasis")}}

```css
/* Valor inicial*/
text-emphasis-color: currentColor;

/* <color>  */
text-emphasis-color: #555;
text-emphasis-color: blue;
text-emphasis-color: rgba(90, 200, 160, 0.8);
text-emphasis-color: transparent;

/* Valores globales */
text-emphasis-color: inherit;
text-emphasis-color: initial;
text-emphasis-color: unset;
```

{{cssinfo}}

## Sintáxis

### Valores

- `<color>`
  - : Define el color de las marcas de énfasis. Si ningún color es declarado, el color por defecto es `currentColor` (color actual).

### Sintáxis Formal

{{csssyntax}}

## Ejemplos

### CSS

```css
h3 {
  text-emphasis-color: #555;
  text-emphasis-style: "*";
}
```

### HTML

```html
<p>Este es un ejemplo:</p>

<h3>Esto está marcado con énfasis!</h3>
```

### Resultado

{{EmbedLiveSample("Examples", 450, 100)}}Ejemplo incrustado en vivo

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver También

- El tipo de dato {{cssxref("&lt;color&gt;")}}.
- Las otras propiedades de marcas de énfasis relacioanadas: {{cssxref('text-emphasis-style')}}, {{cssxref('text-emphasis')}}, y {{cssxref("text-emphasis-position")}}.
- Otras propiedades relacionadas al color: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, y {{cssxref("column-rule-color")}}
- [Aplicando color a los elementos HTML utilizando CSS.](/es/docs/Web/HTML/Aplicar_Color)
