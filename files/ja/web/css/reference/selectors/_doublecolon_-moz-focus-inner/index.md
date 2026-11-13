---
title: "`::-moz-focus-inner` 擬似要素 (CSS)"
short-title: ::-moz-focus-inner
slug: Web/CSS/Reference/Selectors/::-moz-focus-inner
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{non-standard_header}}

**`::-moz-focus-inner`** は [CSS](/ja/docs/Web/CSS) の[擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)で、{{HTMLElement("button")}} 要素や、 {{HTMLElement("input")}} 要素の {{HTMLElement("input/button","button")}}、{{HTMLElement("input/submit","submit")}}、{{HTMLElement("input/color","color")}} 型の内側のフォーカスリングを表す [Mozilla の拡張](/ja/docs/Web/CSS/Reference/Mozilla_extensions)です。

> [!NOTE]
> `::-moz-focus-inner` を、対応しているボタン以外で使用しても、何にも一致せず、何の効果もありません。

## 構文

```css
::-moz-focus-inner {
  /* ... */
}
```

## 例

### HTML

```html
<input type="submit" value="Input" /> <button type="submit">Button</button>
```

### CSS

```css
button::-moz-focus-inner,
input[type="color"]::-moz-focus-inner,
input[type="reset"]::-moz-focus-inner,
input[type="button"]::-moz-focus-inner,
input[type="submit"]::-moz-focus-inner {
  padding-block-start: 0px;
  padding-inline-end: 2px;
  padding-block-end: 0px;
  padding-inline-start: 2px;
  border: 2px dotted red;
}
```

### 結果

{{EmbedLiveSample("Example", 300, 50)}}

## 仕様書

どの仕様にも含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Mozilla CSS 拡張](/ja/docs/Web/CSS/Reference/Mozilla_extensions)
- 関連 CSS プロパティ:
  - {{cssxref("-moz-user-focus")}}

- 関連 CSS セレクター:
  - {{cssxref(":focus")}}
  - {{cssxref(":focus-visible")}}
  - {{cssxref(":focus-within")}}
