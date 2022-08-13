---
title: 'SyntaxError: missing ) after argument list'
slug: Web/JavaScript/Reference/Errors/Missing_parenthesis_after_argument_list
tags:
  - Błąd
  - Błąd składni
  - Błędy
  - Error
  - JavaScript
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Missing_parenthesis_after_argument_list
---
{{jsSidebar("Errors")}}

Wyjątek JavaScript  „missing ) after argument list” (brakujący „)” po liście argumentów) występuje, gdy pojawia się błąd przy próbie wywołania funkcji. Może być on spowodowany literówką, brakującym operatorem lubciągiem znaków, w którym nie został zastosowany znak ucieczki tam, gdzie był potrzebny.

## Wiadomość

    SyntaxError: Expected ')' (Edge)
    SyntaxError: missing ) after argument list (Firefox)

## Rodzaj błędu

{{jsxref("SyntaxError")}}.

## Co poszło nie tak?

Wystąpił błąd w wywołaniu funkcji. Powodem może być na przykład literówka, brakujący operator lub brak znaku ucieczki w ciągu znaków, gdy zastosowanie go było potrzebne.

## Przykłady

Ponieważ brakuje operatora `+` przy próbie połączenia ciągów znaków, JavaScript oczekuje, że jedynym argumentem funkcji `log` będzie `"PI: "`, a zatem że nastąpi po nim nawias zamykający.

```js example-bad
console.log('PI: ' Math.PI);
// SyntaxError: missing ) after argument list
```

Można naprawić wywołanie funkcji `log` poprzez dodanie brakującego operatora `+`:

```js example-good
console.log('PI: ' + Math.PI);
// "PI: 3.141592653589793"
```

### Niedokończone ciągi znaków

```js example-bad
console.log('"Java" + "Script" = \"' + 'Java' + 'Script\");
// SyntaxError: missing ) after argument list
```

W powyższym przypadku JavaScript sądzi, że chciałeś użyć `);` jako fragmentu ciągu znaków (_string_) i ignoruje to, ponieważ nie wie, że `);` miało zakończyć wywołanie funkcji `console.log`. Aby naprawić ten problem, należy dodać znak `'` na końcu ciągu znaków, po fragmencie `'Script\"`:

```js example-good
console.log('"Java" + "Script" = \"' + 'Java' + 'Script\"');
// '"Java" + "Script" = "JavaScript"'
```

## Zobacz też

- [Funkcje](/pl/docs/Web/JavaScript/Guide/Funkcje)
