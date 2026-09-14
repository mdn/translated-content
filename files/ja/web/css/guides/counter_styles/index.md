---
title: CSS カウンタースタイル
short-title: カウンタースタイル
slug: Web/CSS/Guides/Counter_styles
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

**CSS カウンタースタイル** (CSS Counter Styles) モジュールは、リスト内の[マーカー](/ja/docs/Web/CSS/Reference/Selectors/::marker)や[生成コンテンツ](/ja/docs/Web/CSS/Guides/Generated_content)内のカウンターの外観を管理するための独自のカウンタースタイルを定義できます。同時に、ネイティブのブラウザーリストスタイルを独自のカスタマイズで拡張することも可能です。

カウンターは数値として認識されますが、実際には増加可能な要素を持つ文字列です。カウンタースタイルモジュールは 10 の記述子を持つ `@counter-style` ルールを定義して おり、開発者がカウンターが文字列に変換される方法を正確に定義できるようにして います。このモジュールでは、カウンター箇条書き記号に使用する文字、カウンターの前に置く接頭辞や後に置く接尾辞、および負の値の処理方法を定義できます。記述子では、カウンタースタイルが処理する値の範囲を設定できるほか、範囲外や表示不可能な値に対する代替スタイルも同時に設定できます。また、音声合成ソフトによるカウンター値の読み上げ方法を定義することも可能です。

## リファレンス

### プロパティ

このモジュールではプロパティは定義されていません。

### 関数

- {{cssxref("symbols()")}}

### データ型

- [`<counter-style-name>`](/ja/docs/Web/CSS/Reference/At-rules/@counter-style#counter-style-name)
- [`<symbol>`](/ja/docs/Web/CSS/Reference/At-rules/@counter-style/symbols#values)
- [`<symbols-type>`](/ja/docs/Web/CSS/Reference/Values/symbols#syntax)

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

- [CSS カウンターの使用](/ja/docs/Web/CSS/Guides/Counter_styles/Using_counters)
  - : カウンターを使用して HTML 要素に番号を振る方法や、複雑なカウンターを実行する方法を説明します。

## 関連概念

[CSS リストとカウンター](/ja/docs/Web/CSS/Guides/Lists)モジュール:

- {{cssxref("counter-increment")}} プロパティ
- {{cssxref("counter-reset")}} プロパティ
- {{cssxref("counter-set")}} プロパティ
- {{cssxref("list-style-type")}} プロパティ
- {{cssxref("list-style")}} 一括指定プロパティ
- {{cssxref("counter()")}} 関数
- {{cssxref("counters()")}} 関数

[CSS 擬似要素](/ja/docs/Web/CSS/Guides/Pseudo-elements)モジュール:

- {{cssxref("::after")}} 擬似要素
- {{cssxref("::before")}} 擬似要素
- {{cssxref("::marker")}} 擬似要素

[CSS 生成コンテンツ](/ja/docs/Web/CSS/Guides/Generated_content)モジュール:

- {{cssxref("content")}} プロパティ

## 仕様書

{{Specifications}}

## 関連情報

- [CSS リストとカウンター](/ja/docs/Web/CSS/Guides/Lists)モジュール
- [CSS 擬似要素](/ja/docs/Web/CSS/Guides/Pseudo-elements)モジュール
- [CSS 生成コンテンツ](/ja/docs/Web/CSS/Guides/Generated_content)モジュール
- [Ready-made counter styles](https://w3c.github.io/predefined-counter-styles/#builtins) - (2023)
