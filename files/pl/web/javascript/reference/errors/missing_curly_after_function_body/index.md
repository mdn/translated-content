---
title: 'SyntaxError: missing } after function body'
slug: Web/JavaScript/Reference/Errors/Missing_curly_after_function_body
tags:
  - Błąd
  - Błąd składni
  - Błędy
  - Error
  - JavaScript
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Missing_curly_after_function_body
---
{{jsSidebar("Errors")}}

Wyjątek JavaScript "missing } after function body" (_brakujący } po ciele funkcji_) zdarza się, gdy jest błąd składniowy gdzieś w definicji funkcji. Należy sprawdzić, czy wszystkie klamry i nawiasy są w odpowiednich miejscach i kolejności.

## Wiadomość

    SyntaxError: Expected '}' (Edge)
    SyntaxError: missing } after function body (Firefox)

## Rodzaj błędu

{{jsxref("SyntaxError")}}

## Co poszło nie tak?

W którymś miejscu pojawił się błąd przy tworzeniu funkcji. Należy sprawdzić, czy wszystkie zamykaące klamry i nawiasy są we właściwej kolejności. Odpowiednie wcięcia i formatowanie kodu mogą pomóc Ci w odnalezieniu błędu.

## Przykłady

### Brakująca klamra zamykająca

Często zdarza się, że brakuje klamry zamykającej w funkcji w Twoim kodzie:

```js example-bad
var charge = function() {
  if (sunny) {
    useSolarCells();
  } else {
    promptBikeRide();
};
```

Poprawny kod wygląda następująco:

```js example-good
var charge = function() {
  if (sunny) {
    useSolarCells();
  } else {
    promptBikeRide();
  }
};
```

Może to być o wiele bardziej niejasne, kiedy używane są [IIFE](/pl/docs/Glossary/IIFE), [domknięcia](/pl/docs/Web/JavaScript/Domkniecia), czy inne konstrukcje wymagające wielu różnych nawiasów i klamer, jak na przykład:

```js example-bad
(function() { if (true) { return false; } );
```

Często zastosowanie innych wcięć lub dokładne sprawdzenie poprawności wcięć pozwala na znalezienie błędów tego rodzaju.

```js example-good
(function() {
  if (true) {
    return false;
  }
});
```

## Zobacz też

- [Funkcje](/pl/docs/Web/JavaScript/Guide/Funkcje)
