---
title: IntersectionObserver：observe() 方法
slug: Web/API/IntersectionObserver/observe
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{APIRef("Intersection Observer API")}}

{{domxref("IntersectionObserver")}} 的 **`observe()`** 方法向 `IntersectionObserver` 对象观察的目标集合添加一个元素。一个观察者有一组阈值和一个根（root），但是可以监视多个目标元素的可见性变化（遵循阈值和根的设置）。

调用 {{domxref("IntersectionObserver.unobserve()")}} 方法可以停止观察元素。

当指定元素的可见区域超过观察者的可见区域阈值（在 {{domxref("IntersectionObserver.thresholds")}} 中列出）之一时，观察者的回调会被执行并传入代表当前发生的交叉变化的 {{domxref("IntersectionObserverEntry")}} 对象数组。请注意，这种设计允许通过一次回调调用来处理多个元素的交叉变化。

> [!NOTE]
> 观察器的[回调](/zh-CN/docs/Web/API/IntersectionObserver/IntersectionObserver#callback)总是会在调用 `observe()` 后的第一个渲染周期中触发，即使观察的元素相对于视口尚未移动。这意味着，例如，当在视口之外的元素上调用 `observe()` 时，回调将立即被调用且至少会有一个 [`intersecting`](/zh-CN/docs/Web/API/IntersectionObserverEntry/isIntersecting) 被设置为 `false` 的[条目](/zh-CN/docs/Web/API/IntersectionObserverEntry)。在视口内的元素将导致回调立即被调用且至少有一个 `intersecting` 被设置为 `true` 的条目。

## 语法

```js-nolint
observe(targetElement)
```

### 参数

- `targetElement`
  - : 要监视其在根范围内的可见性的{{domxref("element", "元素", "", 1)}}。此元素必须是根元素的后代（或者如果根是文档的视口，则该元素必须被包含在当前文档中）。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

```js
// 注册 IntersectionObserver
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      // 如果观察目标在视口内，则添加“active”类
      entry.target.classList.add("active");
    } else {
      // 否则移除“active”类
      entry.target.classList.remove("active");
    }
  });
});

// 声明观察的内容，并观察其属性。
const boxElList = document.querySelectorAll(".box");
boxElList.forEach((el) => {
  io.observe(el);
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("IntersectionObserver.unobserve()")}}
