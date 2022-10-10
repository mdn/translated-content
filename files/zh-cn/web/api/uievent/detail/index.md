---
title: UIEvent.detail
slug: Web/API/UIEvent/detail
---

{{APIRef("DOM Events")}}

**`UIEvent.detail`** 是只读属性，当值为非空的时候，提供当前点击数 (和环境有关) 。

对 {{event("click")}} 或者 {{event("dblclick")}} 事件，`UIEvent.detail` 是当前点击数量。

对 {{event("mousedown")}} 或者 {{event("mouseup")}} 事件，`UIEvent.detail` 是 1 加上当前点击数。

对所有的其它{{domxref("UIEvent")}} 对象，`UIEvent.detail` 总是零。

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
