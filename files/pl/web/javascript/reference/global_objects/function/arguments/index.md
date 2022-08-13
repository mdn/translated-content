---
title: Function.arguments
slug: Web/JavaScript/Reference/Global_Objects/Function/arguments
tags:
  - Dokumentacja_JavaScript
  - Dokumentacje
  - JavaScript
  - Wszystkie_kategorie
translation_of: Web/JavaScript/Reference/Global_Objects/Function/arguments
original_slug: Web/JavaScript/Referencje/Obiekty/Function/arguments
---
{{JSRef}}{{ Deprecated_header() }}

## Podsumowanie

Obiekt tablicopodobny odpowiadający argumentom przekazywanym funkcji.

## Opis

Należy użyć obiektu [`arguments`](pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Funkcje/arguments) dostępnego wewnątrz funkcji zamiast `Function.arguments`.

W przypadku rekurencji, tzn. jeśli funkcja `f` pojawia się kilkakrotnie na stosie wywołania, wartość of `f.arguments` reprezentuje argumenty odpowiadające ostatniemu wywołaniu funkcji.

## Przykład

```js
function f(n) { g(n-1) }

function g(n) {
  console.log("przed: " + g.arguments[0]);
  if(n>0) { f(n); }
  console.log("po: " + g.arguments[0]);
}
f(2);
```

wyświetli:

    przed: 1
    przed: 0
    po: 0
    po: 1
