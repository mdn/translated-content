---
title: "EditContext: updateSelectionBounds() メソッド"
slug: Web/API/EditContext/updateSelectionBounds
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

{{domxref("EditContext")}} インターフェイスの **`EditContext.updateSelectionBounds()`** メソッドは、オペレーティングシステムに `EditContext` オブジェクトに関連付けられた編集可能な領域内で選択されているテキストの領域の情報を知らせます。

オペレーティングシステムに現在のユーザーの選択の境界を知らせるため、このメソッドを呼びます。編集可能な領域内におけるユーザーの選択が変化するたびに、このメソッドを呼ぶべきです。この選択の境界は、オペレーティングシステムが IME ウィンドウやその他のプラットフォーム固有の編集関係の UI を配置する助けとして用いられます。

## 構文

```js-nolint
updateSelectionBounds(selectionBounds)
```

### 引数

- `selectionBounds`
  - : 新しい選択の境界を表す {{domxref("DOMRect")}} オブジェクトです。

### 例外

- 引数が渡されなかった場合、`TypeError` {{domxref("DOMException")}} が投げられます。
- 渡された引数が {{domxref("DOMRect")}} でない場合、`TypeError` {{domxref("DOMException")}} が投げられます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 属する {{DOMxRef("EditContext")}} インターフェイス
