---
title: ShadowRoot：innerHTML 属性
slug: Web/API/ShadowRoot/innerHTML
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("Shadow DOM")}}

{{domxref("ShadowRoot")}} 接口的 **`innerHTML`** 属性用于设置或返回 `ShadowRoot` 内部 DOM 树的引用。

## 值

一个字符串。

## 示例

```js
let customElem = document.querySelector("my-shadow-dom-element");
let shadow = customElem.shadowRoot;

shadow.innerHTML = "<strong>此元素应当具有更高的优先级！</strong>";
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
