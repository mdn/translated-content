---
title: dom.openOrClosedShadowRoot()
slug: Mozilla/Add-ons/WebExtensions/API/dom/openOrClosedShadowRoot
original_slug: Web/API/Element/openOrClosedShadowRoot
browser-compat: webextensions.api.dom.openOrClosedShadowRoot
---

{{AddonSidebar()}}

Gets the open shadow root or the closed shadow root hosted by the specified element. 如果影子根没有连接到该元素，它将返回`null'。

> **Note:** 在 Firefox 中, 等效的属性是 `element.openOrClosedShadowRoot`. This read-only property represents the shadow root hosted by the element, 无论其{{DOMxRef("ShadowRoot.mode", "mode")}}是"open"还是"closed"。
>
> 使用 {{DOMxRef("Element.attachShadow()")}} 来为一个元素添加一个影子根。

## Syntax

```js-nolint
let shadowRoot = browser.dom.openOrClosedShadowRoot(
  element,    // HTMLElement
)
```

### Parameters

- `element`
  - : `HTMLElement`. The host element.

### Return value

A {{DOMxRef("ShadowRoot")}} object instance, regardless of whether its
{{DOMxRef("ShadowRoot.mode", "mode")}} is set to `open` or
`closed`, or `null` if no shadow root is present.

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("Element.shadowRoot")}}
- [`chrome.dom.openOrClosedShadowRoot`](https://developer.chrome.com/docs/extensions/reference/dom/#method-openOrClosedShadowRoot)
