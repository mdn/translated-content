---
title: CaretPosition
slug: Web/API/CaretPosition
l10n:
  sourceCommit: e811fc31b67e145c5882e8e3f128d1938c627a51
---

{{SeeCompatTable}} {{ APIRef("CSSOM") }}

`CaretPosition` インターフェイスは、テキスト挿入ポイントのインジケーターであるキャレット位置を表します。 {{domxref("Document.caretPositionFromPoint()")}} メソッドを使用して `CaretPosition` を取得できます。

## インスタンスプロパティ

_このインターフェイスはプロパティを継承していません。_

- {{domxref("CaretPosition.offsetNode")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : キャレットの位置で見つかったノードを含む {{domxref("Node")}} を返します。
- {{domxref("CaretPosition.offset")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : キャレット位置ノードの文字オフセットを表す `long` を返します。

## インスタンスメソッド

- {{domxref("CaretPosition.getClientRect")}} {{Experimental_Inline}}
  - : キャレット範囲のクライアント長方形を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Document.caretPositionFromPoint()")}}
- {{domxref("Range")}}
- {{domxref("Node")}}
