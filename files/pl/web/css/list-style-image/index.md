---
title: list-style-image
slug: Web/CSS/list-style-image
tags:
  - CSS
  - CSS:Dokumentacje
  - Dokumentacje
  - Wszystkie_kategorie
translation_of: Web/CSS/list-style-image
---
{{ CSSRef() }}

### Podsumowanie

`list-style-image` określa plik graficzny, który ma zostać użyty jako znacznik [elementu listy](pl/HTML/Element/li).

- {{ Xref_cssinitial() }}: {{ Cssxref("none") }}
- Stosowana do: elementów z 'display: list-item'
- {{ Xref_cssinherited() }}: tak
- Procenty: niedostępne
- Media: {{ Xref_cssvisual() }}
- {{ Xref_csscomputed() }}: bezwzględny URI lub `none`

### Składnia

    list-style-image: <uri> | none | inherit

### Wartości

- `uri`
  - : Adres pliku graficznego.

## Przykłady

### HTML

```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>
```

### CSS

```css
ul {
  list-style-image: url("https://mdn.mozillademos.org/files/11981/starsolid.gif")
}
```

### Result

{{EmbedLiveSample('Przykłady')}}

### Dokumentacja

- [CSS 1](http://www.w3.org/TR/CSS1#list-style-image)
- [CSS 2.1](http://www.w3.org/TR/CSS21/generate.html#propdef-list-style-image)
- [CSS 3](http://www.w3.org/TR/2002/WD-css3-lists-20021107/#list-content0)

### Kompatybilność z przeglądarkami

### Zobacz także

{{ Cssxref("list-style") }}, {{ Cssxref("list-style-type") }}, {{ Cssxref("list-style-position") }}
