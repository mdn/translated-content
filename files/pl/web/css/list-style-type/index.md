---
title: list-style-type
slug: Web/CSS/list-style-type
tags:
  - CSS
  - CSS:Dokumentacje
  - Dokumentacje
  - Wszystkie_kategorie
translation_of: Web/CSS/list-style-type
---
{{CSSRef}}

## Podsumowanie

`list-style-type` określa wygląd znacznika [elementu listy](/pl/HTML/Element/li "pl/HTML/Element/li").

{{cssinfo}}

## Składnia

     list-style-type:  <std-list-style-name> | {{ Cssxref("none") }} | {{ Cssxref("inherit") }} ;

### Wartości

- \<std-list-style-name>
  - : Standardowa nazwa stylu listy `disc, circle, square, decimal, decimal-leading-zero, lower-roman, upper-roman, lower-greek, lower-latin, upper-latin, armenian, georgian, lower-alpha, upper-alpha`
- `disc`
  - : Wypełniony okrąg.
- `circle`
  - : Pusty okrąg.
- `square`
  - : Wypełniony kwadrat.
- `decimal`
  - : Liczby dziesiętne, zaczynając od 1.
- `decimal-leading-zero`
  - : Liczby dziesiętne poprzedzone początkowym zerem (np. 01, 02, 03, ..., 98, 99).
- `lower-roman`
  - : Małe cyfry rzymskie (i, ii, iii, iv, v itp.).
- `upper-roman`
  - : Duże cyfry rzymskie (I, II, III, IV, V itp.).
- `lower-greek`
  - : Małe litery z klasycznej greki: alpha, beta, gamma, ... (α, β, γ, ...).
- `lower-latin`
  - : Małe litery ascii (a, b, c, ... z).
- `upper-latin`
  - : Duże litery ascii (A, B, C, ... Z).
- `armenian`
  - : Tradycyjna numeracja ormiańska (Armenian) (ayb/ayp, ben/pen, gim/keem, ...).
- `georgian`
  - : Tradycyjna numeracja gruzińska (Georgian) (an, ban, gan, ..., he, tan, in, in-an, ...).
- `lower-alpha`
  - : Tak samo jak `lower-latin`.
- `upper-alpha`
  - : Tak samo jak `upper-latin`.
- `none`
  - : Bez wypunktowania.

## Przykłady

### CSS

```css
ol.normal {
  list-style-type: upper-alpha;
}

/* or use the shortcut "list-style": */
ol.shortcut {
  list-style: upper-alpha;
}
```

### HTML

```html
<ol class="normal">List 1
  <li>Hello</li>
  <li>World</li>
  <li>What's up?</li>
</ol>

<ol class="shortcut">List 2
  <li>Looks</li>
  <li>Like</li>
  <li>The</li>
  <li>Same</li>
</ol>
```

### Result

{{EmbedLiveSample("Przykłady","200","300")}}

## Uwagi

Ta specyfikacja nie definiuje, w jaki sposób systemy alfabetyczne zachowują się na końcu alfabetu. Na przykład, po 26 elementach listy numerowanie typu lower-latin jest niezdefiniowane (i będzie kontynuowane jako AA, AB, AC,...). Dlatego też dla długich list jest zalecane, aby autorzy określili prawidłowe numery.

## Specyfikacje

- [CSS 1](http://www.w3.org/TR/CSS1#list-style-type)
- [CSS 2.1](http://www.w3.org/TR/CSS21/generate.html#lists)
- [CSS 3](http://www.w3.org/TR/2002/WD-css3-lists-20021107/#list-content)

## Zobacz także

{{ Cssxref("list-style") }}, {{ Cssxref("list-style-image") }}, {{ Cssxref("list-style-position") }}
