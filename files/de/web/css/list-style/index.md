---
title: list-style
slug: Web/CSS/list-style
tags:
  - CSS
  - CSS Referenz
translation_of: Web/CSS/list-style
---
{{ CSSRef() }}

## Übersicht

Die `list-style` Eigenschaft ist eine Kurzform für {{cssxref("list-style-type")}}, {{cssxref("list-style-image")}} und {{cssxref("list-style-position")}}.

{{cssinfo}}

## Syntax

    list-style: [ list-style-type || list-style-position || list-style-image ] | inherit

### Werte

- list-style-type
  - : Siehe {{cssxref("list-style-type")}}
- list-style-image
  - : Siehe {{cssxref("list-style-image")}}
- list-style-position
  - : Siehe {{cssxref("list-style-position")}}

## Beispiele

### HTML

```html
List 1
<ul class="one">
  <li>List Item1</li>
  <li>List Item2</li>
  <li>List Item3</li>
</ul>
List 2
<ul class="two">
  <li>List Item A</li>
  <li>List Item B</li>
  <li>List Item C</li>
</ul>
```

### CSS

```css
.one {
  list-style: circle;
}

.two {
  list-style: square inside;
}
```

### Ergebnis

{{EmbedLiveSample('Beispiele')}}

## Browser Kompatibilität

| Browser           | ab Version |
| ----------------- | ---------- |
| Internet Explorer | 4.0        |
| Firefox (Gecko)   | 1.0 (1.0)  |
| Opera             | 3.5        |
| Safari (WebKit)   | 1.0 (85)   |

## Spezifikation

- [CSS 2.1 Generated content #list-style](http://www.w3.org/TR/CSS21/generate.html#propdef-list-style)

## Siehe auch

- {{cssxref("list-style-type")}}, {{cssxref("list-style-image")}}, {{cssxref("list-style-position")}}

{{ languages({ "en": "en/CSS/list-style", "es": "es/CSS/list-style", "fr": "fr/CSS/list-style", "ja": "ja/CSS/list-style", "pl": "pl/CSS/list-style", "pt": "pt/CSS/list-style"}) }}
