---
title: "@namespace"
slug: Web/CSS/Reference/At-rules/@namespace
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`@namespace`** 是一個用於定義要在 [CSS](/zh-TW/docs/Glossary/CSS) [樣式表](/zh-TW/docs/Web/API/StyleSheet)中使用的 XML [命名空間](/zh-TW/docs/Glossary/Namespace)的 [at 規則](/zh-TW/docs/Web/CSS/Guides/Syntax/At-rules)。

{{InteractiveExample("CSS Demo: @namespace", "tabbed-shorter")}}

```css interactive-example
@namespace svg url("http://www.w3.org/2000/svg");

a {
  color: orangered;
  text-decoration: underline dashed;
  font-weight: bold;
}

svg|a {
  fill: blueviolet;
  text-decoration: underline solid;
  text-transform: uppercase;
}
```

```html interactive-example
<p>
  <a href="#">這是一個普通的 HTML 連結</a>
</p>

<svg width="250px" viewBox="0 0 250 20" xmlns="http://www.w3.org/2000/svg">
  <a href="#">
    <text x="0" y="15">這是在 SVG 中建立的連結</text>
  </a>
</svg>
```

## 語法

```css
/* 預設命名空間 */
@namespace url(XML-namespace-URL);
@namespace "XML-namespace-URL";

/* 帶前綴的命名空間 */
@namespace prefix url(XML-namespace-URL);
@namespace prefix "XML-namespace-URL";
```

## 描述

定義的命名空間可用於限制[通用](/zh-TW/docs/Web/CSS/Reference/Selectors/Universal_selectors)、[型別](/zh-TW/docs/Web/CSS/Reference/Selectors/Type_selectors)和[屬性](/zh-TW/docs/Web/CSS/Reference/Selectors/Attribute_selectors)[選擇器](/zh-TW/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)，使其僅選取該命名空間內的元素。通常只有在處理包含多個命名空間的文件時（例如帶有行內 SVG 或 MathML 的 HTML，或混合多種詞彙的 XML），`@namespace` 規則才有用。

任何 `@namespace` 規則都必須遵循所有的 {{cssxref("@charset")}} 和 {{cssxref("@import")}} 規則，並位於樣式表中所有其他 at 規則和[樣式宣告](/zh-TW/docs/Web/API/CSSStyleDeclaration)之前。

`@namespace` 可用於為樣式表定義**預設命名空間**。當定義了預設命名空間時，所有的通用和型別選擇器（但不包括屬性選擇器，請參閱下方的註解）僅適用於該命名空間中的元素。

`@namespace` 規則也可用於定義**命名空間前綴**。當通用、型別或屬性選擇器帶有命名空間前綴時，該選擇器只有在元素或屬性的命名空間*和*名稱都匹配時才會匹配。

在 HTML 中，已知的[外部元素](https://html.spec.whatwg.org/multipage/syntax.html#foreign-elements)會被自動分配命名空間。這意味著即使文件中沒有任何 `xmlns` 屬性，HTML 元素的行為也會像它們在 XHTML 命名空間（`http://www.w3.org/1999/xhtml`）中一樣，而 [`<svg>`](/zh-TW/docs/Web/SVG/Reference/Element/svg) 和 [`<math>`](/zh-TW/docs/Web/MathML/Reference/Element/math) 元素將被分配到它們各自的命名空間（分別為 `http://www.w3.org/2000/svg` 和 `http://www.w3.org/1998/Math/MathML`）。

> [!NOTE]
> 在 XML 中，除非直接在屬性上定義了前綴（_例如_ `xlink:href`），否則該屬性沒有命名空間。換句話說，屬性不會繼承其所在元素的命名空間。為了匹配這種行為，CSS 中的預設命名空間不適用於屬性選擇器。

## 形式語法

{{csssyntax}}

## 範例

### 指定預設和帶前綴的命名空間

```css
@namespace url(http://www.w3.org/1999/xhtml);
@namespace svg url(http://www.w3.org/2000/svg);

/* 這會匹配所有的 XHTML <a> 元素，因為 XHTML 是預設的無前綴命名空間 */
a {
}

/* 這會匹配所有的 SVG <a> 元素 */
svg|a {
}

/* 這會匹配 XHTML 和 SVG 的 <a> 元素 */
*|a {
}
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [命名空間速成課程](/zh-TW/docs/Web/SVG/Guides/Namespaces_crash_course)
- [CSS at 規則函式](/zh-TW/docs/Web/CSS/Reference/At-rules/At-rule_functions)
