---
title: text-shadow
slug: Web/CSS/text-shadow
---

{{CSSRef}}

## Resumen

La propiedad **`text-shadow`** agrega sombra al texto. Acepta una lista de sombras separadas por coma, para aplicarlas al texto y a la propiedad {{cssxref("text-decoration","text-decorations")}} del elemento.

Cada sombra es especificada como un ófset del texto, junto con valores de color y radio de difuminación opcionales.

Múltiples sombras son aplicadas del frente al fondo, en el mismo orden que sean definidas.

Esta propiedad aplica para los [pseudo-elementos](/es/docs/Web/CSS/Pseudo-elements) {{cssxref("::first-line")}} y {{cssxref("::first-letter")}}.

{{cssinfo}}

## Sintaxis

```css
/* offset-x | offset-y | blur-radius | color */
text-shadow: 1px 1px 2px black;

/* color | offset-x | offset-y | blur-radius */
text-shadow: #ccc 1px 0 10px;

/* offset-x | offset-y | color */
text-shadow: 5px 5px #558abb;

/* color | offset-x | offset-y */
text-shadow: white 2px 5px;

/* offset-x | offset-y
/* Se usan los valores predeterminados para color y blur-radius */
text-shadow: 5px 10px;

/* Valores globales */
text-shadow: inherit;
text-shadow: initial;
text-shadow: unset;
```

### Valores

- \<color>

  - : Opcional. Puede ser especificado antes o después de los valores de offset. Si el color no es especificado, se usa el predeterminado del agente usuario.

    > **Nota:** Para asegurar consistencia entre navegadores, se recomienda especificar un color explícito.

- \<offset-x> \<offset-y>
  - : Requeridos. Estos valores `length` especifican el ófset de la sombra del texto. `<offset-x>` especifica la distancia horizontal; un valor negativo pone la sombra a la izquierda del texto. `<offset-y>` especifica la distancia vertical; un valor negativo pone la sombra encima del texto. Si ambos valores son `0`, la sombra es colocada detrás del texto (y puede generar un efecto de difuminado cuando se define el valor `<blur-radius>`).
    Para más detalles de las unidades que se pueden usar, véase {{cssxref("length")}}.
- \<blur-radius>
  - : Opcional. Éste es un valor {{cssxref("length")}}. Si no se especifica, su valor predeterminado es `0`. Mientras más alto sea el valor, mayor será la difuminación; la sombra se vuelve más amplia y clara.

### Sintaxis formal

{{csssyntax}}

## Ejemplos

### Sombra roja

```css
.red-text-shadow {
  text-shadow: red 0 -2px;
}
```

```html
<p class="red-text-shadow">
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
  veritatis et quasi architecto beatae vitae dicta sunt explicabo.
</p>
```

{{EmbedLiveSample('Example1', '689px', '90px')}}

### Sombra azul

```css
.white-with-blue-shadow {
  text-shadow:
    1px 1px 2px black,
    0 0 1em blue,
    0 0 0.2em blue;
  color: white;
  font:
    1.5em Georgia,
    "Bitstream Charter",
    "URW Bookman L",
    "Century Schoolbook L",
    serif;
}
```

```html
<p class="white-with-blue-shadow">
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
  veritatis et quasi architecto beatae vitae dicta sunt explicabo.
</p>
```

{{EmbedLiveSample('Example2', '689px', '180px')}}

### Sombra dorada

```css
.gold-on-gold {
  text-shadow:
    rgba(0, 0, 0, 0.1) -1px 0,
    rgba(0, 0, 0, 0.1) 0 -1px,
    rgba(255, 255, 255, 0.1) 1px 0,
    rgba(255, 255, 255, 0.1) 0 1px,
    rgba(0, 0, 0, 0.1) -1px -1px,
    rgba(255, 255, 255, 0.1) 1px 1px;
  color: gold;
  background: gold;
}
```

```html
<p class="gold-on-gold">
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
  veritatis et quasi architecto beatae vitae dicta sunt explicabo.
</p>
```

{{EmbedLiveSample('Example3', '689px', '90px')}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{cssxref("box-shadow")}}
