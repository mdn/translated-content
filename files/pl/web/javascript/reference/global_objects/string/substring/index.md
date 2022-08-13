---
title: String.prototype.substring()
slug: Web/JavaScript/Reference/Global_Objects/String/substring
tags:
  - JavaScript
  - Method
  - Prototype
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/substring
original_slug: Web/JavaScript/Referencje/Obiekty/String/substring
---
{{JSRef}}

## Podsumowanie

Zwraca podciąg obiektu `String`.

## Składnia

    str.substring(indexA[, indexB])

### Parametry

- `indexA`
  - : Liczba całkowita pomiędzy 0, a liczbą o jeden mniejszą niż długość łańcucha znaków.
- `indexB`
  - : Opcjonalny. Liczba całkowita pomiędzy 0 i długością łańcucha znaków.

## Opis

`substring` urywa znaki z `indexA` lecz nie włącza ich do `indexB`. W szczególności:

- Jeśli `indexA` jest mniejsze niż 0, `indexA` zostanie potraktowany tak, jakby był 0.
- Jeśli `indexB` jest większe niż `stringName.length`, `indexB` zostanie potraktowany tak, jakby był `stringName.length`.
- Jeśli `indexA` jest równe `indexB`, `substring` zwraca pusty łańcuch znaków.
- Jeśli `indexB` jest pominięty, `substring` urwie znaki znajdujące się na końcu łańcucha znaków.

Jeśli `indexA` jest większy niż `indexB`, JavaScript zwróci `substring(indexB, indexA)`.

## Przykłady

### Przykład: Zastosowanie `substring()`

Następujący przykład `substring` stosujemy do wyświetlenia znaków ze słowa "`Mozilla`":

```js
var anyString = "Mozilla";

// Wyświetli  "Moz"
console.log(anyString.substring(0,3));
console.log(anyString.substring(3,0));

// Wyświetli  "lla"
console.log(anyString.substring(4));
console.log(anyString.substring(4,7));
console.log(anyString.substring(7,4));

// Wyświetli  "Mozill"
console.log(anyString.substring(0,6));

// Wyświetli "Mozilla"
console.log(anyString.substring(0,7));
console.log(anyString.substring(0,10));
```

### Przykład: Zamiana podciągu wewnątrz ciągu

Następujący przykład zamienia podciąg wewnątrz ciągu. Zostaną zamienione oba poszczególne znaki i podciągi. Funkcja zostanie wywołana na koniec przykładu zmieniając łańcuch znaków; "`Brave New World`" na "`Brave New Web`".

```js
function replaceString(oldS, newS, fullS) {
// Replaces oldS with newS in the string fullS
   for (var i = 0; i < fullS.length; i++) {
      if (fullS.substring(i, i + oldS.length) == oldS) {
         fullS = fullS.substring(0, i) + newS + fullS.substring(i + oldS.length, fullS.length);
      }
   }
   return fullS;
}

replaceString("World", "Web", "Brave New World");
```

## Zobacz także

- {{jsxref("String.prototype.substr()")}}
- {{jsxref("String.prototype.slice()")}}
