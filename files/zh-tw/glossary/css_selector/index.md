---
title: CSS 選擇器
slug: Glossary/CSS_Selector
---

{{GlossarySidebar}}

**CSS 選擇器**是 CSS 規則的一部分。它能讓你選定要調整哪個（或哪些）元素的樣式。

## 範例

```html
<div>I am inside of a div element.</div>
<p>I am inside of a paragraph element.</p>
```

```css
div {
  color: green;
}

p {
  color: red;
}
```

在第一個 CSS 規則，我選取了 `<div>` 元素、並將該元素的文字變成了綠色。在第二個 CSS 規則，我選取了 `<p>` 元素、並將該元素的文字變成了紅色。結果應該長成這個樣子：

{{EmbedLiveSample("範例", 640, 80)}}

## 深入理解

### 基本知識

- 基本選擇器

  - [類型選擇器](/zh-TW/docs/Web/CSS/Type_selectors) `elementname`
  - [Class 選擇器](/zh-TW/docs/Web/CSS/Class_selectors) `.classname`
  - [ID 選擇器](/zh-TW/docs/Web/CSS/ID_selectors) `#idname`
  - [通用選擇器](/zh-TW/docs/Web/CSS/Universal_selectors) `* ns|* *|*`
  - [屬性選擇器](/zh-TW/docs/Web/CSS/Attribute_selectors) `[attr=value]`
  - [狀態選擇器](/zh-TW/docs/Web/CSS/Pseudo-classes) `a:active, a:visited`

- 複合選擇器

  - [鄰接同層選擇器](/zh-TW/docs/Web/CSS/Next-sibling_combinator) `A + B`
  - [通用同層選擇器](/zh-TW/docs/Web/CSS/Subsequent-sibling_combinator) `A ~ B`
  - [直屬選擇器](/zh-TW/docs/Web/CSS/Child_combinator) `A > B`
  - [後代選擇器](/zh-TW/docs/Web/CSS/Descendant_combinator) `A B`

- [虛擬元素](/zh-TW/docs/Web/CSS/Pseudo-elements)
- [虛擬類別](/zh-TW/docs/Web/CSS/Pseudo-classes)
