---
title: IntersectionObserver.observe()
slug: Web/API/IntersectionObserver/observe
---

{{APIRef("Intersection Observer API")}}{{SeeCompatTable}}

{{domxref("IntersectionObserver")}} 对象的**`observe()`** 方法向 IntersectionObserver 对象监听的目标集合添加一个元素。一个监听者有一组阈值和一个根，但是可以监视多个目标元素，以查看这些目标元素可见区域的变化。调用{{domxref("IntersectionObserver.unobserve()")}}方法可以停止观察元素。

当指定元素的可见区域超过监听者的可见区域阈值之一时（阈值列表{{domxref("IntersectionObserver.thresholds")}}），监听者的回调会被传入代表当前发生的交叉变化{{domxref("IntersectionObserverEntry")}}并执行。请注意，这种设计允许通过调用一次回调，给回调传入 IntersectionObserverEntry 对象数组，来实现同时处理多个被监听元素的交叉变化。

## 语法

```js
IntersectionObserver.observe(targetElement);
```

### 参数

- `targetElement`
  - : 可见性区域被监控的元素{{domxref("element")}}。
    此元素必须是根元素的后代 (如果根元素为视窗，则该元素必须被当前文档包含)。

### 返回值

`undefined`.

## 示例

```js
// Register IntersectionObserver
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // Add 'active' class if observation target is inside viewport
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add("active");
    }
    // Remove 'active' class otherwise
    else {
      entry.target.classList.remove("active");
    }
  });
});

// Declares what to observe, and observes its properties.
const boxElList = document.querySelectorAll(".box");
boxElList.forEach((el) => {
  io.observe(el);
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- {{domxref("IntersectionObserver.unobserve()")}}
