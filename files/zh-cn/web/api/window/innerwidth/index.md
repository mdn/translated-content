---
title: Window.innerWidth
slug: Web/API/Window/innerWidth
---

{{APIRef}}

只读的 {{domxref("Window")}} 属性 **`innerWidth`** 返回以像素为单位的窗口的内部宽度。如果垂直滚动条存在，则这个属性将包括它的宽度。

更确切地说，`innerWidth` 返回窗口的 {{Glossary("layout viewport")}} 的宽度。窗口的内部高度——布局视口的高度——可以从 {{domxref("Window.innerHeight", "innerHeight")}} 属性中获取到。

## 语法

```plain
let intViewportWidth = window.innerWidth;
```

### 值

一个整数型的值表示窗口的布局视口宽度是以像素为单位的。这个属性是只读的，并且没有默认值。

若要更改窗口的宽度，请使用 {{domxref("Window")}} 的方法来调整窗口的大小，例如{{domxref("Window.resizeBy", "resizeBy()")}} 或者 {{domxref("Window.resizeTo", "resizeTo()")}}。

## 使用说明

如果你需要获取除去滚动条和边框的窗口宽度，请使用根元素 {{HTMLElement("html")}} 的{{domxref("Element.clientWidth", "clientWidth")}} 属性。

`innerWidth` 属性在任何表现类似于窗口的任何窗口或对象（例如框架或选项卡）上都是可用的。

## 示例

```js
// 返回视口的宽度
var intFrameWidth = window.innerWidth;

// 返回一个框架集内的框架的视口宽度
var intFrameWidth = self.innerWidth;

// 返回最近的父级框架集的视口宽度
var intFramesetWidth = parent.innerWidth;

// 返回最外层框架集的视口宽度
var intOuterFramesetWidth = top.innerWidth;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- {{domxref("window.outerWidth")}}
- {{domxref("window.innerHeight")}}
- {{domxref("window.outerHeight")}}
