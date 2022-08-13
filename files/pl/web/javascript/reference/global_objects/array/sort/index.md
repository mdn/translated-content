---
title: Array.prototype.sort()
slug: Web/JavaScript/Reference/Global_Objects/Array/sort
tags:
  - Dokumentacja_JavaScript
  - Dokumentacje
  - JavaScript
  - Strony_wymagające_dopracowania
  - Wszystkie_kategorie
translation_of: Web/JavaScript/Reference/Global_Objects/Array/sort
original_slug: Web/JavaScript/Referencje/Obiekty/Array/sort
---
{{JSRef}}

## Podsumowanie

Sortuje elementy tablicy.

## Składnia

    arr.sort([compareFunction])

### Parametry

- `compareFunction`
  - : jest nazwą funkcji porównującej elementy. Jeżeli parametr zostanie pominięty, tablica będzie posortowana w porządku leksykograficznym (alfabetycznie).

## Opis

Jeżeli `compareFunction` nie zostanie podana, elementy zostaną posortowane leksykograficznie (alfabetycznie - słownikowo) według porównania ich reprezentacji znakowej (łańcucha znaków). Przykładowo "80" znajdzie się przed "9" w porządku leksykograficznym, pomimo że numerycznie 9 poprzedza 80.

Jeżeli `compareFunction` zostanie podana, elementy tablicy zostaną posortowane odpowiednio do wartości zwracanej przez funkcję porównującą. Jeżeli `a` oraz `b` są dwoma porównywanymi elementami tablicy to:

- `compareFunction(a, b)` zwróci wartość mniejszą od 0 - indeks elementu `a` będzie mniejszy niż indeks `b` (logicznie `a` < `b`).

<!---->

- `compareFunction(a, b)` zwróci 0 - pozostawia `a` oraz `b` w niezmienionej kolejności względem siebie, jednak w dalszym ciągu oba będą porównywane z innymi elementami (logicznie `b` = `a`). Uwaga: Standard ECMAscript nie gwarantuje niezmienionej kolejności (np. Mozilla wszystkie wersje do 2003 roku).

<!---->

- `compareFunction(a, b)` zwraca wartość większą od 0 - indeks elementu `a` będzie większy niż indeks `b` (logicznie `a` > `b`).

Ogólna postać funkcji porównującej wygląda następująco:

```js
function compare(a, b) {
   if (a mniejsze niż b według kryteriów sortowania)
      return -1
   if (a większe od b według kryteriów sortowania)
      return 1
   // a równe b
   return 0
}
```

W celu porównania liczb, zamiast napisów, funkcja porównująca może odejmować `b` od `a`:

```js
function compareNumbers(a, b) {
   return a - b
}
```

Niektóre implementacje JavaScript wykonują sortowanie stabilne: kolejność elementów `a` i `b` nie jest zmieniana jeśli `a` i `b` są sobie równe. Jeżeli przed sortowaniem `a` jest w tablicy wcześniej niż `b` oraz `a` i `b` są sobie równe, to po sortowaniu ich kolejność będzie taka sama (niezależnie od tego, jak zmienią się pozycje elementów `a` i `b`).

## Przykłady

### Przykład: Tworzenie, wyświetlanie i sortowanie tablic

Następujący przykład tworzy cztery tablice i wyświetla oryginalną tablicę, potem posortowane tablice. Tablice liczbowe są sortowane najpierw bez podania funkcji porównującej, następnie z taką funkcją.

```js
stringArray = new Array("Blue","Humpback","Beluga")
numericStringArray = new Array("80","9","700")
numberArray = new Array(40,1,5,200)
mixedNumericArray = new Array("80","9","700",40,1,5,200)

function compareNumbers(a, b) {
   return a - b
}

console.log("tablicaNapisów: " + stringArray.join())
console.log("Posortowana: " + stringArray.sort())

console.log("tablicaLiczbowa: " + numberArray.join())
console.log("Posortowana bez funkcji porównującej: " + numberArray.sort())
console.log("Posortowana z funkcją porównującą: " + numberArray.sort(compareNumbers))

console.log("tablicaNapisówLiczbowych: " + numericStringArray.join())
console.log("Posortowana bez funkcji porównującej: " + numericStringArray.sort())
console.log("Posortowana z funkcją porównującą: " + numericStringArray.sort(compareNumbers))

console.log("tablicaLiczbowaMieszna: " + mixedNumericArray.join())
console.log("Posortowana bez funkcji porównującej: " + mixedNumericArray.sort())
console.log("Posortowana z funkcją porównującą: " + mixedNumericArray.sort(compareNumbers))
```

Ten przykład wyświetla następujące dane. Jak widać, przy zastosowaniu funkcji porównującej, liczby są sortowane prawidłowo niezależnie od tego czy są przedstawiane jako wartości liczbowe bądź też napisy.

    tablicaNapisów: Blue,Humpback,Beluga
    Posortowana: Beluga,Blue,Humpback

    tablicaLiczbowa: 40,1,5,200
    Posortowana bez funkcji porównującej: 1,200,40,5
    Posortowana z funkcją porównującą: 1,5,40,200

    tablicaNapisówLiczbowych: 80,9,700
    Posortowana bez funkcji porównującej: 700,80,9
    Posortowana z funkcją porównującą: 9,80,700

    tablicaLiczbowaMieszna: 80,9,700,40,1,5,200
    Posortowana bez funkcji porównującej: 1,200,40,5,700,80,9
    Posortowana z funkcją porównującą: 1,5,9,40,80,200,700

## Zobacz także

- {{jsxref("Array.prototype.reverse()")}}
- {{jsxref("String.prototype.localeCompare()")}}
