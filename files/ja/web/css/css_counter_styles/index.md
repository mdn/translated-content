---
title: CSS カウンタースタイル
slug: Web/CSS/CSS_Counter_Styles
tags:
  - CSS
  - CSS カウンタースタイル
  - ガイド
  - NeedsContent
  - 概要
  - リファレンス
translation_of: Web/CSS/CSS_Counter_Styles
---
{{CSSRef}}

**CSS カウンタースタイル** (CSS Counter Styles) は CSS のモジュールの一つで、独自のカウンタースタイルを定義することができます。

## リファレンス

### プロパティ

- {{cssxref("counter-increment")}}
- {{cssxref("counter-reset")}}

### アットルール

- {{cssxref("@counter-style")}}

  - {{cssxref("@counter-style/system","system")}}
  - {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}
  - {{cssxref("@counter-style/negative", "negative")}}
  - {{cssxref("@counter-style/prefix", "prefix")}}
  - {{cssxref("@counter-style/suffix", "suffix")}}
  - {{cssxref("@counter-style/range", "range")}}
  - {{cssxref("@counter-style/pad", "pad")}}
  - {{cssxref("@counter-style/speak-as", "speak-as")}}
  - {{cssxref("@counter-style/fallback", "fallback")}}

## ガイド

- [CSS カウンターの使用](/ja/docs/Web/CSS/CSS_Counter_Styles/Using_CSS_counters)
  - : カウンターを使用して HTML 要素に番号を振る方法や、複雑なカウンターを実行する方法を説明します。

## 仕様書

| 仕様書                              | 状態                             | 備考     |
| ----------------------------------- | -------------------------------- | -------- |
| {{SpecName('CSS3 Counter Styles')}} | {{Spec2('CSS3 Counter Styles')}} | 初回定義 |

## ブラウザーの互換性

### `@counter-style` ルール

{{Compat("css.at-rules.counter-style")}}

### `counter-increment` プロパティ

{{Compat("css.properties.counter-increment")}}

### `counter-reset` プロパティ

{{Compat("css.properties.counter-reset")}}
