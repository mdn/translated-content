---
title: HTMLStyleElement
slug: Web/API/HTMLStyleElement
l10n:
  sourceCommit: 387d0d4d8690c0d2c9db1b85eae28ffea0f3ac1f
---

{{APIRef("HTML DOM")}}

**`HTMLStyleElement`** インターフェイスは {{HTMLElement("style")}} 要素を表します。これは親である {{domxref("HTMLElement")}} からプロパティとメソッドを継承しています。

このインターフェイスでは、（ほとんどの場合）保持している CSS を操作することはできません。CSS を操作するには、DOM を使用して指定された CSS プロパティを操作するために使用するオブジェクトの概要について、[動的なスタイル情報の利用](/ja/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)を参照してください。

{{InheritanceDiagram}}

## プロパティ

_親である {{domxref("HTMLElement")}} から継承したプロパティがあります。_

- {{domxref("HTMLStyleElement.media")}}
  - : スタイル情報の意図する出力先媒体を表す HTML 属性を反映した文字列です。
- {{domxref("HTMLStyleElement.type")}} {{deprecated_inline}}
  - : この文で適用されるスタイルの種類を表す HTML 属性を反映する文字列です。
- {{domxref("HTMLStyleElement.disabled")}}
  - : 論理値で、関連するスタイルシートが無効かどうかを示します。
- {{domxref("HTMLStyleElement.sheet")}} {{ReadOnlyInline}}
  - : 指定された要素に関連付けられた {{domxref("CSSStyleSheet")}} オブジェクトを返します。存在しない場合は `null` を返します。

## メソッド

_固有のメソッドはありません。親である {{domxref("HTMLElement")}} から継承したメソッドがあります。_

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装している HTML 要素: {{HTMLElement("style")}}
- [動的なスタイル情報の利用](/ja/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)で CSS を操作する方法を確認してください
