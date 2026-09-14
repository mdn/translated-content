---
title: font-variant-position
slug: Web/CSS/Reference/Properties/font-variant-position
---

The **`font-variant-position`** CSS property controls the use of alternate, smaller glyphs that are positioned as superscript or subscript.

The glyphs are positioned relative to the baseline of the font, which remains unchanged. These glyphs are typically used in {{HTMLElement("sub")}} and {{HTMLElement("sup")}} elements.

```css
/* Keyword values */
font-variant-position: normal;
font-variant-position: sub;
font-variant-position: super;

/* Global values */
font-variant-position: inherit;
font-variant-position: initial;
font-variant-position: unset;
```

When the usage of these alternate glyphs is activated, if one character in the run doesn't have such a typographically-enhanced glyph, the whole set of characters of the run is rendered using a fallback method, synthesizing these glyphs.

These alternate glyphs share the same em-box and the same baseline as the rest of the font. They are merely graphically enhanced, and have no effect on the line-height and other box characteristics.

{{cssinfo}}

## 语法

The `font-variant-position` property is specified as one of the keyword values listed below.

### 可选值

- `normal`
  - : Deactivates alternate superscript and subscript glyphs.
- `sub`
  - : Activates subscript alternate glyphs. If, in a given run, one such glyph is not available for a character, all the characters in the run are rendered using synthesized glyphs.
- `super`
  - : Activates superscript alternate glyphs. If, in a given run, one such glyph is not available for a character, all the characters in the run are rendered using synthesized glyphs.

### 形式语法

{{csssyntax}}

## 示例

### HTML

```html
<p class="normal">Normal!</p>
<p class="super">Super!</p>
<p class="sub">Sub!</p>
```

### CSS

```css
p {
  display: inline;
}

.normal {
  font-variant-position: normal;
}

.super {
  font-variant-position: super;
}

.sub {
  font-variant-position: sub;
}
```

### 结果

{{ EmbedLiveSample('示例') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
