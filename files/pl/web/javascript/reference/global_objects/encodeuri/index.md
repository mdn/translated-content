---
title: encodeURI()
slug: Web/JavaScript/Reference/Global_Objects/encodeURI
tags:
  - JavaScript
  - URI
translation_of: Web/JavaScript/Reference/Global_Objects/encodeURI
original_slug: Web/JavaScript/Referencje/Obiekty/encodeURI
---
{{jsSidebar("Objects")}}

## Podsumowanie

Koduje Jednolity Identyfikator Zasobu (URI) poprzez zamianę każdego z wystąpień pewnych znaków na jedną, dwie lub trzy sekwencje ucieczki (ang.
_escape sequences_
) kodowania UTF-8 danego znaku.

## Syntax

    encodeURI(URI)

### Parametry

- `URI`
  - : Kompletny Jednolity Identyfikator Zasobu.

## Opis

Zakłada się, iż URI jest kompletnym URI, więc nie koduje znaków zarezerwowanych, mających specjalne znaczenie w URI.

`encodeURI` zamienia wszystkie znaki, poza podanymi poniżej, odpowiednimi sekwencjami ucieczki.

| Typ                            | Zawiera                            |
| ------------------------------ | ---------------------------------- |
| Znaki zarezerwowane            | `; , / ? : @ & = + $`              |
| Znaki nie podlegające ucieczce | Litery, cyfry, `- _ . ! ~ * ' ( )` |
| _Score_                        | `#`                                |

Zauważ, że `encodeURI` samo z siebie
_nie_
potrafi utworzyć poprawnych żądań HTTP GET i POST, jak na przykład XMLHTTPRequest, ponieważ "&", "+", i "=" nie są kodowane, a są traktowane jako znaki specjalne w żądaniach GET i POST. Jednakże, {{jsxref("encodeURIComponent", "encodeURIComponent()")}}, koduje te znaki. Zachowania te są konsekwentnie wspomagane przez różne przeglądarki.

## Zobacz także

- {{jsxref("decodeURI", "decodeURI()")}}
- {{jsxref("encodeURIComponent", "encodeURIComponent()")}}
- {{jsxref("decodeURIComponent", "decodeURIComponent()")}}
