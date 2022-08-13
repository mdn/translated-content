---
title: decodeURIComponent()
slug: Web/JavaScript/Reference/Global_Objects/decodeURIComponent
tags:
  - JavaScript
translation_of: Web/JavaScript/Reference/Global_Objects/decodeURIComponent
original_slug: Web/JavaScript/Referencje/Obiekty/decodeURIComponent
---
{{jsSidebar("Objects")}}

## Podsumowanie

Dekoduje komponent Jednolitego Identyfikatora Zasobu (URI) stworzonego przez {{jsxref("encodeURIComponent", "encodeURIComponent()")}} lub podobną.

## Składnia

    decodeURIComponent(encodedURI)

### Parametry

- `encodedURI`
  - : Odkodowany komponent Jednolitego Identyfikatora Zasobu.

## Opis

Podmienia każdą sekwencję ucieczki (ang.
_escape sequence_
) w zakodowanym komponencie URI znakiem, który ona reprezentuje.

## Zobacz także

- {{jsxref("decodeURI", "decodeURI()")}}
- {{jsxref("encodeURI", "encodeURI()")}}
- {{jsxref("encodeURIComponent", "encodeURIComponent()")}}
