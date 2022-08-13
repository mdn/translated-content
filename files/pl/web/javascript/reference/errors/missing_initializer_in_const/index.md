---
title: 'SyntaxError: missing = in const declaration'
slug: Web/JavaScript/Reference/Errors/Missing_initializer_in_const
tags:
  - Błąd
  - Błąd składni
  - Error
  - JavaScript
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Missing_initializer_in_const
---
{{jsSidebar("Errors")}}

## Wiadomość

    SyntaxError: Const must be initalized (Edge)
    SyntaxError: missing = in const declaration (Firefox)
    SyntaxError: Missing initializer in const declaration (Chrome)

## Typ błędu

{{jsxref("SyntaxError")}}

## Co poszło nie tak?

Stała jest wartością, która nie może być zmieniona podczas normalnego wykonania programu. Nie może być zmodyfikowana poprzez ponowne przypisanie wartości ani ponowną deklarację. W języku JavaScipt, stałe są deklarowane za pomocą słowa kluczowego `const`. Wymagane jest zainicjowanie stałej konkretną wartością – konieczne jest przypisanie danej stałej wartości w tym samym wyrażeniu, w którym jest deklarowana (co ma sens, biorąc pod uwagę fakt, że nie może ona być później zmieniana).

## Przykłady

### Brakująca inicjalizacja stałej

W przeciwieństwie do `var` lub `let`, konieczne jest podanie wartości przy deklaracji `const`. W przeciwnym razie zwracany jest błąd:

```js example-bad
const COLUMNS;
// SyntaxError: missing = in const declaration
```

### Naprawianie błędu

Jest wiele opcji, by naprawić ten błąd. Należy sprawdzić, czemu miała służyć stała, o której mowa.

#### Dodawanie wartości stałej

Ustal wartość stałej w tym samym wyrażeniu, w którym jest ona deklarowana:

```js example-good
const COLUMNS = 80;
```

#### `const`, `let` or `var`?

Nie używaj `const` tam, gdzie nie chcesz użyć stałej. Być może chciałeś zadeklarować zmienną z zakresem ograniczonym do danego bloku kodu za pomocą `let` lub zmienną globalną przy użyciu `var`. Obydwie te opcje nie wymagają wartości początkowej.

```js example-good
let columns;
```

## Zobacz też

- [`const`](/en-US/docs/Web/JavaScript/Reference/Statements/const)
- [`let`](/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [`var`](/en-US/docs/Web/JavaScript/Reference/Statements/var)
