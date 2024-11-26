---
title: transition-duration
slug: Web/CSS/transition-duration
---

{{CSSRef}}

La propiedad de [CSS](/es/docs/Web/CSS) **`transition-duration`** establece el tiempo que debe tardar una animación de transición en completarse. Por defecto, el valor es de `0s`, esto quiere decir que no se producirá ninguna animación.

{{EmbedInteractiveExample("pages/css/transition-duration.html")}}

La fuente de este ejemplo interactivo se almacena en un repositorio de GitHub. Si desea contribuir al proyecto de ejemplos interactivos, por favor clone <https://github.com/mdn/interactive-examples> y envíenos un pull reques.

Se puede especificar múltiples duraciones; cada duración va a ser aplicada a la propiedad correspondiente según lo especificado en la propiedad {{ cssxref("transition-property") }}, que actuará como una lista maestra. Si se especifican menos duraciones en la lista maestra, el agente de usuario repetirá la lista de duraciones. Si hay más duraciones, la lista simplemente se trunca al tamaño correcto. En ambos casos, la declaración CSS sigue siendo válida

## Sintaxis

```css
/* <time> values */
transition-duration: 6s;
transition-duration: 120ms;
transition-duration: 1s, 15s;
transition-duration: 10s, 30s, 230ms;

/* Global values */
transition-duration: inherit;
transition-duration: initial;
transition-duration: unset;
```

### Valores

- `<time>`
  - : El {{cssxref("&lt;time&gt;")}} indica la cantidad de tiempo que debe tomar la transición del valor anterior de una propiedad, al nuevo valor. Un tiempo de 0s indica que no ocurrirá ninguna transición, es decir, el cambio entre los dos estados será instantáneo. Un valor negativo para el tiempo hace que la declaración sea inválida.

### Sintaxis Formal

{{csssyntax}}

## Ejemplos

`transition-duration: 0.5s`

```html hidden
<div class="parent">
  <div class="box">Lorem</div>
</div>
```

```css hidden
.parent {
  width: 250px;
  height: 125px;
}
.box {
  width: 100px;
  height: 100px;
  background-color: red;
  font-size: 20px;
  left: 0px;
  top: 0px;
  position: absolute;
  -webkit-transition-property: width height background-color font-size left top
    transform -webkit-transform color;
  -webkit-transition-duration: 0.5s;
  -webkit-transition-timing-function: ease-in-out;
  transition-property: width height background-color font-size left top
    transform -webkit-transform color;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;
}
.box1 {
  transform: rotate(270deg);
  -webkit-transform: rotate(270deg);
  width: 50px;
  height: 50px;
  background-color: blue;
  color: yellow;
  font-size: 18px;
  left: 150px;
  top: 25px;
  position: absolute;
  -webkit-transition-property: width height background-color font-size left top
    transform -webkit-transform color;
  -webkit-transition-duration: 0.5s;
  -webkit-transition-timing-function: ease-in-out;
  transition-property: width height background-color font-size left top
    transform -webkit-transformv color;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;
}
```

```js hidden
function updateTransition() {
  var el = document.querySelector("div.box");

  if (el) {
    el.className = "box1";
  } else {
    el = document.querySelector("div.box1");
    el.className = "box";
  }

  return el;
}

var intervalID = window.setInterval(updateTransition, 7000);
```

{{EmbedLiveSample("duration_0_5s",275,150)}}

`transition-duration: 1s`

```html hidden
<div class="parent">
  <div class="box">Lorem</div>
</div>
```

```css hidden
.parent {
  width: 250px;
  height: 125px;
}
.box {
  width: 100px;
  height: 100px;
  background-color: red;
  font-size: 20px;
  left: 0px;
  top: 0px;
  position: absolute;
  -webkit-transition-property: width height background-color font-size left
    top -webkit-transform color;
  -webkit-transition-duration: 1s;
  -webkit-transition-timing-function: ease-in-out;
  transition-property: width height background-color font-size left top
    transform color;
  transition-duration: 1s;
  transition-timing-function: ease-in-out;
}
.box1 {
  transform: rotate(270deg);
  -webkit-transform: rotate(270deg);
  width: 50px;
  height: 50px;
  background-color: blue;
  color: yellow;
  font-size: 18px;
  left: 150px;
  top: 25px;
  position: absolute;
  -webkit-transition-property: width height background-color font-size left
    top -webkit-transform transform color;
  -webkit-transition-duration: 1s;
  -webkit-transition-timing-function: ease-in-out;
  transition-property: width height background-color font-size left top
    transform -webkit-transform color;
  transition-duration: 1s;
  transition-timing-function: ease-in-out;
}
```

```js hidden
function updateTransition() {
  var el = document.querySelector("div.box");

  if (el) {
    el.className = "box1";
  } else {
    el = document.querySelector("div.box1");
    el.className = "box";
  }

  return el;
}

var intervalID = window.setInterval(updateTransition, 7000);
```

{{EmbedLiveSample("duration_1s",275,150)}}

`transition-duration: 2s`

```html hidden
<div class="parent">
  <div class="box">Lorem</div>
</div>
```

```css hidden
.parent {
  width: 250px;
  height: 125px;
}
.box {
  width: 100px;
  height: 100px;
  background-color: red;
  font-size: 20px;
  left: 0px;
  top: 0px;
  position: absolute;
  -webkit-transition-property: width height background-color font-size left top
    transform -webkit-transform color;
  -webkit-transition-duration: 2s;
  -webkit-transition-timing-function: ease-in-out;
  transition-property: width height background-color font-size left top
    transform -webkit-transform color;
  transition-duration: 2s;
  transition-timing-function: ease-in-out;
}
.box1 {
  transform: rotate(270deg);
  -webkit-transform: rotate(270deg);
  width: 50px;
  height: 50px;
  background-color: blue;
  color: yellow;
  font-size: 18px;
  left: 150px;
  top: 25px;
  position: absolute;
  -webkit-transition-property: width height background-color font-size left top
    transform -webkit-transform color;
  -webkit-transition-duration: 2s;
  -webkit-transition-timing-function: ease-in-out;
  transition-property: width height background-color font-size left top
    transform -webkit-transform color;
  transition-duration: 2s;
  transition-timing-function: ease-in-out;
}
```

```js hidden
function updateTransition() {
  var el = document.querySelector("div.box");

  if (el) {
    el.className = "box1";
  } else {
    el = document.querySelector("div.box1");
    el.className = "box";
  }

  return el;
}

var intervalID = window.setInterval(updateTransition, 7000);
```

{{EmbedLiveSample("duration_2s",275,150)}}

`transition-duration: 4s`

```html hidden
<div class="parent">
  <div class="box">Lorem</div>
</div>
```

```css hidden
.parent {
  width: 250px;
  height: 125px;
}
.box {
  width: 100px;
  height: 100px;
  background-color: red;
  font-size: 20px;
  left: 0px;
  top: 0px;
  position: absolute;
  -webkit-transition-property: width height background-color font-size left top
    transform -webkit-transform color;
  -webkit-transition-duration: 4s;
  -webkit-transition-timing-function: ease-in-out;
  transition-property: width height background-color font-size left top
    transform -webkit-transform color;
  transition-duration: 4s;
  transition-timing-function: ease-in-out;
}
.box1 {
  transform: rotate(270deg);
  -webkit-transform: rotate(270deg);
  width: 50px;
  height: 50px;
  background-color: blue;
  color: yellow;
  font-size: 18px;
  left: 150px;
  top: 25px;
  position: absolute;
  -webkit-transition-property: width height background-color font-size left top
    transform -webkit-transform color;
  -webkit-transition-duration: 4s;
  -webkit-transition-timing-function: ease-in-out;
  transition-property: width height background-color font-size left top
    transform -webkit-transform color;
  transition-duration: 4s;
  transition-timing-function: ease-in-out;
}
```

```js hidden
function updateTransition() {
  var el = document.querySelector("div.box");

  if (el) {
    el.className = "box1";
  } else {
    el = document.querySelector("div.box1");
    el.className = "box";
  }

  return el;
}

var intervalID = window.setInterval(updateTransition, 7000);
```

{{EmbedLiveSample("duration_4s",275,150)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## También puede ver

- [Using CSS transitions](/es/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
- {{cssxref('transition')}}
- {{cssxref('transition-property')}}
- {{cssxref('transition-timing-function')}}
- {{cssxref('transition-delay')}}
- {{domxref("TransitionEvent")}}
