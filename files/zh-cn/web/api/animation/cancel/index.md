---
title: Animation.cancel()
slug: Web/API/Animation/cancel
---

{{ SeeCompatTable() }}{{ APIRef("Web Animations") }}

{{domxref("Animation")}} 接口的 Web 动画 API 的 **`cancel()`** 方法将清除此动画造成的所有 {{domxref("KeyframeEffect")}}，并中止其播放。

> [!NOTE]
> 当一个动画被取消时，其 {{domxref("Animation.startTime", "startTime")}} 和 {{domxref("Animation.currentTime", "currentTime")}} 被设置为 null。

## 语法

```js-nolint
cancel()
```

### 参数

无。

### 返回值

无。

### 异常

这个方法不会直接抛出异常; 但是，如果动画的 {{domxref("Animation.playState", "playState")}} 取消时是除了“空闲”之外的任何东西，{{domxref("Animation.finished", "current finished promise", "", 1)}} 被拒绝与一个 {{domxref("DOMException")}} 命名的`AbortError`.

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关内容

- [Web Animations API](/zh-CN/docs/Web/API/Web_Animations_API)
- {{domxref("KeyframeEffect")}}
- {{domxref("Animation")}}
- {{domxref("Animation.playState")}}
- {{domxref("Animation.finished")}} returns the promise this action will reject if the animation's `playState` is not `"idle"`.
