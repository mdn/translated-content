---
title: Function.caller
slug: Web/JavaScript/Reference/Global_Objects/Function/caller
tags:
  - Function
  - JavaScript
  - Non-standard
  - Property
translation_of: Web/JavaScript/Reference/Global_Objects/Function/caller
original_slug: Web/JavaScript/Referencje/Obiekty/Function/caller
---
{{JSRef}} {{non-standard_header}}

## Podsumowanie

Określa funkcję, która powołuje się na aktualnie wykonywaną funkcje.

## Opis

Jeśli funkcja `f` została wywołana przez kod najwyższego poziomu, własność `f.caller` ma wartość {{jsxref("null")}}, w przeciwnym przypadku jest to funkcja, która wywołała `f`.

Ta własność zastąpiła wycofaną własność {{jsxref("arguments.caller")}}.

### Notes

Note that in case of recursion, you can't reconstruct the call stack using this property. Consider:

```js
function f(n) { g(n-1); }
function g(n) { if(n>0) { f(n); } else { stop(); } }
f(2);
```

At the moment `stop()` is called the call stack will be:

    f(2) -> g(1) -> f(1) -> g(0) -> stop()

The following is true:

    stop.caller === g && f.caller === g && g.caller === f

so if you tried to get the stack trace in the `stop()` function like this:

```js
var f = stop;
var stack = "Stack trace:";
while (f) {
  stack += "\n" + f.name;
  f = f.caller;
}
```

the loop would never stop.

## Przykłady

### Przykład: Sprawdzenie wartości własności funkcji `caller`

Następujący kod sprawdza wartość własności funkcji `caller`.

```js
function myFunc() {
   if (myFunc.caller == null) {
      return ("The function was called from the top!");
   } else {
      return ("This function's caller was " + myFunc.caller);
   }
}
```
