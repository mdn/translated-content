---
title: color-contrast()
slug: Web/CSS/color_value/color-contrast
l10n:
  sourceCommit: 8a22e494736dbe7cc8ba38127a0d928b9fe8e700
---

{{CSSRef}}{{SeeCompatTable}}

**`color-contrast()`** は関数表記で、ある{{cssxref("color_value","色","",1)}}の値と他の{{cssxref("color_value","色","",1)}}の値のリストを取り、リストから最もコントラストが高くなる値を選択します。

## 構文

```css
color-contrast(wheat vs tan, sienna, #d2691e)
color-contrast(#008080 vs olive, var(--myColor), #d2691e)
```

### 値

- 関数記法: `color-contrast(color vs color-list)`

- `color`

  - : あらゆる有効な {{CSSXref("&lt;color&gt;")}} です。

- `vs`

  - : 構文の部品としてのリテラルトークンです。

- `color-list`

  - : 最初の値と比較する、少なくとも 2 つの色値のカンマ区切りリストです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("color_value", "&lt;color>")}} データ型
- [CSS 色](/ja/docs/Web/CSS/CSS_colors)モジュール
- [`prefers-contrast`](/ja/docs/Web/CSS/@media/prefers-contrast) および [`prefers-color-scheme`](/ja/docs/Web/CSS/@media/prefers-color-scheme) （{{cssxref("@media")}} 特性）
- [`contrast()`](/ja/docs/Web/CSS/filter-function/contrast)
- [WCAG: color contrast](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast)
- {{cssxref('--*', 'CSS custom properties')}} および {{cssxref("var")}}
