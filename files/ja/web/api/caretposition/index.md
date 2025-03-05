---
title: CaretPosition
slug: Web/API/CaretPosition
l10n:
  sourceCommit: ae524b0c327f8aaea51cc6a5c59e0301bde646c0
---

{{ APIRef("CSSOM") }}

`CaretPosition` インターフェイスは、テキスト挿入ポイントのインジケーターであるキャレット位置を表します。
`CaretPosition` は {{domxref("Document.caretPositionFromPoint()")}} メソッドを使用して取得できます。

## インスタンスプロパティ

_このインターフェイスはプロパティを継承していません。_

- {{domxref("CaretPosition.offsetNode")}} {{ReadOnlyInline}}
  - : キャレットの位置で見つかったノードを含む {{domxref("Node")}} を返します。
- {{domxref("CaretPosition.offset")}} {{ReadOnlyInline}}
  - : キャレット位置ノード内の選択位置のオフセットを表す `long` を返します。
    これは、テキストノードでは文字のオフセット、要素ノードでは選択された子ノードのインデックスになります。

## インスタンスメソッド

- {{domxref("CaretPosition.getClientRect")}}
  - : キャレット範囲のクライアント長方形を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Document.caretPositionFromPoint()")}}
- {{domxref("Range")}}
- {{domxref("Node")}}
