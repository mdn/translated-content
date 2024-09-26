---
title: ShadowRoot：fullscreenElement 属性
slug: Web/API/ShadowRoot/fullscreenElement
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("Shadow DOM")}}

{{domxref("ShadowRoot")}} 接口的 **`fullscreenElement`** 只读属性返回影子树中当前全屏显示的元素。

## 值

当前以全屏模式显示的 {{domxref('Element')}}，若无全屏元素则为 `null`。

## 示例

```js
let customElem = document.querySelector("my-shadow-dom-element");
let shadow = customElem.shadowRoot;
let fullscreenElem = shadow.fullscreenElement;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Document.fullscreenElement")}}
