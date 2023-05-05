---
title: device-cmyk()
slug: Web/CSS/color_value/device-cmyk
l10n:
  sourceCommit: 6be1b954a117202d7635caeec74ebbbde984d3f3
---

{{CSSRef}}

**`device-cmyk()`** 関数記法は、機器依存の形で CMYK 色を表現するために使用します。シアン、マゼンタ、黄色、黒の成分を指定します。

この色に対する手法は、特定のプリンターで出力する素材を作成する際、特定のインクの組み合わせでの出力が分かっている場合に有益なものです。 CSS プロセッサーは色を近似させることができますが、最終的な結果は表示されたものと異なる形になる可能性があります。

## 構文

```css
device-cmyk(0 81% 81% 30%);
device-cmyk(0 81% 81% 30% / .5);
device-cmyk(0 81% 81% 30% / .5, rgb(178 34 34));
```

### 値

- 関数記法: `device-cmyk( <cmyk-component>{4} [ / <alpha-value> ]? , <color>? )`

  - : `<cmyk-component>` は 4 つの {{cssxref("number")}} または {{cssxref("percentage")}} の値で、 CMYK 色のシアン、マゼンタ、黄、黒の成分を指定します。

    `/ <alpha-value>` （アルファ）は {{cssxref("&lt;number&gt;")}} で `0` から `1` の間、または {{cssxref("&lt;percentage&gt;")}} で `1` から `100%` （完全に不透明）の間で、この色の透明度（またはアルファチャネル）を表します。

    `<color>` は、ユーザーエージェントが CMYK 色を RGB に変換する方法を知らない場合に使用する、オプションの代替値の {{cssxref("&lt;color&gt;")}} です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
