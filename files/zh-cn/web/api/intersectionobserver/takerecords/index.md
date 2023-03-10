---
title: IntersectionObserver.takeRecords()
slug: Web/API/IntersectionObserver/takeRecords
---

{{APIRef("Intersection Observer API")}}

{{domxref("IntersectionObserver")}} 的方法**`takeRecords()`** 返回一个 {{domxref("IntersectionObserverEntry")}} 对象数组，每个对象的目标元素都包含每次相交的信息，可以显式通过调用此方法或隐式地通过观察者的回调自动调用。

> **备注：** 如果使用回调来监视这些更改，则无需调用此方法。调用此方法会清除挂起的相交状态列表，因此不会运行回调。

## 语法

```plain
intersectionObserverEntries = intersectionObserver.takeRecords();
```

### 参数

None.

### 返回值

{{domxref("IntersectionObserverEntry")}} 对象数组，每个对象包含目标元素与根每次的相交信息。

## Examples

<<<...>>>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Intersection Observer API](/zh-CN/docs/Web/API/Intersection_Observer_API)
