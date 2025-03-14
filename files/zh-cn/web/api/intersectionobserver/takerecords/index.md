---
title: IntersectionObserver：takeRecords() 方法
slug: Web/API/IntersectionObserver/takeRecords
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("Intersection Observer API")}}

{{domxref("IntersectionObserver")}} 的 **`takeRecords()`** 方法返回一个 {{domxref("IntersectionObserverEntry")}} 对象数组，每个对象包含目标元素自上次相交检查以来所经历的相交状态变化——可以显式地通过调用此方法或隐式地通过观察器的回调获得。

> [!NOTE]
> 如果使用回调来监视这些更改，则无需调用此方法。调用此方法会清除挂起的相交状态列表，因此不会运行回调。

## 语法

```js-nolint
takeRecords()
```

### 参数

无。

### 返回值

{{domxref("IntersectionObserverEntry")}} 对象数组，每个对象包含目标元素自上次相交检查以来与根的相交状态变化。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [交叉观察器 API](/zh-CN/docs/Web/API/Intersection_Observer_API)
