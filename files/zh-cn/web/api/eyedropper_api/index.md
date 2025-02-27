---
title: EyeDropper API
slug: Web/API/EyeDropper_API
---

{{DefaultAPISidebar("EyeDropper API")}}{{SeeCompatTable}}

**EyeDropper API** 提供了一种创建拾色器工具的机制。使用该工具，用户可以从屏幕上取样颜色，包括浏览器窗口之外的区域。

## 概念

创意应用通常允许用户从应用程序中的绘图或形状中取样颜色以便重用。Web 应用程序可以利用 **EyeDropper API**，通过浏览器提供类似的拾色器模式。

使用该 API，Web 应用程序可以启动拾色器模式。一旦启动，光标会变化以提示用户拾色器模式处于活动状态。用户可以从屏幕上的任意位置选择颜色，或者按下 <kbd>Escape</kbd> 键取消拾色器模式。

## 安全和隐私措施

为了防止恶意网站在用户不知情的情况下获取其屏幕上的像素数据，**EyeDropper API** 实施了以下措施：

- 该 API 不允许在没有用户意图的情况下启动拾色器模式。只能在用户操作（例如按钮点击）的响应中调用 {{domxref("EyeDropper.prototype.open()")}} 方法。
- 在没有用户新的意图的情况下，无法再次获取任何像素信息。由 {{domxref("EyeDropper.prototype.open()")}} 返回的 Promise 只会在用户操作（例如点击像素）的响应中返回一个颜色值。因此，无法在用户不知情的情况下在后台使用拾色器。
- 为了帮助用户更容易地注意到拾色器模式，浏览器会提供明显的提示。在启动拾色器模式后，正常的鼠标光标会在短暂延迟后消失，取而代之的是一个放大镜图标。此外，拾色器模式开始和用户能够选择像素之间存在一段延迟，以确保用户有足够的时间看到放大镜图标。
- 用户还可以随时取消拾色器模式（通过按下 <kbd>Escape</kbd> 键）。

## 接口

- {{DOMxRef("EyeDropper")}} {{Experimental_Inline}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 EyeDropper API，可以选择屏幕上任意像素的颜色。](https://developer.chrome.google.cn/docs/capabilities/web-apis/eyedropper)
- [EyeDropper API W3C/SMPTE 联合研讨会](https://www.w3.org/2021/03/media-production-workshop/talks/patrick-brosset-eyedropper-api.html)
