---
title: ShadowRoot.pointerLockElement
slug: Web/API/ShadowRoot/pointerLockElement
---

{{APIRef("DOM")}}

**`pointerLockElement`** は {{domxref("ShadowRoot")}} インターフェースの読み取り専用プロパティで、ポインターがロックされている間、マウスイベントのターゲットとして設定される要素を提供します。ロックが保留されている場合、ポインタのロックが解除されている場合、ターゲットが別のツリーにある場合は `null` になります。

## 構文

```js
shadowRoot.pointerLockElement;
```

### 値

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
