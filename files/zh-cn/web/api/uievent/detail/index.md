---
title: UIEvent.detail
slug: Web/API/UIEvent/detail
---

{{APIRef("UI Events")}}

**`UIEvent.detail`** 是只读属性，当值为非空的时候，提供当前点击数 (和环境有关) 。

对 [`click`](/zh-CN/docs/Web/API/Element/click_event) 或者 [`dblclick`](/zh-CN/docs/Web/API/Element/dblclick_event) 事件，`UIEvent.detail` 是当前点击数量。

对 [`mousedown`](/zh-CN/docs/Web/API/Element/mousedown_event) 或者 [`mouseup`](/zh-CN/docs/Web/API/Element/mouseup_event) 事件，`UIEvent.detail` 是 1 加上当前点击数。

对所有的其他{{domxref("UIEvent")}} 对象，`UIEvent.detail` 总是零。

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
