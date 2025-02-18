---
title: ::selection
slug: Web/CSS/::selection
l10n:
  sourceCommit: 5fea7c9593f5e4b4ef13ec65064acf1eabf01e4e
---

{{CSSRef}}

El [pseudoelemento](/es/docs/Web/CSS/Pseudo-elements) de CSS **`::selection`** aplica estilos a la parte de un documento que ha sido resaltada por el usuario (como hacer clic y arrastrar el ratón sobre el texto).

{{EmbedInteractiveExample("pages/tabbed/pseudo-element-selection.html", "tabbed-shorter")}}

## Propiedades permitidas

Solo se pueden usar determinadas propiedades CSS con `::selection`:

- {{CSSxRef("color")}}
- {{CSSxRef("background-color")}}
- {{CSSxRef("text-decoration")}} y sus propiedades asociadas
- {{CSSxRef("text-shadow")}}
- {{CSSxRef("-webkit-text-stroke-color")}}, {{CSSxRef("-webkit-text-fill-color")}} y {{CSSxRef("-webkit-text-stroke-width")}}

En particular, {{CSSxRef("background-image")}} se ignora.

## Sintaxis

```css
::selection {
  /* ... */
}
```

## Ejemplos

### HTML

```html
Este texto tiene estilos especiales cuando lo resaltas.
<p>Prueba también a seleccionar este párrafo.</p>
```

### CSS

```css hidden
::-moz-selection {
  color: gold;
  background-color: red;
}

p::-moz-selection {
  color: white;
  background-color: blue;
}
```

```css
/* Hacer que el texto seleccionado sea dorado sobre un fondo rojo */
::selection {
  color: gold;
  background-color: red;
}

/* Hacer que el texto seleccionado en un párrafo sea blanco sobre un fondo azul */
p::selection {
  color: white;
  background-color: blue;
}
```

### Resultado

{{EmbedLiveSample('Ejemplos')}}

## Preocupaciones de accesibilidad

**No sobreescribas los estilos del texto seleccionado por razones puramente estéticas** — los usuarios pueden personalizarlos para satisfacer sus necesidades. Para las personas que experimentan problemas cognitivos o que tienen menos conocimientos tecnológicos, los cambios inesperados en los estilos de selección pueden perjudicar su comprensión de la funcionalidad.

Si se sobreescribe, es importante asegurarse de que la **relación de contraste** entre el texto y los colores de fondo de la selección sea lo suficientemente alta como para que las personas con problemas de visión puedan leerla.

La relación de contraste de color se encuentra comparando la luminosidad del texto seleccionado y los colores de fondo del texto seleccionado. Para cumplir con las [pautas de accesibilidad del contenido web (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) actuales, el contenido del texto debe tener una relación de contraste de **4.5:1**, o 3:1 para texto más largo como encabezados. (WCAG define texto grande entre `18.66px` y `24px` con [negrita](/es/docs/Web/CSS/font-weight), o `24px` o superior).

- [WebAIM: Comprobar contraste de color](https://webaim.org/resources/contrastchecker/)
- [MDN Comprensión de las WCAG, pauta 1.4 explicaciones](/es/docs/Web/Accessibility/Understanding_WCAG/Perceivable#pauta_1.4_facilitar_a_los_usuarios_ver_y_oír_el_contenido_incluyendo_la_separación_entre_el_primer_plano_y_el_fondo)
- [Comprender el Criterio de Conformidad 1.4.3 | W3C: comprensión de las WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{cssxref("pointer-events")}} - controlar qué eventos están activos en el elemento
