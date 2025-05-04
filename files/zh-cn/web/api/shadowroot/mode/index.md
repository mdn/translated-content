---
title: ShadowRoot.mode
slug: Web/API/ShadowRoot/mode
---

{{APIRef("Shadow DOM")}}{{SeeCompatTable}}

**`mode`** 是 {{domxref("ShadowRoot")}} 的只读属性，它返回 `ShadowRoot` 创建时的模式 ("`open`" 或者 "`closed`") 。

当 `ShadowRoot` 的 `mode` 是 "`closed`" 时， `ShadowRoot` 的内部实现无法被 JavaScript 访问及修改 — 也就是说将该实现不公开，例如，[`<video>`](/zh-CN/docs/Web/HTML/Reference/Elements/video) 标签内部实现无法被 JavaScript 访问及修改。

## Syntax

```plain
var mode = shadowRoot.mode
```

### Value

值为 "`open`" 或者 "`closed`".

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
