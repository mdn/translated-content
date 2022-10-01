---
title: transition-duration
slug: Web/CSS/transition-duration
---

{{CSSRef}}{{SeeCompatTable}}

## 概述

**`transition-duration`** 属性以秒或毫秒为单位指定过渡动画所需的时间。默认值为 `0s`，表示不出现过渡动画。

可以指定多个时长，每个时长会被应用到由 {{ cssxref("transition-property") }} 指定的对应属性上。如果指定的时长个数小于属性个数，那么时长列表会重复。如果时长列表更长，那么该列表会被裁减。两种情况下，属性列表都保持不变。

{{cssinfo}}

## 语法

```css
/* <time> 值 */
transition-duration: 6s;
transition-duration: 120ms;
transition-duration: 1s, 15s;
transition-duration: 10s, 30s, 230ms;

/* 全局值 */
transition-duration: inherit;
transition-duration: initial;
transition-duration: unset;
```

### 值

- `<time>`
  - : {{cssxref("&lt;time&gt;")}} 类型。表示过渡属性从旧的值转变到新的值所需要的时间。如果时长是 `0s` ，表示不会呈现过渡动画，属性会瞬间完成转变。不接受负值。

### 正式语法

{{csssyntax}}

## 示例

`transition-duration: 0.5s`

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
    -webkit-transition-property: width height background-color font-size left top transform -webkit-transform color;
    -webkit-transition-duration:0.5s;
    -webkit-transition-timing-function: ease-in-out;
    transition-property: width height background-color font-size left top transform -webkit-transform color;
    transition-duration:0.5s;
    transition-timing-function: ease-in-out;
}
.box1{
    transform: rotate(270deg);
    -webkit-transform: rotate(270deg);
    width: 50px;
    height: 50px;
    background-color: blue;
    color: yellow;
    font-size: 18px;
    left: 150px;
    top:25px;
    position:absolute;
    -webkit-transition-property: width height background-color font-size left top transform -webkit-transform color;
    -webkit-transition-duration:0.5s;
    -webkit-transition-timing-function: ease-in-out;
    transition-property: width height background-color font-size left top transform -webkit-transformv color;
    transition-duration:0.5s;
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
.parent { width: 250px; height:125px;}
.box {
    width: 100px;
    height: 100px;
    background-color: red;
    font-size: 20px;
    left: 0px;
    top: 0px;
    position:absolute;
    -webkit-transition-property: width height background-color font-size left top -webkit-transform color;
    -webkit-transition-duration:1s;
    -webkit-transition-timing-function: ease-in-out;
    transition-property: width height background-color font-size left top transform color;
    transition-duration:1s;
    transition-timing-function: ease-in-out;
}
.box1{
    transform: rotate(270deg);
    -webkit-transform: rotate(270deg);
    width: 50px;
    height: 50px;
    background-color: blue;
    color: yellow;
    font-size: 18px;
    left: 150px;
    top:25px;
    position:absolute;
    -webkit-transition-property: width height background-color font-size left top -webkit-transform transform color;
    -webkit-transition-duration:1s;
    -webkit-transition-timing-function: ease-in-out;
    transition-property: width height background-color font-size left top transform -webkit-transform color;
    transition-duration:1s;
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
.parent { width: 250px; height:125px;}
.box {
    width: 100px;
    height: 100px;
    background-color: red;
    font-size: 20px;
    left: 0px;
    top: 0px;
    position:absolute;
    -webkit-transition-property: width height background-color font-size left top transform -webkit-transform color;
    -webkit-transition-duration:2s;
    -webkit-transition-timing-function: ease-in-out;
    transition-property: width height background-color font-size left top transform -webkit-transform color;
    transition-duration:2s;
    transition-timing-function: ease-in-out;
}
.box1{
    transform: rotate(270deg);
    -webkit-transform: rotate(270deg);
    width: 50px;
    height: 50px;
    background-color: blue;
    color: yellow;
    font-size: 18px;
    left: 150px;
    top:25px;
    position:absolute;
    -webkit-transition-property: width height background-color font-size left top transform -webkit-transform color;
    -webkit-transition-duration:2s;
    -webkit-transition-timing-function: ease-in-out;
    transition-property: width height background-color font-size left top transform -webkit-transform color;
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

{{EmbedLiveSample("duration_2s",275,150)}}

`transition-duration: 4s`

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
    -webkit-transition-property: width height background-color font-size left top transform -webkit-transform color;
    -webkit-transition-duration:4s;
    -webkit-transition-timing-function: ease-in-out;
    transition-property: width height background-color font-size left top transform -webkit-transform color;
    transition-duration:4s;
    transition-timing-function: ease-in-out;
}
.box1{
    transform: rotate(270deg);
    -webkit-transform: rotate(270deg);
    width: 50px;
    height: 50px;
    background-color: blue;
    color: yellow;
    font-size: 18px;
    left: 150px;
    top:25px;
    position:absolute;
    -webkit-transition-property: width height background-color font-size left top transform -webkit-transform color;
    -webkit-transition-duration:4s;
    -webkit-transition-timing-function: ease-in-out;
    transition-property: width height background-color font-size left top transform -webkit-transform color;
    transition-duration:4s;
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

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- [Using CSS transitions](/zh-CN/docs/CSS/Using_CSS_transitions)
- {{ domxref("TransitionEvent") }}
