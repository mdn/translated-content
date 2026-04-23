---
title: CSS Selectors
slug: Web/CSS/Guides/Selectors
---

**選擇器**可以定義某組 CSS 樣式要套用到哪些元素上。

## 基本選擇器

- [通用選擇器](/zh-TW/docs/Web/CSS/Reference/Selectors/Universal_selectors)（[Universal selector](/zh-TW/docs/Web/CSS/Reference/Selectors/Universal_selectors)）
  - : 用以選擇所有元素。（可選）可以將其限制為特定的名稱空間或所有名稱空間。
    **語法:** `* ns|* *|*`
    **範例:** `*` 套用文檔中所有元素。
- [標籤選擇器](/zh-TW/docs/Web/CSS/Reference/Selectors/Type_selectors)（[Type selector](/zh-TW/docs/Web/CSS/Reference/Selectors/Type_selectors)）
  - : 用以選擇所有符合指定標籤的元素。
    **語法:** `elementname`
    **範例:** `input` 可選出任一 [\<input>](/zh-TW/docs/Web/HTML/Reference/Elements/input) 元素。
- [類別選擇器](/zh-TW/docs/Web/CSS/Reference/Selectors/Class_selectors)（[Class selector](/zh-TW/docs/Web/CSS/Reference/Selectors/Class_selectors)）
  - : 用以選擇所有符合指定 `class` 屬性值的元素。
    **語法:** `.classname`
    **範例:** `.index` 可選出任一含有 `index` 的 class 屬性值之元素。
- [ID 選擇器](/zh-TW/docs/Web/CSS/Reference/Selectors/ID_selectors)（[ID selector](/zh-TW/docs/Web/CSS/Reference/Selectors/ID_selectors)）
  - : 用以選擇指定 `id` 屬性值的元素。（一個文件中，每個 ID 屬性都是唯一的。）
    **語法:** `#idname`
    **範例:** `#toc` 會比對含有 ID 是 toc 的元素(可以定義成 `id="toc"` 或其他類似的定義)。
- [屬性選擇器](/zh-TW/docs/Web/CSS/Reference/Selectors/Attribute_selectors)（[Attribute selector](/zh-TW/docs/Web/CSS/Reference/Selectors/Attribute_selectors)）
  - : 用以選擇所有符合指定屬性的元素。
    **語法:** `[attr] [attr=value] [attr~=value] [attr|=value] [attr^=value] [attr$=value] [attr*=value]`
    **範例:** `[autoplay]` 將會套用含有 `autoplay` 屬性的元素。(不論這個屬性的值是什麼)。

## 分組選擇器

- 選擇器列表（[Selector list](/zh-TW/docs/Web/CSS/Reference/Selectors/Selector_list)）
  - : `,` 用以將不同的選擇器組合起來的一種方法。
    **語法:** `A, B`
    **範例:** `div, span` 將同時選擇 [`<div>`](/zh-TW/docs/Web/HTML/Reference/Elements/div) 和 [`<span>`](/zh-TW/docs/Web/HTML/Reference/Elements/span) 元素。

## 組合選擇器

- [後代選擇器](/zh-TW/docs/Web/CSS/Reference/Selectors/Descendant_combinator)（[Descendant combinator](/zh-TW/docs/Web/CSS/Reference/Selectors/Descendant_combinator)）
  - : " " (空格) 用以選擇某個元素後代的元素。 **語法:** `A B`**範例:** `div span` 套用所有 [`<div>`](/zh-TW/docs/Web/HTML/Reference/Elements/div) 元素內部的所有 [`<span>`](/zh-TW/docs/Web/HTML/Reference/Elements/span) 元素。

- [子代選擇器](/zh-TW/docs/Web/CSS/Reference/Selectors/Child_combinator)（[Child combinator](/zh-TW/docs/Web/CSS/Reference/Selectors/Child_combinator)）
  - : `>` 用以選擇某個元素後代的元素。
    **語法:** `A > B`（B 元素不可在 A 元素的其他元素裡）
    **範例:** `ul > li` 套用所有 [`<li>`](/zh-TW/docs/Web/HTML/Reference/Elements/li) 元素內部的 [`<ul>`](/zh-TW/docs/Web/HTML/Reference/Elements/ul) 子元素。
- [一般兄弟選擇器](/zh-TW/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator)（[General sibling combinator](/zh-TW/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator)）
  - : `~` combinator selects siblings. This means that the second element follows the first (though not necessarily immediately), and both share the same parent.
    **語法:** `A ~ B`
    **範例:** `p ~ span` will match all {{HTMLElement("span")}} elements that follow a {{HTMLElement("p")}}, immediately or not.
- [相鄰兄弟選擇器](/zh-TW/docs/Web/CSS/Reference/Selectors/Next-sibling_combinator)（[Adjacent sibling combinator](/zh-TW/docs/Web/CSS/Reference/Selectors/Next-sibling_combinator)）
  - : `+` 選擇緊接在後的元素，並共享父元素。
    **語法:** `A + B`
    **範例:** `h2 + p` 套用所有 緊接在 [`<h2>`](/zh-TW/docs/Web/HTML/Reference/Elements/Heading_Elements) 元素後的 [\<p>](/zh-TW/docs/Web/HTML/Reference/Elements/p) 元素，並擁有 [`<h2>`](/zh-TW/docs/Web/HTML/Reference/Elements/Heading_Elements) 的父元素。
- [Column combinator](/zh-TW/docs/Web/CSS/Reference/Selectors/Column_combinator) {{Experimental_Inline}}
  - : The `||` combinator selects nodes which belong to a column.
    **語法:** `A || B`
    **範例:** `col || td` will match all {{HTMLElement("td")}} elements that belong to the scope of the {{HTMLElement("col")}}.

## 偽選擇器

- [Pseudo classes](/zh-TW/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
  - : The `:` pseudo allow the selection of elements based on state information that is not contained in the document tree.
    **範例:** `a:visited` will match all {{HTMLElement("a")}} elements that have been visited by the user.
- [Pseudo elements](/zh-TW/docs/Web/CSS/Reference/Selectors/Pseudo-elements)
  - : The `::` pseudo represent entities that are not included in HTML.
    **範例:** `p::first-line` will match the first line of all {{HTMLElement("p")}} elements.

## 規範

{{Specifications}}

See the [pseudo-class](/zh-TW/docs/Web/CSS/Reference/Selectors/Pseudo-classes#specifications) and [pseudo-element](/zh-TW/docs/Web/CSS/Reference/Selectors/Pseudo-elements#Specifications) specification tables for details on those.

## 參見

- [CSS Specificity](/zh-TW/docs/Web/CSS/Guides/Cascade/Specificity)
