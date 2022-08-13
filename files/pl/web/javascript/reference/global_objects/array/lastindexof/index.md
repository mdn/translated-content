---
title: Array.prototype.lastIndexOf()
slug: Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
tags:
  - Dokumentacja_JavaScript
  - Dokumentacje
  - JavaScript
  - Strony_wymagające_dopracowania
  - Wszystkie_kategorie
translation_of: Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
original_slug: Web/JavaScript/Referencje/Obiekty/Array/lastIndexOf
---
{{JSRef}}

## Podsumowanie

Zwraca ostatni indeks, pod którym podany element może być znaleziony w tablicy, lub -1 jeśli nie jest obecny. Tablica jest przeszukiwana od końca, zaczynając od indeksu `fromIndex`

## Składnia

    arr.lastIndexOf(searchElement[, fromIndex = arr.length])

### Parametry

- `searchElement`
  - : Element do znalezienia w tablicy.
- `fromIndex`
  - : Indeks od którego ma zostać rozpoczęte wyszukiwanie od tyłu. Domyślnie jest to długość tablicy, tzn. przeszukana zostanie cała tablica. Jeśli indeks jest większy od lub równy długości tablicy, przeszukana zostanie cała tablica. Jeśli jest ujemny, traktowany będzie jako przesunięcie od końca tablicy. Należy pamiętać, że nawet jeśli indeks jest ujemny, to i tak tablica przeszukiwana jest od końca do początku. Jeśli obliczony indeks jest mniejszy od 0, zwracana jest wartość -1, innymi słowy, tablica nie zostanie przeszukana.

## Opis

`lastIndexOf` porównuje `searchElement` z elementami tablicy używając [ścisłego porównania](/pl/docs/Web/JavaScript/Referencje/Operatory/Operatory_por%c3%b3wnania#.22U.C5.BCywanie_operator.C3.B3w_por.C3.B3wnania) (podobnie jak w przypadku operatora ===).

### Kompatybilność

`lastIndexOf` jest rozszerzeniem JavaScript dla standardu ECMA-262, więc może nie być obecny w innych implementacjach tego standardu. Można to obejść, dopisując poniższy kod na początku skryptu, zezwalający na użycie `lastIndexOf` w implementacji ECMA-262, które nie wspierają tego natywnie.

```js
if (!Array.prototype.lastIndexOf)
{
  Array.prototype.lastIndexOf = function(elt /*, from*/)
  {
    var len = this.length;

    var from = Number(arguments[1]);
    if (isNaN(from))
    {
      from = len - 1;
    }
    else
    {
      from = (from < 0)
           ? Math.ceil(from)
           : Math.floor(from);
      if (from < 0)
        from += len;
      else if (from >= len)
        from = len - 1;
    }

    for (; from > -1; from--)
    {
      if (from in this &&
          this[from] === elt)
        return from;
    }
    return -1;
  };
}
```

Należy zwrócić uwagę, że ta implementacja ma na celu całkowitą zgodność z `lastIndexOf` występującą w Firefoksie i silniku JavaScript SpiderMonkey, włączając w to przypadki skrajne. Jeśli masz zamiar wykorzystać przytoczone rozwiązanie w rzeczywistych aplikacjach, możesz obliczyć `from` za pomocą mniej skomplikowanego kodu (z pominięciem części instrukcji warunkowych).

## Przykłady

### Przykład: Zastosowanie `lastIndexOf`

Poniższy przykład używa `lastIndexOf` do znalezienia określonych wartości w tablicy.

```js
array = [2, 5, 9, 2];
index = array.lastIndexOf(2);
// index is 3
index = array.lastIndexOf(7);
// index is -1
index = array.lastIndexOf(2, 3);
// index is 3
index = array.lastIndexOf(2, 2);
// index is 0
index = array.lastIndexOf(2, -2);
// index is 0
index = array.lastIndexOf(2, -1);
// index is 3
```

### Przykład: Wyszukiwanie wszystkich wystąpień danego elementu

Poniższy przykład używa `lastIndexOf` do znalezienia wszystkich wystąpień elementu w tablicy oraz dodaje ich indeksy do drugiej tablicy używając metody [`push`](pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Obiekty/Array/push).

```js
indices = [];
idx = array.lastIndexOf(element)
while (idx != -1) {
   indices.push(idx);
   idx = (idx > 0 ? array.lastIndexOf(element, idx - 1) : -1);
}
```

Warto zauważyć, że obsłużyliśmy warunek `idx == 0` oddzielnie, ponieważ element ten zostanie zawsze odnaleziony - bez względu na wartość parametru `fromIndex` - w przypadku gdy jest on pierwszym elementem tablicy. To różni tę metodę od metody {{jsxref("Array.prototype.indexOf()")}}.

### Zobacz także

- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("TypedArray.prototype.lastIndexOf()")}}
