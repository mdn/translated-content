---
title: text-decoration-skip
slug: Web/CSS/text-decoration-skip
---

{{CSSRef}}

The **`text-decoration-skip`** [CSS](/ru/docs/Web/CSS) property specifies what parts of the element's content any text decoration affecting the element must skip over. It controls all text decoration lines drawn by the element and also any text decoration lines drawn by its ancestors.

```css
/* Single keyword */
text-decoration-skip: none;
text-decoration-skip: objects;
text-decoration-skip: spaces;
text-decoration-skip: ink;
text-decoration-skip: edges;
text-decoration-skip: box-decoration;

/* Multiple keywords */
text-decoration-skip: objects spaces;
text-decoration-skip: ink edges box-decoration;

/* Global keywords */
text-decoration-skip: inherit;
text-decoration-skip: initial;
text-decoration-skip: unset;
```

{{cssinfo}}

## Синтаксис

### Значения

- `none`
  - : Nothing is skipped, i.e. text decoration is drawn for all text content and across atomic inline-level boxes.
- `objects`
  - : The entire margin box of the element is skipped if it is an atomic inline such as an image or inline-block.
- `spaces`
  - : All spacing is skipped, i.e. all [Unicode white space characters](http://www.unicode.org/reports/tr44/#White_Space) and all word separators, plus any adjacent {{cssxref("letter-spacing")}} or {{cssxref("word-spacing")}}.
- `ink`
  - : The text decoration is only drawn where it does not touch or closely approach a glyph. I.e. it is interrupted where it would otherwise cross over a glyph.![An example of "text-decoration-skip: ink;".](decoration-skip-ink.png)
- `edges`
  - : The start and end of the text decoration is placed slightly inward (e.g. by half of the line thickness) from the content edge of the decorating box. E.g. two underlined elements side-by-side do not appear to have a single underline. (This is important in Chinese, where underlining is a form of punctuation.)![An example of "text-decoration-skip: edges;".](decoration-skip-edges.png)
- `box-decoration`
  - : The text decoration is skipped over the box's margin, border and padding areas. This only has an effect on decorations imposed by an ancestor; a _decorating box_ never draws over its own box decoration.

### Формальный синтаксис

{{csssyntax}}

## Примеры

### HTML content

```html
<p>Hey, grab a cup of coffee!</p>
```

### CSS content

```css
p {
  margin: 0;
  font-size: 3em;
  text-decoration: underline;
  text-decoration-skip: ink;
}
```

### Результат

{{EmbedLiveSample("Примеры", "100%", 60)}}

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}
