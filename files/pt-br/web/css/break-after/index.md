---
title: break-after
slug: Web/CSS/break-after
---

{{CSSRef}}

A propriedade **`break-after`** do [CSS](/pt-BR/docs/Web/CSS) configura como uma quebra de página, coluna ou região deve se comportar após renderizar um elemento. Se nenhum elemento foi renderizado, a propriedade é ignorada.

```css
/* Generic break values */
break-after: auto;
break-after: avoid;
break-after: always;
break-after: all;

/* Page break values */
break-after: avoid-page;
break-after: page;
break-after: left;
break-after: right;
break-after: recto;
break-after: verso;

/* Column break values */
break-after: avoid-column;
break-after: column;

/* Region break values */
break-after: avoid-region;
break-after: region;

/* Global values */
break-after: inherit;
break-after: initial;
break-after: unset;
```

Each possible break point (in other words, each element boundary) is affected by three properties: the `break-after` value of the previous element, the {{cssxref("break-before")}} value of the next element, and the {{cssxref("break-inside")}} value of the containing element.

To determine if a break must be done, the following rules are applied:

1. If any of the three concerned values is a _forced break value_ (`always`, `left`, `right`, `page`, `column`, or `region`), it has precedence. If more than one of them are such a break, the one of the element that appears the latest in the flow is taken (i.e., the `break-before` value has precedence over the `break-after` value, which itself has precedence over the `break-inside` value).
2. If any of the three concerned values is an _avoid break value_ (`avoid`, `avoid-page`, `avoid-region`, or `avoid-column`), no such break will be applied at that point.

Once forced breaks have been applied, soft breaks may be added if needed, but not on element boundaries that resolve in a corresponding `avoid` value.

{{cssinfo}}

## Syntax

The `break-after` property is specified as one of the keyword values from the list below.

### Values

#### Generic break values

- `auto`
  - : Allows, but does not force, any break (page, column, or region) to be inserted right after the principal box.
- `avoid`
  - : Avoids any break (page, column, or region) from being inserted right after the principal box.
- `always` {{experimental_inline}}
  - : Forces a page break right after the principal box. The type of this break is that of the immediately-containing fragmentation context. If we are inside a multicol container then it would force a column break, inside paged media (but not inside a multicol container) a page break.
- `all` {{experimental_inline}}
  - : Forces a page break right after the principal box. Breaking through all possible fragmentation contexts. So a break inside a multicol container, which was inside a page container would force a column and page break.

#### Page break values

- `avoid-page`
  - : Avoids any page break right after the principal box.
- `page`
  - : Forces a page break right after the principal box.
- `left`
  - : Forces one or two page breaks right after the principal box, whichever will make the next page into a left page.
- `right`
  - : Forces one or two page breaks right after the principal box, whichever will make the next page into a right page.
- `recto` {{experimental_inline}}
  - : Forces one or two page breaks right after the principal box, whichever will make the next page into a recto page. (A recto page is a right page in a left-to-right spread or a left page in a right-to-left spread.)
- `verso` {{experimental_inline}}
  - : Forces one or two page breaks right after the principal box, whichever will make the next page into a verso page. (A verso page is a left page in a left-to-right spread or a left right in a right-to-left spread.)

#### Column break values

- `avoid-column`
  - : Avoids any column break right after the principal box.
- `column`
  - : Forces a column break right after the principal box.

#### Region break values

- `avoid-region` {{experimental_inline}}
  - : Avoids any region break right after the principal box.
- `region` {{experimental_inline}}
  - : Forces a region break right after the principal box.

### Formal syntax

{{csssyntax}}

## Page break aliases

For compatibility reasons, the legacy {{cssxref("page-break-after")}} property should be treated by browsers as an alias of `break-after`. This ensures that sites using `page-break-after` continue to work as designed. A subset of values should be aliased as follows:

| page-break-after | break-after |
| ---------------- | ----------- |
| `auto`           | `auto`      |
| `left`           | `left`      |
| `right`          | `right`     |
| `avoid`          | `avoid`     |
| `always`         | `page`      |

> **Nota:** The `always` value of `page-break-*` was implemented by browsers as a page break, and not as a column break. Therefore the aliasing is to `page`, rather than the `always` value in the Level 4 spec.

## Specifications

| Specification                                                                          | Status                          | Comment                                                                                                                                                                           |
| -------------------------------------------------------------------------------------- | ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS3 Fragmentation', '#break-between', 'break-after')}}                    | {{Spec2('CSS3 Fragmentation')}} | Adds the `recto` and `verso` keywords. Changes the media type of this property from `paged` to {{xref_cssvisual}}. Defines the breaking algorithm with different kinds of breaks. |
| {{SpecName('CSS3 Regions', '#region-flow-break', 'break-after')}}                      | {{Spec2('CSS3 Regions')}}       | Extends the property to handle region breaks. Adds the `avoid-region` and `region` keywords.                                                                                      |
| {{SpecName('CSS3 Multicol', '#break-before-break-after-break-inside', 'break-after')}} | {{Spec2('CSS3 Multicol')}}      | Initial definition. Extends the CSS 2.1 {{cssxref("page-break-after")}} property to handle both page and column breaks.                                                           |

## Browser compatibility

{{Compat}}
