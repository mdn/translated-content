---
title: contrast()
slug: Web/CSS/filter-function/contrast
tags:
  - CSS
  - CSS 関数
  - フィルター効果
  - 関数
  - リファレンス
translation_of: Web/CSS/filter-function/contrast()
original_slug: Web/CSS/filter-function/contrast()
browser-compat: css.types.filter-function.contrast
---
{{CSSRef}}

**`contrast()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/CSS_Functions)で、入力画像のコントラストを調整します。結果は {{cssxref("&lt;filter-function&gt;")}} です。

{{EmbedInteractiveExample("pages/css/function-contrast.html")}}

## 構文

```css
contrast(amount)
```

### 引数

- `amount`
  - : 結果のコントラストで、 {{cssxref("&lt;number&gt;")}} または {{cssxref("&lt;percentage&gt;")}} で指定します。 `100%` 未満の値ではコントラストが下がり、 `100%` を超える値ではコントラストが上がります。 `0%` の値では画像が完全に灰色になり、 `100%` の値では入力が変更されないままになります。補間時の欠損値は `1` です。

## 例

### 数値とパーセント値を使用した contrast の設定

```css
contrast(0)     /* 完全な灰色 */
contrast(65%)   /* 65% のコントラスト */
contrast(1)     /* 効果なし */
contrast(200%)  /* 2 倍のコントラスト */
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("&lt;filter-function&gt;")}}
- {{cssxref("filter-function/blur()", "blur()")}}
- {{cssxref("filter-function/brightness()", "brightness()")}}
- {{cssxref("filter-function/drop-shadow()", "drop-shadow()")}}
- {{cssxref("filter-function/grayscale()", "grayscale()")}}
- {{cssxref("filter-function/hue-rotate()", "hue-rotate()")}}
- {{cssxref("filter-function/invert()", "invert()")}}
- {{cssxref("filter-function/opacity()", "opacity()")}}
- {{cssxref("filter-function/saturate()", "saturate()")}}
- {{cssxref("filter-function/sepia()", "sepia()")}}
