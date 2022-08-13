---
title: Array.prototype.some()
slug: Web/JavaScript/Reference/Global_Objects/Array/some
tags:
  - Dokumentacja_JavaScript
  - Dokumentacje
  - JavaScript
  - Strony_wymagające_dopracowania
  - Wszystkie_kategorie
translation_of: Web/JavaScript/Reference/Global_Objects/Array/some
original_slug: Web/JavaScript/Referencje/Obiekty/Array/some
---
{{ JSRef }}

## Podsumowanie

Sprawdza, czy jakikolwiek element tablicy zalicza test zaimplementowany przez dostarczoną funkcję .

## Składnia

    arr.some(callback[, thisArg])

### Parametry

- `callback`
  - : Funkcja sprawdzająca dla każdego elementu.
- `thisArg`
  - : Obiekt do użycia jako `this` gdy wykonujemy funkcję `callback`.

## Opis

`some` wykonuje funkcję `callback`) na każdym elemencie tablicy, aż znajdzie taki, dla którego `callback` zwróci prawdę (`true`). Jeżeli taki element zostanie znaleziony, `some` zakończy swoje działanie i zwróci prawdę (`true`), w przeciwnym przypadku (gdy `callback` zwróci fałsz dla każdego z elementów) `some` zwróci `false`. Tablice nie są traktowane jako "zwarte" - czyli `callback` zostanie wywołany dla każdego indeksu tablicy dla którego wartość została przypisana. Nie zostanie wywołany dla indeksów, które zostały usunięte, bądź dla których nigdy nie została przypisana wartość.

`callback` wywoływana jest z trzema argumentami: wartością elementu, jego indeksem i przemierzaną tablicą.

W przypadku podania argumentu `thisObject`, zostanie on przekazany jako `this` przy każdym wywołaniu `callback`. Gdy go brak, lub ma wartość `null`, użyty zostanie obiekt globalny przyporządkowany do `callback`.

`some` nie modyfikuje tablicy, na której jest wywołany.

Zakres elementów przetwarzanych przez `some` ustalany jest przed pierwszym wywołaniem `callback`. Elementy dodane do tablicy po wywołaniu `some` nie zostaną sprawdzone przez `callback`. Jeśli istniejący, niesprawdzony jeszcze element tablicy zostanie zmieniony lub usunięty przez `callback`, wartością przekazaną do `callback` będzie wartość z momentu, w którym `some` sprawdza dany element; elementy usunięte przed sprawdzeniem będą przekazane jako `undefined`.

## Przykłady

### Sprawdzanie rozmiaru wszystkich elementów tablicy

Następujący przykład sprawdza czy jakiś element tablicy jest większy, bądź równy 10.

```js
function czyWiekszyNiz10(element, index, array) {
  return element > 10;
}
[2, 5, 8, 1, 4].some(czyWiekszyNiz10); // false
[12, 5, 8, 1, 44].some(czyWiekszyNiz10); // true
```

### Sprawdzanie elementów używając funkcji strzałkowych

Funkcje strzałkowe dają krótszą składnię dla tego samego testu.

```js
[2, 5, 8, 1, 4].some(x => x > 10); // false
[12, 5, 8, 1, 44].some(x => x > 10); // true
```

## Kompatybilność z przeglądarkami

{{CompatibilityTable}}

| Feature       | Chrome                           | Firefox (Gecko)                          | Internet Explorer        | Opera                            | Safari                           |
| ------------- | -------------------------------- | ---------------------------------------- | ------------------------ | -------------------------------- | -------------------------------- |
| Basic support | {{CompatVersionUnknown}} | {{CompatGeckoDesktop("1.8")}} | {{CompatIE("9")}} | {{CompatVersionUnknown}} | {{CompatVersionUnknown}} |

| Feature       | Android                          | Chrome for Android               | Firefox Mobile (Gecko)               | IE Mobile                        | Opera Mobile                     | Safari Mobile                    |
| ------------- | -------------------------------- | -------------------------------- | ------------------------------------ | -------------------------------- | -------------------------------- | -------------------------------- |
| Basic support | {{CompatVersionUnknown}} | {{CompatVersionUnknown}} | {{CompatGeckoMobile("1.8")}} | {{CompatVersionUnknown}} | {{CompatVersionUnknown}} | {{CompatVersionUnknown}} |
