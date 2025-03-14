---
title: transition-duration
slug: Web/CSS/transition-duration
---

{{CSSRef}}

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

### 形式语法

{{csssyntax}}

## 示例

### 展示不同的延迟

#### HTML

```html
<div class="box duration-1">0.5 秒</div>

<div class="box duration-2">2 秒</div>

<div class="box duration-3">4 秒</div>

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
  transition-property: background-color font-size transform color;
  transition-timing-function: ease-in-out;
}

.transformed-state {
  transform: rotate(270deg);
  background-color: blue;
  color: yellow;
  font-size: 12px;
  transition-property: background-color font-size transform color;
  transition-timing-function: ease-in-out;
}

.duration-1 {
  transition-duration: 0.5s;
}

.duration-2 {
  transition-duration: 2s;
}

.duration-3 {
  transition-duration: 4s;
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
- {{ domxref("TransitionEvent") }}
