---
title: ':before'
slug: Web/CSS/::before
tags:
  - CSS
  - CSS:Dokumentacje
  - Dokumentacje
  - Wszystkie_kategorie
translation_of: Web/CSS/::before
original_slug: Web/CSS/:before
---
{{ CSSRef() }}

### Podsumowanie

Tworzy pseudoelement, który staje się pierwszym dzieckiem danego elementu. Zazwyczaj używany jest do wprowadzania kosmetycznych zmian danego elementu. Domyślnie element wstawiany jest `inline`.

### Składnia

    element:before { własności }

Najczęściej używana jest własność {{ Cssxref("content") }}, która pozwala na wstawienie treści do pseudoelementu.

### Przykłady

Zobacz przykład

    <html>
      <body>
        <p>akapit</p>
      </body>
    </html>

    p:before {
      content: 'Tekst przed akapitem';
      display: block;
    }



### Notatki

Elementy wstawiane do dokumentu poprzez `:before` nie są widziane w drzewie dokumentu.

### Specyfikacje

- [CSS 2.1](http://www.w3.org/TR/1998/REC-CSS2-19980512/selector.html#before-and-after)
- [CSS 3](http://www.w3.org/TR/css3-selectors/#gen-content)

### Zobacz także

{{ Cssxref(":after") }}, {{ Cssxref("content") }}



{{ languages( { "en": "en/CSS/:before", "es": "es/CSS/before", "fr": "fr/CSS/:before" } ) }}
