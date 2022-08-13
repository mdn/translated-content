---
title: zezwalaj na wklejanie
slug: Web/JavaScript/Reference/Errors/Missing_semicolon_before_statement
tags:
  - Errors
  - JavaScript
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Missing_semicolon_before_statement
---
{{jsSidebar("Errors")}}

## Wiadomość

    SyntaxError: Expected ';' (Edge)
    SyntaxError: missing ; before statement (Firefox)

## Typ Błędu

{{jsxref("SyntaxError")}}.

## Co poszło nie tak?

Brakuje gdzieś średnika (;). Instrukcje JavaScript muszą być zakończone średnikami. Niektóre z nich podlegają automatycznemu wstawianiu średnika (ASI), ale w tym przypadku musisz podać średnik, aby JavaScript mógł poprawnie przeanalizować kod źródłowy.

Jednak często ten błąd jest tylko konsekwencją innego błędu, takiego jak niewłaściwe unikanie ciągów znaków lub niewłaściwe używanie zmiennej var. Możesz także mieć gdzieś za dużo nawiasów. Dokładnie sprawdź składnię, gdy ten błąd zostanie zgłoszony.

## Przykłady

### Niezdefiniowane wiersze

Ten błąd może wystąpić z łatwością, gdy łańcuch znaków nie jest poprawnie zlozony, a silnik JavaScript oczekuje już końca łańcucha. Na przykład:

```js example-bad
var foo = 'Tom's bar';
// SyntaxError: missing ; before statement
```

Możesz użyć podwójnych cudzysłowów lub uciec od apostrofu:

```js example-good
var foo = "Tom's bar";
var foo = 'Tom\'s bar';
```

### Deklarowanie właściwości za pomocą var

Nie można zadeklarować właściwości obiektu lub tablicy za pomocą deklaracji var.

```js example-bad
var obj = {};
var obj.foo = 'hi'; // SyntaxError missing ; before statement

var array = [];
var array[0] = 'there'; // SyntaxError missing ; before statement
```

Zamiast tego pomiń słowo kluczowe var:

```js example-good
var obj = {};
obj.foo = 'hi';

var array = [];
array[0] = 'there';
```

### Bad keywords

Jeśli pochodzisz z innego języka programowania, często używasz słów kluczowych, które nie oznaczają tego samego lub nie mają żadnego znaczenia w javaScript:

```js example-bad
def print(info){
  console.log(info);
}; // SyntaxError missing ; before statement
```

Zamiast tego użyj funkcji def:

```js example-good
function print(info){
  console.log(info);
};
```

## Zobacz tez

- [Automatic semicolon insertion (ASI)](/pl/docs/Web/JavaScript/Reference/Lexical_grammar#Automatic_semicolon_insertion)
- [JavaScript statements](/pl/docs/Web/JavaScript/Reference/Statements)
