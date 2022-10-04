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

```css
.dotted-border {
   border: dotted;
   position: relative;
   width: 536px;
   height: 350px;
}

#top-left, #middle, #bottom-right {
   position: absolute;
   top: 0px;
}

#top-left {
   left: 360px;
   clip: rect(0px, 175px, 113px, 0px);
}


#middle {
   left: 280px;
   clip: rect(119px, 255px, 229px, 80px);
   /* standard syntax, unsupported by Internet Explorer 4-7 */
}

#bottom-right {
   left: 200px;
   clip: rect(235px 335px 345px 160px);
   /* non-standard syntax, but supported by all major browsers*/
}
```

```html
<p class="dotted-border">
   <img src="https://developer.mozilla.org/@api/deki/files/3613/=hut.jpg" title="Original Graphic" />
   <img id="top-left" src="https://developer.mozilla.org/@api/deki/files/3613/=hut.jpg" title="Graphic clipped to upper left">
   <img id="middle" src="https://developer.mozilla.org/@api/deki/files/3613/=hut.jpg" title="Graphic clipped towards middle">
   <img id="bottom-right" src="https://developer.mozilla.org/@api/deki/files/3613/=hut.jpg" title="Graphic clipped to bottom right">
</p>
```

{{EmbedLiveSample('Examples', '689px', '410px')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related CSS properties: {{cssxref("text-overflow")}}, {{cssxref("white-space")}}, {{Cssxref("overflow-x")}}, {{Cssxref("overflow-y")}}, {{Cssxref("overflow")}}, {{Cssxref("display")}}, {{Cssxref("position")}}
