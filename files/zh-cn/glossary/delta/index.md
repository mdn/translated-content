---
title: Delta
slug: Glossary/Delta
l10n:
  sourceCommit: fd4435ca55ff683dc8574b700ef244e75c2dfb52
---

{{GlossarySidebar}}

术语 **delta** 指两个值或状态之间的差异。

这个名称来源于希腊字母 Δ（delta），相当于罗马字母中的 _D_。_delta_ 指的是用字母 Δ 作为*差异*的简写。

在交流物理或虚拟物体的速度、位置或加速度的变化时，通常会使用 delta 这个术语。同样，在描述声音波的音量或频率变化时也会使用这个术语。

例如，在描述屏幕上物体从左到右移动的距离时，可以使用术语 _delta x_ 或 _Δx_。

同样，给定 _X_ 的新值和旧值，可以这样计算 delta：

```js
let deltaX = newX - oldX;
```

更常见的是，你会得到 delta，并用它来更新先前的保存状态：

```js
let newX = oldX + deltaX;
```

例如鼠标滚轮事件 {{domxref("WheelEvent")}}，在其 {{domxref("WheelEvent.deltaX", "deltaX")}}、{{domxref("WheelEvent.deltaY", "deltaY")}} 和 {{domxref("WheelEvent.deltaZ", "deltaZ")}} 属性中提供了自上次事件以来滚轮移动的量。
