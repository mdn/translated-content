---
title: device-cmyk()
slug: Web/CSS/Reference/Values/color_value/device-cmyk
l10n:
  sourceCommit: 7d0031545bb606d2ff7fb033180f9cec451a6f8d
---

**`device-cmyk()`** 関数記法は、機器依存の形で CMYK 色を表現するために使用します。シアン、マゼンタ、黄色、黒の成分を指定します。

この色に対するアプローチは、具体的なプリンターに出力する素材を生成する場合、具体的なインク組み合わせの出力結果が既知の場合に有用です。CSS プロセッサーは他のメディア向けに色を近似しようとするかもしれませんが、正確な出力測色法を知らなければ、最終結果は印刷結果とは異なる可能性が高いです。`device-cmyk` 用の {{cssxref("@color-profile")}} 宣言により、変換のための正確な色プロファイルを指定できます。

## 構文

```css
device-cmyk(0 81% 81% 30%);
device-cmyk(none 0.81 0.81 0.3);
device-cmyk(0 81% 81% 30% / .5);
```

### 値

- 関数記法: `device-cmyk(C M Y K[ / A])`

- `C`, `M`, `Y`, `K`
  - : それぞれ `0` から `1` までの {{CSSXref("number")}} か、 `0%` から `100%` までの {{CSSXref("percentage")}} の値か、キーワード `none` で、 CMYK 色の成分であるシアン、マゼンタ、黄、黒の成分を指定します。
    > [!NOTE]
    > `none` の効果については[色成分の欠落](/ja/docs/Web/CSS/Reference/Values/color_value#色成分の欠落)を参照してください。

- `A` {{optional_inline}}
  - : アルファチャネル値を表す {{CSSXref("&lt;alpha-value&gt;")}} で、数値 `0` は `0%`（完全に透明）、`1` は `100%`（完全に不透明）に対応します。さらにキーワード `none` を使用して明示的にアルファチャネルを指定しないことも可能です。

### 形式文法

{{CSSSyntax}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

今のところ、この機能に対応しているブラウザーはありません。

## 関連情報

- [CSS 色](/ja/docs/Web/CSS/Guides/Colors)モジュール
- {{cssxref("@page")}}
