---
title: gap (grid-gap)
slug: Web/CSS/gap
translation_of: Web/CSS/gap
---
Свойство **`gap`** [CSS](/ru/docs/Web/CSS) задаёт отступы ({{glossary("gutters")}}) между столбцами и строками, а не вдоль края контейнера сетки. Является сокращением для свойств {{CSSxRef("row-gap")}} и {{CSSxRef("column-gap")}}. {{CSSRef}}

The **`gap`** [CSS](/ru/docs/Web/CSS) property sets the gaps ({{glossary("gutters")}}) between rows and columns. It is a [shorthand](/ru/docs/Web/CSS/Shorthand_properties) for {{CSSxRef("row-gap")}} and {{CSSxRef("column-gap")}}.

{{EmbedInteractiveExample("pages/css/gap.html")}}

> **Примечание:** [CSS Grid Layout](/ru/docs/Web/CSS/CSS_Grid_Layout) initially defined the `grid-gap` property. This prefixed property is being replaced by `gap`. However, in order to support browsers that implemented `grid-gap` and not `gap` for grid, you will need to use the prefixed property as in the interactive example above.

## Syntax

```css
/* One <length> value */
gap: 20px;
gap: 1em;
gap: 3vmin;
gap: 0.5cm;

/* One <percentage> value */
gap: 16%;
gap: 100%;

/* Two <length> values */
gap: 20px 10px;
gap: 1em 0.5em;
gap: 3vmin 2vmax;
gap: 0.5cm 2mm;

/* One or two <percentage> values */
gap: 16% 100%;
gap: 21px 82%;

/* calc() values */
gap: calc(10% + 20px);
gap: calc(20px + 10%) calc(10% - 5px);

/* Global values */
gap: inherit;
gap: initial;
gap: unset;
```

This property is specified as a value for `<'row-gap'>` followed optionally by a value for `<'column-gap'>`. If `<'column-gap'>` is omitted, it’s set to the same value as `<'row-gap'>`.

`<'row-gap'>` and `<'column-gap'>` are each specified as a `<length>` or a `<percentage>`.

### Values

- {{CSSxRef("&lt;length&gt;")}}
  - : Is the width of the gutter separating the grid lines.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : Is the width of the gutter separating the grid lines, relative to the dimension of the element.

### Formal syntax

{{CSSSyntax}}

## Examples

### Flex layout

#### HTML

```html
<div id="flexbox">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### CSS

```css
#flexbox {
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  gap: 20px 5px;
}

#flexbox > div {
  border: 1px solid green;
  background-color: lime;
  flex: 1 1 auto;
  width: 100px;
  height: 50px;

}
```

#### Result

{{EmbedLiveSample("Flex_layout", "auto", "120px")}}

### Grid layout

#### HTML

```html
<div id="grid">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### CSS

```css hidden
#grid {
  grid-gap: 20px 5px;
}
```

```css
#grid {
  display: grid;
  height: 200px;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  gap: 20px 5px;
}

#grid > div {
  border: 1px solid green;
  background-color: lime;
}
```

#### Result

{{EmbedLiveSample("Grid_layout", "auto", "120px")}}

### Multi-column layout

#### HTML

```html
<p class="content-box">
  This is some multi-column text with a 40px column
  gap created with the CSS <code>gap</code> property.
  Don't you think that's fun and exciting? I sure do!
</p>
```

#### CSS

```css
.content-box {
  column-count: 3;
  gap: 40px;
}
```

#### Result

{{EmbedLiveSample("Multi-column_layout", "auto", "120px")}}

## Specifications

| Specification                                                                | Status                                   | Comment            |
| ---------------------------------------------------------------------------- | ---------------------------------------- | ------------------ |
| {{SpecName("CSS3 Box Alignment", "#propdef-gap", "gap")}} | {{Spec2("CSS3 Box Alignment")}} | Initial definition |

{{CSSInfo}}

## Browser compatibility

### Support in Flex layout

{{Compat}}

### Support in Grid layout

{{Compat("css.properties.gap.grid_context")}}

### Support in Multi-column layout

{{Compat("css.properties.gap.multicol_context")}}

## See also

- Related CSS properties: {{CSSxRef("row-gap")}}, {{CSSxRef("column-gap")}}
- Grid Layout Guide: _[Basic concepts of grid layout - Gutters](/ru/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout#Gutters)_
