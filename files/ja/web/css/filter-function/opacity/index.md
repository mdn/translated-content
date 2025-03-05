---
title: opacity()
slug: Web/CSS/filter-function/opacity
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

**`opacity()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/CSS_Functions)で、入力画像のサンプルに透過性を適用します。結果は {{cssxref("&lt;filter-function&gt;")}} です。

{{EmbedInteractiveExample("pages/css/function-opacity.html")}}

> [!NOTE]
> この関数はもっと一般的な {{Cssxref("opacity")}} プロパティと似ています。違いはフィルターの場合、ブラウザーによってはハードウェアアクセラレーションにより性能が上がることです。

## 構文

```css
opacity(amount)
```

### 引数

- `amount`
  - : 変換の度合いで、 {{cssxref("&lt;number&gt;")}} または {{cssxref("&lt;percentage&gt;")}} で指定します。 `0%` の値では完全に透明になり、 `100%` の値では入力が変更されないままになります。 `0%` と `100%` の間の値は、効果の割合です。{{Glossary("interpolation","補間")}}の初期値は `1` です。

## 例

### opacity() の正しい値の例

```css
opacity(0%)   /* 完全に透過 */
opacity(50%)  /* 50% 透過 */
opacity(1)    /* 効果なし */
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- その他の {{cssxref("filter")}} および {{cssxref("backdrop-filter")}} プロパティの値で使用できる {{cssxref("&lt;filter-function&gt;")}} 関数には、次のものがあります。
  - {{cssxref("filter-function/blur", "blur()")}}
  - {{cssxref("filter-function/brightness", "brightness()")}}
  - {{cssxref("filter-function/contrast", "contrast()")}}
  - {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
  - {{cssxref("filter-function/grayscale", "grayscale()")}}
  - {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
  - {{cssxref("filter-function/invert", "invert()")}}
  - {{cssxref("filter-function/saturate", "saturate()")}}
  - {{cssxref("filter-function/sepia", "sepia()")}}
- CSS の {{cssxref("opacity")}} プロパティ
