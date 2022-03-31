---
title: 初期値
slug: Web/CSS/initial_value
tags:
  - CSS
  - ガイド
  - リファレンス
translation_of: Web/CSS/initial_value
---
{{cssref}}

**初期値 (initial value)** は [CSS](/ja/docs/Web/CSS) のプロパティの既定値であり、仕様書の定義表に挙げられているものです。初期値の使い方はプロパティが継承されているかどうかで異なります。

- [継承されるプロパティ](/ja/docs/Web/CSS/inheritance#inherited_properties)では、初期値は*ルート要素に対してのみ*、[指定値](/ja/docs/Web/CSS/specified_value)が指定されていない場合に限り使用されます。
- [継承されないプロパティ](/ja/docs/Web/CSS/inheritance#non-inherited_properties)では、初期値は*すべての要素*において、[指定値](/ja/docs/Web/CSS/specified_value)が指定されていない場合に限り使用されます。

{{cssxref("initial")}} キーワードを使用すると、明示的に初期値を指定することができます。

> **Note:** 初期値をブラウザーのスタイルシートで指定された値と混同しないでください。

## 仕様書

| 仕様書                                                                  | 状態                | 備考         |
| ----------------------------------------------------------------------- | ------------------- | ------------ |
| [CSS Cascade 4](https://drafts.csswg.org/css-cascade-4/#initial-values) |                     | 公式定義     |
| {{SpecName("CSS2.1", "cascade.html#specified-value", "initial value")}} | {{Spec2("CSS2.1")}} | 暗黙的な定義 |

## 関連情報

- {{cssxref("initial")}}
- {{CSS_key_concepts}}
