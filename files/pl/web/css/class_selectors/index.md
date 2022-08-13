---
title: Selektor klasy
slug: Web/CSS/Class_selectors
tags:
  - CSS
  - Klasy
  - Reference
  - Selektory
translation_of: Web/CSS/Class_selectors
original_slug: Web/CSS/Selektor_klasy
---
{{CSSRef("Selectors")}} Selektor klasy wyszukuje każdy element z atrybutem {{htmlattrxref("class")}} w dokumencie HTML. Atrybut {{htmlattrxref("class")}} jest zdefiniowany jako lista przedmiotów oddzielonych ze sobą spacją, jeden z nich musi zgadzać się z podaną klasą w selektorze (CSS).

## Składnia

    .nazwaklasy { właściwości stylu }

Jest to równoważne z {{Cssxref("Attribute_selectors", "attribute selector")}}:

    [class~=nazwaklasy] { właściwości stylu }

## Przykład

### CSS

```css
span.classy {
  background-color: DodgerBlue;
}
```

### HTML

```html
<span class="classy">Przykładowy tekst.</span>
<span>Kolejny przykładowy tekst.</span>
```

## Specyfikacje

- [Selectors Level 4](https://drafts.csswg.org/selectors-4/#class-html)
- [Selectors Level 3](https://drafts.csswg.org/selectors-3/#class-html)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/selector.html#class-html)
- [CSS Level 1](http://www.w3.org/TR/CSS1/#class-as-selector)

## Kompatybilność z przeglądarkami

| **Przeglądarka**  | **Wsparcie** |
| ----------------- | ------------ |
| Chrome            | Tak          |
| Edge              | Tak          |
| Firefox           | Tak          |
| Internet Explorer | Tak          |
| Opera             | Tak          |
| Safari            | Tak          |
