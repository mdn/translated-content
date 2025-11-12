---
title: symbols()
slug: Web/CSS/Reference/Values/symbols
original_slug: Web/CSS/symbols
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`symbols()`** は CSS の関数で、 {{cssxref("list-style")}} などのプロパティの値として、カウンタースタイルをインラインで直接定義することができます。これは、カウンタースタイルを定義する {{cssxref("@counter-style")}} メソッドよりも機能は劣りますが、よりシンプルな代替手段です。

再利用可能なカウンタースタイルを定義する {{cssxref("@counter-style")}} とは異なり、`symbols()` は無名です（つまり、1 回しか使用できません）。この関数は、文字列および画像を値として受け入れます。これに対し、{{cssxref("@counter-style")}} の [`symbols`](/ja/docs/Web/CSS/Reference/At-rules/@counter-style/symbols) 記述子は、識別子も受け入れます。

## 構文

```css
symbols() = symbols( <symbols-type>? [ <string> | <image> ]+ );
```

`<symbols-type>` は以下のうちの一つで指定することができます。

- `cyclic`: このシステムでは、与えられた値を定義された順に循環させ、最後に到達すると最初に戻ります。
- `numeric`: このシステムでは、与えられた値を位取り記数法の連続した単位として解釈します。
- `alphabetic`: このシステムでは、与えられた値をアルファベット記数法として解釈します。位取り記数法と似ていますが、 `0` がありません。
- `symbolic`: このシステムでは値を循環させ、循環ごとに数を増やします（最初の循環では 1 回、 2 回目は 2 回、など）。
- `fixed`: このシステムでは与えられた値を一度ずつ使用し、その後はアラビア数字で代替します。

## 形式文法

{{CSSSyntax}}

## 例

### HTML

```html
<ol>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
</ol>
```

### CSS

```css
ol {
  list-style: symbols(cyclic "*" "†" "‡");
}
```

### 結果

{{EmbedLiveSample('Examples','100%',200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("@counter-style")}} 記述子: {{cssxref("@counter-style/system","system")}}, {{cssxref("@counter-style/symbols", "symbols")}}, {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}, {{cssxref("@counter-style/prefix", "prefix")}}, {{cssxref("@counter-style/suffix", "suffix")}}, {{cssxref("@counter-style/range", "range")}}, {{cssxref("@counter-style/pad", "pad")}}, {{cssxref("@counter-style/speak-as", "speak-as")}}, {{cssxref("@counter-style/fallback", "fallback")}}
- リストスタイルプロパティ: {{cssxref("list-style")}}, {{cssxref("list-style-type")}}
- [CSS カウンタースタイル](/ja/docs/Web/CSS/Guides/Counter_styles)モジュール
- [CSS リストとカウンター](/ja/docs/Web/CSS/Guides/Lists)モジュール
