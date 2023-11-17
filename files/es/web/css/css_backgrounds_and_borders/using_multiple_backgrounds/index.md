---
title: Usando múltiples fondos con CSS
slug: Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds
---

{{CSSRef}}

Con [CSS3](/es/docs/Web/CSS/CSS3), puedes aplicar **múltiple fondos** a los elementos. Estos se presentan uno encima del otro, poniendo el primer fondo definido hasta arriba, y el último, hasta abajo. Sólo el último fondo puede incluir color de fondo.

Especificar fondos múltiples es fácil:

```css
.myclass {
  background:
    background1,
    background 2,
    ...,
    backgroundN;
}
```

Puedes hacerlo con la propiedad atajo {{ cssxref("background") }} y con las propiedades individuales, excepto {{ cssxref("background-color") }}. Es decir, las siguientes propiedades pueden ser especificadas como lista, una por cada fondo: {{ cssxref("background") }}, {{ cssxref("background-attachment") }}, {{ cssxref("background-clip") }}, {{ cssxref("background-image") }}, {{ cssxref("background-origin") }}, {{ cssxref("background-position") }}, {{ cssxref("background-repeat") }}, {{ cssxref("background-size") }}.

## Ejemplo

En este ejemplo, tres fondos son apilados: el logo de Firefox, un [gradiente lineal](/es/docs/Web/CSS/linear-gradient), y una imagen de burbujas:

### HTML

```html
<div class="multi_bg_example"></div>
```

### CSS

```css
.multi_bg_example {
  width: 100%;
  height: 400px;
  background-image: url(firefox.png), url(bubbles.png), linear-gradient(to right, rgba(30, 75, 115, 1), rgba(255, 255, 255, 0));
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position:
    bottom right,
    left,
    right;
  background:
    -moz-linear-gradient(
      to right,
      rgba(30, 75, 115, 1),
      rgba(255, 255, 255, 0)
    ),
    -webkit-gradient(to right, rgba(30, 75, 115, 1), rgba(255, 255, 255, 0)),
    -ms-linear-gradient(to right, rgba(30, 75, 115, 1), rgba(255, 255, 255, 0)),
    linear-gradient(to right, rgba(30, 75, 115, 1), rgba(255, 255, 255, 0));
}
```

### Resultado

(Si la imagen no aparece en CodePen, intenta con el botón TIdy en la sección de CSS)

{{EmbedLiveSample('Example','100%','400')}}

Como puedes ver aquí, el logo de Firefox (primero enlistado) está hasta arriba, seguido por el gradiente, que está presentado encima del fondo de burbujas. Cada subpropiedad subsecuente ({{ cssxref("background-repeat") }} y {{ cssxref("background-position") }}) aplican a los fondos correspondientes. Así, el primer valor en la lista para {{ cssxref("background-repeat") }} aplica al primer fondo (el de hasta arriba), etc.

## Véase también

- [Usando gradientes con CSS](/es/docs/CSS/Using_CSS_gradients)
