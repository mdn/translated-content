---
title: UIEvent：detail 属性
slug: Web/API/UIEvent/detail
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("UI Events")}}

**`UIEvent.detail`** 只读属性在非零时表示当前（或下一个，取决于事件）点击次数。

对于 {{domxref("Element/click_event", "click")}} 或 {{domxref("Element/dblclick_event", "dblclick")}} 事件，`UIEvent.detail` 表示当前的点击次数。

对于 {{domxref("Element/mousedown_event", "mousedown")}} 或 {{domxref("Element/mouseup_event", "mouseup")}} 事件，`UIEvent.detail` 为当前点击次数*加 1*。

对于所有其他 {{domxref("UIEvent")}} 对象，`UIEvent.detail` 始终为零。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
