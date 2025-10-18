---
title: Animation：cancel() 方法
short-title: cancel()
slug: Web/API/Animation/cancel
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Animations") }}

[Web 动画 API](/zh-CN/docs/Web/API/Web_Animations_API) 中 {{domxref("Animation")}} 接口的 **`cancel()`** 方法会清除由该动画产生的所有 {{domxref("KeyframeEffect")}}，并中止其播放。

> [!NOTE]
> 当动画被取消时，{{domxref("Animation.startTime", "startTime")}} 和 {{domxref("Animation.currentTime", "currentTime")}} 会被设为 `null`。

## 语法

```js-nolint
cancel()
```

### 参数

无。

### 返回值

无（{{jsxref("undefined")}}）。

### 异常

该方法本身不会直接抛出异常；但是，如果在动画被取消时，{{domxref("Animation.playState", "playState")}} 不设为 `"idle"`，则{{domxref("Animation.finished", "当前的 finished promise", "", 1)}} 会以名为 `AbortError` 的 {{domxref("DOMException")}} 被拒绝。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Web 动画 API](/zh-CN/docs/Web/API/Web_Animations_API)
- {{domxref("KeyframeEffect")}}
- {{domxref("Animation")}}
- {{domxref("Animation.playState")}}
- {{domxref("Animation.finished")}} 返回的 promise，如果动画的 `playState` 不是 `"idle"`，将会拒绝。
