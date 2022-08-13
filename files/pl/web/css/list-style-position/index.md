---
title: list-style-position
slug: Web/CSS/list-style-position
tags:
  - CSS
  - CSS:Dokumentacje
  - Dokumentacje
  - Wszystkie_kategorie
translation_of: Web/CSS/list-style-position
---
{{ CSSRef() }}

### Podsumowanie

`list-style-position` określa pozycję znacznika listy w [elemencie listy](pl/HTML/Element/li).

- {{ Xref_cssinitial() }}: {{ Cssxref("outside") }}
- Stosowana do: elementów z 'display: list-item'
- {{ Xref_cssinherited() }}: tak
- Procenty: niedostępne
- Media: {{ Xref_cssvisual() }}
- {{ Xref_csscomputed() }}: jako określone

### Składnia

    list-style-position: inside | outside | inherit

### Wartości

- `outside`
  - : Znacznik jest umieszczany poza [elementem listy](pl/HTML/Element/li).
- `inside`
  - : Znacznik jest umieszczany wewnątrz elementu listy. Jest on pierwszym blokiem inline i zawartość elementu go opływa.

## Przykłady

### HTML

```html
<ul class="one"> List 1
  <li>List Item 1-1</li>
  <li>List Item 1-2</li>
  <li>List Item 1-3</li>
  <li>List Item 1-4</li>
</ul>
<ul class="two"> List 2
  <li>List Item 2-1</li>
  <li>List Item 2-2</li>
  <li>List Item 2-3</li>
  <li>List Item 2-4</li>
</ul>
<ul class="three"> List 3
  <li>List Item 3-1</li>
  <li>List Item 3-2</li>
  <li>List Item 3-3</li>
  <li>List Item 3-4</li>
</ul>
```

### CSS

```css
.one {
  list-style:square inside;
}

.two {
  list-style-position: outside;
  list-style-type: circle;
}

.three {
  list-style-image: url("https://mdn.mozillademos.org/files/11979/starsolid.gif");
  list-style-position: inherit;
}
```

### Result

{{EmbedLiveSample("Przykłady","200","420")}}

### Specyfikacje

- [CSS 1](http://www.w3.org/TR/CSS1#list-style-position)
- [CSS 2.1](http://www.w3.org/TR/CSS21/generate.html#propdef-list-style-position)
- [CSS 3](http://www.w3.org/TR/2002/WD-css3-lists-20021107/#list-style-position)

### Zgodność z przeglądarką

### Zobacz także

{{ Cssxref("list-style") }}, {{ Cssxref("list-style-type") }}, {{ Cssxref("list-style-image") }}



{{ languages( { "en": "en/CSS/list-style-position", "es": "es/CSS/list-style-position", "fr": "fr/CSS/list-style-position" } ) }}
