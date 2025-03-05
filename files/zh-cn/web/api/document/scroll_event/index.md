---
title: Document：scroll 事件
slug: Web/API/Document/scroll_event
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef}}

当文档视图滚动后，**`scroll`** 事件就会触发。要检测滚动何时结束，请参阅 {{domxref("Document/scrollend_event", "Document：scrollend 事件", "", "1")}}。关于元素滚动，请参见 {{domxref("Element/scroll_event", "Element：scroll 事件", "", "1")}}。

## 语法

在类似于 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 这样的方法中使用事件名称，或设置事件处理器属性。

```js
addEventListener("scroll", (event) => {});

onscroll = (event) => {};
```

## 事件类型

通用的 {{domxref("Event")}}。

## 示例

### Scroll 事件限流

由于 `scroll` 事件可被高频触发，事件处理器不应该执行高性能消耗的操作，如 DOM 操作。而更推荐的做法是使用 {{DOMxRef("Window.requestAnimationFrame()", "requestAnimationFrame()")}}、{{DOMxRef("Window.setTimeout", "setTimeout()")}} 或 {{DOMxRef("CustomEvent")}} 给事件限流，如下所述。

然而需要注意的是，输入事件和动画帧的触发速度大致相同，因此通常不需要下述优化。此示例使用 `requestAnimationFrame` 优化 `scroll` 事件。

```js
let lastKnownScrollPosition = 0;
let ticking = false;

function doSomething(scrollPos) {
  // 利用滚动位置完成一些事情
}

document.addEventListener("scroll", (event) => {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Document：`scrollend` 事件](/zh-CN/docs/Web/API/Document/scrollend_event)
- [Element：`scroll` 事件](/zh-CN/docs/Web/API/Element/scroll_event)
- [Element：`scrollend` 事件](/zh-CN/docs/Web/API/Element/scrollend_event)
