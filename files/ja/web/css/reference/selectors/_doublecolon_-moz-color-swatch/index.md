---
title: ::-moz-color-swatch
slug: Web/CSS/Reference/Selectors/::-moz-color-swatch
original_slug: Web/CSS/::-moz-color-swatch
---

{{Non-standard_header}}

**`::-moz-color-swatch`** は [CSS](/ja/docs/Web/CSS) の[擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)であり、 [Mozilla 拡張](/ja/docs/Web/CSS/Reference/Mozilla_extensions)で、 {{HTMLElement("input")}} の `type="color"` で選択された色を表します。

> [!NOTE]
> `::-moz-color-swatch` を `<input type="color">` 以外に何も一致せず、何も効果がありません。

## 構文

{{csssyntax}}

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

どの仕様書でも定義されていません。これは Gecko に固有の専用の擬似要素です。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 他のブラウザーで使用される似た擬似要素
  - {{cssxref("::-webkit-color-swatch")}} WebKit および Blink (Safari, Chrome, Opera) で対応している擬似要素
