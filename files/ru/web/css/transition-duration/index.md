---
title: transition-duration
slug: Web/CSS/transition-duration
---

{{CSSRef}}

Свойство **`transition-duration`** определяет продолжительность выполнения анимации. Значение по умолчанию равняется `0s`, т.е. отсутствие анимации.

{{EmbedInteractiveExample("pages/css/transition-duration.html")}}

You may specify multiple durations; each duration will be applied to the corresponding property as specified by the {{ cssxref("transition-property") }} property, which acts as a master list. If there are fewer durations specified than in the master list, the user agent repeat the list of durations. If there are more durations, the list is simply truncated to the right size. In both case the CSS declaration stays valid.

## Синтаксис

```css
/* <time> values */
transition-duration: 6s;
transition-duration: 120ms;
transition-duration: 1s, 15s;
transition-duration: 10s, 30s, 230ms;

/* Глобальные значения */
transition-duration: inherit;
transition-duration: initial;
transition-duration: unset;
```

### Values

- `<time>`
  - : Is a {{cssxref("&lt;time&gt;")}} denoting the amount of time the transition from the old value of a property to the new value should take. A time of `0s` indicates that no transition will happen, that is the switch between the two states will be instantaneous. A negative value for the time renders the declaration invalid.

### Formal syntax

{{csssyntax}}

## Examples

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

## Спецификации

{{Specifications}}

{{cssinfo}}

## Browser compatibility

{{Compat}}

## Смотрите также

- [Using CSS transitions](/ru/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
- {{cssxref('transition')}}
- {{cssxref('transition-property')}}
- {{cssxref('transition-timing-function')}}
- {{cssxref('transition-delay')}}
- {{domxref("TransitionEvent")}}
