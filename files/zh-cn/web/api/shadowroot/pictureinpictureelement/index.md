---
title: ShadowRoot：pictureInPictureElement 属性
slug: Web/API/ShadowRoot/pictureInPictureElement
l10n:
  sourceCommit: bb4d21e3c6e71db4e0ba983a450d6ed628e82670
---

{{APIRef("Picture-in-Picture API")}}

{{domxref("ShadowRoot")}} 接口的 **`pictureInPictureElement`** 只读属性返回此影子树中当前以画中画模式呈现的 {{domxref("Element")}}，如果当前未使用画中画模式，则返回 `null`。

## 值

对当前处于画中画模式的 {{domxref("Element")}} 对象的引用。

如果影子树在画中画模式中没有关联元素，则返回 `null`。例如，没有画中画元素，或者画中画元素不在影子树中。

## 示例

```js
let customElem = document.querySelector("my-shadow-dom-element");
let shadow = customElem.shadowRoot;
let pipElem = shadow.pictureInPictureElement;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Document.pictureInPictureElement")}}
