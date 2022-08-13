---
title: Array.prototype.concat()
slug: Web/JavaScript/Reference/Global_Objects/Array/concat
tags:
  - Dokumentacja_JavaScript
  - Dokumentacje
  - JavaScript
  - Wszystkie_kategorie
translation_of: Web/JavaScript/Reference/Global_Objects/Array/concat
original_slug: Web/JavaScript/Referencje/Obiekty/Array/concat
---
{{JSRef("Global_Objects", "Array")}}

## Podsumowanie

Zwraca nową tablicę złożoną z tablicy, na której wywołano tę metodę, połączonej z innymi podanymi tablicami lub wartościami.

## Składnia

    var new_array = old_array.concat(wartość1[, wartość2[, ...[, wartośćN]]])

### Parametry

- `wartośćN`
  - : Tablice lub wartości do dołączenia do tablicy, na której wywołana została metoda `concat`.

## Opis

`concat` nie zmienia oryginalnej tablicy, lecz zwraca jej kopię "o jednym poziomie głębokości" zawierającą te same elementy wspólne co pierwotna tablica. Elementy oryginalnej tablicy są kopiowane do nowej tablicy następująco:

- referencje do obiektów (a nie faktyczne obiekty): `concat` kopiuje referencje do obiektów do nowej tablicy. Zarówno pierwotna, jak i nowa tablica odnoszą się więc do tych samych obiektów. Oznacza to, że jeżeli wskazany obiekt jest modyfikowany, zmiany są widoczne w obydwu tablicach (nowej i starej).

- Łańcuchy znaków i liczby (ale nie obiekty {{jsxref("String")}} i {{jsxref("Number")}} ): `concat` kopiuje wartości łańcuchów znaków i liczb do nowej tablicy.

Operacje wykonywane na nowej tablicy nie wpłyną w żaden sposób na oryginalną tablicę i na odwrót.

## Przykłady

### Przykład: Połączenie dwóch tablic

Następujący kod łączy dwie tablice:

```js
alpha = new Array("a", "b", "c");
numeric = new Array(1, 2, 3);
alphaNumeric = alpha.concat(numeric); // tworzy tablicę ["a", "b", "c", 1, 2, 3]
```

### Przykład: Połączenie trzech tablic

Następujący kod łączy trzy tablice:

```js
num1 = [1, 2, 3];
num2 = [4, 5, 6];
num3 = [7, 8, 9];
nums = num1.concat(num2,num3) // tworzy tablicę [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### Przykład: Połączenie wartości z tablicą

Następujący kod łączy trzy wartości z tablicą:

```js
alpha = ['a', 'b', 'c'];
alphaNumeric = alpha.concat(1, 2, 3); // tworzy tablicę ["a", "b", "c", 1, 2, 3]
```
