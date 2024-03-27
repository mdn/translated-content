---
title: color-contrast()
slug: Web/CSS/color_value/color-contrast
l10n:
  sourceCommit: 679ce634cab2ae7b2e8328946230393e69d6a6f9
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
