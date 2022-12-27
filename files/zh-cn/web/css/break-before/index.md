---
title: break-before
slug: Web/CSS/break-before
---

{{CSSRef}}

The** `break-before`** [CSS](/zh-CN/docs/CSS) 属性定义页面，列或区域在生成的盒子之前应如何处理中断。如果没有生成的盒子，则忽略该属性。

```css
/* Generic break values */
break-before: auto;
break-before: avoid;

/* Page break values */
break-before: avoid-page;
break-before: page;
break-before: always;
break-before: left;
break-before: right;
break-before: recto;
break-before: verso;

/* Column break values */
break-before: avoid-column;
break-before: column;

/* Region break values */
break-before: avoid-region;
break-before: region;

/* Global values */
break-before: inherit;
break-before: initial;
break-before: unset;
```

Each possible break point (in other words, each element boundary) is affected by three properties: the {{cssxref("break-after")}} value of the previous element, the `break-before` value of the next element, and the {{cssxref("break-inside")}} value of the containing element.

To determine if a break must be done, the following rules are applied:

1. If any of the three concerned values is a _forced break value_ (`always`, `left`, `right`, `page`, `column`, or `region`), it has precedence. If more than one of them are such a break, the one of the element that appears the latest in the flow is taken (i.e., the `break-before` value has precedence over the `break-after` value, which itself has precedence over the `break-inside` value).
2. If any of the three concerned values is an _avoid break value_ (`avoid`, `avoid-page`, `avoid-region`, or `avoid-column`), no such break will be applied at that point.

Once forced breaks have been applied, soft breaks may be added if needed, but not on element boundaries that resolve in a corresponding avoid value.

{{cssinfo}}

## Syntax

The `break-before` property is specified as one of the keyword values from the list below.

### Values

#### General break values

- `auto`
  - : Allows, but does not force, any break (page, column, or region) to be inserted right before the principal box.
- `avoid`
  - : Avoids any break (page, column, or region) from being inserted right before the principal box.

#### Page break values

- `avoid-page`
  - : Avoids any page break right before the principal box.
- `page`
  - : Forces a page break right before the principal box.
- `always`
  - : Forces a page break right before the principal box. (This is an alias of `page`, and has been kept to facilitate the transition from {{cssxref("page-break-after")}}, which is a subset of this property.)
- `left`
  - : Forces one or two page breaks right before the principal box, whichever will make the next page into a left page.
- `right`
  - : Forces one or two page breaks right before the principal box, whichever will make the next page into a right page.
- `recto` {{experimental_inline}}
  - : Forces one or two page breaks right before the principal box, whichever will make the next page into a recto page. (A recto page is a right page in a left-to-right spread or a left page in a right-to-left spread.)
- `verso` {{experimental_inline}}
  - : Forces one or two page breaks right before the principal box, whichever will make the next page into a verso page. (A verso page is a left page in a left-to-right spread or a left right in a right-to-left spread.)

#### Column break values

- `avoid-column`
  - : Avoids any column break right before the principal box.
- `column`
  - : Forces a column break right before the principal box.

#### Region break values

- `avoid-region` {{experimental_inline}}
  - : Avoids any region break right before the principal box.
- `region` {{experimental_inline}}
  - : Forces a region break right before the principal box.

### Formal syntax

{{csssyntax}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
