---
title: CSS `::-moz-color-swatch` 擬似要素
short-title: ::-moz-color-swatch
slug: Web/CSS/Reference/Selectors/::-moz-color-swatch
l10n:
  sourceCommit: 6cf697a8965ecdc4967258cc0282fe789b60318e
---

{{Non-standard_header}}

**`::-moz-color-swatch`** は [CSS](/ja/docs/Web/CSS) の[擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)であり、 [Mozilla 拡張](/ja/docs/Web/CSS/Reference/Mozilla_extensions)で、 {{HTMLElement("input")}} の `type="color"` で選択された色を表します。

> [!NOTE]
> `::-moz-color-swatch` を `<input type="color">` 以外で使うと、何にも一致せず、効果がありません。

## 構文

```css
::-moz-color-swatch {
  /* ... */
}
```

## 例

### HTML

```html
<input type="color" value="#de2020" />
```

### CSS

```css
input[type="color"]::-moz-color-swatch {
  border-radius: 10px;
  border-style: none;
}
```

### 結果

{{EmbedLiveSample("Examples", 300, 50)}}

## 仕様書

どの仕様書にも含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 他のブラウザーで使われる似た擬似要素:
  - {{cssxref("::-webkit-color-swatch")}} WebKit および Blink (Safari, Chrome, Opera) が対応している擬似要素
