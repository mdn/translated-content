---
title: ':after'
slug: Web/CSS/::after
tags:
  - CSS
  - CSS:Dokumentacje
  - Dokumentacje
  - Wszystkie_kategorie
translation_of: Web/CSS/::after
original_slug: Web/CSS/:after
---
{{ CSSRef() }}

## Podsumowanie

Tworzy pseudoelement, który staje się ostatnim dzieckiem danego elementu. Zazwyczaj używany jest do wprowadzania kosmetycznych zmian danego elementu. Domyślnie element wstawiany jest `inline`.

## Składnia

    /* składnia CSS2 */ selektor:after { własności }
    /* składnia CSS3 */ selektor::after { własności }

Zapis` ::aft​er` został wprowadzony w CSS 3 w celu ustanowienia różnicy pomiędzy [pseudo klasami](/pl/docs/Web/CSS/Pseudo-classes), a [pseudo elementami](/pl/docs/Web/CSS/Pseudo-elements). Przeglądarki akceptują również notację `:after `wprowadzoną w CSS 2.

## Przykłady

### Prosty przykład

    <html>
      <body>
        <p>akapit</p>
      </body>
    </html>

    p:after {
      content: 'Koniec';
      display: block;
      margin-top: 3em;
    }

---

    body:after { content: 'Koniec dokumentu'; }

### Notatki

Elementy wstawiane do dokumentu poprzez `:after` nie są widziane w drzewie dokumentu.

### Specyfikacje

- [CSS 2.1](http://www.w3.org/TR/1998/REC-CSS2-19980512/selector.html#before-and-after)
- [CSS 3](http://www.w3.org/TR/css3-selectors/#gen-content)

### Zobacz także

{{ Cssxref(":before") }}, {{ Cssxref("content") }}



{{ languages( { "en": "en/CSS/:after", "es": "es/CSS/after", "fr": "fr/CSS/:after" } ) }}
