---
title: ResizeObserver.ResizeObserver()
slug: Web/API/ResizeObserver/ResizeObserver
---
{{APIRef("Resize Observer API")}}{{SeeCompatTable}}

**`ResizeObserver`** 构造器创新一个新的 {{domxref("ResizeObserver")}} 对象，用于接收 {{domxref('Element')}}内容区域的改变 或 {{domxref('SVGElement')}} 的边界框改变改变。

## 语法

```plain
var ResizeObserver = new ResizeObserver(callback)
```

### 参数

- 回调函数
  - : The method called whenever a resize occurs. The method is called with an array of {{domxref('ResizeObserverEntry')}} objects.
    当尺寸发生变化时触发回调，使用{{domxref('ResizeObserverEntry')}}对象数组调用该方法。

## 示例

The following example shows the dimensions of a box inside it, as text, upon resizing.
下面示例展示了 box 调整大小时，其内部文本显示为尺寸大小。

```js
const resizeObserver = new ResizeObserver(entries => {
  for (let entry of entries) {
    const boxEl = entry.target;
    const dimensions = entry.contentRect;
    boxEl.textContent = `${dimensions.width} x ${dimensions.height}`;
  }
});
resizeObserver.observe(document.querySelector('.box:nth-child(2)'));
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat("api.ResizeObserver.ResizeObserver")}}
