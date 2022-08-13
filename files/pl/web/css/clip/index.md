---
title: clip
slug: Web/CSS/clip
tags:
  - CSS
  - CSS:Dokumentacje
  - Dokumentacje
  - Wszystkie_kategorie
translation_of: Web/CSS/clip
---
{{ CSSRef() }}

### Podsumowanie

Własność CSS `clip` określa, jaka część elementu jest widoczna.

- {{ Xref_cssinitial() }}: auto
- Stosowana do: elementy pozycjonowane absolutnie
- {{ Xref_cssinherited() }}: nie
- Procenty: n/a
- Media: {{ Xref_cssvisual() }}
- {{ Xref_csscomputed() }}: Dla wartości prostokątnych, prostokąt składający się z czterech wyliczonych długości, w innych przypadku - jako określone

### Składnia

    clip: <shape> | auto | inherit

### Wartości

- {{cssxref("&lt;shape&gt;")}}
  - : określa kształt w formie `rect(<top>, <right>, <bottom>, <left>);`
- {{ Cssxref("auto") }}
  - :
- {{ Cssxref("inherit") }}
  - :

### Przykłady

      img.clip04 {
        clip: rect(10px, 20px, 20px, 10px);
      }

### Notatki

### Specyfikacje

- [CSS 2.1](http://www.w3.org/TR/CSS21/visufx.html#clip)

### Zgodność z przeglądarką

| Przeglądarka      | Najniższa wersja |
| ----------------- | ---------------- |
| Internet Explorer | 4                |
| Firefox           | 1                |
| Netscape          | 4                |
| Opera             | 7                |
| Safari            | 1                |

### Zobacz także

{{ Cssxref("overflow") }}, {{ Cssxref("position") }}

{{ languages( { "en": "en/CSS/clip", "fr": "fr/CSS/clip" } ) }}
