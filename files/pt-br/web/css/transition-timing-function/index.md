---
title: transition-timing-function
slug: Web/CSS/transition-timing-function
---

{{CSSRef}}

A propriedade CSS **`transition-timing-function`** é usada para descrever como os valores intermediários das propriedades CSS sendo afetados por um efeito de transição são calculados. Em essência isso permite você estabelecer uma curva de aceleração, para que então a velocidade da transição possa variar durante sua duração.

Essa curva de aceleração é definida usando {{cssxref("&lt;timing-function&gt;")}} para cada propriedade a ser transicionada.

```css
/* Keyword values */
transition-timing-function: ease;
transition-timing-function: ease-in;
transition-timing-function: ease-out;
transition-timing-function: ease-in-out;
transition-timing-function: linear;
transition-timing-function: step-start;
transition-timing-function: step-end;

/* Function values */
transition-timing-function: steps(4, end);
transition-timing-function: cubic-bezier(0.1, 0.7, 1, 0.1);
transition-timing-function: frames(10);

/* Multiple timing functions */
transition-timing-function: ease, step-start, cubic-bezier(0.1, 0.7, 1, 0.1);

/* Global values */
transition-timing-function: inherit;
transition-timing-function: initial;
transition-timing-function: unset;
```

You may specify multiple timing functions; each one will be applied to the corresponding property as specified by the {{ cssxref("transition-property") }} property, which acts as a master list. If there are fewer functions specified than in the master list, missing values are set to the initial value (`ease`). If there are more timing functions, the list is simply truncated to the right size. In both case the CSS declaration stays valid.

{{cssinfo}}

## Syntax

### Values

- `<timing-function>`
  - : Each {{cssxref("&lt;timing-function&gt;")}} represents the timing function to link to the corresponding property to transition, as defined in {{ cssxref("transition-property") }}.

### Formal syntax

{{csssyntax}}

## Examples

`transition-timing-function: ease`

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
  -webkit-transition-timing-function: ease;
  transition-property: width height background-color font-size left top color;
  transition-duration: 2s;
  transition-timing-function: ease;
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
  -webkit-transition-timing-function: ease;
  transition-property: width height background-color font-size left top color;
  transition-duration: 2s;
  transition-timing-function: ease;
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

{{EmbedLiveSample("ttf_ease",275,150)}}

`transition-timing-function: ease-in`

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
  -webkit-transition-timing-function: ease-in;
  transition-property: width height background-color font-size left top color;
  transition-duration: 2s;
  transition-timing-function: ease-in;
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
  -webkit-transition-timing-function: ease-in;
  transition-property: width height background-color font-size left top color;
  transition-duration: 2s;
  transition-timing-function: ease-in;
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

{{EmbedLiveSample("ttf_easein",275,150)}}

`transition-timing-function: ease-out`

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
  -webkit-transition-timing-function: ease-out;
  transition-property: width height background-color font-size left top color;
  transition-duration: 2s;
  transition-timing-function: ease-out;
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
  -webkit-transition-timing-function: ease-out;
  transition-property: width height background-color font-size left top color;
  transition-duration: 2s;
  transition-timing-function: ease-out;
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

{{EmbedLiveSample("ttf_easeout",275,150)}}

`transition-timing-function: ease-in-out`

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
  -webkit-transition-timing-function: ease-in-out;
  transition-property: width height background-color font-size left top color;
  transition-duration: 2s;
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
  -webkit-transition-timing-function: ease-in-out;
  transition-property: width height background-color font-size left top color;
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

{{EmbedLiveSample("ttf_easeinout",275,150)}}

`transition-timing-function: linear`

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
  -webkit-transition-timing-function: linear;
  transition-property: width height background-color font-size left top color;
  transition-duration: 2s;
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
  -webkit-transition-timing-function: linear;
  transition-property: width height background-color font-size left top color;
  transition-duration: 2s;
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

{{EmbedLiveSample("ttf_linear",275,150)}}

`transition-timing-function: step-start`

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
  -webkit-transition-timing-function: step-start;
  transition-property: width height background-color font-size left top color;
  transition-duration: 2s;
  transition-timing-function: step-start;
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
  -webkit-transition-timing-function: step-start;
  transition-property: width height background-color font-size left top color;
  transition-duration: 2s;
  transition-timing-function: step-start;
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

{{EmbedLiveSample("ttf_stepstart",275,150)}}

`transition-timing-function: step-end`

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
  -webkit-transition-timing-function: step-end;
  transition-property: width height background-color font-size left top color;
  transition-duration: 2s;
  transition-timing-function: step-end;
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
  -webkit-transition-timing-function: step-end;
  transition-property: width height background-color font-size left top color;
  transition-duration: 2s;
  transition-timing-function: step-end;
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

{{EmbedLiveSample("ttf_stepend",275,150)}}

`transition-timing-function: steps(4, end)`

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
  -webkit-transition-timing-function: steps(4, end);
  transition-property: width height background-color font-size left top color;
  transition-duration: 2s;
  transition-timing-function: steps(4, end);
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
  -webkit-transition-timing-function: steps(4, end);
  transition-property: width height background-color font-size left top color;
  transition-duration: 2s;
  transition-timing-function: steps(4, end);
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

{{EmbedLiveSample("ttf_step4end",275,150)}}

## Specifications

| Specification                                                                                            | Status                          | Comment            |
| -------------------------------------------------------------------------------------------------------- | ------------------------------- | ------------------ |
| {{ SpecName('CSS3 Transitions', '#transition-timing-function-property', 'transition-timing-function') }} | {{ Spec2('CSS3 Transitions') }} | Initial definition |

## Compatibilidade com navegadores

{{Compat("css.properties.transition-timing-function")}}

## See also

- [Using CSS transitions](/pt-BR/docs/CSS/Using_CSS_transitions)
- {{ domxref("TransitionEvent") }}
