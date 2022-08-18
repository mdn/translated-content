---
title: ResizeObserver
slug: Web/API/ResizeObserver
---
{{APIRef("Resize Observer API")}}{{SeeCompatTable}}

**`ResizeObserver`** 接口可以监听到 {{domxref('Element')}} 的内容区域或 {{domxref('SVGElement')}}的边界框改变。内容区域则需要减去内边距 padding。（有关内容区域、内边距资料见[盒子模型](https://developer.mozilla.org/docs/Learn/CSS/Introduction_to_CSS/Box_model) ）

ResizeObserver 避免了在自身回调中调整大小，从而触发的无限回调和循环依赖。它仅通过在后续帧中处理 DOM 中更深层次的元素来实现这一点。如果（浏览器）遵循规范，只会在绘制前或布局后触发调用。

## 构造器

- {{domxref("ResizeObserver.ResizeObserver", "ResizeObserver()")}}
  - : 创建并返回一个`ResizeObserver`对象。

## 属性

无。

### Event handlers

无。

## 方法

- {{domxref('ResizeObserver.disconnect()')}}
  - : 取消和结束目标对象上所有对 {{domxref('Element')}}或 {{domxref('SVGElement')}} 观察。
- {{domxref('ResizeObserver.observe()')}}
  - : 开始观察指定的 {{domxref('Element')}}或 {{domxref('SVGElement')}}。
- {{domxref('ResizeObserver.unobserve()')}}
  - : 结束观察指定的{{domxref('Element')}}或 {{domxref('SVGElement')}}。

## 示例

以下示例通过观察 box 的宽度变化从而改变其边框圆角半径。

```js
const resizeObserver = new ResizeObserver(entries => {
  for (let entry of entries) {
    entry.target.style.borderRadius = Math.max(0, 250 - entry.contentRect.width) + 'px';
  }
});
resizeObserver.observe(document.querySelector('.box:nth-child(2)'));
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat("api.ResizeObserver")}}

## 参考

- [The box model](https://developer.mozilla.org/docs/Learn/CSS/Introduction_to_CSS/Box_model)
- {{domxref('PerformanceObserver')}}
- {{domxref('MutationObserver')}}
- {{domxref('IntersectionObserver')}} (part of the [Intersection Observer API](/en-US/docs/Web/API/Intersection_Observer_API))
