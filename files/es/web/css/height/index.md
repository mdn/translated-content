---
title: height
slug: Web/CSS/height
l10n:
  sourceCommit: abcebf471d56ef12239e2565f26d952e8a8cab2e
---

{{CSSRef}}

La propiedad CSS **`height`** especifica la altura de un elemento. Por defecto, la propiedad define la altura del [área de contenido](/es/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#content_area). Sin embargo, si {{cssxref("box-sizing")}} está configurado como `border-box`, determina la altura del [área de borde](/es/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#border_area).

{{EmbedInteractiveExample("pages/css/height.html")}}

Las propiedades {{cssxref("min-height")}} y {{cssxref("max-height")}} anulan a la propiedad `height` .

## Sintaxis

```css
/* Valores de longitud */
height: 120px;
height: 10em;

/* Valores de porcentaje */
height: 75%;

/* Valores con palabras clave */
height: max-content;
height: min-content;
height: fit-content(20em);
height: auto;

/* Valores globales */
height: inherit;
height: initial;
height: revert;
height: revert-layer;
height: unset;
```

### Valores

- {{cssxref("&lt;length&gt;")}}
  - : Define la altura como un valor absoluto.
- {{cssxref("&lt;percentage&gt;")}}
  - : Define la altura como un porcentaje de la altura del bloque contenedor.
- `auto`
  - : El navegador calculará y seleccionará una altura para el elemento especificado.
- `max-content`
  - : La altura preferida intrínseca.
- `min-content`
  - : La altura mínima intrínseca.
- `fit-content`
  - : La caja (box en la demo de prueba de arriba) usará todo el espacio disponible, pero nunca más de lo indicado por `max-content` .
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})`
  - : Utiliza la fórmula _fit-content_ con el espacio disponible sustituido por el argumento especificado, es decir `min(max-content, max(min-content, <length-percentage>))`
- {{cssxref("clamp", "clamp()")}}
  - : Permite seleccionar un valor medio dentro de un rango de valores entre un mínimo y un máximo definidos.

## Problemas de accesibilidad

Asegúrese de que los elementos definidos con `height` no se truncan y/o no oscurecen otros contenidos cuando la página se amplía para aumentar el tamaño del texto.

- [MDN Entender las WCAG, explicaciones de la directriz 1.4](/es/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)

- [Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Definición formal

{{cssInfo}}

## Sintaxis formal

{{csssyntax}}

## Ejemplos

### Fijación de la altura mediante píxeles y porcentajes

#### HTML

```html
<div id="taller">Yo tengo 50 píxeles.</div>
<div id="shorter">Yo tengo 25 píxeles de altura.</div>
<div id="parent">
  <div id="child">Yo tengo la mitad de altura de mi padre</div>
</div>
```

#### CSS

```css
div {
  width: 250px;
  margin-bottom: 5px;
  border: 2px solid blue;
}

#taller {
  height: 50px;
}

#shorter {
  height: 25px;
}

#parent {
  height: 100px;
}

#child {
  height: 50%;
  width: 75%;
}
```

#### Result

{{EmbedLiveSample('Setting_height_using_pixels_and_percentages', 'auto', 240)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [El modelo de caja](/es/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
- {{cssxref("width")}}
- {{cssxref("box-sizing")}}
- {{cssxref("min-height")}}
- Las propiedades lógicas asignadas: {{cssxref("block-size")}},
  {{cssxref("inline-size")}}
