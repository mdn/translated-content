---
title: Array.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Array/toString
tags:
  - Dokumentacja_JavaScript
  - Dokumentacje
  - JavaScript
  - Wszystkie_kategorie
translation_of: Web/JavaScript/Reference/Global_Objects/Array/toString
original_slug: Web/JavaScript/Referencje/Obiekty/Array/toString
---
{{JSRef}}

Metoda **`toString()`** zwraca łańcuch znaków reprezentujący daną tablicę wraz z jej elementami.

```js
var months = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień'];
months.toString(); // "Styczeń,Luty,Marzec,Kwiecień"
```

## Składnia

    arr.toString()

### Parametry

Brak.

## Opis

Obiekt {{jsxref("Array")}} przesłania metodę `toString` obiektu {{jsxref("Object")}}. Dla obiektów Array, metoda `toString` łączy tablicę i zwraca jeden łańcuch znaków zawierający wszystkie elementy tablicy oddzielone przecinkami. Przykładowo poniższy kod tworzy tablicę i stosuje metodę `toString`, aby przekształcić tablicę do łańcucha znaków.

```js
var monthNames = new Array("Jan","Feb","Mar","Apr")
var myVar = monthNames.toString() // przypisuje "Jan,Feb,Mar,Apr" do zmiennej myVar
```

JavaScript wywołuje metodę `toString` automatycznie, gdy tablica jest traktowana jako wartość tekstowa lub kiedy istnieje odniesienie do tej tablicy wewnątrz połączonego łańcucha znaków.

## Zobacz także

- {{jsxref("Object.prototype.toSource()")}}
- {{jsxref("Array.prototype.join()")}}
