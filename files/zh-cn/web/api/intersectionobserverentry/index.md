---
title: IntersectionObserverEntry
slug: Web/API/IntersectionObserverEntry
---

{{APIRef("Intersection Observer API")}}

**`IntersectionObserverEntry 接口`** (从属于 [Intersection Observer API](/zh-CN/docs/Web/API/Intersection_Observer_API) ) 描述了目标元素与其根元素容器在某一特定过渡时刻的交叉状态。`IntersectionObserverEntry` 的实例作为 `entries` 参数被传递到一个 {{domxref("IntersectionObserver")}} 的回调函数中; 此外，这些对象只能通过调用{{domxref("IntersectionObserver.takeRecords()")}} 来获取。

## 属性

- {{domxref("IntersectionObserverEntry.boundingClientRect")}} {{readonlyinline}}
  - : 返回包含目标元素的边界信息的{{domxref("DOMRectReadOnly")}}. 边界的计算方式与 {{domxref("Element.getBoundingClientRect()")}} 相同。
- {{domxref("IntersectionObserverEntry.intersectionRatio")}} {{readonlyinline}}
  - : 返回`intersectionRect` 与 `boundingClientRect` 的比例值。
- {{domxref("IntersectionObserverEntry.intersectionRect")}} {{readonlyinline}}
  - : 返回一个 {{domxref("DOMRectReadOnly")}} 用来描述根和目标元素的相交区域。
- {{domxref("IntersectionObserverEntry.isIntersecting")}} {{ReadOnlyInline}}
  - : 返回一个布尔值，如果目标元素与交叉区域观察者对象 (intersection observer) 的根相交，则返回 `true` .如果返回 `true`, 则 `IntersectionObserverEntry` 描述了变换到交叉时的状态; 如果返回 `false`, 那么可以由此判断，变换是从交叉状态到非交叉状态。
- {{domxref("IntersectionObserverEntry.rootBounds")}} {{readonlyinline}}
  - : 返回一个 {{domxref("DOMRectReadOnly")}} 用来描述交叉区域观察者 (intersection observer) 中的根。
- {{domxref("IntersectionObserverEntry.target")}} {{ReadOnlyInline}}
  - : 与根出现相交区域改变的元素 ({{domxref("Element")}}).
- {{domxref("IntersectionObserverEntry.time")}} {{readonlyinline}}
  - : 返回一个记录从 `IntersectionObserver` 的时间原点 ([time origin](/zh-CN/docs/Web/API/DOMHighResTimeStamp#the_time_origin)) 到交叉被触发的时间的时间戳 ({{domxref("DOMHighResTimeStamp")}}).

## 方法

_此接口没有方法。_

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
