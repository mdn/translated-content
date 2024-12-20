---
title: "Document: caretRangeFromPoint() メソッド"
short-title: caretRangeFromPoint()
slug: Web/API/Document/caretRangeFromPoint
l10n:
  sourceCommit: 3966c40a3917825e6e467f1592bc7f8d59458e74
---

{{APIRef("DOM")}}{{Non-standard_header}}

**`caretRangeFromPoint()`** は {{domxref("Document")}} インターフェイスのメソッドで、指定された座標にある文書フラグメントの {{domxref("Range")}} オブジェクトを返します。

このメソッドは {{domxref("Document.caretPositionFromPoint")}} メソッドの WebKit 独自の実装です。

## 構文

```js-nolint
caretRangeFromPoint(x, y)
```

### 引数

- `x`
  - : 現在のビューポート内での水平位置。
- `y`
  - : 現在のビューポート内での垂直位置。

### 返値

以下のうちの一つです。

- {{domxref("Range")}}
- `Null` (x または y が負の数、ビューポート外、テキスト入力ノードがない場合)

## 例

このメソッドのライブサンプルを見るには、{{domxref("Document.caretPositionFromPoint#Examples", "Document.caretPositionFromPoint")}} ページを参照してください。

## 仕様書

どの仕様書にも含まれていません。

## ブラウザーの互換性

{{Compat}}
