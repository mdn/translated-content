---
title: 區塊級元素
slug: Glossary/Block-level_content
---

HTML（超文字標記語言, **Hypertext Markup Language**）元素通常為『區塊級』元素或是[『行內級』元素](/zh-TW/docs/Glossary/Inline-level_content)。一個區塊級元素會藉由建立『區塊』的動作，完全佔滿其父元素（容器）的空間。本文將為你說明其意涵.

瀏覽器預設以在元素前後換行的方式，表現區塊級元素。視覺上會呈現為一排縱向堆疊的方塊。

> [!NOTE]
> 區塊級元素必定以換行方式，取得完整寬度的空間（向左右兩側儘可能地延伸出去）。

以下範例將展示區塊級元素的影響：

## 區塊級元素

### HTML

```html
<p>
  This paragraph is a block-level element; its background has been colored to
  display the paragraph's parent element.
</p>
```

### CSS

```css
p {
  background-color: #8abb55;
}
```

{{ EmbedLiveSample('區塊級元素') }}

## 用法

- 區塊級元素只能出現於 {{ HTMLElement("body") }} 元素之內。

## 區塊級 vs. 行內元素

There are a couple of key differences between block-level elements and inline elements:

- Formatting
  - : By default, block-level elements begin on new lines, but inline elements can start anywhere in a line.
- Content model
  - : Generally, block-level elements may contain inline elements and other block-level elements. Inherent in this structural distinction is the idea that block elements create "larger" structures than inline elements.

The distinction of block-level vs. inline elements is used in HTML specifications up to 4.01. In HTML5, this binary distinction is replaced with a more complex set of [content categories](/zh-TW/docs/Web/HTML/Guides/Content_categories). The "block-level" category roughly corresponds to the category of [flow content](/zh-TW/docs/Web/HTML/Guides/Content_categories#flow_content) in HTML5, while "inline" corresponds to [phrasing content](/zh-TW/docs/Web/HTML/Guides/Content_categories#phrasing_content), but there are additional categories.

## 相關元素

The following is a complete list of all HTML block level elements (although "block-level" is not technically defined for elements that are new in HTML5).

- {{ HTMLElement("address") }}
  - : Contact information.
- {{ HTMLElement("article") }}
  - : Article content.
- {{ HTMLElement("aside") }}
  - : Aside content.
- {{ HTMLElement("blockquote") }}
  - : Long ("block") quotation.
- {{ HTMLElement("dialog") }}
  - : Dialog box.
- {{ HTMLElement("dd") }}
  - : Describes a term in a description list.
- {{ HTMLElement("div") }}
  - : Document division.
- {{ HTMLElement("dl") }}
  - : Description list.
- {{ HTMLElement("dt") }}
  - : Description list term.
- {{ HTMLElement("fieldset") }}
  - : Field set label.
- {{ HTMLElement("figcaption") }}
  - : Figure caption.
- {{ HTMLElement("figure") }}
  - : Groups media content with a caption (see {{ HTMLElement("figcaption") }}).
- {{ HTMLElement("footer") }}
  - : Section or page footer.
- {{ HTMLElement("form") }}
  - : Input form.
- {{ HTMLElement("h1") }}, {{ HTMLElement("h2") }}, {{ HTMLElement("h3") }}, {{ HTMLElement("h4") }}, {{ HTMLElement("h5") }}, {{ HTMLElement("h6") }}
  - : Heading levels 1-6.
- {{ HTMLElement("header") }}
  - : Section or page header.
- {{ HTMLElement("hgroup") }}
  - : Groups header information.
- {{ HTMLElement("hr") }}
  - : Horizontal rule (dividing line).
- {{ HTMLElement("li") }}
  - : List item.
- {{ HTMLElement("main") }}
  - : Contains the central content unique to this document.
- {{ HTMLElement("nav") }}
  - : Contains navigation links.
- {{ HTMLElement("ol") }}
  - : Ordered list.
- {{ HTMLElement("p") }}
  - : Paragraph.
- {{ HTMLElement("pre") }}
  - : Preformatted text.
- {{ HTMLElement("section") }}
  - : Section of a web page.
- {{ HTMLElement("table") }}
  - : Table.
- {{ HTMLElement("ul") }}
  - : Unordered list.

### 參閱

- [行內級元素](/zh-TW/docs/Glossary/Inline-level_content)
- [區塊格式化上下文](/zh-TW/docs/Web/CSS/Guides/Display/Block_formatting_context)
- {{cssxref("display")}}
- [`writing-mode`](/zh-TW/docs/Web/CSS/Reference/Properties/writing-mode)
