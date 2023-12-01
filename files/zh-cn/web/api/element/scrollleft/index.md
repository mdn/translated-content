---
title: Element.scrollLeft
slug: Web/API/Element/scrollLeft
---

{{ APIRef("DOM") }}

**`Element.scrollLeft`** 属性可以读取或设置元素滚动条到元素左边的距离。

注意如果这个元素的内容排列方向（{{cssxref("direction")}}）是`rtl` (right-to-left) ，那么滚动条会位于最右侧（内容开始处），并且`scrollLeft`值为 0。此时，当你从右到左拖动滚动条时，scrollLeft 会从 0 变为负数。

> **警告：** 在使用显示比例缩放的系统上，`scrollLeft` 可能会是一个小数。

## 语法

```
//获取滚动条到元素左边的距离
var sLeft = element.scrollLeft;
```

`sLeft`是一个整数，代表元素滚动条距离元素左边多少像素。

```
//设置滚动条滚动了多少像素
element.scrollLeft = 10;
```

`scrollLeft` 可以是任意整数，然而：

- 如果元素不能滚动（比如：元素没有溢出），那么`scrollLeft` 的值是 0。
- 如果给`scrollLeft` 设置的值小于 0，那么`scrollLeft` 的值将变为 0。
- 如果给`scrollLeft` 设置的值大于元素内容最大宽度，那么`scrollLeft` 的值将被设为元素最大宽度。

## 示例

### HTML

```html
<div id="container">
  <div id="content">Click the button to slide right!</div>
</div>

<button id="slide" type="button">Slide right</button>
```

### CSS

```css
#container {
  width: 100px;
  height: 100px;
  border: 1px solid #ccc;
  overflow-x: scroll;
}

#content {
  width: 250px;
  background-color: #ccc;
}
```

### JavaScript

```js
const button = document.getElementById("slide");

button.onclick = function () {
  document.getElementById("container").scrollLeft += 20;
};
```

### 结构

{{EmbedLiveSample("示例")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [MSDN's Measuring Element Dimension and Location](<https://msdn.microsoft.com/en-us/library/hh781509(v=vs.85).aspx>)
- {{domxref("Element.scrollTop")}}
- {{domxref("Element.scrollTo()")}}
