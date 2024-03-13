---
title: Document.pointerLockElement
slug: Web/API/Document/pointerLockElement
l10n:
  sourceCommit: 1511e914c6b1ce6f88056bfefd48a6aa585cebce
---

{{APIRef("DOM")}}

**`pointerLockElement`** は {{domxref("Document")}} インターフェイスの読み取り専用プロパティで、この要素をポインターがロックされている間のマウスイベントの対象として設定します。ロック待ち状態の場合、ポインターがロックされていない場合、対象が他の文書にある場合は `null` になります。

## 値

{{domxref("Element")}} または `null`。

## 例

キャンバス要素に現在ポインターロックがかかっているかどうかを判定します。

```js
if (document.pointerLockElement === canvasElement) {
  console.log("ポインターロック状態がロック中になりました");
  // レスポンスで何か有益なことをする
} else {
  console.log("ポインターロック状態がロック解除になりました");
  // レスポンスで何か有益なことをする
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{ domxref("Document.exitPointerLock()") }}
- {{ domxref("Element.requestPointerLock()") }}
- [ポインターロック](/ja/docs/Web/API/Pointer_Lock_API)
