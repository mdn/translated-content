---
title: SVGAnimationElement
slug: Web/API/SVGAnimationElement
l10n:
  sourceCommit: bf9b4bff68f6fb57e1184f196792029a1f8b0739
---

{{APIRef("SVG")}}

**`SVGAnimationElement`** 接口是所有动画元素接口的基础接口，包括 {{domxref("SVGAnimateElement")}}、{{domxref("SVGSetElement")}}、{{domxref("SVGAnimateMotionElement")}} 和 {{domxref("SVGAnimateTransformElement")}}。

{{InheritanceDiagram}}

## 实例属性

_该接口还从其父接口 {{domxref("SVGElement")}} 继承属性。_

- {{domxref("SVGAnimationElement.requiredExtensions")}} {{ReadOnlyInline}}
  - : 一个反映给定元素的 {{SVGAttr("requiredExtensions")}} 属性的 {{domxref("SVGStringList")}}。
- {{domxref("SVGAnimationElement.systemLanguage")}} {{ReadOnlyInline}}
  - : 一个反映给定元素的 {{SVGAttr("systemLanguage")}} 属性的 {{domxref("SVGStringList")}}。
- {{domxref("SVGAnimationElement.targetElement")}} {{ReadOnlyInline}}
  - : 一个表示正在应用动画的元素的 {{domxref("SVGElement")}}。如果没有目标元素正在应用动画（例如，{{SVGAttr("href")}} 指定了未知元素），则返回值为 `null`。

## 实例方法

_该接口还从其父接口 {{domxref("SVGElement")}} 继承方法。_

- {{domxref("SVGAnimationElement.getStartTime()")}}
  - : 如果此动画元素存在当前时间区间，则返回一个浮点数，表示该区间的开始时间（以秒为单位），无论该区间是否已经开始。如果没有当前时间区间，则抛出错误码为 `INVALID_STATE_ERR` 的 {{domxref("DOMException")}}。
- {{domxref("SVGAnimationElement.getCurrentTime()")}}
  - : 返回一个浮点数，表示相对于给定时间容器的零时刻的当前时间（以秒为单位）。
- {{domxref("SVGAnimationElement.getSimpleDuration()")}}
  - : 返回一个浮点数，表示此动画的简单持续时间（以秒为单位）。如果简单持续时间未定义（例如，结束时间不确定），则抛出错误码为 `NOT_SUPPORTED_ERR` 的 {{domxref("DOMException")}}。
- {{domxref("SVGAnimationElement.beginElement()")}}
  - : 以当前时间创建一个开始实例时间。新的实例时间会添加到开始实例时间列表中。此方法的行为等同于 `beginElementAt(0)`。
- {{domxref("SVGAnimationElement.beginElementAt()")}}
  - : 以当前时间加上指定偏移量创建一个开始实例时间。新的实例时间会添加到开始实例时间列表中。
- {{domxref("SVGAnimationElement.endElement()")}}
  - : 以当前时间创建一个结束实例时间。新的实例时间会添加到结束实例时间列表中。此方法的行为等同于 `endElementAt(0)`。
- {{domxref("SVGAnimationElement.endElementAt()")}}
  - : 以当前时间加上指定偏移量创建一个结束实例时间。新的实例时间会添加到结束实例时间列表中。

## 事件

使用 [`addEventListener()`](/zh-CN/docs/Web/API/EventTarget/addEventListener) 或将事件监听器赋值给此接口的 `on...` 处理器属性来监听这些事件。

- [`beginEvent`](/zh-CN/docs/Web/API/SVGAnimationElement/beginEvent_event)
  - : 当元素的本地时间线开始播放时触发。
- [`endEvent`](/zh-CN/docs/Web/API/SVGAnimationElement/endEvent_event)
  - : 当动画到达活动结束时间时触发。
- [`repeatEvent`](/zh-CN/docs/Web/API/SVGAnimationElement/repeatEvent_event)
  - : 当元素的本地时间线重复时触发。在第一次迭代之后，每次元素重复时都会触发。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
