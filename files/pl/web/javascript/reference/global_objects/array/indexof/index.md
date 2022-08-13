---
title: Array.prototype.indexOf()
slug: Web/JavaScript/Reference/Global_Objects/Array/indexOf
tags:
  - Dokumentacja_JavaScript
  - Dokumentacje
  - JavaScript
  - Wszystkie_kategorie
translation_of: Web/JavaScript/Reference/Global_Objects/Array/indexOf
original_slug: Web/JavaScript/Referencje/Obiekty/Array/indexOf
---
{{JSRef}}

## Podsumowanie

Zwraca pierwszy (najmniejszy) indeks elementu w tablicy równego podanej wartości lub -1, gdy nie znaleziono takiego elementu.

## Składnia

    array.indexOf(searchElement[, fromIndex = 0]);

### Parametry

- `searchElement`
  - : Element do znalezienia w tablicy.
- `fromIndex`
  - : Indeks od którego ma zacząć się wyszukiwanie. Domyślnie 0 - przeszukana zostanie cała tablica. Jeżeli indeks będzie większy lub równy ilości elementów tablica nie zostanie przeszukana - funkcja zwróci -1. Jeżeli podana zostanie liczba ujemna zostanie dodany do niej rozmiar tablicy (np. podanie -5 oznacza przeszukiwanie od 5 elementu od końca). Jeżeli tak obliczony indeks jest mniejszy od zera przeszukana zostanie cała tablica. Uwaga, wyszukiwanie dalej będzie się odbywać w kierunku rosnących indeksów.

## Opis

`indexOf` porównuje `searchElement` z elementami tablicy używając [ścisłego porównania](/pl/docs/Web/JavaScript/Referencje/Operatory/Operatory_por%c3%b3wnania#.22U.C5.BCywanie_operator.C3.B3w_por.C3.B3wnania) (podobnie jak w przypadku operatora ===).

### Kompatybilność

`indexOf` jest rozszerzeniem JavaScript dla standardu ECMA-262, więc może nie być obecny w innych implementacjach tego standardu. Można to obejść, dopisując poniższy kod na początku skryptu, zezwalający na użycie `indexOf` w implementacji ECMA-262, które nie wspierają tego natywnie.

```js
if (!Array.prototype.indexOf)
{
  Array.prototype.indexOf = function(elt /*, from*/)
  {
    var len = this.length;

    var from = Number(arguments[1]) || 0;
    from = (from < 0)
         ? Math.ceil(from)
         : Math.floor(from);
    if (from < 0)
      from += len;

    for (; from < len; from++)
    {
      if (from in this &&
          this[from] === elt)
        return from;
    }
    return -1;
  };
}
```

Należy zwrócić uwagę, że ta implementacja ma na celu całkowitą zgodność z `indexOf` występującą w Firefoksie i silniku JavaScript SpiderMonkey, włączając w to przypadki w których przesyłany do `indexOf` indeks nie jest wartością liczbową. Jeśli masz zamiar wykorzystać przytoczone rozwiązanie w rzeczywistych aplikacjach, możesz nie potrzebować całego powyższego kodu (części odpowiedzialnej za obliczenie wartości `from`).

## Przykłady

### Przykład: Zastosowanie `indexOf`

Następujący przykład stosuje `indexOf` do znalezienia pierwszego wystąpienia elementów.

```js
array = [2, 5, 9];
index = array.indexOf(2);
// index jest 0
index = array.indexOf(7);
// index jest -1
```

### Przykład: Wyszukiwanie wszystkich wystąpień w tablicy

Poniższy przykład używa `indexOf` do znalezienia wszystkich wystąpień elementu w tablicy oraz dodaje ich indeksy do drugiej tablicy używając metody {{jsxref("Array.prototype.push()")}}.

```js
indices = [];
idx = array.indexOf(element)
while (idx != -1) {
   indices.push(idx);
   idx = array.indexOf(element, idx + 1);
}
```

## Zobacz także

- {{jsxref("Array.prototype.lastIndexOf()")}}
- {{jsxref("TypedArray.prototype.indexOf()")}}
