---
title: StyleSheet
slug: Web/API/StyleSheet
---

{{APIRef("CSSOM")}}

`StyleSheet`インターフェースを実装するオブジェクトは、単一のスタイルシートを表します。CCS スタイルシートは、より特殊化された{{domxref("CSSStyleSheet")}}インターフェースを実装します。

## プロパティ

- {{domxref("StyleSheet/disabled","disabled")}}
  - : このプロパティは、現在のスタイルシートが適用されているかどうかを示します。
- {{domxref("StyleSheet/href","href")}} {{readonlyInline}}
  - : スタイルシートの位置を返します。
- {{domxref("StyleSheet/media","media")}} {{readonlyInline}}
  - : Specifies the intended destination medium for style information.
- {{domxref("StyleSheet/ownerNode","ownerNode")}} {{readonlyInline}}
  - : このスタイルシートをドキュメントに関連付けるノードを返します。
- {{domxref("StyleSheet/parentStyleSheet","parentStyleSheet")}} {{readonlyInline}}
  - : 存在する場合、これを含む {{domxref("StyleSheet")}} を返します; ない場合は `null` を返します。
- {{domxref("StyleSheet/title","title")}} {{readonlyInline}}
  - : 現在のスタイルシートへのアドバイザリタイトルを表す {{domxref("DOMString")}} を返します。
- {{domxref("StyleSheet/type","type")}} {{readonlyInline}}
  - : このスタイルシートのスタイルシート言語を表す {{domxref("DOMString")}} を返します。

## 仕様

| 仕様書                                                                                                           | 策定状況                         | コメント                                          |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------- |
| {{ SpecName('CSSOM', '#stylesheet', 'StyleSheet') }}                                             | {{ Spec2('CSSOM') }}     | {{ SpecName('DOM2 Style') }} から変更なし |
| {{ SpecName('DOM2 Style', 'stylesheets.html#StyleSheets-StyleSheet', 'StyleSheet') }} | {{ Spec2('DOM2 Style') }} | 初期定義                                          |

## ブラウザー実装状況

{{Compat("api.StyleSheet")}}

## 関連情報

- {{domxref("CSSStyleSheet")}}
