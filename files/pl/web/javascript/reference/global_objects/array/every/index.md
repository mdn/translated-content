---
title: Array.prototype.every()
slug: Web/JavaScript/Reference/Global_Objects/Array/every
tags:
  - Dokumentacja_JavaScript
  - Dokumentacje
  - JavaScript
  - Wszystkie_kategorie
translation_of: Web/JavaScript/Reference/Global_Objects/Array/every
original_slug: Web/JavaScript/Referencje/Obiekty/Array/every
---
{{JSRef("Global_Objects", "Array")}}

## Podsumowanie

Metoda  **`every() `**sprawdza, czy wszystkie elementy w tablicy przechodzą test zrealizowany w postaci dostarczonej funkcji.

## Składnia

    arr.every(callback[, thisArg])

### Parametry

- `callback`
  - : Funkcja sprawdzająca dla każdego elementu. Zawiera trzy argumenty.
    **currentValue
      **Bieżący element przetwarzany w tablicy
- **index**
  - :      Indeks bieżacego elementu przetwarzanego w tablicy **array**
        Tablica na której została wywołana funkcja
- `thisObject`
  - : Opcjonalnie. Obiekt, na który będzie wskazywał `this`, gdy wykonana zostanie funkcja zwrotna `callback`.

## Opis

Metoda `every` wykonuje dostarczoną funkcję `callback` raz dla każdego elementu tablicy do momentu, kiedy znajdzie taki element, dla którego funkcja `callback` zwróci wartość `false`. Jeżeli taki element zostanie znaleziony, test zostanie przerwany, a metoda `every` zwróci wartość `false`. W przeciwnym wypadku (`callback` zwraca wartość `true` dla wszystkich elementów) `every` zwróci `true`. Funkcja `callback` wywoływana jest jedynie dla indeksów tablicy, którym została przypisana wartość; nie jest wywoływana dla indeksów, które zostały usunięte i tych, którym nigdy nie została przypisana żadna wartość.

Funkcja `callback` jest wywoływana z trzema argumentami: wartością elementu, jego indeksem i obiektem tablicy, w którym się ten element zawiera.

Jeśli parametr `thisObject` został dostarczony do metody `every`, będzie on wskazywany przez `this` dla każdego wywołania funkcji `callback`. W przypadku, gdy nie został on przekazany lub jego wartość jest równa `null`, `this` będzie się odnosić do obiektu globalnego połączonego z funkcją `callback`.

Metoda `every` nie modyfikuje tablicy, na której jest wywoływana.

Zakres elementów przetwarzanych przez `every` jest ustawiany przed pierwszym wywołaniem funkcji `callback`. Elementy dołączone do tablicy po momencie wywołania `every` są testowane przez `callback`. Jeśli istniejące elementy tablicy są zmieniane lub usuwane, to wartość przesyłana do funkcji `callback` odpowiada wartości w momencie, w którym `every` się o nie zwróci; metoda `every` nie upomina się o elementy usunięte.

### Kompatybilność

`every` jest rozszerzeniem JavaScript dla standardu ECMA-262, więc może nie być obecny w innych implementacjach tego standardu. Można to obejść, dopisując poniższy kod na początku skryptu, zezwalający na użycie `every` w implementacji ECMA-262, które nie wspierają tego natywnie.

```js
if (!Array.prototype.every)
{
  Array.prototype.every = function(fun /*, thisp*/)
  {
    var len = this.length;
    if (typeof fun != "function")
      throw new TypeError();

    var thisp = arguments[1];
    for (var i = 0; i < len; i++)
    {
      if (i in this &&
          !fun.call(thisp, this[i], i, this))
        return false;
    }

    return true;
  };
}
```

## Przykłady

### Przykład: Sprawdzanie rozmiaru wszystkich elementów tablicy

Następujący przykład sprawdza, czy wszystkie elementy w tablicy są większe niż 10.

```js
function isBigEnough(element, index, array) {
  return (element >= 10);
}
passed = [12, 5, 8, 130, 44].every(isBigEnough);
// fałsz
passed = [12, 54, 18, 130, 44].every(isBigEnough);
// prawda
```
