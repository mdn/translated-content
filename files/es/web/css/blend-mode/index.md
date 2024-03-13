---
title: <blend-mode>
slug: Web/CSS/blend-mode
---

{{CSSRef}}

## Resumen

El tipo **`<blend-mode>`** es una coleccion de palabras clave que describen modos de mezcla.

Un modo de mezcla (blend mode) es un método para calcular el color final de un píxel cuando hay dos capas superpuestas. Cada modo de mezcla toma el valor del color de primer plano y el de fondo (color superior y color inferior, respectivamente), realiza su cálculo y devuelve el valor de color. La capa final visible es el resultado de realizar el cálculo del modo de mezcla en cada pixel sobrepuesto entre las capas mezcladas.

## Sintaxis

```
Sintaxis formal: normal | multiply | screen | overlay | darken | lighten | color-dodge | color-burn | hard-light | soft-light | difference | exclusion | hue | saturation | color | luminosity
```

### Valores posibles

- `normal`

  - : El color final es el de la capa superior, sin importar el color de fondo.

    El efecto es similar a dos trozos de papel sobrepuestos.

- `multiply`

  - : El color final es el resultado de multiplicar el color superior y el inferior.

    Una capa negra conduce a una capa final negra, y una capa blanca lleva a que no haya cambios.

    El efecto ese similar a dos imágenes impresas en papel transparente sobrepuestas.

- `screen`

  - : El color final ees el resultado de invertir los colores, multiplicándolos e invirtiendo el valor resultante.

    Una capa negra no produce cambio alguno, y una capa blanca conduce a una capa blanca final.

    El efecto es similar a dos imágenes mostrándose desde un proyector.

- `overlay`

  - : El color final es el resultado de `multiply` si el color inferior es más oscuro, o `screen` si el color inferior es más claro.

    Este modo de mezcla es equivalente a `hard-light`, pero si las capas son intercambiadas.

- `darken`

  - : El resultado final es un color compuesto de los valores más oscuros por cada canal de color.

- `lighten`

  - : El resultado final es un color compuesto de los valores más claros por cada canal de color.

- `color-dodge`

  - : El color final es el resultado de dividir el color inferior por el inverso del color superior.

    Un fondo negro no produce cambio alguno. Un color de primer plano con el color invertido del fondo produce un color completamente iluminado.

    Este modo de mezcla es similar a `screen`, pero basta con que el color de primer plano sea tan claro como el inverso del color de fondo para alcanzar un color completamente iluminado.

- `color-burn`

  - : El color final es el resultado de invertir el color de fondo, dividier el valor por el color superior, e invertir ese valor.

    Un fondo blanco no produce cambio alguno. Un color de primer plano con el color invertido del fondo produce una imagen negra.

    Este modo de mezcla es similar a `multiply`, pero basta con que el color de primer plano sea tan oscuro como el inverso del color de fondo para dar como resultado una imagen negra.

- `hard-light`

  - : El color final es el resultado de `multiply` si el color superior es más oscuro, o `screen` si el color superior es más oscuro.

    Este modo de mezcla es equivalente a `overlay`, pero con las capas intercambiadas.

    El efecto es similar a encender un foco con mucha _intensidad_ en el fondo.

- `soft-light`

  - : El color final es similar a `hard-light`, pero más suave.

    Este modo de mezcla se comporta similar a `hard-light`.

    El efecto es similar a encender un foco _difuso_ en el fondo.

- `difference`

  - : El color final es elresultado de restar el color más oscuro de las dos capas, del más claro.

    Una capa negra no produce efecto alguno, mientras una capa blanca invierte el color de la otra capa.

- `exclusion`

  - : El color final es similar a `difference,` pero con menor contraste.

    Así como con `difference`, una capa negra no produce efecto alguno, mientras una capa blanca invierte el color de la otra capa.

- `hue`

  - : El color final tiene el _matiz_ del color superior, mientras usa la _saturación_ y _luminosidad_ del color inferior.

- `saturation`

  - : El color final tiene la _saturación_ del color superior, mientras usa el _matiz_ y _luminosidad_ del color inferior.

    Un fondo gris puro, que no tenga saturación, no producirá efecto alguno.

- `color`

  - : El color final tiene el **matiz** y **saturación** del color superior, mientras usa la _luminosidad_ del color inferior.

    El efecto preserva los niveles de grid y puede ser usado para colorear el primer plano.

- `luminosity`

  - : El color final tiene la _luminosidad_ del color superior, mientras usa el _matiz_ y _saturación_ del color inferior.

    Este modo de mezcla es equivalente a `color`, pero con las capas intercambiadas.

## Ejemplos

### Ejemplo usando `normal`

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: normal;
}
```

{{ EmbedLiveSample("", "300", "300") }}

### Ejemplo usando `multiply`

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: multiply;
}
```

{{ EmbedLiveSample("", "300", "300") }}

### Ejemplo usando `screen`

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: screen;
}
```

{{ EmbedLiveSample("", "300", "300") }}

### Ejemplo usando `overlay`

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: overlay;
}
```

{{ EmbedLiveSample("", "300", "300") }}

### Ejemplo usando `darken`

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: darken;
}
```

{{ EmbedLiveSample("", "300", "300") }}

### Ejemplo usando `lighten`

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: lighten;
}
```

{{ EmbedLiveSample("", "300", "300") }}

### Ejemplo usando `color-dodge`

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: color-dodge;
}
```

{{ EmbedLiveSample("", "300", "300") }}

### Ejemplo usando `color-burn`

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: color-burn;
}
```

{{ EmbedLiveSample("", "300", "300") }}

### Ejemplo usando `hard-light`

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: hard-light;
}
```

{{ EmbedLiveSample("", "300", "300") }}

### Ejemplo usando `soft-light`

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: soft-light;
}
```

{{ EmbedLiveSample("", "300", "300") }}

### Ejemplo usando `difference`

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: difference;
}
```

{{ EmbedLiveSample("", "300", "300") }}

### Ejemplo usando `exclusion`

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: exclusion;
}
```

{{ EmbedLiveSample("", "300", "300") }}

### Ejemplo usando `hue`

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: hue;
}
```

{{ EmbedLiveSample("", "300", "300") }}

### Ejemplo usando `saturation`

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: saturation;
}
```

{{ EmbedLiveSample("", "300", "300") }}

### Ejemplo usando `color`

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: color;
}
```

{{ EmbedLiveSample("", "300", "300") }}

### Ejemplo usando `luminosity`

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: luminosity;
}
```

{{ EmbedLiveSample("", "300", "300") }}

## Interpolación de modos de mezcla

Los cambios entre modos de mezcla no son interpolados. Cualquier cambio ocurrirá abruptamente.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- Propiedades que usan valores de este tipo: {{cssxref("background-blend-mode")}} y {{cssxref("mix-blend-mode")}}
- [Blend modes](http://en.wikipedia.org/wiki/Blend_modes)
- Índice de [Referencia CSS](/es/docs/CSS/CSS_Reference)
