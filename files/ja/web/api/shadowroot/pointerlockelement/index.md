---
title: "ShadowRoot: pointerLockElement プロパティ"
short-title: pointerLockElement
slug: Web/API/ShadowRoot/pointerLockElement
l10n:
  sourceCommit: c99ff93a1b71e7d664509fdd3e0c168920be967a
---

{{APIRef("Pointer Lock API")}}

**`pointerLockElement`** は {{domxref("ShadowRoot")}} インターフェイスの読み取り専用プロパティで、ポインターがロックされている間のマウスイベントの対象となる要素を返します。ロックが保留中、ポインターがロックされていない、または対象が別のツリーにある場合は `null` になります。

## 値

{{domxref("Element")}} または `null` です。

## 例

```js
let customElem = document.querySelector("my-shadow-dom-element");
let shadow = customElem.shadowRoot;
let pleElem = shadow.pointerLockElement;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{ domxref("Document.exitPointerLock()") }}
- {{ domxref("Element.requestPointerLock()") }}
- [ポインターロック](/ja/docs/Web/API/Pointer_Lock_API)
