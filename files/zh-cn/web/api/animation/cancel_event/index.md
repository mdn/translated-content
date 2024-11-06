---
title: Animation.oncancel
slug: Web/API/Animation/cancel_event
---

{{ SeeCompatTable() }}{{ APIRef("Web Animations") }}

[Web Animations API](/zh-CN/docs/Web/API/Web_Animations_API) 的 {{domxref("Animation")}} 接口的 **`oncancel`** 属性是 `cancel` 事件的事件处理程序。

当动作从其他状态进入 `"idle"` 播放状态，例如当动画在结束播放后从元素中移除时，`cancel` 事件可以 {{domxref("Animation.cancel()")}} 被手动触发。

> [!NOTE]
> 在新的动画中，创建一个新的初始的空闲动画不会触发 `cancel` 事件。

## 语法

```js-nolint
addEventListener("cancel", (event) => { })
oncancel = (event) => { }
```

### 值

当动画被取消时，这个函数将会被执行。默认是 `null` 。

## 例子

如果动画被取消，将会从元素中移除它。

```js
animation.oncancel = animation.effect.target.remove();
```

## 标准

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Web Animations API](/zh-CN/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}
