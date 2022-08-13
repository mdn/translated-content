---
title: String.prototype.charAt()
slug: Web/JavaScript/Reference/Global_Objects/String/charAt
tags:
  - JavaScript
  - Method
  - Prototype
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/charAt
original_slug: Web/JavaScript/Referencje/Obiekty/String/charAt
---
{{JSRef}}

## Podsumowanie

Zwraca określony znak z łańcucha znaków.

## Składnia

    str.charAt(index)

### Parametry

- `index`
  - : Liczba całkowita z przedziału od 0 do liczby o 1 mniejszej od długości łańcucha.

## Opis

Znaki w łańcuchu znaków są indeksowane od lewej do prawej strony. Indeksem pierwszego znaku jest 0, a indeksem ostatniego znaku w łańcuchu znaków o nazwie `stringName` jest `stringName.length - 1`. Jeśli dostarczona wartość parametru `index` znajduje się poza zakresem, JavaScript zwróci pusty łańcuch znaków.

## Przykłady

### Przykład: Wyświetlanie różnych znaków z określonego łańcucha znaków

Poniższy przykład wyświetla różne znaki łańcucha "`Brave new world`":

```js
var anyString="Brave new world";

console.log("Znakiem o indeksie 0   jest '" + anyString.charAt(0)   + "'");
console.log("Znakiem o indeksie 1   jest '" + anyString.charAt(1)   + "'");
console.log("Znakiem o indeksie 2   jest '" + anyString.charAt(2)   + "'");
console.log("Znakiem o indeksie 3   jest '" + anyString.charAt(3)   + "'");
console.log("Znakiem o indeksie 4   jest '" + anyString.charAt(4)   + "'");
console.log("Znakiem o indeksie 999 jest '" + anyString.charAt(999) + "'");
```

Powyższy kod wyświetli:

    Znakiem o indeksie 0   jest 'B'
    Znakiem o indeksie 1   jest 'r'
    Znakiem o indeksie 2   jest 'a'
    Znakiem o indeksie 3   jest 'v'
    Znakiem o indeksie 4   jest 'e'
    Znakiem o indeksie 999 jest ''

## Zobacz także

- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.charCodeAt()")}}
- {{jsxref("String.prototype.codePointAt()")}}
- {{jsxref("String.prototype.split()")}}
- {{jsxref("String.fromCodePoint()")}}
- [JavaScript has a Unicode problem – Mathias Bynens](https://mathiasbynens.be/notes/javascript-unicode)
