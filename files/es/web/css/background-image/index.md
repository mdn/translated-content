---
title: background-image
slug: Web/CSS/background-image
tags:
  - CSS
  - CSS:Referencias
  - Todas_las_Categorías
translation_of: Web/CSS/background-image
---
{{ PreviousNext("CSS:background-color", "CSS:background-position") }}

## Resumen

La propiedad [CSS](/es/docs/Web/CSS) **`background-image`** establece una o más imágenes de fondo para un elemento.

- {{ Cssxref("initial", "Valor inicial") }}: ninguno
- Se aplica a: todos los elementos
- {{ Cssxref("inheritance", "Herencia") }}: no
- Porcentajes: N/A
- Medio: {{ Cssxref("visual") }}
- {{ Cssxref("computed value", "Valor calculada") }}: URI absoluta o ninguna

## Sintaxis

    background-image: url | none | inherit

## Valores

- url
  - : Localización de la imagen que se utilizará de fondo.
- none
  - : Utilizado para especificar que un elemento no debe tener ninguna imagen de fondo.

## Ejemplos

Note that the star image is partially transparent and is layered over the cat image.

### HTML

```html
<div>
    <p class="catsandstars">
        This paragraph is full of cats<br />and stars.
    </p>
    <p>This paragraph is not.</p>
    <p class="catsandstars">
        Here are more cats for you.<br />Look at them!
    </p>
    <p>And no more.</p>
</div>
```

### CSS

```css
pre, p {
    font-size: 1.5em;
    color: #FE7F88;
    background-color: transparent;
}

div {
  background-image: url("https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png");
}

p {
  background-image: none;
}

.catsandstars {
  background-image:  url("https://mdn.mozillademos.org/files/11991/startransparent.gif"),
                     url("https://mdn.mozillademos.org/files/7693/catfront.png");
  background-color: transparent;
}
```

### Result

{{EmbedLiveSample('Ejemplos')}}

## Notas

Los desarrolladores deben asegurarse que han especificado un color de fondo ({{ Cssxref("background-color") }}) en el caso de no usar una imagen. Las imágenes de fondo son mostradas encima del color de fondo.

## Sobre Accesibilidad

Los lectores de pantalla no reconocen las imágenes de fondo, si la imagen tiene un significado y no es de carácter meramente decorativa deberás incluirla semánticamente en el documento utilizando la etiqueta `img`.

Para más información (en inglés):

- [MDN Understanding WCAG, Guideline 1.1 explanations](/es/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.1_%E2%80%94_Providing_text_alternatives_for_non-text_content)
- [Understanding Success Criterion 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

## Especificaciones

- [CSS 1](http://www.w3.org/TR/CSS1#background-image)
- [CSS 2.1](http://www.w3.org/TR/CSS21/colors.html#propdef-background-image)
- [CSS 3](http://www.w3.org/TR/2005/WD-css3-background-20050216/#the-background-image)

## Compatibilidad de navegador

| Navegador         | Versión mínima |
| ----------------- | -------------- |
| Internet Explorer | 4              |
| Firefox           | 1              |
| Netscape          | 4              |
| Opera             | 3.5            |

## Ver también

{{ Cssxref("background") }}, {{ Cssxref("background-attachment") }}, {{ Cssxref("background-color") }}, {{ Cssxref("background-image") }}, {{ Cssxref("background-position") }}, {{ Cssxref("background-repeat") }}
