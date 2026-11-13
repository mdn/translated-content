---
title: <p>：段落元素
slug: Web/HTML/Reference/Elements/p
---

**`<p>`** [HTML](/zh-TW/docs/Web/HTML) 元素代表一個段落。在視覺媒體中，段落通常被表示為由空白行和/或首行縮排分隔的文本區塊，但 HTML 段落可以是任何相關內容的結構分組，例如圖片或表單字段。

段落是[區塊級元素](/zh-TW/docs/Glossary/Block-level_content)，特別是在解析了結束的 `</p>` 標記之前，如果解析了另一個區塊級元素，則段落會自動關閉。參見下面的「標籤省略」。

{{InteractiveExample("HTML Demo: &lt;p&gt;", "tabbed-standard")}}

```html interactive-example
<p>
  Geckos are a group of usually small, usually nocturnal lizards. They are found
  on every continent except Antarctica.
</p>

<p>
  Some species live in houses where they hunt insects attracted by artificial
  light.
</p>
```

```css interactive-example
p {
  margin: 10px 0;
  padding: 5px;
  border: 1px solid #999;
}
```

## 屬性

此元素僅包含[全域屬性](/zh-TW/docs/Web/HTML/Reference/Global_attributes)。

> [!NOTE]
> `<p>` 標籤上的 `align` 屬性已過時，不應使用。

## 範例

### HTML

```html
<p>
  This is the first paragraph of text. This is the first paragraph of text. This
  is the first paragraph of text. This is the first paragraph of text.
</p>
<p>
  This is the second paragraph. This is the second paragraph. This is the second
  paragraph. This is the second paragraph.
</p>
```

### 結果

{{EmbedLiveSample('範例')}}

## 設計段落樣式

預設情況下，瀏覽器使用單個空白行分隔段落。可以使用 {{glossary("CSS")}} 實現其他分隔方法，例如首行縮排：

### HTML

```html
<p>
  Separating paragraphs with blank lines is easiest for readers to scan, but
  they can also be separated by indenting their first lines. This is often used
  to take up less space, such as to save paper in print.
</p>

<p>
  Writing that is intended to be edited, such as school papers and rough drafts,
  uses both blank lines and indentation for separation. In finished works,
  combining both is considered redundant and amateurish.
</p>

<p>
  In very old writing, paragraphs were separated with a special character: ¶,
  the <i>pilcrow</i>. Nowadays, this is considered claustrophobic and hard to
  read.
</p>

<p>
  How hard to read? See for yourself:
  <button data-toggle-text="Oh no! Switch back!">
    Use pilcrow for paragraphs
  </button>
</p>
```

### CSS

```css
p {
  margin: 0;
  text-indent: 3ch;
}

p.pilcrow {
  text-indent: 0;
  display: inline;
}
p.pilcrow + p.pilcrow::before {
  content: " ¶ ";
}
```

### JavaScript

```js
document.querySelector("button").addEventListener("click", (event) => {
  document.querySelectorAll("p").forEach((paragraph) => {
    paragraph.classList.toggle("pilcrow");
  });

  [event.target.innerText, event.target.dataset.toggleText] = [
    event.target.dataset.toggleText,
    event.target.innerText,
  ];
});
```

### 結果

{{EmbedLiveSample('設計段落樣式')}}

## 可及性注意事項

將內容分成段落有助於使頁面更具可訪問性。屏幕閱讀器和其他輔助技術提供快捷方式，讓其用戶可以跳過到下一個或上一個段落，使他們可以像視覺用戶一樣快速瀏覽內容。

使用空的 `<p>` 元素添加段落之間的空格對於使用屏幕閱讀技術的人來說是有問題的。屏幕閱讀器可能會宣告該段的存在，但不會宣告其中包含的任何內容 — 因為沒有內容。這可能會讓使用屏幕閱讀器的人感到困惑和沮喪。

如果希望增加額外的空間，可以使用 {{glossary("CSS")}} 屬性，例如 {{cssxref("margin")}}：

```css
p {
  margin-bottom: 2em; /* 在段落之後增加白色空間 */
}
```

## 技術概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-TW/docs/Web/HTML/Guides/Content_categories"
          >內容類型</a
        >
      </th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#流內容"
          >流內容</a
        >、捫及內容。
      </td>
    </tr>
    <tr>
      <th scope="row">允許的內容</th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#段落型內容"
          >段落型內容</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">標籤省略</th>
      <td>
        必須有起始標籤。如果 {{HTMLElement("p")}} 元素的結束標籤之後緊接著的是
        {{HTMLElement("address")}}、{{HTMLElement("article")}}、{{HTMLElement("aside")}}、{{HTMLElement("blockquote")}}、{{HTMLElement("details")}}、{{HTMLElement("div")}}、{{HTMLElement("dl")}}、{{HTMLElement("fieldset")}}、{{HTMLElement("figcaption")}}、{{HTMLElement("figure")}}、{{HTMLElement("footer")}}、{{HTMLElement("form")}}、{{HTMLElement("Heading_Elements", "h1")}}、{{HTMLElement("Heading_Elements", "h2")}}、{{HTMLElement("Heading_Elements", "h3")}}、{{HTMLElement("Heading_Elements", "h4")}}、{{HTMLElement("Heading_Elements", "h5")}}、{{HTMLElement("Heading_Elements", "h6")}}、{{HTMLElement("header")}}、{{HTMLElement("hgroup")}}、{{HTMLElement("hr")}}、{{HTMLElement("main")}}、{{HTMLElement("menu")}}、{{HTMLElement("nav")}}、{{HTMLElement("ol")}}、{{HTMLElement("pre")}}、{{HTMLElement("search")}}、{{HTMLElement("section")}}、{{HTMLElement("table")}}、{{HTMLElement("ul")}} 或另一個 {{HTMLElement("p")}} 元素，或者如果父元素中沒有更多內容，且父元素不是 {{HTMLElement("a")}}、{{HTMLElement("audio")}}、{{HTMLElement("del")}}、{{HTMLElement("ins")}}、{{HTMLElement("map")}}、{{HTMLElement("noscript")}} 或 {{HTMLElement("video")}} 元素，或者是獨立的自定義元素，則可以省略結束標籤。
      </td>
    </tr>
    <tr>
      <th scope="row">允許的父元素</th>
      <td>
        任何接受<a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#流內容"
          >流內容</a
        >的元素。
      </td>
    </tr>
    <tr>
      <th scope="row">隱含 ARIA 角色</th>
      <td>
        <a href="/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles"
          >paragraph</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允許的 ARIA 角色</th>
      <td>任何</td>
    </tr>
    <tr>
      <th scope="row">DOM 介面</th>
      <td>{{domxref("HTMLParagraphElement")}}</td>
    </tr>
  </tbody>
</table>

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{HTMLElement("hr")}}
- {{HTMLElement("br")}}
