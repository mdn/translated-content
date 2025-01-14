---
title: transition-timing-function
slug: Web/CSS/transition-timing-function
---

{{CSSRef}}

**`transition-timing-function`** CSS 屬性用於表示各個被[動畫特效](/zh-TW/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)影響的屬性的區間值計算方式。

{{EmbedInteractiveExample("pages/css/transition-timing-function.html")}}

本質上，這個屬性讓你使用加速度曲線來表示動畫變換的速度。

而每個可以動畫化的屬性使用一個 {{cssxref("&lt;timing-function&gt;")}} 作為加速度曲線。

你也許有許多時間函數，而你可以透過使用 {{ cssxref("transition-property") }} 屬性來個別設置。如果有前述清單的數量超過時間函數的數量，則會使用預設值 `ease`；如果少於那多餘的時間函數會被忽略，在這兩種情況，CSS 宣告總會有效。

## 語法

```css
/* Keyword */
transition-timing-function: ease;
transition-timing-function: ease-in;
transition-timing-function: ease-out;
transition-timing-function: ease-in-out;
transition-timing-function: linear;
transition-timing-function: step-start;
transition-timing-function: step-end;

/* 函數 */
transition-timing-function: steps(4, end);
transition-timing-function: cubic-bezier(0.1, 0.7, 1, 0.1);
transition-timing-function: frames(10);

/* 多個函數 */
transition-timing-function: ease, step-start, cubic-bezier(0.1, 0.7, 1, 0.1);

/* 全域值 */
transition-timing-function: inherit;
transition-timing-function: initial;
transition-timing-function: unset;

/* 包含 transition-property */
transition-property: width, height;
transition-timing-function: ease-in, ease-out; // ease-in to width and ease-out to height
```

### 值

- `<timing-function>`
  - : 每個 {{cssxref("&lt;timing-function&gt;")}} 連結到對應的動畫化屬性，請參考 {{ cssxref("transition-property") }}。

### 公式語法

{{csssyntax}}

## 範例

### `transition-timing-function: ease`

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

{{EmbedLiveSample("transition-timing-function: ease",275,150)}}

### `transition-timing-function: ease-in`

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

{{EmbedLiveSample("transition-timing-function: ease-in",275,150)}}

### `transition-timing-function: ease-out`

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

{{EmbedLiveSample("transition-timing-function: ease-out",275,150)}}

### `transition-timing-function: ease-in-out`

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

{{EmbedLiveSample("transition-timing-function: ease-in-out",275,150)}}

### `transition-timing-function: linear`

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

{{EmbedLiveSample("transition-timing-function: linear",275,150)}}

### `transition-timing-function: step-start`

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

{{EmbedLiveSample("transition-timing-function: step-start",275,150)}}

### `transition-timing-function: step-end`

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

{{EmbedLiveSample("transition-timing-function: step-end",275,150)}}

### `transition-timing-function: steps(4, end)`

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

{{EmbedLiveSample("transition-timing-function: steps(4, end)",275,150)}}

## 規格

{{Specifications}}

{{cssinfo}}

## 相容性

{{Compat}}

## 看更多

- [使用 CSS transitions](/zh-TW/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- {{ domxref("TransitionEvent") }}
