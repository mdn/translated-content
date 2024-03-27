---
title: transition-delay
slug: Web/CSS/transition-delay
---

{{CSSRef}}

CSS 的**transition-delay**属性规定了在[过渡效果](/zh-CN/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)开始作用之前需要等待的时间。

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

### 形式语法

{{csssyntax}}

## 示例

### 展示不同的延迟

#### HTML

```html
<div class="box delay-1">0.5 秒</div>

<div class="box delay-2">2 秒</div>

<div class="box delay-3">4 秒</div>

<button id="change">变换</button>
```

#### CSS

```css
.box {
  margin: 20px;
  padding: 10px;
  display: inline-block;
  width: 100px;
  height: 100px;
  background-color: red;
  font-size: 18px;
  transition-property: background-color, font-size, transform, color;
  transition-timing-function: ease-in-out;
  transition-duration: 3s;
}

.transformed-state {
  transform: rotate(270deg);
  background-color: blue;
  color: yellow;
  font-size: 12px;
  transition-property: background-color, font-size, transform, color;
  transition-timing-function: ease-in-out;
  transition-duration: 3s;
}

.delay-1 {
  transition-delay: 0.5s;
}

.delay-2 {
  transition-delay: 2s;
}

.delay-3 {
  transition-delay: 4s;
}
```

#### JavaScript

```js
function change() {
  const elements = document.querySelectorAll("div.box");
  for (const element of elements) {
    element.classList.toggle("transformed-state");
  }
}

const changeButton = document.querySelector("#change");
changeButton.addEventListener("click", change);
```

#### 结果

{{EmbedLiveSample("展示不同的延迟",275,200)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Using CSS transitions](/zh-CN/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- {{domxref("TransitionEvent")}}
