---
title: 'Błąd składni: brakująca własność po identyfikatorze.'
slug: Web/JavaScript/Reference/Errors/Missing_colon_after_property_id
tags:
  - Błąd
  - Błąd składniowy
  - Błędy
  - JavaScript
translation_of: Web/JavaScript/Reference/Errors/Missing_colon_after_property_id
original_slug: Web/JavaScript/Reference/Errors/Brakujący_średnik_po_własności_id
---
{{jsSidebar("Errors")}}

## Wiadomość

    Błąd składni: brakująca własność po identyfikatorze.

## Typ błedu

{{jsxref("SyntaxError")}}

## Co poszło nie tak?

Kiedy tworzysz objekty korzystając z [Inicjalizatora objektu](/pl/docs/Web/JavaScript/Reference/Operators/Object_initializer) składnia, używając dwukropka (`:`) oddziela klucze i wartości od własności objektu.

```js
var obj = { własnośćKlucza: 'wartość' };
```

## Przykłady

### Dwukropki a znaki równości

Ten kod nie zadziała prawidłowo, ponieważ nie możesz w ten sposób używać znaków równości, aby korzystać z inicjalizatora objektu.

```js example-bad
var obj = { własnośćKlucza = 'wartość' };
// Błąd składni: brakująca własność po identyfikatorze.
```

Poprawnie byłoby użyć znaku dwukropka, lub używając nawiasów kwadratowych aby przydzielić nową własność po stworzeniu objektu

```js example-good
var obj = { własnośćKlucza: 'wartość' };

// Lub inaczej

var obj = { };
obj['własnośćKlucza'] = 'wartość';
```

### Puste własności

Nie możesz w ten sposób tworzyć pustych własności.

```js example-bad
var obj = { własnośćKlucza; };
// Błąd składni: brakująca własność po identyfikatorze.
```

Jeżeli potrzebujesz zdefiniować własność bez wartości, powinieneś użyć {{jsxref("null")}} jako wartości

```js example-good
var obj = { własnośćKlucza: null };
```

### Własności obliczeniowe

Jeżeli tworzysz własność klucza z wyrażenia, potrzebujesz uzyć kwadratowych nawiasów. W przeciwnym razie, nazwa własności nie będzie możliwa do obliczenia

```js example-bad
var obj = { 'b'+'ar': 'foo' };
// Błąd składni: brakująca własność po identyfikatorze.
```

Przenieś to wyrażenie do nawiasów `[]`:

```js example-good
var obj = { ['b'+'ar']: 'foo' };
```

## Zobacz również

- [Inicjalizator objektu](/pl/docs/Web/JavaScript/Reference/Operators/Object_initializer)
