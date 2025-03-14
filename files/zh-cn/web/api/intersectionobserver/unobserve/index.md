---
title: IntersectionObserver.unobserve()
slug: Web/API/IntersectionObserver/unobserve
---

{{APIRef("Intersection Observer API")}}

{{domxref("IntersectionObserver")}}的`unobserve()`
方法命令`IntersectionObserver`停止对一个元素的观察。

## 语法

```js
IntersectionObserver.unobserve(target);
```

### 参数

- `target`
  - : 要取消观察的目标，如果没有提供，方法不做任何事情，也不会抛出异常。

### 返回值

`undefined`.

## 例子

下面代码段展示了一个观察器被创建，一个元素被观察，以及取消观察的过程。

```js
var observer = new IntersectionObserver(callback);
observer.observe(document.getElementById("elementToObserve"));

/* ... */

observer.unobserve(document.getElementById("elementToObserve"));
```

## 说明

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Intersection Observer API](/zh-CN/docs/Web/API/Intersection_Observer_API)
- {{domxref("IntersectionObserver.observe()")}}
