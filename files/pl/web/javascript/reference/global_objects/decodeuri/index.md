---
title: decodeURI()
slug: Web/JavaScript/Reference/Global_Objects/decodeURI
tags:
  - JavaScript
translation_of: Web/JavaScript/Reference/Global_Objects/decodeURI
original_slug: Web/JavaScript/Referencje/Obiekty/decodeURI
---
{{jsSidebar("Objects")}}

## Podsumowanie

Dekoduje Jednolity Identyfikator Zasobu (URI) utworzony wcześniej przez funkcję {{jsxref("encodeURI", "encodeURI()")}} lub podobną.

## Składnia

    decodeURI(encodedURI)

### Parametry

- `encodedURI`
  - : Kompletny, odkodowany Jednolity Identyfikator Zasobu.

## Opis

Podmienia każdą sekwencję ucieczki (ang.
_escape sequence_
) w zakodowanym URI znakiem, który reprezentuje.

Nie dekoduje sekwencji, które nie mogłyby być wprowadzone przez {{jsxref("encodeURI", "encodeURI()")}}.

## Zobacz także

- {{jsxref("decodeURIComponent", "decodeURIComponent()")}}
- {{jsxref("encodeURI", "encodeURI()")}}
- {{jsxref("encodeURIComponent", "encodeURIComponent()")}}
