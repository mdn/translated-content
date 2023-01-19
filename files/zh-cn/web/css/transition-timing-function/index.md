---
title: transition-timing-function
slug: Web/CSS/transition-timing-function
---

{{ CSSRef() }}{{SeeCompatTable}}

## 概述

CSS 属性受到 [transition effect](/zh-CN/docs/CSS/Tutorials/Using_CSS_transitions)的影响，会产生不断变化的中间值，而 [CSS](/zh-CN/docs/CSS) `transition-timing-function` 属性用来描述这个中间值是怎样计算的。实质上，通过这个函数会建立一条加速度曲线，因此在整个 transition 变化过程中，变化速度可以不断改变。

这条加速度曲线被{{cssxref("&lt;timing-function&gt;")}}所定义，之后作用到每个 CSS 属性的过渡。

你可以规定多个 timing function，通过使用 {{ cssxref("transition-property") }}属性，可以根据主列表 (transition property 的列表) 给每个 CSS 属性应用相应的 timing function.如果 timing function 的个数比主列表中数量少，缺少的值被设置为初始值（ease） 。如果 timing function 比主列表要多，timing function 函数列表会被截断至合适的大小。这两种情况下声明的 CSS 属性都是有效的。

{{cssinfo}}

## 语法

```
Formal syntax: {{csssyntax("transition-timing-function")}}
```

```
transition-timing-function: ease
transition-timing-function: ease-in
transition-timing-function: ease-out
transition-timing-function: ease-in-out
transition-timing-function: linear
transition-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1)
transition-timing-function: step-start
transition-timing-function: step-end
transition-timing-function: steps(4, end)

transition-timing-function: ease, step-start, cubic-bezier(0.1, 0.7, 1.0, 0.1)

transition-timing-function: inherit
```

### 值

- `<timing-function>`
  - : 通过{{ cssxref("transition-property") }}中定义被过渡属性，每个 {{cssxref("&lt;timing-function&gt;")}}的值代表与这个属性相对应的 timing function.

## 示例

`transition-timing-function: ease`

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
    -webkit-transition-timing-function: ease;
    transition-property: width height background-color font-size left top color;
    transition-duration:2s;
    transition-timing-function: ease;
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
    -webkit-transition-timing-function: ease;
    transition-property: width height background-color font-size left top color;
    transition-duration:2s;
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
    -webkit-transition-timing-function: ease-in;
    transition-property: width height background-color font-size left top color;
    transition-duration:2s;
    transition-timing-function: ease-in;
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
    -webkit-transition-timing-function: ease-in;
    transition-property: width height background-color font-size left top color;
    transition-duration:2s;
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
    -webkit-transition-timing-function: ease-out;
    transition-property: width height background-color font-size left top color;
    transition-duration:2s;
    transition-timing-function: ease-out;
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
    -webkit-transition-timing-function: ease-out;
    transition-property: width height background-color font-size left top color;
    transition-duration:2s;
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
    -webkit-transition-timing-function: ease-in-out;
    transition-property: width height background-color font-size left top color;
    transition-duration:2s;
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
    -webkit-transition-timing-function: ease-in-out;
    transition-property: width height background-color font-size left top color;
    transition-duration:2s;
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
    -webkit-transition-timing-function: linear;
    transition-property: width height background-color font-size left top color;
    transition-duration:2s;
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
    -webkit-transition-timing-function: linear;
    transition-property: width height background-color font-size left top color;
    transition-duration:2s;
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
    -webkit-transition-timing-function: step-start;
    transition-property: width height background-color font-size left top color;
    transition-duration:2s;
    transition-timing-function: step-start;
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
    -webkit-transition-timing-function: step-start;
    transition-property: width height background-color font-size left top color;
    transition-duration:2s;
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
    -webkit-transition-timing-function: step-end;
    transition-property: width height background-color font-size left top color;
    transition-duration:2s;
    transition-timing-function: step-end;
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
    -webkit-transition-timing-function: step-end;
    transition-property: width height background-color font-size left top color;
    transition-duration:2s;
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
    -webkit-transition-timing-function: steps(4, end);
    transition-property: width height background-color font-size left top color;
    transition-duration:2s;
    transition-timing-function: steps(4, end);
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
    -webkit-transition-timing-function: steps(4, end);
    transition-property: width height background-color font-size left top color;
    transition-duration:2s;
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

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- [Using CSS transitions](/zh-CN/docs/CSS/Using_CSS_transitions)
- {{ domxref("TransitionEvent") }}
