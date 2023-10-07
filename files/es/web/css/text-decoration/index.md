---
title: text-decoration
slug: Web/CSS/text-decoration
---

{{CSSRef}}

La propiedad CSS **`text-decoration`** se usa para establecer el formato de texto a subrayado (`underline`) y suprarrayado (`overline`), tachado (`line-through`) o parpadeo (`blink`). El subrayado y el suprarrayado son posicionados bajo el texto, mientras la línea a través de éste se posiciona por encima.

Las decoraciones de texto se dibujan a través de los elementos descendientes. Esto significa que no es posible deshabilitar la decoración en un descendiente si la propiedad se especifica en un elemento ancestro. Por ejemplo, en el código `<p>Este texto tiene <em>algunas palabras enfatizadas</em> en él.</p>`, la regla de estilos `p { text-decoration: underline; }` causará que el párrafo entero tenga subrayado. La regla `em { text-decoration: none; }` no causará ningún cambio; el párrafo entero seguirá subrayado. Sin embargo, la regla `em { text-decoration: overline; }` causará una segunda decoración que aparecerá sobre "algunas palabras enfatizadas".

> **Nota:** El Nivel 3 de Decoraciones de Texto transformó esta propiedad en la forma reducida de las tres propiedades nuevas {{cssxref("text-decoration-color")}}, {{cssxref("text-decoration-line")}}, y {{cssxref("text-decoration-style")}}. Como en cualquier otra propiedad reducida, esto significa que restaura sus valores a los predeterminados si no son definidos explícitamente en la propiedad.

{{cssinfo}}

## Sintaxis

```css
/* Valores clave */
text-decoration: none; /* Sin decoración */
text-decoration: underline red; /* Subrayado rojo */
text-decoration: underline wavy red; /* Subrayado rojo ondulado */

/* Valores globales */
text-decoration: inherit;
text-decoration: initial;
text-decoration: unset;
```

### Valores

La propiedad `text-decoration` es una forma reducida, y puede usar los valores de cada una de las propiedades de la forma larga: {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-color")}}, y {{cssxref("text-decoration-style")}}

### Sintaxis formal

{{csssyntax}}

## Ejemplos

```css
h1.under {
  text-decoration: underline;
}
h1.over {
  text-decoration: overline;
}
p.line {
  text-decoration: line-through;
}
p.blink {
  text-decoration: blink;
}
a.none {
  text-decoration: none;
}
p.underover {
  text-decoration: underline overline;
}
```

```html
<h1 class="under">Underlined Header</h1>
<p class="line">If you want to strike out text, use line-through.</p>
<p class="blink">
  This text might blink for you - if you use Explorer, it will not.
</p>
<h1 class="over">and now an overlined header.</h1>
<p>
  This
  <a class="none" href="textdecoration.html">link will not be underlined</a>, as
  most links are by default. Be careful with removing the text decoration on
  links since most users depend on the underline to signify a hyperlink.
</p>
<p class="underover">This text has both underline and overline.</p>
```

{{EmbedLiveSample('Examples','100%','310')}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- El atributo {{cssxref("list-style")}} controla la apariencia de los items en listas {{HTMLElement("ol")}} y {{HTMLElement("ul")}} de HTML.
