---
title: Array.prototype.pop()
slug: Web/JavaScript/Reference/Global_Objects/Array/pop
tags:
  - Dokumentacja_JavaScript
  - Dokumentacje
  - JavaScript
  - Metodă
  - Prototype
  - Tablica
translation_of: Web/JavaScript/Reference/Global_Objects/Array/pop
original_slug: Web/JavaScript/Referencje/Obiekty/Array/pop
---
{{JSRef}}

## Podsumowanie

Usuwa ostatni element z tablicy zwracając go. Metoda ta zmienia długość tablicy.

## Składnia

    arr.pop()

### Zwracana wartość

Ostatni element tablicy;
Jeśli tablica jest pusta zwraca {{jsxref("undefined")}}

## Opis

Metoda pop usuwa ostatni element tablicy i zwraca tę wartość.

`pop` is intentionally generic. Metoda ta może być {{jsxref("Function.call", "called", "", 1)}} lub {{jsxref("Function.apply", "applied", "", 1)}} do obiektu przypominającego tablice. Obiekty, które nie posiadają właściwości `length` odzwierciedlającej ostani element w serii, przy właściwościach liczonych od zera nie mogą zachowywać się w żaden znaczący sposób.

Jeśli zawołasz  `pop()` na pustej tablicy, zwróci ona {{jsxref("undefined")}}.

## Przykład

### Przykład: Usuwanie ostatniego elementu tablicy

Następujący kod tworzy tablicę `myFish` zawierającą cztery elementy, a następnie usuwa ostatni jej element.

    var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

    console.log(myFish); // ['angel', 'clown', 'mandarin', 'sturgeon']

    var popped = myFish.pop();

    console.log(myFish); // ['angel', 'clown', 'mandarin' ]

    console.log(popped); // 'sturgeon'

## Specyfikacja

| Specification                                                                                        | Status                       | Comment                                            |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------------------------------------- |
| {{SpecName('ES3')}}                                                                             | {{Spec2('ES3')}}         | Initial definition. Implemented in JavaScript 1.2. |
| {{SpecName('ES5.1', '#sec-15.4.4.6', 'Array.prototype.pop')}}                     | {{Spec2('ES5.1')}}     |                                                    |
| {{SpecName('ES6', '#sec-array.prototype.pop', 'Array.prototype.pop')}}         | {{Spec2('ES6')}}         |                                                    |
| {{SpecName('ESDraft', '#sec-array.prototype.pop', 'Array.prototype.pop')}} | {{Spec2('ESDraft')}} |                                                    |

## Kompatybilność z przeglądarkami

{{CompatibilityTable}}

| Feature       | Chrome                           | Firefox (Gecko)                          | Internet Explorer        | Opera                            | Safari                           |
| ------------- | -------------------------------- | ---------------------------------------- | ------------------------ | -------------------------------- | -------------------------------- |
| Basic support | {{CompatChrome("1.0")}} | {{CompatGeckoDesktop("1.7")}} | {{CompatIE("5.5")}} | {{CompatVersionUnknown}} | {{CompatVersionUnknown}} |

| Feature       | Android                          | Chrome for Android               | Firefox Mobile (Gecko)           | IE Mobile                        | Opera Mobile                     | Safari Mobile                    |
| ------------- | -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| Basic support | {{CompatVersionUnknown}} | {{CompatVersionUnknown}} | {{CompatVersionUnknown}} | {{CompatVersionUnknown}} | {{CompatVersionUnknown}} | {{CompatVersionUnknown}} |

## Zobacz także

- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.unshift()")}}
