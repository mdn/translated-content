---
title: CSS カウンタースタイル
slug: Web/CSS/CSS_counter_styles
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**CSS カウンタースタイル** モジュールを使用すると、[生成コンテンツ](/ja/docs/Web/CSS/CSS_generated_content)内のリストおよびカウンターにおける[マーカー](/ja/docs/Web/CSS/::marker)の外観を管理するための、独自のカウンタースタイルを定義することができます。また、ネイティブのブラウザーリストスタイルを、独自のカスタマイズで拡張することもできます。

カウンターは数値として考えがちですが、実際には、増加する要素を持つ文字列です。カウンタースタイルモジュールは、10 個の記述子を持つ `@counter-style` ルールを定義し、開発者がカウンターを文字列に変換する方法を正確に定義できるようにします。このモジュールを使用すると、カウンターに使う文字、カウンターの前に付ける接頭辞、後に付ける接尾辞、および負の値の処理方法を定義することができます。記述子では、カウンタースタイルが処理できる値の範囲を設定し、カウンター値が定義された範囲外になった場合や、カウンター値をレンダリングできない場合の代替スタイルも指定できます。また、このモジュールでは、音声合成エンジンによるカウンターの読み上げ方法を定義することもできます。

## リファレンス

### プロパティ

このモジュールではプロパティは定義されていません。

### 関数

- {{cssxref("symbols", "symbols()")}}

### データ型

- [`<counter-style-name>`](/ja/docs/Web/CSS/@counter-style#counter-style-name)
- [`<symbol>`](/ja/docs/Web/CSS/@counter-style/symbols#values)
- [`<symbols-type>`](/ja/docs/Web/CSS/symbols#syntax)

### アットルール

- {{cssxref("@counter-style")}}
  - {{cssxref("@counter-style/system","system")}}
  - {{cssxref("@counter-style/symbols", "symbols")}}
  - {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}
  - {{cssxref("@counter-style/negative", "negative")}}
  - {{cssxref("@counter-style/prefix", "prefix")}}
  - {{cssxref("@counter-style/suffix", "suffix")}}
  - {{cssxref("@counter-style/range", "range")}}
  - {{cssxref("@counter-style/pad", "pad")}}
  - {{cssxref("@counter-style/speak-as", "speak-as")}}
  - {{cssxref("@counter-style/fallback", "fallback")}}

### インターフェイス

- {{domxref("CSSCounterStyleRule")}} インターフェイス

## ガイド

- [CSS カウンターの使い方](/ja/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters)
  - : カウンターを使用して HTML 要素に番号を振る方法や、複雑なカウンターを実行する方法を説明します。

## 関連概念

[CSS リストとカウンター](/ja/docs/Web/CSS/CSS_lists)モジュール:

- {{cssxref("counter-increment")}} プロパティ
- {{cssxref("counter-reset")}} プロパティ
- {{cssxref("counter-set")}} プロパティ
- {{cssxref("list-style-type")}} プロパティ
- {{cssxref("list-style")}} 一括指定プロパティ
- {{cssxref("counter", "counter()")}} 関数
- {{cssxref("counters", "counters()")}} 関数

[CSS 擬似要素](/ja/docs/Web/CSS/CSS_pseudo-elements)モジュール:

- {{cssxref("::after")}} 擬似要素
- {{cssxref("::before")}} 擬似要素
- {{cssxref("::marker")}} 擬似要素

[CSS 生成コンテンツ](/ja/docs/Web/CSS/CSS_generated_content)モジュール:

- {{cssxref("content")}} プロパティ

## 仕様書

{{Specifications}}

## 関連情報

- [CSS リストとカウンター](/ja/docs/Web/CSS/CSS_lists) モジュール
- [CSS 擬似要素](/ja/docs/Web/CSS/CSS_pseudo-elements) モジュール
- [CSS 生成コンテンツ](/ja/docs/Web/CSS/CSS_generated_content) モジュール
- [Ready-made counter styles](https://w3c.github.io/predefined-counter-styles/#builtins) (W3C, 2023)
