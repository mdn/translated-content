---
title: Document：elementsFromPoint() 方法
slug: Web/API/Document/elementsFromPoint
l10n:
  sourceCommit: b21df53ffbb066cfb9347d7f0e5aebb792ed73e5
---

{{APIRef("DOM")}}

{{domxref("Document")}} 接口的 **`elementsFromPoint()`** 方法返回一个包含指定坐标（相对于视口）处所有元素的数组。元素按照从视口最顶层到最底层的顺序排列。

它的操作方式与 {{domxref("Document.elementFromPoint", "elementFromPoint()")}} 方法类似。

## 语法

```js-nolint
elementsFromPoint(x, y)
```

### 参数

- `x`
  - : 水平坐标点。
- `y`
  - : 垂直坐标点。

### 返回值

一个由 {{domxref('Element')}} 对象组成的数组，按照从视口最顶层到最底层的顺序排列。

## 示例

### HTML

```html
<div>
  <p>一些文本</p>
</div>
<p>位于（30、20）点的元素：</p>
<div id="output"></div>
```

### JavaScript

```js
let output = document.getElementById("output");
if (document.elementsFromPoint) {
  let elements = document.elementsFromPoint(30, 20);
  elements.forEach((elt, i) => {
    output.textContent += elt.localName;
    if (i < elements.length - 1) {
      output.textContent += " < ";
    }
  });
} else {
  output.innerHTML = `<span style="color: red">
  浏览器不支持 <code>document.elementsFromPoint()</code>
</span>
`;
}
```

{{EmbedLiveSample('示例', '420', '160')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{DOMxRef("Document.elementFromPoint()")}}
