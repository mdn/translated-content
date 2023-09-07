---
title: ":lang()"
slug: Web/CSS/:lang
---

{{CSSRef}}

**`:lang()`** 是一種 [CSS](/zh-TW/docs/Web/CSS) [偽類（pseudo-class）](/zh-TW/docs/Web/CSS/Pseudo-classes)。它會根據括號中指定的語系，來選擇使用的元素。

> **備註：** 在 HTML 中，語言是通過 [`lang`](/zh-TW/docs/Web/HTML/Global_attributes#lang) 屬性和 {{HTMLElement("meta")}} 元素的組合來決定的, 也可能是通過協議的信息來確定 (例如 HTTP 表頭). 對於其他文檔類型，也可能存在其他用於確定語言的方法。

## 語法

### 語法格式

```css-nolint
:lang(<language-code>) {
  /* ... */
}
```

### 參數

- `<language-code>`
  - : {{cssxref("&lt;string&gt;")}} 代表你要指定的語言。可接受的值為 [HTML](/zh-TW/docs/Web/HTML) 規範中指定的值。

## 範例

在此例中，`:lang()` 偽類 會依據 「引用元素 quote」 ({{htmlElement("q")}}) 的父層來選擇 [子組合子 ( child combinators )](/zh-TW/docs/Web/CSS/Child_selectors)。 請注意，此處演示的方法並不是唯一的，並且最好的方式，是依據文檔類型來確定。還要注意的是， {{glossary("Unicode")}} 的值，有明確指定到那些你要使用的字符。

### HTML

```html
<div lang="en">
  <q>This English quote has a <q>nested</q> quote inside.</q>
</div>
<div lang="fr">
  <q>This French quote has a <q>nested</q> quote inside.</q>
</div>
<div lang="de">
  <q>This German quote has a <q>nested</q> quote inside.</q>
</div>
```

### CSS

```css
:lang(en) > q {
  quotes: "\201C" "\201D" "\2018" "\2019";
}
:lang(fr) > q {
  quotes: "« " " »";
}
:lang(de) > q {
  quotes: "»" "«" "\2039" "\203A";
}
```

### 結果

{{EmbedLiveSample('範例', 350)}}

## 技術規格

{{Specifications}}

## 瀏覽器兼容性

{{Compat}}

## 其他參考

- 語言相關偽類： {{cssxref(":lang")}}, {{cssxref(":dir")}}
- HTML [`lang`](/zh-TW/docs/Web/HTML/Global_attributes#lang) 屬性
- [BCP 47 - Tags for Identifying Languages (BCP 47 - 識別語言的標籤)](https://tools.ietf.org/html/bcp47)
