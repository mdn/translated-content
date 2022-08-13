---
title: RegExp.prototype.test()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/test
tags:
  - JavaScript
  - Method
  - Prototype
  - RegExp
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp/test
original_slug: Web/JavaScript/Referencje/Obiekty/RegExp/test
---
{{JSRef}}

## Podsumowanie

Wykonuje poszukiwanie łańcucha znaków pomiędzy wyrażeniem regularnym i określonym wzorcem. Zwraca `true` lub `false`.

## Składnia

    regexObj.test(str)

### Parametry

- `str`
  - : Łańcuch znaków w zależności od tego, czym jest wyrażenie regularne.

## Opis

Jeśli chcesz wiedzieć, czy wzorzec został znaleziony w łańcuchu znaków zastosuj metodę `test` (podobną do metody {{jsxref("String.prototype.search()")}}); aby uzyskać więcej informacji (lecz powolniej wykonywana) zastosuj metodę {{jsxref("RegExp.prototype.exec()", "exec()")}}(podobną do metody {{jsxref("String.prototype.match()")}} ).

## Przykłady

### Przykład: Zastosowanie `test()`

Poniższy funkcja wypisuje wiadomość, której tekst zależy od powodzenia testu:

```js
function testinput(re, str){
   if (re.test(str)) {
      midstring = " zawiera ";
   } else {
      midstring = " nie zawiera ";
   }
   console.log(str + midstring + re.source);
}
```

## Zobacz także

- [Regular Expressions](/pl/docs/Web/JavaScript/Guide/Regular_Expressions) chapter in the [JavaScript Guide](/pl/docs/Web/JavaScript/Guide)
- {{jsxref("RegExp")}}
