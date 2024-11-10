---
title: MouseEvent.pageX
slug: Web/API/MouseEvent/pageX
---

{{APIRef("UI Events")}}

**`pageX`** 是一个由 {{domxref("MouseEvent")}} 接口返回的相对于整个文档的 x（水平）坐标以像素为单位的只读属性。

这个属性将基于文档的边缘，考虑任何页面的水平方向上的滚动。举个例子，如果页面向右滚动 200px 并出现了滚动条，这部分在窗口之外，然后鼠标点击距离窗口左边 100px 的位置，pageX 所返回的值将是 300。

起初这个属性被定义为长整型。CSSOM 视图模块将它重新定位为双浮点数类型。请参阅浏览器兼容性部分了解详情。

## 语法

```plain
var pos = event.pageX
```

## 例子

```plain
var pageX = event.pageX;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- {{domxref("UIEvent.pageX")}}
