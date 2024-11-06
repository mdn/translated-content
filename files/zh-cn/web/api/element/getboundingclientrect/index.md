---
title: Element.getBoundingClientRect()
slug: Web/API/Element/getBoundingClientRect
---

{{APIRef("DOM")}}

**`Element.getBoundingClientRect()`** 方法返回一个 {{domxref("DOMRect")}} 对象，其提供了元素的大小及其相对于[视口](/zh-CN/docs/Glossary/Viewport)的位置。

## 语法

```js-nolint
getBoundingClientRect()
```

### 参数

无。

### 返回值

返回值是一个 {{domxref("DOMRect")}} 对象，是包含整个元素的最小矩形（包括 `padding` 和 `border-width`）。该对象使用 `left`、`top`、`right`、`bottom`、`x`、`y`、`width` 和 `height` 这几个以像素为单位的只读属性描述整个矩形的位置和大小。除了 `width` 和 `height` 以外的属性是相对于视图窗口的左上角来计算的。

![](element-box-diagram.png)

该方法返回的 {{domxref("DOMRect")}} 对象中的 `width` 和 `height` 属性是包含了 `padding` 和 `border-width` 的，而不仅仅是内容部分的宽度和高度。在标准盒子模型中，这两个属性值分别与元素的 `width`/`height` + `padding` + `border-width` 相等。而如果是 [`box-sizing: border-box`](/zh-CN/docs/Web/CSS/box-sizing)，两个属性则直接与元素的 `width` 或 `height` 相等。

这个对象是由该元素的 {{domxref("Element.getClientRects", "getClientRects()")}} 方法返回的一组矩形的集合，就是该元素的 CSS 边框大小。

空边框盒（译者注：没有内容的边框）会被忽略。如果所有的元素边框都是空边框，那么这个矩形给该元素返回的 `width`、`height` 值为 0，`left`、`top` 值为第一个 CSS 盒子（按内容顺序）的 top-left 值。

如果你需要获得边界矩形相对于整个网页左上角的位置，则可以将当前的滚动位置（可通过 {{domxref("window.scrollX")}} 和 {{domxref("window.scrollY")}} 获得）添加到 `top` 和 `left` 属性上。获得的边界矩形与当前的滚动位置无关。

## 示例

### 基础示例

在这个简单的示例中，获得的 `DOMRect` 对象表示的是一个简单的 `<div>` 元素的边界客户端矩形，并将其属性值显示出来。

```html
<div></div>
```

```css
div {
  width: 400px;
  height: 200px;
  padding: 20px;
  margin: 50px auto;
  background: purple;
}
```

```js
let elem = document.querySelector("div");
let rect = elem.getBoundingClientRect();
for (var key in rect) {
  if (typeof rect[key] !== "function") {
    let para = document.createElement("p");
    para.textContent = `${key} : ${rect[key]}`;
    document.body.appendChild(para);
  }
}
```

{{EmbedLiveSample('基础示例', '100%', 640)}}

注意：`width`/`height` 是与元素的 `width`/`height` + `padding` 相等的。

也同样注意 `x`/`left`、`y`/`top`、`right` 和 `bottom` 与视口边缘到元素对应的一侧的绝对距离相等。

### 滚动

这个示例演示了当网页滚动时，边界客户端矩形是如何变化的。

```html
<div id="example"></div>
<div id="controls"></div>
```

```css
div#example {
  width: 400px;
  height: 200px;
  padding: 20px;
  margin: 50px auto;
  background: purple;
}

body {
  padding-bottom: 1000px;
}
p {
  margin: 0;
}
```

```js
function update() {
  const container = document.getElementById("controls");
  const elem = document.getElementById("example");
  const rect = elem.getBoundingClientRect();

  container.innerHTML = "";
  for (let key in rect) {
    if (typeof rect[key] !== "function") {
      let para = document.createElement("p");
      para.textContent = `${key} : ${rect[key]}`;
      container.appendChild(para);
    }
  }
}

document.addEventListener("scroll", update);
update();
```

{{EmbedLiveSample('滚动', '100%', 640)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考资料

- {{domxref("Element.getClientRects", "getClientRects()")}}
- [MSDN: `getBoundingClientRect`](<https://msdn.microsoft.com/library/ms536433(VS.85).aspx>)
- [MSDN: `ClientRect`](<https://msdn.microsoft.com/library/hh826029(VS.85).aspx>)，更早版本的 `DOMRect`
