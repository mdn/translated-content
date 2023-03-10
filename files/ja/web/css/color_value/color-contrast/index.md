---
title: color-contrast()
slug: Web/CSS/color_value/color-contrast
l10n:
  sourceCommit: 6be1b954a117202d7635caeec74ebbbde984d3f3
---

{{CSSRef}}{{SeeCompatTable}}

**`color-contrast()`** は関数表記で、ある{{cssxref("color_value","色","",1)}}の値と他の{{cssxref("color_value","色","",1)}}の値のリストを取り、リストから最もコントラストが高くなる値を選択します。

## 構文

```css
color-contrast(wheat vs tan, sienna, #d2691e)
color-contrast(#008080 vs olive, var(--myColor), #d2691e)
```

### 値

- 関数記法: `color-contrast( <color> vs <color>#{2,} )`

  - : `<color>` はいずれかの有効な{{cssxref("color_value","color","",1)}}です。

    `<color>#{2,}` は最初の値と比較する色の値のカンマ区切りのリストです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
