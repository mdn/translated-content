---
title: CaretPosition
slug: Web/API/CaretPosition
---

{{SeeCompatTable}} {{ APIRef("CSSOM") }}

`CaretPosition` インターフェイスは、テキスト挿入ポイントのインジケーターであるキャレット位置を表します。 {{domxref("document.caretPositionFromPoint")}} メソッドを使用して `CaretPosition` を取得できます。

## プロパティ

_このインターフェイスはプロパティを継承しません。_

- {{domxref("CaretPosition.offsetNode")}} {{readonlyInline}}
  - : キャレットの位置で見つかったノードを含む {{domxref("Node")}} を返します。
- {{domxref("CaretPosition.offset")}} {{readonlyInline}}
  - : キャレット位置ノードの文字オフセットを表す `long` を返します。

## メソッド

{{domxref("CaretPosition.getClientRect")}}

## 仕様

{{Specifications}}

## ブラウザー実装状況

{{Compat("api.CaretPosition")}}

## 関連項目

- {{domxref("Document.caretPositionFromPoint()")}}
- {{domxref("Range")}}
- {{domxref("Node")}}
