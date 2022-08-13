---
title: Selektory ID
slug: Web/CSS/ID_selectors
tags:
  - Beginner
  - CSS
  - CSS Reference
  - Selektory
translation_of: Web/CSS/ID_selectors
---
{{CSSRef("Selectors")}}
**Selektor ID** wyszukuje każdy element z atrybutem {{htmlattrxref("ID")}} o takiej samej nazwie w dokumencie HTML.

## Składnia

    #przykladowe_id { właściwości stylu }

Jest to równoważne z {{Cssxref("Attribute_selectors", "attribute selector")}}:

    [id=przykladowe_id] { właściwości stylu }

## Przykład

```css
span#mojeid {
  background-color: DodgerBlue;
}
```

```html
<span id="mojeid">Przykładowy tekst.</span>
<span>Kolejny przykładowy tekst.</span>
```

## Specyfikacje

- [Selectors Level 4](https://drafts.csswg.org/selectors-4/#id-selectors)
- [Selectors Level 3](https://drafts.csswg.org/selectors-3/#id-selectors)
- [CSS Level 2 (Revision 1)](http://www.w3.org/TR/CSS2/selector.html#id-selectors)
- [CSS Level 1](http://www.w3.org/TR/CSS1/#id-as-selector)

## Kompatybilność z przeglądarkami

| **Przeglądarka**  | **Wsparcie** |
| ----------------- | ------------ |
| Chrome            | Tak          |
| Edge              | Tak          |
| Firefox           | Tak          |
| Internet Explorer | Tak          |
| Opera             | Tak          |
| Safari            | Tak          |
