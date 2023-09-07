---
title: background-blend-mode
slug: Web/CSS/background-blend-mode
---

{{CSSRef()}}

## Resumen

La propiedad CSS **`background-blend-mode`** describe cómo las imágenes de fondo y el color de fondo del elemento deben mezclar entre sí.

Los modos de fusión deben ser definidos en el mismo orden que la propiedad CSS {{cssxref("background-image")}}. Si la cantidad de modos de fusión y de imagenes de fondo no son iguales, se repetirán y/o truncarán hasta igualar las cantidades.

{{cssinfo}}

## Sintaxis

```css
/* Un valor */
background-blend-mode: normal;

/* Dos valores, uno por fondo */
background-blend-mode: darken, luminosity;

/* Valores globales */
background-blend-mode: initial;
background-blend-mode: inherit;
background-blend-mode: unset;
```

### Valores

- `<blend-mode>`
  - : Es un {{cssxref("&lt;blend-mode&gt;")}} que denota el modo de fusión que se aplicará. Puede haber varios valores, separados por coma.

## Ejemplos

```html
<select id="select">
  <option>normal</option>
  <option>multiply</option>
  <option selected>screen</option>
  <option>overlay</option>
  <option>darken</option>
  <option>lighten</option>
  <option>color-dodge</option>
  <option>color-burn</option>
  <option>hard-light</option>
  <option>soft-light</option>
  <option>difference</option>
  <option>exclusion</option>
  <option>hue</option>
  <option>saturation</option>
  <option>color</option>
  <option>luminosity</option>
</select>
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

```js
document.getElementById("select").onchange = function (event) {
  document.getElementById("div").style.backgroundBlendMode =
    document.getElementById("select").selectedOptions[0].innerHTML;
};
console.log(document.getElementById("div"));
```

{{ EmbedLiveSample('Examples', "330", "330") }}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{cssxref("&lt;blend-mode&gt;")}}
- {{cssxref("mix-blend-mode")}}
