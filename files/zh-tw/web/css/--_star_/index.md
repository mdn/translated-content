---
title: 自訂屬性（--*）：CSS 變數
slug: Web/CSS/--*
l10n:
  sourceCommit: 50c8e290f11b061bbf2267e1a3279f28180a5fcb
---

{{CSSRef}}

以 `--` 為前綴的屬性名稱，例如 `--example-name`，代表包含值的*自訂屬性*，可以使用 {{cssxref("var", "var()")}} 函數在其他宣告中使用。

自訂屬性作用於其宣告的元素，並參與層疊：這類自訂屬性的值是由層疊演算法決定的宣告值。

{{CSSInfo}}

## 語法

```css
--some-keyword: left;
--some-color: #0000ff;
--some-complex-value: 3px 6px rgb(20 32 54);
```

- `<declaration-value>`
  - : 此值匹配一個或多個標記的序列，只要該序列不包含任何不允許的標記。它代表有效宣告可以具有的值的全部內容。

> [!NOTE]
> 自訂屬性名稱區分大小寫——`--my-color` 與 `--My-color` 將被視為不同的自訂屬性。

## 範例

### HTML

```html
<p id="firstParagraph">這段文字應該有藍色背景和黃色文字。</p>
<p id="secondParagraph">這段文字應該有黃色背景和藍色文字。</p>
<div id="container">
  <p id="thirdParagraph">這段文字應該有綠色背景和黃色文字。</p>
</div>
```

### CSS

```css
:root {
  --first-color: #16f;
  --second-color: #ff7;
}

#firstParagraph {
  background-color: var(--first-color);
  color: var(--second-color);
}

#secondParagraph {
  background-color: var(--second-color);
  color: var(--first-color);
}

#container {
  --first-color: #290;
}

#thirdParagraph {
  background-color: var(--first-color);
  color: var(--second-color);
}
```

### 結果

{{EmbedLiveSample('範例', 500, 130)}}

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{cssxref("var", "var()")}} 函數
- {{cssxref("@property")}} @ 規則
- [使用 CSS 自訂屬性（變數）](/zh-TW/docs/Web/CSS/Using_CSS_custom_properties)指南
- [CSS 自訂屬性用於層疊變數](/zh-TW/docs/Web/CSS/CSS_cascading_variables)模組
