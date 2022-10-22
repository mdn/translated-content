---
title: page-break-inside
slug: Web/CSS/page-break-inside
---

{{CSSRef}}

**`page-break-inside`** CSS 属性调整当前元素内的分页符。

```css
/* Keyword values */
page-break-inside: auto;
page-break-inside: avoid;

/* Global values */
page-break-inside: inherit;
page-break-inside: initial;
page-break-inside: unset;
```

{{cssinfo}}

## Syntax

### Values

- `auto`
  - : Initial value. Automatic page breaks (neither forced nor forbidden).
- `avoid`
  - : Avoid page breaks inside the element.

### Formal syntax

{{csssyntax}}

## Example

### HTML

```html
<div class="page">
  <p>This is the first paragraph.</p>
  <section class="list">
    <span>A list</span>
    <ol>
      <li>one</li>
<!--       <li>two</li> -->
    </ol>
  </section>
  <ul>
    <li>one</li>
<!--     <li>two</li> -->
  </ul>
  <p>This is the second paragraph.</p>
  <p>This is the third paragraph, it contains more text.</p>
  <p>This is the fourth paragraph. It has a little bit more text than the third one.</p>
</div>
```

### CSS

```css
.page {
  background-color: #8cffa0;
  height: 90px;
  width: 200px;
  columns: 1;
  column-width: 100px;
}

.list, ol, ul, p {
  break-inside: avoid;
}

p {
  background-color: #8ca0ff;
}

ol, ul, .list {
  margin: 0.5em 0;
  display: block;
  background-color: orange;
}

p:first-child {
  margin-top: 0;
}
```

### Result

{{EmbedLiveSample("Example", 400, 160)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`page-break-after`](/zh-CN/docs/CSS/page-break-after), [`page-break-before`](/zh-CN/docs/CSS/page-break-before)
- [`orphans`](/zh-CN/docs/CSS/orphans), [`widows`](/zh-CN/docs/CSS/widows)
