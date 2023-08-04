---
title: StyleSheet
slug: Web/API/StyleSheet
l10n:
  sourceCommit: 06105598d11001e9f12d80ad05087f1df3c0634b
---

{{APIRef("CSSOM")}}

`StyleSheet` インターフェイスを実装するオブジェクトは、単一のスタイルシートを表します。 CSS スタイルシートは、より特殊化された {{domxref("CSSStyleSheet")}} インターフェイスを実装します。

## インスタンスプロパティ

- {{domxref("StyleSheet.disabled")}}
  - : 論理値で、現在のスタイルシートが適用されているかどうかを示します。
- {{domxref("StyleSheet.href")}} {{ReadOnlyInline}}
  - : 文字列で、スタイルシートの位置を返します。
- {{domxref("StyleSheet.media")}} {{ReadOnlyInline}}
  - : {{domxref("MediaList")}} で、スタイル情報の宛先メディアを返します。
- {{domxref("StyleSheet.ownerNode")}} {{ReadOnlyInline}}
  - : {{domxref("Node")}} で、このスタイルシートを現在の文書に関連付けているノードを返します。
- {{domxref("StyleSheet.parentStyleSheet")}} {{ReadOnlyInline}}
  - : 存在する場合、これをインクルードしている {{domxref("StyleSheet")}} を返します。ない場合は `null` を返します。
- {{domxref("StyleSheet.title")}} {{ReadOnlyInline}}
  - : 現在のスタイルシートのアドバイザリータイトルを表す文字列を返します。
- {{domxref("StyleSheet.type")}} {{ReadOnlyInline}}
  - : このスタイルシートのスタイルシート言語を表す文字列を返す。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("CSSStyleSheet")}}
