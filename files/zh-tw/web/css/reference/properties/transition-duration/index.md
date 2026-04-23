---
title: transition-duration
slug: Web/CSS/Reference/Properties/transition-duration
---

**`transition-duration`** [CSS](/zh-TW/docs/Web/CSS) 屬性指定轉場動畫所需經歷的時間，以秒或是毫秒為單位。默認值為 0，表示沒有任何轉場動畫。

{{InteractiveExample("CSS Demo: transition-duration")}}

```css interactive-example-choice
transition-duration: 500ms;
transition-property: margin-right;
```

```css interactive-example-choice
transition-duration: 2s;
transition-property: background-color;
```

```css interactive-example-choice
transition-duration: 2s;
transition-property: margin-right, color;
```

```css interactive-example-choice
transition-duration: 3s, 1s;
transition-property: margin-right, color;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">Hover to see<br />the transition.</div>
</section>
```

```css interactive-example
#example-element {
  background-color: #e4f0f5;
  color: #000;
  padding: 1rem;
  border-radius: 0.5rem;
  font: 1em monospace;
  width: 100%;
  transition: margin-right 2s;
}

#default-example:hover > #example-element {
  background-color: #909;
  color: #fff;
  margin-right: 40%;
}
```

你可以指定多個時間長度，每一個時間長度都會被應用在{{ cssxref("transition-property") }} 設定的對應屬性上(which acts as a master list.) 如果指定的時間長度的數量比對應屬性的數量少，那麼時間長度就會被重複使用。反之，多餘的時間長度就會被刪去。而這兩種情況之下的 CSS 宣告都是有效的。

## 語法

```css
/* <time> 值 */
transition-duration: 6s;
transition-duration: 120ms;
transition-duration: 1s, 15s;
transition-duration: 10s, 30s, 230ms;

/* 全域值 */
transition-duration: inherit;
transition-duration: initial;
transition-duration: unset;
```

### 值

- `<time>`
  - : {{cssxref("&lt;time&gt;")}}類型表示轉場動畫從舊狀態轉至新狀態所需要的時間。如果時間長度為 0，表示沒有任何轉場，狀態之間會立即改變。若時間長度為負值則無效。

### 正式語法

{{csssyntax}}

## 範例

### `transition-duration: 0.5s`

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

{{EmbedLiveSample("transition-duration: 0.5s",275,150)}}

### `transition-duration: 1s`

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

{{EmbedLiveSample("transition-duration: 1s",275,150)}}

### `transition-duration: 2s`

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

{{EmbedLiveSample("transition-duration: 2s",275,150)}}

### `transition-duration: 4s`

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

{{EmbedLiveSample("transition-duration: 4s",275,150)}}

## 規範

{{Specifications}}

{{cssinfo}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [CSS 轉場](/zh-TW/docs/Web/CSS/Guides/Transitions/Using)
- {{ domxref("TransitionEvent") }}
