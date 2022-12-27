---
title: transition-delay
slug: Web/CSS/transition-delay
---

{{CSSRef}}{{SeeCompatTable}}

## 概要

CSS 的**transition-delay**属性规定了在[过渡效果](/zh-CN/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)开始作用之前需要等待的时间。

值以秒（s）或毫秒（ms）为单位，表明动画过渡效果将在何时开始。取值为正时会延迟一段时间来响应过渡效果；取值为负时会导致过渡立即开始。

你可以指定多个延迟时间，每个延迟将会分别作用于你所指定的相符合的 css 属性（**transition-property**）

{{cssinfo}}

## 语法

```css
/* <time>?值 */
transition-delay: 3s;
transition-delay: 2s, 4ms;

/* 全局变量 */
transition-delay: inherit;
transition-delay: initial;
transition-delay: unset;
```

### 取值

- `<time>`
  - : 表明动画效果属性生效之前需要等待的时间。

### 语法形式

{{csssyntax}}

## 举例

`transition-delay: 0.5s`

```html hidden
 <div class="parent">
  <div class="box">Lorem</div>
</div>

```

```css hidden
.parent { width: 250px; height:125px;}
.box {
    width: 100px;
    height: 100px;
    background-color: red;
    font-size: 20px;
    left: 0px;
    top: 0px;
    position:absolute;
    -webkit-transition-property: width height background-color font-size left top color;
    -webkit-transition-duration:2s;
    -webkit-transition-delay:0.5s;
    -webkit-transition-timing-function: linear;
    transition-property: width height background-color font-size left top color;
    transition-duration:2s;
    transition-delay:0.5s;
    transition-timing-function: linear;
}
.box1{
    width: 50px;
    height: 50px;
    background-color: blue;
    color: yellow;
    font-size: 18px;
    left: 150px;
    top:25px;
    position:absolute;
     -webkit-transition-property: width height background-color font-size left top color;
    -webkit-transition-duration:2s;
    -webkit-transition-delay:0.5s;
    -webkit-transition-timing-function: linear;
    transition-property: width height background-color font-size left top color;
    transition-duration:2s;
    transition-delay:0.5s;
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
.parent { width: 250px; height:125px;}
.box {
    width: 100px;
    height: 100px;
    background-color: red;
    font-size: 20px;
    left: 0px;
    top: 0px;
    position:absolute;
     -webkit-transition-property: width height background-color font-size left top color;
    -webkit-transition-duration:2s;
    -webkit-transition-delay:1s;
    -webkit-transition-timing-function: linear;
    transition-property: width height background-color font-size left top color;
    transition-duration:2s;
    transition-delay:1s;
    transition-timing-function: linear;
}
.box1{
    width: 50px;
    height: 50px;
    background-color: blue;
    color: yellow;
    font-size: 18px;
    left: 150px;
    top:25px;
    position:absolute;
    -webkit-transition-property: width height background-color font-size left top color;
    -webkit-transition-duration:2s;
    -webkit-transition-delay:1s;
    -webkit-transition-timing-function: linear;
    transition-property: width height background-color font-size left top color;
    transition-duration:2s;
    transition-delay:1s;
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
.parent { width: 250px; height:125px;}
.box {
    width: 100px;
    height: 100px;
    background-color: red;
    font-size: 20px;
    left: 0px;
    top: 0px;
    position:absolute;
    -webkit-transition-property: width height background-color font-size left top color;
    -webkit-transition-duration:2s;
    -webkit-transition-delay:2s;
    -webkit-transition-timing-function: linear;
    transition-property: width height background-color font-size left top color;
    transition-duration:2s;
    transition-delay:2s;
    transition-timing-function: linear;
}
.box1{
    width: 50px;
    height: 50px;
    background-color: blue;
    color: yellow;
    font-size: 18px;
    left: 150px;
    top:25px;
    position:absolute;
    -webkit-transition-property: width height background-color font-size left top color;
    -webkit-transition-duration:2s;
    -webkit-transition-delay:2s;
    -webkit-transition-timing-function: linear;
    transition-property: width height background-color font-size left top color;
    transition-duration:2s;
    transition-delay:2s;
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
.parent { width: 250px; height:125px;}
.box {
    width: 100px;
    height: 100px;
    background-color: red;
    font-size: 20px;
    left: 0px;
    top: 0px;
    position:absolute;
    -webkit-transition-property: width height background-color font-size left top color;
    -webkit-transition-duration:2s;
    -webkit-transition-delay:4s;
    -webkit-transition-timing-function: ease-in-out;
    transition-property: width height background-color font-size left top color;
    transition-duration:2s;
    transition-delay:4s;
    transition-timing-function: ease-in-out;
}
.box1{
    width: 50px;
    height: 50px;
    background-color: blue;
    color: yellow;
    font-size: 18px;
    left: 150px;
    top:25px;
    position:absolute;
    -webkit-transition-property: width height background-color font-size left top color;
    -webkit-transition-duration:2s;
    -webkit-transition-delay:4s;
    -webkit-transition-timing-function: ease-in-out;
    transition-property: width height background-color font-size left top color;
    transition-duration:2s;
    transition-delay:4s;
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

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 扩展阅读

- [Using CSS transitions](/zh-CN/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
- {{domxref("TransitionEvent")}}
