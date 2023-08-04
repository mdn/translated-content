---
title: symbols()
slug: Web/CSS/symbols
---

{{CSSRef}}

**`symbols()`** は CSS の関数で、カウンタースタイルをインラインで、 {{cssxref("list-style")}} のようなプロパティの値で直接定義することができます。 {{cssxref("@counter-style")}} とは異なり、 `symbols()` は*無名*です (すなわち一度しか使用できません)。 {{cssxref("@counter-style")}} よりも機能は劣りますが、より簡単でより短く書くことができます。

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

- {{cssxref("@counter-style")}}
- {{cssxref("list-style-type")}} および対応する一括指定である {{cssxref("list-style")}}
