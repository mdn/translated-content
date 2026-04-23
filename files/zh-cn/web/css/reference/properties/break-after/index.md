---
title: break-after
slug: Web/CSS/Reference/Properties/break-after
---

**`break-after`** [CSS](/zh-CN/docs/Web/CSS) 属性描述在生成的盒子之后的页面，列或区域中断行为（换句话说，如何以及是否中断）。如果没有生成的盒子，则该属性将被忽略。

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

每个潜在的断点（亦即每个元素的边界）都受到三个属性的影响：上一个元素的 `break-after` 值、下一个元素的 `break-before` 值以及当前元素自身的 `break-inside` 值。

以下规则被用于判断中断是否必要：

1. 如果上述三个属性中，如果任何一个的值属于“强制中断”值，那么这个属性将被优先应用，此处所称“强制中断”的值为： `always`、 `left`、 `right`、 `page`、 `column` 和 `region`。If several of the concerned values is such a break, the one of the element that appears the latest in the flow is taken (that is the {{cssxref("break-before")}} value has precedence over the `break-after` value, which itself has precedence over the {{cssxref("break-inside")}} value).
2. If any of the three concerned values is an _avoid break value_, that is `avoid`, `avoid-page`, `avoid-region`, `avoid-column`, no such break will be applied at that point.

Once forced breaks have been applied, soft breaks may be added if needed, but not on element boundaries that resolve in a corresponding `avoid` value.

{{cssinfo}}

## 语法

The `break-after` property is specified as one of the keyword values from the list below.

### 属性值

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

### 形式化语法

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

> [!NOTE]
> The `always` value of `page-break-*` was implemented by browsers as a page break, and not as a column break. Therefore the aliasing is to `page`, rather than the `always` value in the Level 4 spec.

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
