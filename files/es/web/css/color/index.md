---
title: color
slug: Web/CSS/color
---

{{CSSRef}}

La propiedad de CSS **`color`** selecciona el [valor de color](/es/docs/Web/CSS/color_value) de primer plano del contenido de elemento de texto y [decoraciones de texto](/es/docs/Web/CSS/text-decoration). Tambien establece el valor {{cssxref("currentcolor")}} que se puede usar como un valor indirecto en otras propiedades, y es el valor predeterminado para otras propiedades de color, como {{cssxref("border-color")}}.

Para obtener una descripción general del uso del color en HTML, consulte [Aplicando color a los elementos HTML mediante CSS](/es/docs/Web/HTML/Applying_color).

#### Ejemplo

```css
/* Valores de palabras clave */
color: currentcolor;

/* Valores <named-color> */
color: red;
color: orange;
color: tan;
color: rebeccapurple;

/* Valores <hex-color> */
color: #090;
color: #009900;
color: #090a;
color: #009900aa;

/* Valores <rgb()> */
color: rgb(34, 12, 64, 0.6);
color: rgba(34, 12, 64, 0.6);
color: rgb(34 12 64 / 0.6);
color: rgba(34 12 64 / 0.3);
color: rgb(34 12 64 / 60%);
color: rgba(34.6 12 64 / 30%);

/* Valores <hsl()> */
color: hsl(30, 100%, 50%, 0.6);
color: hsla(30, 100%, 50%, 0.6);
color: hsl(30 100% 50% / 0.6);
color: hsla(30 100% 50% / 0.6);
color: hsl(30 100% 50% / 60%);
color: hsla(30.2 100% 50% / 60%);

/* Valores Globales */
color: inherit;
color: initial;
color: unset;
```

Ten en cuenta que el valor debe ser un {{cssxref("color")}} uniforme . No puede ser un {{cssxref("&lt;gradient&gt;")}}, que es en realidad un tipo de {{cssxref("&lt;image&gt;")}}.

```html hidden
<div class="grid">
  <div class="col">
    <div class="cell">
      Keyword values
      <p class="c1">color: currentcolor</p>
    </div>
    <div class="cell">
      &lt;named-color&gt; values
      <p class="c2">color: red</p>
      <p class="c3">color: orange</p>
      <p class="c4">color: tan</p>
      <p class="c5">color: rebeccapurple</p>
    </div>
    <div class="cell">
      &lt;hex-color&gt; values
      <p class="c6">color: #090</p>
      <p class="c7">color: #009900</p>
      <p class="c8">color: #090a</p>
      <p class="c9">color: #009900aa</p>
    </div>
    <div class="cell">
      &lt;rgb()&gt; values
      <p class="c10">color: rgb(34, 12, 64, 0.6)</p>
      <p class="c11">color: rgba(34, 12, 64, 0.6)</p>
      <p class="c12">color: rgb(34 12 64 / 0.6)</p>
      <p class="c13">color: rgba(34 12 64 / 0.6)</p>
    </div>
    <div class="cell">
      &lt;hsl()&gt; values
      <p class="c14">color: hsl(30, 100%, 50%, 0.6)</p>
      <p class="c15">color: hsla(30, 100%, 50%, 0.6)</p>
      <p class="c16">color: hsl(30 100% 50% / 0.6)</p>
      <p class="c17">color: hsla(30 100% 50% / 0.6)</p>
    </div>
  </div>
</div>
```

```css hidden
html,
body {
  height: 100%;
  box-sizing: border-box;
}

.grid {
  width: 100%;
  height: 100%;
  display: flex;
  background: #eee;
  font: 1em monospace;
}

.col {
  display: flex;
  flex: 1 auto;
  flex-direction: column;
}

.cell {
  margin: 0.5em;
  padding: 0.5em;
  background-color: #fff;
  overflow: hidden;
  text-align: left;
  font-style: italic;
}

p {
  font-size: 1rem;
  font-style: normal;
  padding: 0 0.5em 0.5em;
  margin: 0;
}

p:first-child {
  padding-top: 0.5em;
}

/* Valores de palabras clave */
.c1 {
  color: currentcolor;
}

/*  values */
.c2 {
  color: red;
}
.c3 {
  color: orange;
}
.c4 {
  color: tan;
}
.c5 {
  color: rebeccapurple;
}

/*  valores */
.c6 {
  color: #090;
}
.c7 {
  color: #009900;
}
.c8 {
  color: #090a;
}
.c9 {
  color: #009900aa;
}

/*  valores */
.c10 {
  color: rgb(34, 12, 64, 0.6);
}
.c11 {
  color: rgba(34, 12, 64, 0.6);
}
.c12 {
  color: rgb(34 12 64 / 0.6);
}
.c13 {
  color: rgba(34 12 64 / 0.6);
}

/*  valores */
.c14 {
  color: hsl(30, 100%, 50%, 0.6);
}
.c15 {
  color: hsla(30, 100%, 50%, 0.6);
}
.c16 {
  color: hsl(30 100% 50% / 0.6);
}
.c17 {
  color: hsla(30 100% 50% / 0.6);
}
```

{{EmbedLiveSample("", "100%", 630, "", "", "")}}

{{cssinfo}}

## Sintaxis

La propiedad `color` esta especificada como un solo un valor de {{cssxref("&lt;color&gt;")}}

### Valores

- {{cssxref("&lt;color&gt;")}}
  - : Establece el color de las partes textuales y decorativas del elemento.

### Sintaxis formal

{{csssyntax}}

## Ejemplos

Las siguientes son todas las formas de hacer que el texto de un párrafo sea rojo:

```css
p {
  color: red;
}
p {
  color: #f00;
}
p {
  color: #ff0000;
}
p {
  color: rgb(255, 0, 0);
}
p {
  color: rgb(100%, 0%, 0%);
}
p {
  color: hsl(0, 100%, 50%);
}

/* 50% translúcido */
p {
  color: rgba(255, 0, 0, 0.5);
}
p {
  color: hsla(0, 100%, 50%, 0.5);
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- El tipo de datos de {{cssxref("&lt;color&gt;")}}
- Otras propiedades relacionadas con el color: {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, y {{cssxref("column-rule-color")}}
- [Aplicar color a elementos HTML usando CSS](/es/docs/Web/HTML/Applying_color)
