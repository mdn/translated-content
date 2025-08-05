---
title: dom.openOrClosedShadowRoot()
slug: Mozilla/Add-ons/WebExtensions/API/dom/openOrClosedShadowRoot
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

获取指定元素的开放或封闭的影子根。如果影子根未附加到该元素，则返回 `null`。

> [!NOTE]
> 在 Firefox 中，等效属性是 `element.openOrClosedShadowRoot`。该只读属性表示元素所承载的影子 DOM，无论其 {{DOMxRef("ShadowRoot.mode", "mode")}} 是 `open` 还是 `closed`。
>
> 使用 {{DOMxRef("Element.attachShadow()")}} 将影子 DOM 添加到元素中。

## 语法

```js-nolint
let shadowRoot = browser.dom.openOrClosedShadowRoot(
  element,    // HTMLElement
)
```

### 参数

- `element`
  - : `HTMLElement`。宿主元素。

### 返回值

一个 {{DOMxRef("ShadowRoot")}} 对象实例，无论其 {{DOMxRef("ShadowRoot.mode", "mode")}} 设置为 `open` 还是 `closed`，如果没有影子 DOM，则返回 `null`。

## 浏览器兼容性

{{Compat}}

## 参见

- {{DOMxRef("Element.shadowRoot")}}
- [`chrome.dom.openOrClosedShadowRoot`](https://developer.chrome.google.cn/docs/extensions/reference/api/dom#method-openOrClosedShadowRoot)
