---
title: white-space
slug: Web/CSS/white-space
tags:
  - CSS
  - CSS:Dokumentacje
  - Dokumentacje
  - Wszystkie_kategorie
translation_of: Web/CSS/white-space
---
{{ CSSRef() }}

## Podsumowanie

Własność CSS `white-space` jest używana do opisu sposobu, w jaki białe znaki są traktowane wewnątrz elementu.

{{cssinfo}}

## Składnia

    white-space: normal | pre | nowrap | pre-wrap | -moz-pre-wrap | pre-line | inherit ;

### Wartości

- {{ Cssxref("normal") }}
  - : wszystkie sekwencje białych znaków i zakończenia linii będą skracane. Zakończenia linii nie likwidują zawijania zawartości.
- {{ Cssxref("pre") }}
  - : wszystkie białe znaki w źródle będą zachowane, linie są przełamane tylko na znakach nowej linii w źródle.
- {{ Cssxref("nowrap") }}
  - : wszystkie sekwencje białych znaków i zakończenia linii będą skracane, również przełamania linii (zawijanie tekstu) są zlikwidowane wewnątrz zawartości.
- {{ Cssxref("pre-wrap") }}
  - : wszystkie białe znaki w źródle będą zachowane, linie są przełamane na znakach nowej linii i w razie konieczności zawijają zawartość.
- {{ Cssxref("-moz-pre-wrap") }} {{ Deprecated_inline() }}
  - : identyczne jak `pre-wrap`, jest to rozszerzenie Mozilli, które stało się własnością CSS 2.1 `pre-wrap`, która powinna być używana zamiast niego.
- {{ Cssxref("pre-line") }}
  - : wszystkie sekwencje białych znaków będą skrócone, linie są przełamane na znakach nowej linii i również w razie potrzeby zawartość jest zawijana.
- {{ Cssxref("inherit") }}
  - : dziedziczy po rodzicu.

## Przykłady

    code {
      white-space: pre;
    }

## Notatki

`pre-line` nie jest jeszcze zaimplementowane w Mozilli.

## Specyfikacje

- [CSS 2.1 text](http://www.w3.org/TR/CSS21/text.html#white-space-prop)
- [CSS 1](http://www.w3.org/TR/CSS1#white-space)
- [CSS 3](http://www.w3.org/TR/css3-text/#white-space-summary)

## Zgodność z przeglądarką

(Próbna tabela zgodności)

| Przeglądarka      | Najniższa wersja |
| ----------------- | ---------------- |
| Internet Explorer | 0                |
| Firefox           | 0                |
| Netscape          | 0                |
| Opera             | 0                |
| Safari            | ?                |
