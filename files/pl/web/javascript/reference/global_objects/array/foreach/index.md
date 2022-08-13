---
title: Array.prototype.forEach()
slug: Web/JavaScript/Reference/Global_Objects/Array/forEach
tags:
  - Dokumentacja_JavaScript
  - Dokumentacje
  - JavaScript
  - Wszystkie_kategorie
translation_of: Web/JavaScript/Reference/Global_Objects/Array/forEach
original_slug: Web/JavaScript/Referencje/Obiekty/Array/forEach
---
{{JSRef("Global_Objects", "Array")}}

## Podsumowanie

Wykonuje dostarczoną funkcję jeden raz na każdy element tablicy.

## Składnia

    arr.forEach(callback[, thisArg])

### Parametry

- `callback`
  - : Funkcja wykonywana dla każdego elementu.
- `thisArg`
  - : Obiekt na który będzie wskazywał `this`, gdy wykonana zostanie funkcja zwrotna `callback`.

## Opis

Metoda `forEach` wykonuje dostarczoną funkcje `callback` raz dla każdego elementu tablicy. Funkcja `callback` wywoływana jest jedynie dla indeksów tablicy, którym została przypisana wartość; nie jest wywoływana dla indeksów, które zostały usunięte i tych, którym nigdy nie została przypisana żadna wartość.

Funkcja `callback` jest wywoływana z trzema argumentami: wartością elementu, jego indeksem i obiektem tablicy, w którym się ten element zawiera.

Jeśli parametr `thisArg` został dostarczony do metody `forEach`, będzie on wskazywany przez `this` dla każdego wywołania funkcji `callback`. W przypadku, gdy nie został on przekazany lub jego wartość jest równa `null`, `this` będzie się odnosić do obiektu globalnego połączonego z funkcją `callback`.

Metoda `forEach` nie modyfikuje tablicy na której jest wywołana.

Zakres elementów przetwarzanych przez `forEach` jest ustawiany przed pierwszym wywołaniem funkcji `callback`. Elementy dołączone do końca tablicy po momencie wywołania `forEach` nie są przesyłane do funkcji `callback`. Jeśli istniejące elementy tablicy są zmieniane lub usuwane, to wartość przesyłana do funkcji `callback` odpowiada wartości w momencie, w którym `forEach` się o nie zwróci; elementy usunięte zanim zostaną odwiedzone nie zostaną odwiedzone. Jeżeli element już odwiedzony zostanie usunięty (nastąpi skrócenie tablicy), element tablicy w kolejności po obecnie odwiedzanym zostanie pominięty.

### Kompatybilność

`forEach` jest rozszerzeniem JavaScript dla standardu ECMA-262, więc może nie być obecny w innych implementacjach tego standardu. Można to obejść, dopisując poniższy kod na początku skryptu, zezwalający na użycie `forEach` w implementacji ECMA-262, które nie wspierają tego natywnie.

```js
if (!Array.prototype.forEach)
{
  Array.prototype.forEach = function(fun /*, thisp*/)
  {
    var len = this.length;
    if (typeof fun != "function")
      throw new TypeError();

    var thisp = arguments[1];
    for (var i = 0; i < len; i++)
    {
      if (i in this)
        fun.call(thisp, this[i], i, this);
    }
  };
}
```

## Przykłady

### Przykład: Drukowanie zawartości tablicy

Następujący kod drukuje linie dla każdego elementu w tablicy (i przyjmuje obecność funkcji `print` do wywołania!):

```js
function printElt(element, index, array) {
    print("[" + index + "] jest " + element);
}
[2, 5, 9].forEach(printElt);
// Wydrukuje:
// [0] jest 2
// [1] jest 5
// [2] jest 9
```

### Przykład: Drukowanie zawartości tablicy z metodą obiektu

Następujący kod tworzy prosty obiekt wypisujący i następnie stosuje metodę `writeln` do wypisania jednej linii na element w tablicy (przyjmuje obecność funkcji `print` do wywołania!):

```js
var writer = {
    sb:       [],
    write:    function (s) {
        this.sb.push(s);
    },
    writeln:  function (s) {
        this.write(s + "\n");
    },
    toString: function () {
        return this.sb.join("");
    }
};

[2, 5, 9].forEach(writer.writeln, writer);
print(writer.toString());

// Wydrukuje:
// 2
// 5
// 9
```
