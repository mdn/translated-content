---
title: Element.openOrClosedShadowRoot
slug: Mozilla/Add-ons/WebExtensions/API/dom/openOrClosedShadowRoot
original_slug: Web/API/Element/openOrClosedShadowRoot
---

{{APIRef("Shadow DOM")}}{{non-standard_header}}

> **备注：** This API is available only to [WebExtensions](/zh-CN/docs/Mozilla/Add-ons/WebExtensions).

`Element.openOrCloseShadowRoot` 是一个只读属性。represents the shadow root hosted by the element, regardless if its {{DOMxRef("ShadowRoot.mode", "mode")}} is `open` or `closed`. Use {{DOMxRef("Element.attachShadow()")}} to add a shadow root to an existing element.

## Syntax

```
var shadowroot = element.shadowRoot;
```

### Value

A {{DOMxRef("ShadowRoot")}} object instance, regardless if its {{DOMxRef("ShadowRoot.mode", "mode")}} is set to `open` or `closed`, or `null` if no shadow root is present. (See {{DOMxRef("Element.attachShadow()")}} for further details).

## Specifications

_This property is not part of any specification._

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("Element.shadowRoot")}}
