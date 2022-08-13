---
title: ':link'
slug: Web/CSS/:link
tags:
  - CSS
  - CSS Psuedo-class
  - Web
translation_of: Web/CSS/:link
---
{{ CSSRef() }}

## Podsumowanie

Pseudo-klasa :link pozwala wybrać linki wewnątrz elementów. Dzięki niej możesz wybrać każdy link, który nie został jeszcze odwiedzony, nawet taki, który ma już nadane wartości za pomocą innych pseudo-klas, takich jak: {{ cssxref(":hover") }}, {{ cssxref(":active") }} lub {{ cssxref(":visited") }}. W celu odpowiedniej stylizacji linków musisz wstawić pseudo-klasę :link na początku, według kolejności LVHA:` :link` — `:visited` — `:hover` — `:active`. Pseudo-klasa {{ cssxref(":focus") }} jest zazwyczaj ustawiana przed lub po pseudo-klasie `:hover` (w zależności od oczekiwanego efektu).

## Składnia

{{csssyntax}}

## Przykłady

```css
a:link {color: slategray;}
.external:link {background-color: lightblue;}
```

## Specyfikacje

- [WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage/scripting.html#selector-link)
- [Selectors Level 4](https://drafts.csswg.org/selectors-4/#link)
- [Selectors Level 3](https://drafts.csswg.org/selectors-3/#link)
- [CSS Level 2 (Revision 1)](https://www.w3.org/TR/CSS2/selector.html#link-pseudo-classes)
- [CSS Level 1](https://www.w3.org/TR/CSS1/#anchor-pseudo-classes)

## Kompatybilność z przeglądarkami

| **Przeglądarka** | **Najniższa wersja** |
| ---------------- | -------------------- |
| Chrome           | 4.0                  |
| Edge             | 7.0                  |
| Firefox          | 2.0                  |
| Safari           | 3.1                  |
| Opera            | 9.6                  |

## Zobacz też

- {{ cssxref(":visited") }}, {{ cssxref(":hover") }}, {{ cssxref(":active") }}
