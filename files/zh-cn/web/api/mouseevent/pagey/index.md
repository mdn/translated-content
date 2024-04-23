---
title: MouseEvent.pageY
slug: Web/API/MouseEvent/pageY
---

{{APIRef("UI Events")}}

**`pageY`** 是一个只读属性，它返回触发事件的位置相对于整个 document 的 Y 坐标值。由于其参考物是整个 dom，所以这个值受页面垂直方向的滚动影响。例如：当你垂直方向向下滚动了 50 pixel，那么你在顶端进行点击的时候，获取的 **`pageY`** 为 50pixed 而不是 0。最初这个属性被定义为长整型（long integer），如今 **CSSOM** 视图模块将其重新定义为双精度浮点数（double float）。你可以查阅浏览器兼容性部分的文档来进一步了解有关信息。

## 语法

```plain
var pos = event.pageY
```

## 示例

```plain
var pageY = event.pageY;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 更多请见

- {{domxref("UIEvent.pageY")}}
