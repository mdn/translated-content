---
title: "::first-letter (:first-letter)"
slug: Web/CSS/::first-letter
---

{{CSSRef}}

El [pseudo-elemento](/es/docs/Web/CSS/Pseudo-elements) **`::first-letter`** aplica estilos a la primera letra de la primera línea un [elemento de bloque](/es/docs/Web/HTML/Block-level_elements), sólo cuando no es precedido de otro contenido (como imágenes o tablas).

```css
/* Selecciona la primera letra de <p> */
p::first-letter {
  font-size: 130%;
}
```

La primera letra de un elemento no es siempre fácil de identificar:

- La puntuación que precede o sigue inmediatamente a la primera letra se incluye. La puntuación incluyo cualquier caracter Unicode definido on las clases _open_ (Ps), _close_ (Pe), _initial quote_ (Pi), _final quote_ (Pf), y _other punctuation_ (Po).
- Algunos idiomas tienen dígrafos que siempre se capitalizan juntos, como el `IJ` en holandés. En estos casos, ambas letras del dígrafo deben coincidir con el pseudo-elemento `::first-letter`. (Esto pobremente implementado en los navegadores; consulte la tabla de compatibilidad).
- La combinación del pseudoelemento {{ cssxref("::before") }} y la propiedad {{ cssxref("content") }} podría inyectar texto al inico del elemento. En dicho caso, `::first-letter` se aplicaría a la primera letra de este contenido generado.

> **Nota:** CSS3 introdujo la notación`::first-letter` (con doble dos puntos) para distinguir [pseudo-clases](/es/docs/Web/CSS/Pseudo-classes) de [pseudo-elementos](/es/docs/Web/CSS/Pseudo-elements). Los navegadores también aceptan`:first-letter`, introducido en CSS2.

## Propiedades permitidas

Sólo unas pocas propiedades de CSS se pueden usar con el pseudoelemento `::first-letter`:

- Todas las propiedades de fuente: {{ Cssxref("font") }}, {{ Cssxref("font-style") }}, {{cssxref("font-feature-settings")}}, {{cssxref("font-kerning")}}, {{cssxref("font-language-override")}}, {{cssxref("font-stretch")}}, {{cssxref("font-synthesis")}}, {{ Cssxref("font-variant") }}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-east-asian")}}, {{cssxref("font-variant-ligatures")}}, {{cssxref("font-variant-numeric")}}, {{cssxref("font-variant-position")}}, {{ Cssxref("font-weight") }}, {{ Cssxref("font-size") }}, {{cssxref("font-size-adjust")}}, {{ Cssxref("line-height") }} and {{ Cssxref("font-family") }}
- Todas las propiedades de fondo: {{ Cssxref("background") }}, {{ Cssxref("background-color") }}, {{ Cssxref("background-image") }}, {{cssxref("background-clip")}}, {{cssxref("background-origin")}}, {{ Cssxref("background-position") }}, {{ Cssxref("background-repeat") }}, {{ cssxref("background-size") }}, {{ Cssxref("background-attachment") }}, and {{cssxref("background-blend-mode")}}
- Todas las propiedades de márgenes: {{ Cssxref("margin") }}, {{ Cssxref("margin-top") }}, {{ Cssxref("margin-right") }}, {{ Cssxref("margin-bottom") }}, {{ Cssxref("margin-left") }}
- Todas las propiedades de relleno: {{ Cssxref("padding") }}, {{ Cssxref("padding-top") }}, {{ Cssxref("padding-right") }}, {{ Cssxref("padding-bottom") }}, {{ Cssxref("padding-left") }}
- Todas las propiedades de bordes: {{ Cssxref("border") }}, {{ Cssxref("border-style") }}, {{ Cssxref("border-color") }}, {{ cssxref("border-width") }}, {{ cssxref("border-radius") }}, {{cssxref("border-image")}}
- La propiedad {{ cssxref("color") }}
- Las propiedades {{ cssxref("text-decoration") }}, {{cssxref("text-shadow")}}, {{ cssxref("text-transform") }}, {{ cssxref("letter-spacing") }}, {{ cssxref("word-spacing") }} (when appropriate), {{ cssxref("line-height") }}, {{cssxref("text-decoration-color")}}, {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-style")}}, {{cssxref("box-shadow")}}, {{ cssxref("float") }}, {{ cssxref("vertical-align") }} (sólo si `float` es `none`)

## Sintaxis

{{csssyntax}}

## Ejemplo

Hace que la primera letra de cada párrafo sea roja y grande.

### HTML

```html
<p>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
  voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
  kasd gubergren, no sea takimata sanctus est.
</p>
<p>
  Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
  consequat.
</p>
<p>
  Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
  lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure
  dolor in hendrerit in vulputate velit esse molestie consequat.
</p>
<p>-El comienzo es un signo de puntuación especial.</p>
<p>_El comienzo es un signo de puntuación especial.</p>
<p>"El comienzo es un signo de puntuación especial.</p>
<p>'El comienzo es un signo de puntuación especial.</p>
<p>*El comienzo es un signo de puntuación especial.</p>
<p>#El comienzo es un signo de puntuación especial.</p>
<p>「特殊的汉字标点符号开头。</p>
<p>《特殊的汉字标点符号开头。</p>
<p>“特殊的汉字标点符号开头。</p>
```

### CSS

```css
p::first-letter {
  color: red;
  font-size: 130%;
}
```

### Result

{{ EmbedLiveSample('Example', '80%', 420) }}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver También

- {{cssxref("::first-line")}}
