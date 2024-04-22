---
title: transition-delay
slug: Web/CSS/transition-delay
---

{{ CSSRef() }}

## Resumen

La propiedad [CSS](/en/CSS) `transition-delay` especifica la cantidad de tiempo a esperar entre un cambio pedido hacia una propiedad y el comienzo de un efecto de transicion ([transition effect](/en/CSS/CSS_transitions)).

Un valor de `0s`, o `0ms`, indica que la propiedad comenzará a animar la transición inmediatamente cuando el valor cambie; valores positivos retrasaran el comienzo del efecto de transicion por el numero de segundos correspondiente. Valores negativos causaran que la transicion comience inmediatamente, pero causando que el efecto de la transicion pareciera que empiece por la mitad de la animacion.

Puedes especificar multiples retrasos ("delays"); cada retraso se aplicará a la propiedad correspondiente especificada por la propiedad {{ cssxref("transition-property") }}, que actua como una lista maestra. Si hay menos delays especificados que en la lista maestra, valores perdidos son puestos en el valor inicial (0s).

You may specify multiple delays; each delay will be applied to the corresponding property as specified by the {{ cssxref("transition-property") }} property, which acts as a master list. If there are fewer delays specified than in the master list, missing values are set to the initial value (`0s`). If there are more delays, the list is simply truncated to the right size. In both case the CSS declaration stays valid.

{{cssinfo}}

## Syntax

```
Formal syntax: {{csssyntax("transition-delay")}}
```

```
transition-delay: 3s
transition-delay: 2s, 4ms

transition-delay: initial
```

### Values

- `<time>`
  - : Is a {{cssxref("&lt;time&gt;")}} denoting the amount of time to wait between a property's value changing and the start of the animation effect.

## Examples

`transition-delay: 0.5s`

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
    color;
  -webkit-transition-duration: 2s;
  -webkit-transition-delay: 0.5s;
  -webkit-transition-timing-function: linear;
  transition-property: width height background-color font-size left top color;
  transition-duration: 2s;
  transition-delay: 0.5s;
  transition-timing-function: linear;
}
.box1 {
  width: 50px;
  height: 50px;
  background-color: blue;
  color: yellow;
  font-size: 18px;
  left: 150px;
  top: 25px;
  position: absolute;
  -webkit-transition-property: width height background-color font-size left top
    color;
  -webkit-transition-duration: 2s;
  -webkit-transition-delay: 0.5s;
  -webkit-transition-timing-function: linear;
  transition-property: width height background-color font-size left top color;
  transition-duration: 2s;
  transition-delay: 0.5s;
  transition-timing-function: linear;
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

{{EmbedLiveSample("delay_0_5s",275,150)}}

`transition-delay: 1s`

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
    color;
  -webkit-transition-duration: 2s;
  -webkit-transition-delay: 1s;
  -webkit-transition-timing-function: linear;
  transition-property: width height background-color font-size left top color;
  transition-duration: 2s;
  transition-delay: 1s;
  transition-timing-function: linear;
}
.box1 {
  width: 50px;
  height: 50px;
  background-color: blue;
  color: yellow;
  font-size: 18px;
  left: 150px;
  top: 25px;
  position: absolute;
  -webkit-transition-property: width height background-color font-size left top
    color;
  -webkit-transition-duration: 2s;
  -webkit-transition-delay: 1s;
  -webkit-transition-timing-function: linear;
  transition-property: width height background-color font-size left top color;
  transition-duration: 2s;
  transition-delay: 1s;
  transition-timing-function: linear;
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

{{EmbedLiveSample("delay_1s",275,150)}}

`transition-delay: 2s`

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
    color;
  -webkit-transition-duration: 2s;
  -webkit-transition-delay: 2s;
  -webkit-transition-timing-function: linear;
  transition-property: width height background-color font-size left top color;
  transition-duration: 2s;
  transition-delay: 2s;
  transition-timing-function: linear;
}
.box1 {
  width: 50px;
  height: 50px;
  background-color: blue;
  color: yellow;
  font-size: 18px;
  left: 150px;
  top: 25px;
  position: absolute;
  -webkit-transition-property: width height background-color font-size left top
    color;
  -webkit-transition-duration: 2s;
  -webkit-transition-delay: 2s;
  -webkit-transition-timing-function: linear;
  transition-property: width height background-color font-size left top color;
  transition-duration: 2s;
  transition-delay: 2s;
  transition-timing-function: linear;
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

{{EmbedLiveSample("delay_2s",275,150)}}

`transition-delay: 4s`

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
    color;
  -webkit-transition-duration: 2s;
  -webkit-transition-delay: 4s;
  -webkit-transition-timing-function: ease-in-out;
  transition-property: width height background-color font-size left top color;
  transition-duration: 2s;
  transition-delay: 4s;
  transition-timing-function: ease-in-out;
}
.box1 {
  width: 50px;
  height: 50px;
  background-color: blue;
  color: yellow;
  font-size: 18px;
  left: 150px;
  top: 25px;
  position: absolute;
  -webkit-transition-property: width height background-color font-size left top
    color;
  -webkit-transition-duration: 2s;
  -webkit-transition-delay: 4s;
  -webkit-transition-timing-function: ease-in-out;
  transition-property: width height background-color font-size left top color;
  transition-duration: 2s;
  transition-delay: 4s;
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

{{EmbedLiveSample("delay_4s",275,150)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## See also

- [Using CSS transitions](/es/docs/CSS/Using_CSS_transitions)
- {{ domxref("TransitionEvent") }}
