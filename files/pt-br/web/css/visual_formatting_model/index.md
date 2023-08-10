---
title: Modelo de formatação visual
slug: Web/CSS/Visual_formatting_model
---

{{CSSRef}}

The CSS _visual formatting model_ is an algorithm that processes a document and displays it on visual media. This model is a basic concept of CSS.

The visual formatting model transforms each element of the document and generates zero, one, or several boxes that conform to the CSS box model. The layout of each box is defined by:

- The dimensions of the box: precisely defined or constrained, or not.
- The type of box: inline, inline-level, atomic inline-level, block.
- The [positioning scheme](/pt-BR/docs/CSS/Box_positioning_scheme): in the normal flow, a float, or absolute positioning.
- The other elements in the tree: its children and neighbors.
- The {{glossary("viewport")}} size and position.
- Intrinsic dimensions of contained images.
- Other external information.

The model renders a box, in relation to the edge of its _containing block_. Usually, a box establishes the containing block for its descendants. However, a box is not constrained by its containing block; when a box's layout goes outside the containing block, it is said to _overflow_.

## Gerando um Box

Box generation is the part of the CSS visual formatting model that creates boxes from the document's elements. Generated boxes are of different types, which affect how the visual formatting is done. The type of the box generated depends on the value of the {{ cssxref("display") }} CSS property.

### Block-level elements and block boxes

An element is said to be _block-level_ when the calculated value of its {{ cssxref("display") }} CSS property is: `block`, `list-item`, or `table`. A block-level element is visually formatted as a block (e.g., paragraph), intended to be vertically stacked.

Each block-level box participates in a [block formatting context](/pt-BR/docs/CSS/block_formatting_context). Each block-level element generates at least one block-level box, called the _principal block-level_ _box_. Some elements, like a list-item element, generating further boxes to handle bullets and other typographic elements introducing the list item, may generate more boxes. Most generate only the principal, block-level box.

The principal block-level box contains descendant-generated boxes and generated content. It is also the box involved in the [positioning scheme](/pt-BR/docs/CSS/Positioning_scheme).

![venn_blocks.png](/@api/deki/files/5995/=venn_blocks.png)A block-level box may also be a block container box. A _block container box_ is a box that contains only other block-level boxes, or creates an [inline formatting context](/pt-BR/docs/CSS/Inline_formatting_context), thus containing only inline boxes.

It is important to note that the notions of a block-level box and block container box are disjoined. The first, describes how the box behaves with its parents and sibling. The second, how it interacts with its descendants. Some block-level boxes, like tables, aren't block container boxes. Reciprocally, some block container boxes, like non-replaced inline blocks and non-replaced table cells, aren't block-level boxes.

Block-level boxes that also are block container boxes are called _block boxes_.

#### Anonymous block boxes

In some cases, the visual formatting algorithm needs to add supplementary boxes. Because CSS selectors cannot style or name these boxes, they are called _anonymous boxes_.

Because selectors do not work with anonymous boxes, they cannot be styled via a stylesheet. This means that all inheritable CSS properties have the `inherit` value, and all non-inheritable CSS properties, have the `initial` value.

Block containing boxes contain only inline-level boxes, or only block-level boxes. But often the document contains a mix of both. In that case, anonymous block boxes are created around adjacent inline-level boxes.

### Exemplo

If we take the following HTML code (with default styling applied to it, that is {{ HTMLElement("div") }} and {{ HTMLElement("p") }} elements have `display:block` :

```
<div>Some inline text <p>followed by a paragraph</p> followed by more inline text.</div>
```

Two anonymous block boxes are created: one for the text before the paragraph (`Some inline text`), and another for the text after it (`followed by more inline text`). This builds the following block structure:

![anonymous_block-level_boxes.png](/@api/deki/files/5996/=anonymous_block-level_boxes.png)

Leading to:

```
Some inline text
followed by a paragraph
followed by more inline text.
```

Unlike the {{ HTMLElement("p") }} element's box, Web developers cannot control the style of the two anonymous boxes. Inheritable properties take the value from the {{ HTMLElement("div") }}'s property value, like {{ cssxref("color") }} to define the color of the text, and set the others to the `initial` value. For example, they won't have a specific {{ cssxref("background-color") }}, it is always transparent, the `initial` value for that property, and thus the background of the `<div>` is visible. A specific background color can be applied to the `<p>` box. Similarly, the two anonymous boxes always use the same color for their text.

Another case that leads to the creation of anonymous block boxes, is an inline box that contains one or several block boxes. In that case, the box containing the block box is split into two inline boxes: one before, and one after the block box. All the inline boxes before the block box are then enclosed into an _anonymous block box_, so are the inline boxes following the block box. Therefore, the block box becomes the sibling of the two anonymous block boxes containing the inline elements.

If there are several block boxes, without inline content in-between, the anonymous block boxes are created before, and after the set of boxes.

### Exemplo

If we take the following HTML code, with {{ HTMLElement("p") }} have `display:inline` and {{ HTMLElement("span") }} have `display:block` :

```
<p>Some <em>inline</em> text <span>followed by a paragraph</span> followed by more inline text.</p>
```

Two anonymous block boxes are created, one for the text before the span Element (`Some inline text`) and one for the text after it (`followed by more inline text`), which gives the following block structure:

![](anonymous_block_box_break.png)

Which leads to:

```
Some inline text
followed by a paragraph
followed by more inline text.
```

### Inline-level elements and inline boxes

An element is said to be _inline-level_ when the calculated value of its {{ cssxref("display") }} CSS property is: `inline`, `inline-block` or `inline-table`. Visually, it doesn't constitute blocks of contents, but is distributed in lines with other inline-level content. Typically, the content of a paragraph with different formatting, like emphasis or images, is made from inline-level elements.

![venn_inlines.png](/@api/deki/files/6008/=venn_inlines.png)

> **Warning:** This diagram uses outdated terminology; see note below. Besides that, it is incorrect because the yellow ellipsis on the right side is per definition either identical to the one on the left side, or bigger than that (it could be a mathematical superset), because the spec says "Inline-level elements generate inline-level boxes, which are boxes that participate in an inline formatting context", see CSS 2.2, chapter 9.2.2

Inline-level elements generate _inline-level boxes_ that are defined as boxes participating to an [inline formatting context](/pt-BR/docs/CSS/Inline_formatting_context). _Inline boxes_ are both inline-level boxes and boxes, whose contents participate in their container's inline formatting context. This is the case, for example, for all non-replaced boxes with `display:inline`. Inline-level boxes, whose contents do not participate in an inline formatting context, are called _atomic inline-level boxes_. These boxes, generated by replaced inline-level elements or by elements with a calculated {{ cssxref("display") }} value of `inline-block` or `inline-table`, are never split into several boxes, as is possible with inline boxes.

> **Nota:** Initially, atomic inline-level boxes were called atomic inline boxes. This was unfortunate, as they are **not** inline boxes. This was corrected in an erratum to the spec. Nevertheless, you can harmlessly read atomic inline-level box each time you meet atomic inline box in the literature, as this is only a name change.

> **Nota:** Atomic inline boxes cannot be split into several lines in an inline formatting context.
>
> ```css
> span {
>   display: inline; /* default value*/
> }
> ```
>
> ```html
> <div style="width:20em;">
>   The text in the span <span>can be split in several lines as it</span> is an
>   inline box.
> </div>
> ```
>
> which leads to:The text in the span can be split into several lines as it
> is an inline box.
>
> ```css
> span {
>   display: inline-block;
> }
> ```
>
> ```html
> <div style="width:20em;">
>   The text in the span <span>cannot be split in several lines as it</span> is
>   an inline-block box.
> </div>
> ```
>
> which leads to:The text in the span cannot be split into several lines as
> it is an inline-block box.

#### Anonymous inline boxes

As for block boxes, there are a few cases where inline boxes are created automatically by the CSS engine. These inline boxes are also anonymous as they cannot be named by selectors; they inherit the value of all inheritable properties, setting it to `initial` for all others.

The most common case where an anonymous inline box is created, is when some text is found as a direct child of a block box creating an inline formatting context. In that case, this text is included in the largest possible anonymous inline box. Also, space content, which would be removed by the behavior set in the {{ cssxref("white-space") }} CSS property, does not generate anonymous inline boxes because they would end empty.

> **Nota:** Example TBD

### Outros tipos de boxes

#### Line boxes

_Line boxes_ are generated by the [inline formatting context](/pt-BR/docs/CSS/Inline_formatting_context) to represent a line of text. Inside a block box, a line box extends from one border of the box to the other. When there are [floats](/pt-BR/docs/CSS/float), the line box starts at the rightmost border of the left floats and ends at the leftmost border of the right floats.

These boxes are technical, and Web authors do not usually have to bother with them.

#### Run-in boxes

_Run-in boxes_, defined using `display:run-in`, are boxes that are either block boxes or inline boxes, depending on the type of the following box. They can be used to create a title that runs inside its first paragraph when possible.

> **Nota:** Run-in boxes were removed from the CSS 2.1 standard, as they were insufficiently specified to allow for interoperable implementation. They may reappear in CSS3, but meanwhile, are considered _experimental_. They should not be used in production.

#### Model-induced boxes

Besides the inline and block formatting contexts, CSS specifies several additional _content models_ that may be applied to elements. These additional models, used to describe specific layouts, may define additional box types:

- The [table content model](/pt-BR/docs/CSS/table-layout) may create a _table wrapper box_ and a _table box_, but also specific boxes like _caption boxes_.
- The [multi-column content model](/pt-BR/docs/CSS/Using_CSS_multi-column_layouts) may create _column boxes_ between the container box and the content*.*
- The experimental grid, or flex-box content models, also create additional types of boxes.

#### Positioning schemes

Once boxes are generated, the CSS engine needs to position them on the layout. To do that, it uses one of the following algorithms:

- The _normal flow_ - positions each box one after the other.
- The _floats_ algorithm - extracts the box from the normal flow and put it to the side of the containing box.
- The _absolute positioning_ scheme - positions a box within an absolute coordinate system that is established by its containing element. An absolutely positioned element can cover other elements.

### Normal flow

In the _normal flow_, boxes are laid out one after the other. In a block formatting context, they are laid out vertically; in an inline formatting context, they are laid out horizontally. The normal flow is triggered when the CSS {{ cssxref("position") }} is set to the value `static` or `relative`, and if the CSS {{ cssxref("float") }} is set to the value `none`.

### Exemplo

> **Nota:** When in the normal flow, in a block formatting context, boxes are laid vertically one after the other out:
>
> \[image]
>
> When in the normal flow, in an inline formatting context, boxes are laid horizontally one after the other out:
>
> \[image]

> **Nota:** There are two sub-cases of the normal flow: static positioning and relative positioning:

- In _static positioning_, triggered by the value `static` of the {{ cssxref("position") }} property, the boxes are drawn at the exact position defined by the normal flow layout.
  \[image]
- In _relative_ _positioning_, triggered by the value `relative` of the {{ cssxref("position") }} property, the boxes are drawn with an offset defined by the {{ cssxref("top") }}, {{ cssxref("bottom") }}, {{ cssxref("left") }} and {{ cssxref("right") }} CSS properties.

### Floats

In the _float positioning scheme_, specific boxes (called _floating boxes_ or simply _floats)_ are positioned at the beginning, or end of the current line. This leads to the property that text (and more generally anything within the normal flow) flows along the edge of the floating boxes, except if told differently by the {{ cssxref("clear") }} CSS property.

The float positioning scheme for a box is selected, by setting the {{ cssxref("float") }} CSS property on that box to a value different than `none` and {{ cssxref("position") }} to `static` or `relative`. If {{ cssxref("float") }} is set to `left`, the float is positioned at the beginning of the line box. If set to `right`, the float is positioned at the end of the line box. In either case, the line box is shrunk to fit alongside the float.

\[image]

### Absolute positioning

In the _absolute positioning scheme_, boxes are entirely removed from the flow and don't interact with it at all. They are positioned relative to their [containing block](/pt-BR/docs/Web/CSS/All_About_The_Containing_Block) using the {{ cssxref("top") }}, {{ cssxref("bottom") }}, {{ cssxref("left") }} and {{ cssxref("right") }} CSS properties.

An element is absolutely positioned if the {{ cssxref("position") }} is set to `absolute` or `fixed`.

With a _fixed positioned element_, the containing block is the viewport. The position of the element is absolute within the viewport. Scrolling does not change the position of the element.

## Veja Também

- [CSS Reference](/pt-BR/docs/Web/CSS/CSS_Reference)
