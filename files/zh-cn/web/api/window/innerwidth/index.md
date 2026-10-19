---
title: Window：innerWidth 属性
short-title: innerWidth
slug: Web/API/Window/innerWidth
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("CSSOM view API")}}

{{domxref("Window")}} 接口的 **`innerWidth`** 只读属性以像素为单位返回窗口的内部宽度（也就是窗口{{Glossary("layout viewport", "布局视口")}}的宽度）。如果存在垂直滚动条，其宽度也包括在内。

同样，可以使用 {{domxref("Window.innerHeight", "innerHeight")}} 属性获取窗口的内部高度（也就是布局视口的高度）。如果水平滚动条可见，该测量值也会包含其高度。

## 值

一个表示窗口布局视口宽度（以像素为单位）的整数值。此属性为只读，且没有默认值。

要更改窗口宽度，请使用 {{domxref("Window")}} 的某个调整窗口大小的方法，例如 {{domxref("Window.resizeBy", "resizeBy()")}} 或 {{domxref("Window.resizeTo", "resizeTo()")}}。

## 使用说明

如果需要获取不含滚动条和边框的窗口宽度，请改用根 {{HTMLElement("html")}} 元素的 {{domxref("Element.clientWidth", "clientWidth")}} 属性。

`innerWidth` 属性可用于任何窗口或行为类似窗口的对象，例如框架或标签页。

## 示例

```js
// 这将记录视口的宽度
console.log(window.innerWidth);

// 这将记录框架集内框架视口的宽度
console.log(self.innerWidth);

// 这将记录最近一层框架集的视口宽度
console.log(parent.innerWidth);

// 这将记录最外层框架集的视口宽度
console.log(top.innerWidth);
```

## 演示

### HTML

```html
<p>调整浏览器窗口大小以触发 <code>resize</code> 事件。</p>
<p>窗口高度：<span id="height"></span></p>
<p>窗口宽度：<span id="width"></span></p>
```

### JavaScript

```js
const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");

function updateSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}

updateSize();
window.addEventListener("resize", updateSize);
```

### 结果

{{EmbedLiveSample('演示')}}

你也可以{{LiveSampleLink('演示', '在单独的页面中查看演示代码的结果')}}。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("window.outerWidth")}}
- {{domxref("window.innerHeight")}}
- {{domxref("window.outerHeight")}}
