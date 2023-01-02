---
title: clip
slug: Web/CSS/clip
---

{{CSSRef}}{{deprecated_header}}

## 總結

**`這個 clip`** [CSS](/zh-TW/docs/Web/CSS) 屬性用來定義元素的哪一個部分是可見的. `clip` 屬性只能被賦予在絕對位置的元素(element)上, 像是帶有這些的 CSS 屬性的元素 {{cssxref("position","position:absolute")}} or {{cssxref("position","position:fixed")}}.

> **警告：** 這個屬性被遺棄了. 請改用 {{cssxref("clip-path")}} .

{{cssinfo}}

## Syntax

```css
/* Keyword value */
clip: auto;

/* <shape> values */
clip: rect(1px 10em 3rem 2ch);
clip: rect(1px, 10em, 3rem, 2ch);

/* Global values */
clip: inherit;
clip: initial;
clip: unset;
```

### Values

- `<shape>`
  - : A rectangular {{cssxref("&lt;shape&gt;")}} of the form `rect(<top>, <right>, <bottom>, <left>)` or of the form `rect(<top> <right> <bottom> <left>)` (which is a more backwards compatible syntax) `<top>` and `<bottom>` specify offsets from the _inside top border edge_ of the box, and `<right>`, and `<left>` specify offsets from the _inside left border edge_ of the box — that is, the extent of the padding box.`<top>`, `<right>`, `<bottom>`, and `<left>` may either have a {{cssxref("&lt;length&gt;")}} value or `auto`. If any side's value is `auto`, the element is clipped to that side's _inside border edge_.
- `auto`
  - : The element does not clip (default value). Note that this is distinct from `rect(auto, auto, auto, auto)`, which does clip to the inside border edges of the element.

### Formal syntax

{{csssyntax}}

## Examples

### HTML

```html
<p class="dotted-border">
  <img
    src="macarons.png"
    title="Original graphic" />
  <img
    id="top-left"
    src="macarons.png"
    title="Graphic clipped to upper left" />
  <img
    id="middle"
    src="macarons.png"
    title="Graphic clipped towards middle" />
  <img
    id="bottom-right"
    src="macarons.png"
    title="Graphic clipped to bottom right" />
</p>
```

### CSS

```css
.dotted-border {
  border: dotted;
  position: relative;
  width: 390px;
  height: 400px;
}

#top-left,
#middle,
#bottom-right {
  position: absolute;
  top: 0;
}

#top-left {
  left: 400px;
  clip: rect(0, 130px, 90px, 0);
}

#middle {
  left: 270px;
  clip: rect(100px, 260px, 190px, 130px);
}

#bottom-right {
  left: 140px;
  clip: rect(200px, 390px, 290px, 260px);
}
```

### 結果

{{EmbedLiveSample('Examples', '689px', '410px')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related CSS properties: {{cssxref("text-overflow")}}, {{cssxref("white-space")}}, {{Cssxref("overflow-x")}}, {{Cssxref("overflow-y")}}, {{Cssxref("overflow")}}, {{Cssxref("display")}}, {{Cssxref("position")}}
