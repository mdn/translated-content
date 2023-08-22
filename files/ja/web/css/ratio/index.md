---
title: <ratio>
slug: Web/CSS/ratio
---

{{CSSRef}}

**`<ratio>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/CSS_Types)で、[アスペクト比](/ja/docs/Web/CSS/@media/aspect-ratio)を[メディアクエリ](/ja/docs/Web/CSS/Media_Queries)内で記述するために使用し、2 つの単位のない値で比率を記述します。

## 構文

メディアクエリ Level 3 では、`<ratio>` データ型は、厳密な正の {{cssxref("&lt;integer&gt;")}}、スラッシュ ('/', Unicode の `U+002F SOLIDUS`)、2 番目の厳密な正の {{cssxref("&lt;integer&gt;")}} の順に記述します。スラッシュの前後にはスペースを入れてもかまいません。最初の数値は幅を、2 番目の数値は高さを表します。

メディアクエリ Level 4 では、`<ratio>` データ型が更新され、厳密な正の {{cssxref("&lt;number&gt;")}}、スラッシュ ('/', Unicode の `U+002F SOLIDUS`)、2 番目の厳密な正の {{cssxref("&lt;number&gt;")}} の順に記述します。それに加えて、単独の {{cssxref("&lt;number&gt;")}} の値が許可されています。

## 例

### メディアクエリでの使用

```css
@media screen and (min-aspect-ratio: 16/9) { ... }
```

### 一般的なアスペクト比

|                                     | 比率                | 用例                                                               |
| ----------------------------------- | ------------------- | ------------------------------------------------------------------ |
| ![Ratio4_3.png](ratio4_3.png)       | `4/3`               | 20 世紀における伝統的な TV 画面の形状です。                        |
| ![Ratio16_9.png](ratio16_9.png)     | `16/9`              | 現代の「ワイド画面」の TV の形状です。                             |
| ![Ratio1_1.85.png](ratio1_1.png)    | `185/100` = `91/50` | 1960 年代から用いられている最も一般的な映画スクリーンの形状です。  |
| ![Ratio1_2.39.png](ratio1_2.39.png) | `239/100`           | 「ワイドスクリーン」、アナモルフィックな映画スクリーンの形状です。 |

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("css.types.ratio")}}

## 関連情報

- [`aspect-ratio`](/ja/docs/Web/CSS/@media/aspect-ratio) メディア特性
